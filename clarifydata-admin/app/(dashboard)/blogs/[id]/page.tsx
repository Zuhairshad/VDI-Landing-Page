import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/server'
import BlogEditor from '@/components/BlogEditor'

export const metadata: Metadata = { title: 'Edit Post' }

export default async function BlogEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (id === 'new') {
    return <BlogEditor />
  }

  const db = createAdminClient()
  const { data } = await db.from('blog_posts').select('*').eq('id', id).single()

  if (!data) {
    return <div style={{ padding: 40, color: 'rgba(255,255,255,0.4)' }}>Post not found.</div>
  }

  return <BlogEditor initial={data} />
}
