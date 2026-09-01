'use client'

import { useEffect, useState } from 'react'
import type { Verdict, ClaimCategory } from '@/lib/verification-engine'

interface Evidence {
  id: string
  label: string
  value: string
  source: string
  notes: string | null
}

interface ClaimResult {
  claim_index: number
  claim_text: string
  category: ClaimCategory
  verdict: Verdict
  confidence: 'high' | 'medium' | 'low'
  evidence: Evidence[]
  notes: string
}

interface VerificationJob {
  id: string
  industry: string
  client_name: string
  client_email: string
  status: 'processing' | 'completed' | 'failed'
  claims: { text: string; category: ClaimCategory }[]
  results: ClaimResult[] | null
  error_message: string | null
  created_at: string
}

const VERDICT_COLORS: Record<Verdict, string> = {
  'verified': '#22c55e',
  'partially-verified': '#f59e0b',
  'exceeds-benchmark': '#3b82f6',
  'unsupported': '#ef4444',
  'needs-review': '#f97316',
  'unverifiable': '#6b7280',
}

const CONFIDENCE_COLORS = {
  high: '#22c55e',
  medium: '#f59e0b',
  low: '#ef4444',
}

function StatusBadge({ status }: { status: VerificationJob['status'] }) {
  const colors = { completed: '#22c55e', processing: '#f59e0b', failed: '#ef4444' }
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: 4,
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: colors[status],
      background: colors[status] + '20',
    }}>
      {status}
    </span>
  )
}

function VerdictBadge({ verdict }: { verdict: Verdict }) {
  const color = VERDICT_COLORS[verdict]
  return (
    <span style={{
      display: 'inline-block',
      padding: '2px 8px',
      borderRadius: 4,
      fontSize: 11,
      fontWeight: 600,
      color,
      background: color + '20',
    }}>
      {verdict.replace(/-/g, ' ')}
    </span>
  )
}

function JobRow({ job }: { job: VerificationJob }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', cursor: 'pointer' }} onClick={() => setExpanded(e => !e)}>
        <td style={{ padding: '12px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
          {job.id.slice(0, 8)}…
        </td>
        <td style={{ padding: '12px 16px', fontSize: 13, textTransform: 'capitalize' }}>{job.industry}</td>
        <td style={{ padding: '12px 16px', fontSize: 13 }}>
          <div>{job.client_name || <span style={{ color: 'rgba(255,255,255,0.3)' }}>—</span>}</div>
          {job.client_email && <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{job.client_email}</div>}
        </td>
        <td style={{ padding: '12px 16px' }}><StatusBadge status={job.status} /></td>
        <td style={{ padding: '12px 16px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
          {job.claims?.length ?? 0}
        </td>
        <td style={{ padding: '12px 16px', fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          {new Date(job.created_at).toLocaleString()}
        </td>
        <td style={{ padding: '12px 16px', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
          {expanded ? '▲' : '▼'}
        </td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan={7} style={{ padding: '0 16px 20px', background: 'rgba(255,255,255,0.02)' }}>
            {job.status === 'failed' && (
              <div style={{ padding: '12px 16px', background: '#ef444420', border: '1px solid #ef444440', borderRadius: 8, color: '#ef4444', fontSize: 13, marginTop: 12 }}>
                <strong>Error:</strong> {job.error_message}
              </div>
            )}
            {job.results && job.results.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
                {job.results.map((r) => (
                  <div key={r.claim_index} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 8 }}>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', minWidth: 24, paddingTop: 2 }}>#{r.claim_index + 1}</span>
                      <div style={{ flex: 1 }}>
                        <p style={{ margin: '0 0 8px', fontSize: 14, lineHeight: 1.5 }}>{r.claim_text}</p>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                          <VerdictBadge verdict={r.verdict} />
                          <span style={{ fontSize: 11, color: CONFIDENCE_COLORS[r.confidence], background: CONFIDENCE_COLORS[r.confidence] + '20', padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>
                            {r.confidence} confidence
                          </span>
                          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', padding: '2px 8px', borderRadius: 4, background: 'rgba(255,255,255,0.06)' }}>
                            {r.category}
                          </span>
                        </div>
                        <p style={{ margin: '8px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>{r.notes}</p>
                        {r.evidence.length > 0 && (
                          <div style={{ marginTop: 10 }}>
                            <p style={{ margin: '0 0 6px', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)' }}>Evidence</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                              {r.evidence.map((e) => (
                                <div key={e.id} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 6, padding: '8px 12px', fontSize: 12 }}>
                                  <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{e.label}</span>
                                  <span style={{ color: 'rgba(255,255,255,0.5)', margin: '0 8px' }}>→</span>
                                  <span style={{ color: '#3b82f6' }}>{e.value}</span>
                                  <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 8 }}>({e.source})</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {job.status === 'processing' && (
              <div style={{ padding: '12px 16px', color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 12 }}>
                Processing…
              </div>
            )}
          </td>
        </tr>
      )}
    </>
  )
}

export default function VerificationsPage() {
  const [jobs, setJobs] = useState<VerificationJob[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/admin/verifications')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setJobs(data)
        else setError(data.error ?? 'Failed to load.')
      })
      .catch(() => setError('Network error.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: '0 0 4px' }}>Verifications</h1>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
          Client claim verification jobs — click a row to expand results.
        </p>
      </div>

      {loading && <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Loading…</p>}
      {error && <p style={{ color: '#ef4444', fontSize: 14 }}>{error}</p>}

      {!loading && !error && jobs.length === 0 && (
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>No verification jobs yet.</p>
      )}

      {jobs.length > 0 && (
        <div style={{ overflowX: 'auto', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                {['ID', 'Industry', 'Client', 'Status', 'Claims', 'Submitted', ''].map(h => (
                  <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => <JobRow key={job.id} job={job} />)}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
