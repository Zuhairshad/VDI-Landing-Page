import { NextResponse } from 'next/server'
import { db } from '@/lib/supabase'
import { isAuthenticated } from '@/lib/admin-check'

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAuthenticated()) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })

  const { id } = await params
  let body: unknown
  try { body = await request.json() } catch { return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 }) }

  const v = body as Record<string, unknown>
  const updates: Record<string, unknown> = { updated_at: new Date().toISOString() }

  if (typeof v.title === 'string') updates.title = v.title.trim()
  if (typeof v.slug === 'string') updates.slug = v.slug.trim()
  if (typeof v.summary === 'string') updates.summary = v.summary.trim()
  if (typeof v.content === 'string') updates.content = v.content.trim()
  if (typeof v.category === 'string') updates.category = v.category.trim()
  if (typeof v.published === 'boolean') {
    updates.published = v.published
    updates.published_at = v.published ? new Date().toISOString() : null
  }

  const { data, error } = await db
    .from('ai_updates')
    .update(updates)
    .eq('id', id)
    .select('*')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!await isAuthenticated()) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })

  const { id } = await params
  const { error } = await db.from('ai_updates').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
