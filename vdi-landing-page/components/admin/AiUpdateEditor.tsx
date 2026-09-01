'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

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

const CATEGORIES = ['General', 'Model Release', 'Research', 'Industry News', 'Tool Update', 'Regulation']

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '9px 12px', background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)', borderRadius: 7, color: '#fafafa',
  fontSize: 14, outline: 'none', boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 12, color: 'rgba(255,255,255,0.5)',
  marginBottom: 5, textTransform: 'uppercase', letterSpacing: '0.06em',
}

export default function AiUpdateEditor({ update, onDone }: { update?: AiUpdate; onDone: () => void }) {
  const router = useRouter()
  const [title, setTitle] = useState(update?.title ?? '')
  const [slug, setSlug] = useState(update?.slug ?? '')
  const [summary, setSummary] = useState(update?.summary ?? '')
  const [content, setContent] = useState(update?.content ?? '')
  const [category, setCategory] = useState(update?.category ?? 'General')
  const [published, setPublished] = useState(update?.published ?? false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')

    const payload = { title, slug, summary, content, category, published }
    const url = update ? `/api/admin/ai-updates/${update.id}` : '/api/admin/ai-updates'
    const method = update ? 'PUT' : 'POST'

    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    const data = await res.json() as { error?: string }

    if (!res.ok) {
      setError(data.error ?? 'Save failed.')
      setSaving(false)
      return
    }

    router.refresh()
    onDone()
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle}>Title *</label>
          <input
            style={inputStyle} value={title} required
            onChange={e => { setTitle(e.target.value); if (!update) setSlug(slugify(e.target.value)) }}
          />
        </div>
        <div>
          <label style={labelStyle}>Slug *</label>
          <input style={inputStyle} value={slug} required onChange={e => setSlug(e.target.value)} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
        <div>
          <label style={labelStyle}>Summary</label>
          <input style={inputStyle} value={summary} placeholder="Short description shown in the listing" onChange={e => setSummary(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Category</label>
          <select style={{ ...inputStyle, cursor: 'pointer' }} value={category} onChange={e => setCategory(e.target.value)}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Content (Markdown)</label>
        <textarea
          style={{ ...inputStyle, minHeight: 280, resize: 'vertical', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.6 }}
          value={content}
          placeholder="Write the update in Markdown..."
          onChange={e => setContent(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
          <input type="checkbox" checked={published} onChange={e => setPublished(e.target.checked)} />
          Publish immediately
        </label>
        <div style={{ display: 'flex', gap: 10 }}>
          {error && <span style={{ fontSize: 13, color: '#f87171', alignSelf: 'center' }}>{error}</span>}
          <button type="button" onClick={onDone} style={{ padding: '8px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 7, color: 'rgba(255,255,255,0.6)', fontSize: 14, cursor: 'pointer' }}>
            Cancel
          </button>
          <button type="submit" disabled={saving} style={{ padding: '8px 20px', background: saving ? 'rgba(255,255,255,0.2)' : '#fafafa', color: '#0a0a0a', border: 'none', borderRadius: 7, fontSize: 14, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer' }}>
            {saving ? 'Saving…' : update ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>
    </form>
  )
}
