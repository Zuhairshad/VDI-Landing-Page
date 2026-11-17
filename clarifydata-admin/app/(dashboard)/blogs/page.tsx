'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from '@/lib/toasts'

type Blog = {
  id: string
  title: string
  slug: string
  published: boolean
  published_at: string | null
  created_at: string
  category: string | null
}

const btn = (color: string, bg: string): React.CSSProperties => ({
  padding: '5px 12px', borderRadius: 6, border: 'none', fontSize: 12, fontWeight: 600,
  color, background: bg, cursor: 'pointer', transition: 'opacity 0.1s',
})

export default function BlogsPage() {
  const router = useRouter()
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/blogs').then(r => r.json()).then(setBlogs).finally(() => setLoading(false))
  }, [])

  async function handleDelete(id: string) {
    setDeleting(id)
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' })
      if (!res.ok) { toast('Failed to delete post.', 'error'); return }
      setBlogs(b => b.filter(x => x.id !== id))
      toast('Post deleted.', 'success')
    } catch {
      toast('Failed to delete post.', 'error')
    } finally {
      setDeleting(null)
      setConfirmDelete(null)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Blog Posts</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 2 }}>{blogs.length} total</p>
        </div>
        <button onClick={() => router.push('/blogs/new')} style={{ ...btn('#0a0a0a', '#fafafa'), padding: '9px 18px', fontSize: 13, borderRadius: 8 }}>
          + New Post
        </button>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading…</div>
        ) : blogs.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>No blog posts yet.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(b => (
                <>
                  <tr key={b.id}>
                    <td style={{ fontWeight: 500, maxWidth: 320 }}>
                      <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.title}</span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>/{b.slug}</span>
                    </td>
                    <td style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>{b.category ?? '—'}</td>
                    <td>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4,
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        background: b.published ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.06)',
                        color: b.published ? '#4ade80' : 'rgba(255,255,255,0.3)',
                      }}>
                        {b.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                      {new Date(b.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                        <Link href={`/blogs/${b.id}`}>
                          <button style={btn('rgba(255,255,255,0.8)', 'rgba(255,255,255,0.08)')}>Edit</button>
                        </Link>
                        {confirmDelete === b.id ? (
                          <>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', alignSelf: 'center' }}>Sure?</span>
                            <button
                              onClick={() => handleDelete(b.id)}
                              disabled={deleting === b.id}
                              style={btn('#fff', 'rgba(239,68,68,0.7)')}
                            >
                              {deleting === b.id ? '…' : 'Yes, delete'}
                            </button>
                            <button onClick={() => setConfirmDelete(null)} style={btn('rgba(255,255,255,0.5)', 'rgba(255,255,255,0.07)')}>
                              Cancel
                            </button>
                          </>
                        ) : (
                          <button onClick={() => setConfirmDelete(b.id)} style={btn('#f87171', 'rgba(239,68,68,0.1)')}>
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
