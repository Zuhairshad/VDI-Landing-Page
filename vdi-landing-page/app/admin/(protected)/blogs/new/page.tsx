'use client'

import { useRouter } from 'next/navigation'
import BlogEditor from '@/components/admin/BlogEditor'

interface BlogPayload {
  title: string
  slug: string
  excerpt: string
  content: string
  about_us: string
  images: string[]
  post_refs: { label: string; url: string }[]
  urls: { label: string; url: string }[]
  published: boolean
}

export default function NewBlogPage() {
  const router = useRouter()

  async function handleSave(payload: BlogPayload) {
    const res = await fetch('/api/admin/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const data = await res.json() as { error?: string }
      throw new Error(data.error ?? 'Failed to create post.')
    }

    router.push('/admin/blogs')
  }

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 28, color: '#fafafa' }}>New Blog Post</h1>
      <BlogEditor onSave={handleSave} />
    </div>
  )
}
