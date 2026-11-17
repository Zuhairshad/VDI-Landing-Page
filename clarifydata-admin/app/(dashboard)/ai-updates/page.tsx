'use client'

import { useEffect, useState } from 'react'
import AiUpdateEditor from '@/components/AiUpdateEditor'
import { toast } from '@/lib/toasts'

type AiUpdate = {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  category: string
  published: boolean
  published_at: string | null
  created_at: string
}

const btn = (color: string, bg: string): React.CSSProperties => ({
  padding: '5px 12px', borderRadius: 6, border: 'none', fontSize: 12, fontWeight: 600,
  color, background: bg, cursor: 'pointer',
})

const CATEGORY_COLORS: Record<string, string> = {
  'General': '#6b7280',
  'Model Releases': '#6366f1',
  'Policy & Regulation': '#f59e0b',
  'Research': '#06b6d4',
  'Industry Adoption': '#8b5cf6',
  'Tools & Platforms': '#10b981',
  'Data Practices': '#f97316',
}

export default function AiUpdatesPage() {
  const [items, setItems] = useState<AiUpdate[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [editing, setEditing] = useState<AiUpdate | null>(null)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)

  async function load() {
    setLoading(true)
    const data = await fetch('/api/ai-updates').then(r => r.json()) as AiUpdate[]
    setItems(data)
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function handleDelete(id: string) {
    setDeleting(id)
    try {
      const res = await fetch(`/api/ai-updates/${id}`, { method: 'DELETE' })
      if (!res.ok) { toast('Failed to delete update.', 'error'); return }
      setItems(i => i.filter(x => x.id !== id))
      toast('Update deleted.', 'success')
    } catch {
      toast('Failed to delete update.', 'error')
    } finally {
      setDeleting(null)
      setConfirmDelete(null)
    }
  }

  if (creating) {
    return (
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 28 }}>New AI Update</h1>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
          <AiUpdateEditor onDone={() => { setCreating(false); load() }} />
        </div>
      </div>
    )
  }

  if (editing) {
    return (
      <div>
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 28 }}>Edit AI Update</h1>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 24 }}>
          <AiUpdateEditor initial={editing} onDone={() => { setEditing(null); load() }} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>AI Updates</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 2 }}>{items.length} total</p>
        </div>
        <button onClick={() => setCreating(true)} style={{ ...btn('#0a0a0a', '#fafafa'), padding: '9px 18px', fontSize: 13, borderRadius: 8 }}>
          + New Update
        </button>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading…</div>
        ) : items.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>No AI updates yet.</div>
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
              {items.map(item => {
                const catColor = CATEGORY_COLORS[item.category] ?? '#6b7280'
                return (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 500 }}>
                      <span style={{ display: 'block', maxWidth: 320, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</span>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>/{item.slug}</span>
                    </td>
                    <td>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4, background: `${catColor}20`, color: catColor }}>
                        {item.category}
                      </span>
                    </td>
                    <td>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4,
                        textTransform: 'uppercase', letterSpacing: '0.06em',
                        background: item.published ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.06)',
                        color: item.published ? '#4ade80' : 'rgba(255,255,255,0.3)',
                      }}>
                        {item.published ? 'Live' : 'Draft'}
                      </span>
                    </td>
                    <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                      {new Date(item.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <button onClick={() => setEditing(item)} style={btn('rgba(255,255,255,0.8)', 'rgba(255,255,255,0.08)')}>
                          Edit
                        </button>
                        {confirmDelete === item.id ? (
                          <>
                            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Sure?</span>
                            <button onClick={() => handleDelete(item.id)} disabled={deleting === item.id} style={btn('#fff', 'rgba(239,68,68,0.7)')}>
                              {deleting === item.id ? '…' : 'Yes, delete'}
                            </button>
                            <button onClick={() => setConfirmDelete(null)} style={btn('rgba(255,255,255,0.5)', 'rgba(255,255,255,0.07)')}>
                              Cancel
                            </button>
                          </>
                        ) : (
                          <button onClick={() => setConfirmDelete(item.id)} style={btn('#f87171', 'rgba(239,68,68,0.1)')}>
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
