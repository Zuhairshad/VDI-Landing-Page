'use client'

import { useEffect, useState } from 'react'

type DemoRequest = {
  id: string
  email: string
  company: string
  phone: string | null
  industry: string
  description: string | null
  read: boolean
  created_at: string
}

export default function DemoRequestsPage() {
  const [requests, setRequests] = useState<DemoRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/demo-requests').then(r => r.json()).then(setRequests).finally(() => setLoading(false))
  }, [])

  async function toggleRead(req: DemoRequest) {
    const updated = { ...req, read: !req.read }
    setRequests(rs => rs.map(r => r.id === req.id ? updated : r))
    await fetch('/api/demo-requests', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: req.id, read: !req.read }),
    })
  }

  const unread = requests.filter(r => !r.read).length

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Demo Requests</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 2 }}>
          {requests.length} total{unread > 0 ? ` · ${unread} unread` : ''}
        </p>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading…</div>
        ) : requests.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>No demo requests yet.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Email</th>
                <th>Industry</th>
                <th>Status</th>
                <th>Date</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {requests.map(r => (
                <>
                  <tr key={r.id} style={{ background: r.read ? 'transparent' : 'rgba(245,158,11,0.04)' }}>
                    <td style={{ fontWeight: r.read ? 400 : 600 }}>{r.company}</td>
                    <td style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                      <div>{r.email}</div>
                      {r.phone && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{r.phone}</div>}
                    </td>
                    <td style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{r.industry}</td>
                    <td>
                      <button
                        onClick={() => toggleRead(r)}
                        style={{
                          fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4,
                          textTransform: 'uppercase', letterSpacing: '0.06em', border: 'none', cursor: 'pointer',
                          background: r.read ? 'rgba(255,255,255,0.06)' : 'rgba(245,158,11,0.15)',
                          color: r.read ? 'rgba(255,255,255,0.35)' : '#f59e0b',
                        }}
                      >
                        {r.read ? 'Read' : 'New'}
                      </button>
                    </td>
                    <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                      {new Date(r.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td>
                      <button
                        onClick={() => setExpanded(expanded === r.id ? null : r.id)}
                        style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.35)', fontSize: 13, cursor: 'pointer' }}
                      >
                        {expanded === r.id ? '▲' : '▼'}
                      </button>
                    </td>
                  </tr>
                  {expanded === r.id && (
                    <tr key={`${r.id}-detail`} style={{ background: 'rgba(255,255,255,0.02)' }}>
                      <td colSpan={6} style={{ padding: '12px 16px 16px' }}>
                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                          <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Description:</strong>{' '}
                          {r.description ?? <em style={{ opacity: 0.5 }}>No description provided.</em>}
                        </p>
                        <div style={{ marginTop: 8, display: 'flex', gap: 16 }}>
                          <a href={`mailto:${r.email}`} style={{ fontSize: 12, color: '#60a5fa', textDecoration: 'underline' }}>
                            Reply via email
                          </a>
                          {!r.read && (
                            <button onClick={() => toggleRead(r)} style={{ fontSize: 12, background: 'none', border: 'none', color: '#4ade80', cursor: 'pointer', padding: 0 }}>
                              Mark as read
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
