'use client'

import { useState } from 'react'
import ImageUpload from './ImageUpload'

const ABOUT_US =
  'Clarify Data helps teams prepare information, verify consequential claims, and turn evidence into reviewable business intelligence.'

interface RefItem {
  label: string
  url: string
}

interface BlogPost {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  about_us: string
  images: string[]
  post_refs: RefItem[]
  urls: RefItem[]
  published: boolean
}

interface BlogEditorProps {
  initial?: Partial<BlogPost>
  onSave: (payload: BlogPost) => Promise<void>
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 8,
  color: '#fafafa',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 500,
  color: 'rgba(255,255,255,0.55)',
  marginBottom: 6,
}

function FieldRow({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={labelStyle}>{label}{hint && <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.3)', marginLeft: 6 }}>{hint}</span>}</label>
      {children}
    </div>
  )
}

export default function BlogEditor({ initial, onSave }: BlogEditorProps) {
  const [title, setTitle] = useState(initial?.title ?? '')
  const [slug, setSlug] = useState(initial?.slug ?? '')
  const [excerpt, setExcerpt] = useState(initial?.excerpt ?? '')
  const [content, setContent] = useState(initial?.content ?? '')
  const [images, setImages] = useState<string[]>(initial?.images ?? [])
  const [postRefs, setPostRefs] = useState<RefItem[]>(initial?.post_refs ?? [])
  const [urls, setUrls] = useState<RefItem[]>(initial?.urls ?? [])
  const [published, setPublished] = useState(initial?.published ?? false)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')

  function handleTitleChange(val: string) {
    setTitle(val)
    if (!initial?.slug) {
      setSlug(generateSlug(val))
    }
  }

  function updateRef(list: RefItem[], setList: (l: RefItem[]) => void, index: number, field: keyof RefItem, value: string) {
    setList(list.map((item, i) => i === index ? { ...item, [field]: value } : item))
  }

  function removeRef(list: RefItem[], setList: (l: RefItem[]) => void, index: number) {
    setList(list.filter((_, i) => i !== index))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !slug.trim()) {
      setSaveError('Title and slug are required.')
      return
    }
    setSaving(true)
    setSaveError('')
    try {
      await onSave({
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        about_us: ABOUT_US,
        images,
        post_refs: postRefs,
        urls,
        published,
      })
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Save failed.')
    } finally {
      setSaving(false)
    }
  }

  const refListEditor = (label: string, list: RefItem[], setList: (l: RefItem[]) => void) => (
    <FieldRow label={label}>
      {list.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
          <input
            type="text"
            placeholder="Label"
            value={item.label}
            onChange={(e) => updateRef(list, setList, i, 'label', e.target.value)}
            style={{ ...inputStyle, flex: 1 }}
          />
          <input
            type="url"
            placeholder="https://..."
            value={item.url}
            onChange={(e) => updateRef(list, setList, i, 'url', e.target.value)}
            style={{ ...inputStyle, flex: 2 }}
          />
          <button
            type="button"
            onClick={() => removeRef(list, setList, i)}
            style={{ padding: '0 12px', background: 'rgba(239,68,68,0.15)', border: 'none', borderRadius: 8, color: '#f87171', cursor: 'pointer', fontSize: 16 }}
          >
            x
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => setList([...list, { label: '', url: '' }])}
        style={{
          fontSize: 12, padding: '6px 12px', borderRadius: 7,
          background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
        }}
      >
        + Add entry
      </button>
    </FieldRow>
  )

  return (
    <form onSubmit={handleSubmit}>
      <FieldRow label="Title *">
        <input type="text" required value={title} onChange={(e) => handleTitleChange(e.target.value)} style={inputStyle} />
      </FieldRow>

      <FieldRow label="Slug *">
        <input type="text" required value={slug} onChange={(e) => setSlug(e.target.value)} style={inputStyle} />
      </FieldRow>

      <FieldRow label="Excerpt" hint="160 char limit">
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          maxLength={160}
          rows={3}
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>{excerpt.length}/160</span>
      </FieldRow>

      <FieldRow label="Images" hint="up to 4">
        <ImageUpload images={images} onChange={setImages} max={4} />
      </FieldRow>

      <FieldRow label="About Us">
        <textarea
          readOnly
          value={ABOUT_US}
          rows={3}
          style={{ ...inputStyle, color: 'rgba(255,255,255,0.4)', cursor: 'default', resize: 'none' }}
        />
      </FieldRow>

      <FieldRow label="Content" hint="Markdown supported">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={18}
          style={{ ...inputStyle, resize: 'vertical', fontFamily: 'ui-monospace, monospace', fontSize: 13 }}
        />
      </FieldRow>

      {refListEditor('References', postRefs, setPostRefs)}
      {refListEditor('Further Reading URLs', urls, setUrls)}

      <FieldRow label="">
        <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            style={{ width: 16, height: 16 }}
          />
          <span style={{ fontSize: 14, color: '#fafafa' }}>Published</span>
        </label>
      </FieldRow>

      {saveError && <p style={{ color: '#f87171', fontSize: 13, marginBottom: 12 }}>{saveError}</p>}

      <button
        type="submit"
        disabled={saving}
        style={{
          padding: '10px 24px', fontSize: 14, fontWeight: 600, borderRadius: 8,
          background: saving ? 'rgba(255,255,255,0.15)' : '#fafafa',
          color: '#0a0a0a', border: 'none', cursor: saving ? 'not-allowed' : 'pointer',
        }}
      >
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  )
}
