import { NextResponse } from 'next/server'
import { db } from '@/lib/supabase'
import { runVerification } from '@/lib/verification-engine'
import type { Claim, ClaimCategory } from '@/lib/verification-engine'

const ALLOWED_INDUSTRIES = new Set(['medical', 'education', 'logistics', 'ecommerce'])
const ALLOWED_CATEGORIES = new Set<ClaimCategory>(['statistic', 'forecast', 'causal', 'definition', 'general'])

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Request body must be valid JSON.' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const v = body as Record<string, unknown>
  const industry = typeof v.industry === 'string' ? v.industry.trim().toLowerCase() : ''
  const clientName = typeof v.client_name === 'string' ? v.client_name.trim() : ''
  const clientEmail = typeof v.client_email === 'string' ? v.client_email.trim() : ''

  if (!ALLOWED_INDUSTRIES.has(industry)) {
    return NextResponse.json({ error: 'industry must be one of: medical, education, logistics, ecommerce.' }, { status: 400 })
  }

  if (!Array.isArray(v.claims) || v.claims.length === 0 || v.claims.length > 20) {
    return NextResponse.json({ error: 'claims must be an array of 1 to 20 items.' }, { status: 400 })
  }

  const claims: Claim[] = []
  for (const item of v.claims) {
    if (!item || typeof item !== 'object') continue
    const c = item as Record<string, unknown>
    const text = typeof c.text === 'string' ? c.text.trim() : ''
    const category = typeof c.category === 'string' && ALLOWED_CATEGORIES.has(c.category as ClaimCategory)
      ? (c.category as ClaimCategory)
      : 'general'
    if (text.length >= 10 && text.length <= 500) claims.push({ text, category })
  }

  if (claims.length === 0) {
    return NextResponse.json({ error: 'No valid claims found. Each claim must be 10-500 characters.' }, { status: 400 })
  }

  const { data: job, error: insertError } = await db
    .from('verification_jobs')
    .insert({ industry, client_name: clientName, client_email: clientEmail, claims, status: 'processing' })
    .select('id')
    .single()

  if (insertError || !job) {
    return NextResponse.json({ error: 'Failed to create verification job.' }, { status: 500 })
  }

  const jobId: string = (job as { id: string }).id

  try {
    const results = await runVerification(industry, claims)

    await db
      .from('verification_jobs')
      .update({ results, status: 'completed', updated_at: new Date().toISOString() })
      .eq('id', jobId)

    return NextResponse.json({ job_id: jobId, status: 'completed', industry, results })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Verification failed.'
    await db
      .from('verification_jobs')
      .update({ status: 'failed', error_message: msg, updated_at: new Date().toISOString() })
      .eq('id', jobId)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const jobId = searchParams.get('job_id')
  if (!jobId) return NextResponse.json({ error: 'job_id is required.' }, { status: 400 })

  const { data, error } = await db
    .from('verification_jobs')
    .select('*')
    .eq('id', jobId)
    .single()

  if (error || !data) return NextResponse.json({ error: 'Job not found.' }, { status: 404 })
  return NextResponse.json(data)
}
