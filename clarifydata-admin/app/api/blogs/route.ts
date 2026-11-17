import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function GET() {
  const db = createAdminClient()
  const { data, error } = await db.from('blog_posts').select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}

export async function POST(request: Request) {
  const db = createAdminClient()
  const body = await request.json() as Record<string, unknown>
  const now = new Date().toISOString()
  const { data, error } = await db
    .from('blog_posts')
    .insert({ ...body, published_at: body.published ? now : null })
    .select('*').single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
