import { NextResponse } from 'next/server'
import { db } from '@/lib/supabase'

export async function GET() {
  const { data, error } = await db
    .from('blog_posts')
    .select('*')
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
  const published = Boolean(values.published)

  const row = {
    title: values.title,
    slug: values.slug,
    excerpt: values.excerpt ?? null,
    content: values.content ?? null,
    about_us: values.about_us ?? null,
    images: values.images ?? [],
    post_refs: values.post_refs ?? [],
    urls: values.urls ?? [],
    published,
    published_at: published ? new Date().toISOString() : null,
  }

  const { data, error } = await db.from('blog_posts').insert(row).select().single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}
