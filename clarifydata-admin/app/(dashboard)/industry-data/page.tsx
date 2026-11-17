import type { Metadata } from 'next'
import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/server'

export const metadata: Metadata = { title: 'Industry Data' }

const INDUSTRIES = [
  { id: 'medical', label: 'Medical & Clinical', color: '#10b981' },
  { id: 'ecommerce', label: 'E-commerce & Marketing', color: '#8b5cf6' },
  { id: 'education', label: 'Education', color: '#3b82f6' },
  { id: 'logistics', label: 'Logistics & Trade', color: '#f97316' },
]

async function getCounts() {
  const db = createAdminClient()
  const { data } = await db.from('industry_data').select('industry')
  const counts: Record<string, number> = {}
  for (const row of data ?? []) {
    counts[row.industry] = (counts[row.industry] ?? 0) + 1
  }
  return counts
}

export default async function IndustryDataPage() {
  const counts = await getCounts()

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>Industry Data</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 2 }}>
          Benchmark data used by the verification engine
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
        {INDUSTRIES.map(ind => (
          <Link key={ind.id} href={`/industry-data/${ind.id}`} style={{
            textDecoration: 'none',
            display: 'block',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12,
            padding: '20px 22px',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: ind.color, marginBottom: 14 }} />
            <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{ind.label}</h3>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
              {counts[ind.id] ?? 0} benchmark row{(counts[ind.id] ?? 0) !== 1 ? 's' : ''}
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 14 }}>Manage →</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
