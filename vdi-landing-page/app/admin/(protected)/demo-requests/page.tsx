'use client'

import { useEffect, useState } from 'react'

interface DemoRequest {
  id: string
  email: string
  company: string
  phone: string | null
  industry: string
  description: string
  read: boolean
  created_at: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function DemoRequestsPage() {
  const [requests, setRequests] = useState<DemoRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [marking, setMarking] = useState<string | null>(null)

  async function load() {
    try {
      const res = await fetch('/api/admin/demo-requests')
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json() as DemoRequest[]
      setRequests(data)
    } catch {
      setError('Failed to load demo requests.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { void load() }, [])

  async function markRead(id: string) {
    setMarking(id)
    try {
      const res = await fetch('/api/admin/demo-requests', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, read: true }),
      })
      if (res.ok) {
        setRequests((prev) => prev.map((r) => r.id === id ? { ...r, read: true } : r))
      }
    } finally {
      setMarking(null)
    }
  }

  if (loading) return <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Loading...</p>
  if (error) return <p style={{ color: '#f87171', fontSize: 14 }}>{error}</p>

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 24, color: '#fafafa' }}>Demo Requests</h1>
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['Date', 'Company', 'Email', 'Industry', 'Description', 'Status', ''].map((h) => (
                <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 && (
              <tr>
                <td colSpan={7} style={{ padding: '20px 16px', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>No requests yet.</td>
              </tr>
            )}
            {requests.map((req) => (
              <>
                <tr
                  key={req.id}
                  onClick={() => setExpanded(expanded === req.id ? null : req.id)}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}
                >
                  <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>{formatDate(req.created_at)}</td>
                  <td style={{ padding: '10px 16px', color: '#fafafa', fontWeight: req.read ? 400 : 600 }}>{req.company}</td>
                  <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.7)' }}>{req.email}</td>
                  <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.6)' }}>{req.industry}</td>
                  <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.55)', maxWidth: 220 }}>
                    {req.description.length > 60 ? req.description.slice(0, 60) + '...' : req.description}
                  </td>
                  <td style={{ padding: '10px 16px' }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 4,
                      background: req.read ? 'rgba(255,255,255,0.08)' : 'rgba(251, 191, 36, 0.15)',
                      color: req.read ? 'rgba(255,255,255,0.4)' : 'rgb(251, 191, 36)',
                    }}>
                      {req.read ? 'Read' : 'Unread'}
                    </span>
                  </td>
                  <td style={{ padding: '10px 16px' }}>
                    {!req.read && (
                      <button
                        onClick={(e) => { e.stopPropagation(); void markRead(req.id) }}
                        disabled={marking === req.id}
                        style={{
                          fontSize: 12, padding: '4px 10px', borderRadius: 6,
                          background: 'rgba(255,255,255,0.1)', color: '#fafafa',
                          border: 'none', cursor: 'pointer',
                        }}
                      >
                        {marking === req.id ? '...' : 'Mark read'}
                      </button>
                    )}
                  </td>
                </tr>
                {expanded === req.id && (
                  <tr key={`${req.id}-exp`} style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <td colSpan={7} style={{ padding: '16px 20px' }}>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>Phone: {req.phone || 'Not provided'}</p>
                      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{req.description}</p>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
