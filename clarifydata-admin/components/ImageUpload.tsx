'use client'

import { useRef, useState } from 'react'
import { toast } from '@/lib/toasts'

interface Props {
  value: string
  onChange: (url: string) => void
}

function checkLandscape(file: File): Promise<boolean> {
  return new Promise(resolve => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img.naturalWidth > img.naturalHeight)
    }
    img.onerror = () => { URL.revokeObjectURL(url); resolve(false) }
    img.src = url
  })
}

export default function ImageUpload({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 4 * 1024 * 1024) {
      toast('Image exceeds 4 MB limit.', 'error')
      e.target.value = ''
      return
    }

    const isLandscape = await checkLandscape(file)
    if (!isLandscape) {
      toast('Only landscape images are allowed (width must be greater than height).', 'error')
      e.target.value = ''
      return
    }

    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const json = await res.json() as { url?: string; error?: string }
      if (json.error) {
        toast(json.error, 'error')
        return
      }
      onChange(json.url ?? '')
      toast('Image uploaded.', 'success')
    } catch {
      toast('Upload failed. Please try again.', 'error')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  return (
    <div>
      {value && (
        <div style={{ marginBottom: 10, position: 'relative', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Hero" style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
          <button
            type="button"
            onClick={() => onChange('')}
            style={{
              position: 'absolute', top: 8, right: 8,
              background: 'rgba(0,0,0,0.7)', border: 'none', color: '#f87171',
              borderRadius: 6, padding: '4px 8px', fontSize: 12, cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        style={{
          padding: '8px 16px', borderRadius: 8, border: '1px dashed rgba(255,255,255,0.2)',
          background: 'transparent', color: uploading ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.6)',
          fontSize: 13, cursor: uploading ? 'not-allowed' : 'pointer', width: '100%',
        }}
      >
        {uploading ? 'Uploading…' : value ? 'Replace image' : 'Upload hero image (landscape only)'}
      </button>
      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 6 }}>
        Landscape orientation required · Max 4 MB
      </p>
    </div>
  )
}
