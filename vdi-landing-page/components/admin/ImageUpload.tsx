'use client'

import { useRef } from 'react'

interface ImageUploadProps {
  images: string[]
  onChange: (images: string[]) => void
  max?: number
}

export default function ImageUpload({ images, onChange, max = 4 }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return

    const remaining = max - images.length
    const toUpload = files.slice(0, remaining)

    for (const file of toUpload) {
      const formData = new FormData()
      formData.append('file', file)

      try {
        const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
        const data = await res.json() as { url?: string; error?: string }
        if (data.url) {
          onChange([...images, data.url])
        } else {
          alert(data.error ?? 'Upload failed.')
        }
      } catch {
        alert('Upload failed.')
      }
    }

    if (inputRef.current) inputRef.current.value = ''
  }

  function removeImage(index: number) {
    onChange(images.filter((_, i) => i !== index))
  }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
        {images.map((url, i) => (
          <div key={url} style={{ position: 'relative', width: 90, height: 70 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={url}
              alt={`Upload ${i + 1}`}
              style={{ width: 90, height: 70, objectFit: 'cover', borderRadius: 6, border: '1px solid rgba(255,255,255,0.12)' }}
            />
            <button
              type="button"
              onClick={() => removeImage(i)}
              style={{
                position: 'absolute', top: -6, right: -6,
                background: '#ef4444', color: '#fff', border: 'none',
                borderRadius: '50%', width: 20, height: 20, fontSize: 12,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={images.length >= max}
          style={{
            padding: '7px 14px', fontSize: 13, borderRadius: 7,
            background: images.length >= max ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)',
            color: images.length >= max ? 'rgba(255,255,255,0.3)' : '#fafafa',
            border: '1px solid rgba(255,255,255,0.12)', cursor: images.length >= max ? 'not-allowed' : 'pointer',
          }}
        >
          Add image
        </button>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{images.length}/{max} images</span>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  )
}
