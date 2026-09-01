'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

const industryLabels: Record<string, string> = {
  medical: 'Medical and Clinical',
  education: 'Education',
  logistics: 'Logistics and Trade',
  ecommerce: 'E-commerce and Social Media',
}

interface IndustryEntry {
  id: string
  industry: string
  label: string
  value: string
  source: string | null
  notes: string | null
  verified: boolean
  created_at: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 12px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 8,
  color: '#fafafa',
  fontSize: 13,
  outline: 'none',
  boxSizing: 'border-box',
}

export default function IndustryDetailPage() {
  const params = useParams()
  const industry = typeof params.industry === 'string' ? params.industry : ''
  const industryLabel = industryLabels[industry] ?? industry

  const [entries, setEntries] = useState<IndustryEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [deleting, setDeleting] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')

  const [label, setLabel] = useState('')
  const [value, setValue] = useState('')
  const [source, setSource] = useState('')
  const [notes, setNotes] = useState('')
  const [verified, setVerified] = useState(false)

  async function load() {
    try {
      const res = await fetch(`/api/admin/industry-data?industry=${industry}`)
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json() as IndustryEntry[]
      setEntries(data)
    } catch {
      setError('Failed to load industry data.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { if (industry) void load() }, [industry])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!label.trim() || !value.trim()) {
      setFormError('Label and value are required.')
      return
    }
    setSubmitting(true)
    setFormError('')

    try {
      const res = await fetch('/api/admin/industry-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, label: label.trim(), value: value.trim(), source: source.trim() || null, notes: notes.trim() || null, verified }),
      })

      if (!res.ok) {
        const data = await res.json() as { error?: string }
        setFormError(data.error ?? 'Failed to save.')
        return
      }

      const newEntry = await res.json() as IndustryEntry
      setEntries((prev) => [newEntry, ...prev])
      setLabel('')
      setValue('')
      setSource('')
      setNotes('')
      setVerified(false)
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this entry?')) return
    setDeleting(id)
    try {
      await fetch(`/api/admin/industry-data?id=${id}`, { method: 'DELETE' })
      setEntries((prev) => prev.filter((e) => e.id !== id))
    } finally {
      setDeleting(null)
    }
  }

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 28, color: '#fafafa' }}>{industryLabel}</h1>

      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: 24, marginBottom: 32 }}>
        <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: 16, color: 'rgba(255,255,255,0.8)' }}>Add Data Point</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 5 }}>Label *</label>
              <input type="text" required value={label} onChange={(e) => setLabel(e.target.value)} style={inputStyle} placeholder="e.g. Market size 2025" />
            </div>
            <div>
              <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 5 }}>Value *</label>
              <input type="text" required value={value} onChange={(e) => setValue(e.target.value)} style={inputStyle} placeholder="e.g. $4.2B" />
            </div>
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 5 }}>Source</label>
            <input type="text" value={source} onChange={(e) => setSource(e.target.value)} style={inputStyle} placeholder="Optional" />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: 5 }}>Notes</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Optional" />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: '#fafafa' }}>
              <input type="checkbox" checked={verified} onChange={(e) => setVerified(e.target.checked)} />
              Verified
            </label>
          </div>
          {formError && <p style={{ color: '#f87171', fontSize: 13, marginBottom: 10 }}>{formError}</p>}
          <button
            type="submit"
            disabled={submitting}
            style={{
              padding: '8px 20px', fontSize: 13, fontWeight: 600, borderRadius: 8,
              background: submitting ? 'rgba(255,255,255,0.15)' : '#fafafa',
              color: '#0a0a0a', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer',
            }}
          >
            {submitting ? 'Saving...' : 'Add'}
          </button>
        </form>
      </div>

      {loading && <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Loading...</p>}
      {error && <p style={{ color: '#f87171', fontSize: 14 }}>{error}</p>}

      {!loading && !error && (
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {['Label', 'Value', 'Source', 'Verified', 'Date', ''].map((h) => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {entries.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: '20px 16px', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>No data points yet.</td>
                </tr>
              )}
              {entries.map((entry) => (
                <tr key={entry.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 16px', color: '#fafafa', fontWeight: 500 }}>{entry.label}</td>
                  <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.8)' }}>{entry.value}</td>
                  <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.5)' }}>{entry.source ?? '-'}</td>
                  <td style={{ padding: '10px 16px' }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4,
                      background: entry.verified ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)',
                      color: entry.verified ? 'rgb(34,197,94)' : 'rgba(255,255,255,0.35)',
                    }}>
                      {entry.verified ? 'Verified' : 'Unverified'}
                    </span>
                  </td>
                  <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' }}>{formatDate(entry.created_at)}</td>
                  <td style={{ padding: '10px 16px' }}>
                    <button
                      onClick={() => void handleDelete(entry.id)}
                      disabled={deleting === entry.id}
                      style={{
                        fontSize: 12, padding: '4px 10px', borderRadius: 6,
                        background: 'rgba(239,68,68,0.15)', color: '#f87171',
                        border: 'none', cursor: 'pointer',
                      }}
                    >
                      {deleting === entry.id ? '...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
