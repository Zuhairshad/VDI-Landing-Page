'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import BlogEditor from '@/components/admin/BlogEditor'

interface BlogPost {
  id: string
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

export default function EditBlogPage() {
  const router = useRouter()
  const params = useParams()
  const id = typeof params.id === 'string' ? params.id : ''

  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!id) return
    fetch(`/api/admin/blogs/${id}`)
      .then((r) => r.json())
      .then((data: BlogPost) => setPost(data))
      .catch(() => setError('Failed to load post.'))
      .finally(() => setLoading(false))
  }, [id])

  async function handleSave(payload: BlogPayload) {
    const res = await fetch(`/api/admin/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const data = await res.json() as { error?: string }
      throw new Error(data.error ?? 'Failed to update post.')
    }

    router.push('/admin/blogs')
  }

  if (loading) return <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Loading...</p>
  if (error) return <p style={{ color: '#f87171', fontSize: 14 }}>{error}</p>
  if (!post) return <p style={{ color: '#f87171', fontSize: 14 }}>Post not found.</p>

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 28, color: '#fafafa' }}>Edit Blog Post</h1>
      <BlogEditor initial={post} onSave={handleSave} />
    </div>
  )
}
