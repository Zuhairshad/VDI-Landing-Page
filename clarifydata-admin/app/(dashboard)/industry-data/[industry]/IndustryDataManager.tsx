'use client'

import { useState } from 'react'
import Link from 'next/link'
import { toast } from '@/lib/toasts'

type Row = {
  id: string
  industry: string
  label: string
  value: string
  source: string | null
  notes: string | null
  verified: boolean
}

type NewRow = Omit<Row, 'id'>

interface Props {
  industry: string
  label: string
  initialData: Row[]
}

const inputStyle: React.CSSProperties = {
  padding: '7px 10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 7, color: '#fafafa', fontSize: 13, fontFamily: 'inherit', width: '100%', boxSizing: 'border-box',
}

export default function IndustryDataManager({ industry, label, initialData }: Props) {
  const [rows, setRows] = useState<Row[]>(initialData)
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState<Omit<NewRow, 'industry'>>({
    label: '', value: '', source: '', notes: '', verified: false,
  })
  const [saving, setSaving] = useState(false)

  async function handleAdd() {
    if (!form.label.trim()) { toast('Label is required.', 'error'); return }
    if (!form.value.trim()) { toast('Value is required.', 'error'); return }
    setSaving(true)
    try {
      const body: NewRow = { ...form, industry }
      const res = await fetch('/api/industry-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const json = await res.json() as Row & { error?: string }
      if (json.error) { toast(json.error, 'error'); return }
      setRows(r => [...r, json])
      setForm({ label: '', value: '', source: '', notes: '', verified: false })
      setAdding(false)
      toast('Row added.', 'success')
    } catch {
      toast('Failed to save.', 'error')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    setDeleting(id)
    try {
      await fetch(`/api/industry-data?id=${id}`, { method: 'DELETE' })
      setRows(r => r.filter(x => x.id !== id))
      toast('Row deleted.', 'success')
    } catch {
      toast('Failed to delete row.', 'error')
    } finally {
      setDeleting(null)
      setConfirmDelete(null)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 4 }}>
            <Link href="/industry-data" style={{ color: 'rgba(255,255,255,0.3)' }}>Industry Data</Link>
            {' / '}
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>{label}</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 2 }}>{rows.length} rows</p>
        </div>
        <button
          onClick={() => setAdding(true)}
          style={{ padding: '9px 18px', borderRadius: 8, border: 'none', background: '#fafafa', color: '#0a0a0a', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
        >
          + Add Row
        </button>
      </div>

      {adding && (
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 20, marginBottom: 20 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>New Benchmark Row</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: 10, marginBottom: 10 }}>
            <div>
              <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 5 }}>Label</label>
              <input value={form.label} onChange={e => setForm(f => ({ ...f, label: e.target.value }))} placeholder="e.g. Average cart abandonment rate" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 5 }}>Value</label>
              <input value={form.value} onChange={e => setForm(f => ({ ...f, value: e.target.value }))} placeholder="e.g. 70% or 12 months" style={inputStyle} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            <div>
              <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 5 }}>Source</label>
              <input value={form.source ?? ''} onChange={e => setForm(f => ({ ...f, source: e.target.value }))} placeholder="e.g. Baymard Institute 2025" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: 5 }}>Notes</label>
              <input value={form.notes ?? ''} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} placeholder="Additional context" style={inputStyle} />
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13 }}>
              <input type="checkbox" checked={form.verified} onChange={e => setForm(f => ({ ...f, verified: e.target.checked }))} style={{ width: 'auto' }} />
              <span style={{ color: 'rgba(255,255,255,0.6)' }}>Mark as verified</span>
            </label>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => setAdding(false)} style={{ padding: '7px 14px', borderRadius: 7, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: 'rgba(255,255,255,0.5)', fontSize: 13, cursor: 'pointer' }}>
              Cancel
            </button>
            <button onClick={handleAdd} disabled={saving} style={{ padding: '7px 18px', borderRadius: 7, border: 'none', background: '#fafafa', color: '#0a0a0a', fontSize: 13, fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer' }}>
              {saving ? 'Saving…' : 'Add Row'}
            </button>
          </div>
        </div>
      )}

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
        {rows.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>
            No benchmark rows yet. Add one above.
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Label</th>
                <th>Value</th>
                <th>Source</th>
                <th>Notes</th>
                <th>Verified</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td style={{ fontWeight: 500, maxWidth: 280 }}>{row.label}</td>
                  <td style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{row.value}</td>
                  <td style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {row.source ?? '—'}
                  </td>
                  <td style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {row.notes ?? '—'}
                  </td>
                  <td>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 4,
                      background: row.verified ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.05)',
                      color: row.verified ? '#4ade80' : 'rgba(255,255,255,0.3)',
                    }}>
                      {row.verified ? '✓' : '—'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end', alignItems: 'center' }}>
                      {confirmDelete === row.id ? (
                        <>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>Sure?</span>
                          <button onClick={() => handleDelete(row.id)} disabled={deleting === row.id} style={{ padding: '4px 10px', borderRadius: 6, border: 'none', fontSize: 12, fontWeight: 600, color: '#fff', background: 'rgba(239,68,68,0.7)', cursor: deleting === row.id ? 'not-allowed' : 'pointer' }}>
                            {deleting === row.id ? '…' : 'Yes'}
                          </button>
                          <button onClick={() => setConfirmDelete(null)} style={{ padding: '4px 10px', borderRadius: 6, border: 'none', fontSize: 12, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.07)', cursor: 'pointer' }}>
                            No
                          </button>
                        </>
                      ) : (
                        <button onClick={() => setConfirmDelete(row.id)} style={{ padding: '4px 10px', borderRadius: 6, border: 'none', fontSize: 12, fontWeight: 600, color: '#f87171', background: 'rgba(239,68,68,0.1)', cursor: 'pointer' }}>
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
