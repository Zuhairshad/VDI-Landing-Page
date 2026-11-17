'use client'

import { useEffect, useState } from 'react'

type Verification = {
  id: string
  industry: string
  client_name: string | null
  client_email: string | null
  status: string
  claims: string[] | null
  results: Record<string, unknown>[] | null
  error_message: string | null
  created_at: string
}

const statusColor = (s: string) => {
  if (s === 'completed') return { bg: 'rgba(34,197,94,0.12)', color: '#4ade80' }
  if (s === 'failed') return { bg: 'rgba(239,68,68,0.12)', color: '#f87171' }
  if (s === 'processing') return { bg: 'rgba(96,165,250,0.12)', color: '#60a5fa' }
  return { bg: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }
}

export default function VerificationsPage() {
  const [items, setItems] = useState<Verification[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('all')

  useEffect(() => {
    fetch('/api/verifications').then(r => r.json()).then(setItems).finally(() => setLoading(false))
  }, [])

  const filtered = filter === 'all' ? items : items.filter(i => i.status === filter)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Verifications</h1>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 2 }}>{items.length} total</p>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['all', 'pending', 'processing', 'completed', 'failed'].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              style={{
                padding: '6px 12px', borderRadius: 7, border: '1px solid',
                fontSize: 12, fontWeight: 500, cursor: 'pointer', textTransform: 'capitalize',
                borderColor: filter === s ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                background: filter === s ? 'rgba(255,255,255,0.08)' : 'transparent',
                color: filter === s ? '#fafafa' : 'rgba(255,255,255,0.4)',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
        {loading ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>Loading…</div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: 'rgba(255,255,255,0.3)' }}>No verifications found.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Industry</th>
                <th>Claims</th>
                <th>Status</th>
                <th>Date</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {filtered.map(v => {
                const sc = statusColor(v.status)
                return (
                  <>
                    <tr key={v.id}>
                      <td style={{ fontSize: 13 }}>
                        <div style={{ fontWeight: 500 }}>{v.client_name ?? 'Anonymous'}</div>
                        {v.client_email && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{v.client_email}</div>}
                      </td>
                      <td style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textTransform: 'capitalize' }}>{v.industry}</td>
                      <td style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                        {v.claims?.length ?? 0} claim{(v.claims?.length ?? 0) !== 1 ? 's' : ''}
                      </td>
                      <td>
                        <span style={{
                          fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4,
                          textTransform: 'uppercase', letterSpacing: '0.06em',
                          background: sc.bg, color: sc.color,
                        }}>
                          {v.status}
                        </span>
                        {v.error_message && (
                          <div style={{ fontSize: 11, color: '#f87171', marginTop: 3 }}>{v.error_message}</div>
                        )}
                      </td>
                      <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                        {new Date(v.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td>
                        <button
                          onClick={() => setExpanded(expanded === v.id ? null : v.id)}
                          style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.35)', fontSize: 13, cursor: 'pointer' }}
                        >
                          {expanded === v.id ? '▲' : '▼'}
                        </button>
                      </td>
                    </tr>
                    {expanded === v.id && (
                      <tr key={`${v.id}-detail`} style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <td colSpan={6} style={{ padding: '14px 16px 18px' }}>
                          {v.claims && v.claims.length > 0 && (
                            <div style={{ marginBottom: 14 }}>
                              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>Claims</p>
                              <ol style={{ paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                                {v.claims.map((c, i) => (
                                  <li key={i} style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{c}</li>
                                ))}
                              </ol>
                            </div>
                          )}
                          {v.results && v.results.length > 0 && (
                            <div>
                              <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', marginBottom: 8 }}>Results</p>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {v.results.map((r, i) => {
                                  const verdict = String(r.verdict ?? '')
                                  const verdictColor = verdict === 'verified' ? '#4ade80' : verdict === 'unverified' ? '#f87171' : '#f59e0b'
                                  return (
                                    <div key={i} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px 14px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                                      <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 7px', borderRadius: 4, textTransform: 'uppercase', background: `${verdictColor}18`, color: verdictColor, flexShrink: 0 }}>
                                        {verdict || 'pending'}
                                      </span>
                                      <div>
                                        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, marginBottom: r.reasoning ? 4 : 0 }}>
                                          {String(r.claim ?? '')}
                                        </p>
                                        {r.reasoning != null && (
                                          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{String(r.reasoning)}</p>
                                        )}
                                      </div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
