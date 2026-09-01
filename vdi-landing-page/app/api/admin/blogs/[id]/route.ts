import { NextResponse } from 'next/server'
import { db } from '@/lib/supabase'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const { data, error } = await db
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 })
  }

  return NextResponse.json(data)
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const values = body as Record<string, unknown>

  const { data: existing, error: fetchError } = await db
    .from('blog_posts')
    .select('published, published_at')
    .eq('id', id)
    .single()

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 404 })
  }

  const published = Boolean(values.published)
  const wasPublished = Boolean(existing?.published)

  const updates: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
  }

  if ('title' in values) updates.title = values.title
  if ('slug' in values) updates.slug = values.slug
  if ('excerpt' in values) updates.excerpt = values.excerpt
  if ('content' in values) updates.content = values.content
  if ('about_us' in values) updates.about_us = values.about_us
  if ('images' in values) updates.images = values.images
  if ('post_refs' in values) updates.post_refs = values.post_refs
  if ('urls' in values) updates.urls = values.urls
  if ('published' in values) {
    updates.published = published
    if (published && !wasPublished) {
      updates.published_at = new Date().toISOString()
    } else if (!published) {
      updates.published_at = null
    }
  }

  const { data, error } = await db
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const { error } = await db.from('blog_posts').delete().eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
