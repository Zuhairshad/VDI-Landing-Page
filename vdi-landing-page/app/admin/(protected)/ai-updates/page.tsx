'use client'

import { useEffect, useState, useCallback } from 'react'
import AiUpdateEditor from '@/components/admin/AiUpdateEditor'

interface AiUpdate {
  id: string
  title: string
  slug: string
  summary: string | null
  content: string
  category: string
  published: boolean
  published_at: string | null
  created_at: string
}

const CATEGORY_COLORS: Record<string, string> = {
  'Model Release': '#3b82f6', 'Research': '#8b5cf6', 'Industry News': '#f59e0b',
  'Tool Update': '#22c55e', 'Regulation': '#ef4444', 'General': '#6b7280',
}

export default function AdminAiUpdatesPage() {
  const [updates, setUpdates] = useState<AiUpdate[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<AiUpdate | null | 'new'>(null)

  const load = useCallback(() => {
    setLoading(true)
    fetch('/api/admin/ai-updates')
      .then(r => r.json())
      .then(d => { if (Array.isArray(d)) setUpdates(d) })
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => { load() }, [load])

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"?`)) return
    await fetch(`/api/admin/ai-updates/${id}`, { method: 'DELETE' })
    load()
  }

  async function togglePublish(update: AiUpdate) {
    await fetch(`/api/admin/ai-updates/${update.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !update.published }),
    })
    load()
  }

  if (editing) {
    return (
      <div>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>
            {editing === 'new' ? 'New AI Update' : 'Edit AI Update'}
          </h1>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 24 }}>
          <AiUpdateEditor
            update={editing === 'new' ? undefined : editing}
            onDone={() => { setEditing(null); load() }}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>AI Data Updates</h1>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>Daily AI intelligence updates published to /ai-updates</p>
        </div>
        <button
          onClick={() => setEditing('new')}
          style={{ padding: '9px 18px', background: '#fafafa', color: '#0a0a0a', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
        >
          + New Update
        </button>
      </div>

      {loading && <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Loading…</p>}

      {!loading && updates.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px 0', color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>
          No updates yet. Click &quot;+ New Update&quot; to publish your first one.
        </div>
      )}

      {updates.length > 0 && (
        <div style={{ borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {['Title', 'Category', 'Status', 'Date', ''].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {updates.map(u => {
                const color = CATEGORY_COLORS[u.category] ?? '#6b7280'
                return (
                  <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '13px 16px' }}>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{u.title}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>/ai-updates/{u.slug}</div>
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color, background: color + '20', padding: '3px 10px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        {u.category}
                      </span>
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <button
                        onClick={() => togglePublish(u)}
                        style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 4, border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.06em',
                          background: u.published ? '#22c55e20' : 'rgba(255,255,255,0.07)',
                          color: u.published ? '#22c55e' : 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {u.published ? 'Live' : 'Draft'}
                      </button>
                    </td>
                    <td style={{ padding: '13px 16px', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
                      {new Date(u.published_at ?? u.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '13px 16px' }}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button onClick={() => setEditing(u)} style={{ fontSize: 12, padding: '5px 12px', background: 'rgba(255,255,255,0.07)', border: 'none', borderRadius: 5, color: 'rgba(255,255,255,0.7)', cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => handleDelete(u.id, u.title)} style={{ fontSize: 12, padding: '5px 12px', background: 'rgba(239,68,68,0.12)', border: 'none', borderRadius: 5, color: '#f87171', cursor: 'pointer' }}>Delete</button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
