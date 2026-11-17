'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import ImageUpload from './ImageUpload'
import { toast } from '@/lib/toasts'

type Blog = {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  hero_image_url: string
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
  initial?: Partial<Blog> & { excerpt?: string; images?: string[] }
}

export default function BlogEditor({ initial }: Props) {
  const router = useRouter()

  const existingImage = initial?.images?.[0] ?? initial?.hero_image_url ?? ''

  const [form, setForm] = useState<Blog>({
    title: initial?.title ?? '',
    slug: initial?.slug ?? '',
    excerpt: initial?.excerpt ?? '',
    content: initial?.content ?? '',
    hero_image_url: existingImage,
    published: initial?.published ?? false,
  })
  const [saving, setSaving] = useState(false)

  const isNew = !initial?.id

  function set<K extends keyof Blog>(k: K, v: Blog[K]) {
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
      const payload = {
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        images: form.hero_image_url ? [form.hero_image_url] : [],
        published,
      }
      const res = isNew
        ? await fetch('/api/blogs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        : await fetch(`/api/blogs/${initial!.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const json = await res.json() as { error?: string }
      if (json.error) { toast(json.error, 'error'); return }
      toast(published ? 'Post published.' : 'Post saved.', 'success')
      router.push('/blogs')
    } catch {
      toast('Failed to save post.', 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div style={{ maxWidth: 760 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>
          {isNew ? 'New Post' : 'Edit Post'}
        </h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => router.push('/blogs')}
            style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: 'rgba(255,255,255,0.5)', fontSize: 13, cursor: 'pointer' }}
          >
            Cancel
          </button>
          {!form.published && (
            <button
              onClick={() => handleSave(true)}
              disabled={saving}
              style={{ padding: '8px 18px', borderRadius: 8, border: 'none', background: 'rgba(34,197,94,0.15)', color: '#4ade80', fontSize: 13, fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer' }}
            >
              {saving ? '…' : 'Publish'}
            </button>
          )}
          <button
            onClick={() => handleSave()}
            disabled={saving}
            style={{ padding: '8px 18px', borderRadius: 8, border: 'none', background: '#fafafa', color: '#0a0a0a', fontSize: 13, fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer' }}
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '24px 24px' }}>
        {field('Title',
          <input value={form.title} onChange={e => handleTitleChange(e.target.value)} placeholder="Post title" />
        )}

        {field('Slug',
          <input value={form.slug} onChange={e => set('slug', slugify(e.target.value))} placeholder="url-slug" />,
          'Auto-generated from title. Must be unique.'
        )}

        {field('Excerpt',
          <textarea value={form.excerpt} onChange={e => set('excerpt', e.target.value)} placeholder="Brief summary shown in list views" rows={3} style={{ resize: 'vertical' }} />
        )}

        {field('Content',
          <textarea value={form.content} onChange={e => set('content', e.target.value)} placeholder="Markdown content..." rows={20} style={{ resize: 'vertical', fontFamily: 'monospace', fontSize: 13, lineHeight: 1.7 }} />
        )}

        {field('Hero Image',
          <ImageUpload value={form.hero_image_url} onChange={url => set('hero_image_url', url)} />
        )}

        {field('Status',
          <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14 }}>
            <input type="checkbox" checked={form.published} onChange={e => set('published', e.target.checked)} style={{ width: 'auto', cursor: 'pointer' }} />
            <span style={{ color: form.published ? '#4ade80' : 'rgba(255,255,255,0.5)' }}>
              {form.published ? 'Published' : 'Draft'}
            </span>
          </label>
        )}
      </div>
    </div>
  )
}
