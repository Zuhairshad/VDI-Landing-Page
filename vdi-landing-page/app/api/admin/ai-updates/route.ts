import { NextResponse } from 'next/server'
import { db } from '@/lib/supabase'
import { isAuthenticated } from '@/lib/admin-check'

export async function GET() {
  if (!await isAuthenticated()) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })

  const { data, error } = await db
    .from('ai_updates')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}

export async function POST(request: Request) {
  if (!await isAuthenticated()) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })

  let body: unknown
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 }) }

  const v = body as Record<string, unknown>
  const title = typeof v.title === 'string' ? v.title.trim() : ''
  const slug = typeof v.slug === 'string' ? v.slug.trim() : ''
  const summary = typeof v.summary === 'string' ? v.summary.trim() : ''
  const content = typeof v.content === 'string' ? v.content.trim() : ''
  const category = typeof v.category === 'string' ? v.category.trim() : 'General'
  const published = v.published === true

  if (!title || !slug) return NextResponse.json({ error: 'title and slug are required.' }, { status: 400 })

  const now = new Date().toISOString()
  const { data, error } = await db
    .from('ai_updates')
    .insert({ title, slug, summary, content, category, published, published_at: published ? now : null })
    .select('*')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
