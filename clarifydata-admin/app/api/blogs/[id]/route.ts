import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const db = createAdminClient()
  const { data, error } = await db.from('blog_posts').select('*').eq('id', id).single()
  if (error || !data) return NextResponse.json({ error: 'Not found.' }, { status: 404 })
  return NextResponse.json(data)
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const db = createAdminClient()
  const body = await request.json() as Record<string, unknown>
  const updates: Record<string, unknown> = { ...body, updated_at: new Date().toISOString() }
  if (typeof body.published === 'boolean') {
    updates.published_at = body.published ? new Date().toISOString() : null
  }
  const { data, error } = await db.from('blog_posts').update(updates).eq('id', id).select('*').single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const db = createAdminClient()
  const { error } = await db.from('blog_posts').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
