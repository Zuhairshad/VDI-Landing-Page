'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  slug: string
  published: boolean
  created_at: string
  published_at: string | null
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function AdminBlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [toggling, setToggling] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)

  async function load() {
    try {
      const res = await fetch('/api/admin/blogs')
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json() as BlogPost[]
      setPosts(data)
    } catch {
      setError('Failed to load blog posts.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { void load() }, [])

  async function togglePublished(post: BlogPost) {
    setToggling(post.id)
    try {
      const res = await fetch(`/api/admin/blogs/${post.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !post.published }),
      })
      if (res.ok) {
        const updated = await res.json() as BlogPost
        setPosts((prev) => prev.map((p) => p.id === post.id ? { ...p, published: updated.published } : p))
      }
    } finally {
      setToggling(null)
    }
  }

  async function deletePost(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    setDeleting(id)
    try {
      await fetch(`/api/admin/blogs/${id}`, { method: 'DELETE' })
      setPosts((prev) => prev.filter((p) => p.id !== id))
    } finally {
      setDeleting(null)
    }
  }

  if (loading) return <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Loading...</p>
  if (error) return <p style={{ color: '#f87171', fontSize: 14 }}>{error}</p>

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: '#fafafa' }}>Blog Posts</h1>
        <Link
          href="/admin/blogs/new"
          style={{
            padding: '8px 18px', fontSize: 13, fontWeight: 600, borderRadius: 8,
            background: '#fafafa', color: '#0a0a0a', textDecoration: 'none',
          }}
        >
          New Post
        </Link>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['Title', 'Status', 'Date', 'Actions'].map((h) => (
                <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: '20px 16px', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>No blog posts yet.</td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '10px 16px', color: '#fafafa', fontWeight: 500 }}>{post.title}</td>
                <td style={{ padding: '10px 16px' }}>
                  <span style={{
                    fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4,
                    background: post.published ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255,255,255,0.08)',
                    color: post.published ? 'rgb(34, 197, 94)' : 'rgba(255,255,255,0.4)',
                  }}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{formatDate(post.created_at)}</td>
                <td style={{ padding: '10px 16px' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Link
                      href={`/admin/blogs/${post.id}`}
                      style={{
                        fontSize: 12, padding: '4px 10px', borderRadius: 6,
                        background: 'rgba(255,255,255,0.1)', color: '#fafafa',
                        textDecoration: 'none',
                      }}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => void togglePublished(post)}
                      disabled={toggling === post.id}
                      style={{
                        fontSize: 12, padding: '4px 10px', borderRadius: 6,
                        background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)',
                        border: 'none', cursor: 'pointer',
                      }}
                    >
                      {toggling === post.id ? '...' : post.published ? 'Unpublish' : 'Publish'}
                    </button>
                    <button
                      onClick={() => void deletePost(post.id, post.title)}
                      disabled={deleting === post.id}
                      style={{
                        fontSize: 12, padding: '4px 10px', borderRadius: 6,
                        background: 'rgba(239,68,68,0.15)', color: '#f87171',
                        border: 'none', cursor: 'pointer',
                      }}
                    >
                      {deleting === post.id ? '...' : 'Delete'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
