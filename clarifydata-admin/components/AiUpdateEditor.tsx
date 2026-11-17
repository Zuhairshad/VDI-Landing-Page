'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from '@/lib/toasts'

type AiUpdate = {
  id?: string
  title: string
  slug: string
  summary: string
  content: string
  category: string
  published: boolean
}

const field = (label: string, children: React.ReactNode, hint?: string) => (
  <div style={{ marginBottom: 20 }}>
    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.45)', marginBottom: 7 }}>
      {label}
    </label>
    {children}
    {hint && <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 5 }}>{hint}</p>}
  </div>
)

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

interface Props {
  initial?: Partial<AiUpdate>
  onDone?: () => void
}

const CATEGORIES = ['General', 'Model Releases', 'Policy & Regulation', 'Research', 'Industry Adoption', 'Tools & Platforms', 'Data Practices']

export default function AiUpdateEditor({ initial, onDone }: Props) {
  const router = useRouter()
  const [form, setForm] = useState<AiUpdate>({
    title: initial?.title ?? '',
    slug: initial?.slug ?? '',
    summary: initial?.summary ?? '',
    content: initial?.content ?? '',
    category: initial?.category ?? 'General',
    published: initial?.published ?? false,
  })
  const [saving, setSaving] = useState(false)

  const isNew = !initial?.id

  function set<K extends keyof AiUpdate>(k: K, v: AiUpdate[K]) {
    setForm(f => ({ ...f, [k]: v }))
  }

  function handleTitleChange(v: string) {
    set('title', v)
    if (isNew || !form.slug) set('slug', slugify(v))
  }

  async function handleSave(publish?: boolean) {
    if (!form.title.trim()) { toast('Title is required.', 'error'); return }
    if (!form.slug.trim()) { toast('Slug is required.', 'error'); return }
    setSaving(true)
    try {
      const published = publish ?? form.published
      const payload = { ...form, published }
      const res = isNew
        ? await fetch('/api/ai-updates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        : await fetch(`/api/ai-updates/${initial!.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const json = await res.json() as { error?: string }
      if (json.error) { toast(json.error, 'error'); return }
      toast(published ? 'Update published.' : 'Update saved.', 'success')
      onDone ? onDone() : router.push('/ai-updates')
    } catch {
      toast('Failed to save.', 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      {field('Title',
        <input value={form.title} onChange={e => handleTitleChange(e.target.value)} placeholder="Update title" autoFocus />
      )}

      {field('Slug',
        <input value={form.slug} onChange={e => set('slug', slugify(e.target.value))} placeholder="url-slug" />,
        'Auto-generated from title.'
      )}

      {field('Category',
        <select value={form.category} onChange={e => set('category', e.target.value)}>
          {CATEGORIES.map(c => <option key={c}>{c}</option>)}
        </select>
      )}

      {field('Summary',
        <textarea value={form.summary} onChange={e => set('summary', e.target.value)} placeholder="Brief summary" rows={3} style={{ resize: 'vertical' }} />
      )}

      {field('Content',
        <textarea value={form.content} onChange={e => set('content', e.target.value)} placeholder="Full content in Markdown..." rows={14} style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.7 }} />
      )}

      {field('Status',
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14 }}>
          <input type="checkbox" checked={form.published} onChange={e => set('published', e.target.checked)} style={{ width: 'auto', cursor: 'pointer' }} />
          <span style={{ color: form.published ? '#4ade80' : 'rgba(255,255,255,0.5)' }}>
            {form.published ? 'Published' : 'Draft'}
          </span>
        </label>
      )}

      <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
        {onDone && (
          <button onClick={onDone} style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: 'rgba(255,255,255,0.5)', fontSize: 13, cursor: 'pointer' }}>
            Cancel
          </button>
        )}
        {!form.published && (
          <button onClick={() => handleSave(true)} disabled={saving} style={{ padding: '8px 18px', borderRadius: 8, border: 'none', background: 'rgba(34,197,94,0.15)', color: '#4ade80', fontSize: 13, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer' }}>
            {saving ? '…' : 'Publish'}
          </button>
        )}
        <button onClick={() => handleSave()} disabled={saving} style={{ padding: '8px 18px', borderRadius: 8, border: 'none', background: '#fafafa', color: '#0a0a0a', fontSize: 13, fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer' }}>
          {saving ? 'Saving…' : 'Save Draft'}
        </button>
      </div>
    </div>
  )
}
