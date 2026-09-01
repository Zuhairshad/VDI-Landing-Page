import { NextResponse } from 'next/server'
import { db } from '@/lib/supabase'

const validIndustries = new Set(['medical', 'education', 'logistics', 'ecommerce'])

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const industry = searchParams.get('industry')

  if (!industry || !validIndustries.has(industry)) {
    return NextResponse.json({ error: 'Valid industry query param required.' }, { status: 400 })
  }

  const { data, error } = await db
    .from('industry_data')
    .select('*')
    .eq('industry', industry)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const values = body as Record<string, unknown>
  const industry = typeof values.industry === 'string' ? values.industry : ''

  if (!validIndustries.has(industry)) {
    return NextResponse.json({ error: 'Valid industry is required.' }, { status: 400 })
  }

  const row = {
    industry,
    label: values.label,
    value: values.value,
    source: values.source ?? null,
    notes: values.notes ?? null,
    verified: Boolean(values.verified),
  }

  const { data, error } = await db.from('industry_data').insert(row).select().single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'id query param required.' }, { status: 400 })
  }

  const { error } = await db.from('industry_data').delete().eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
