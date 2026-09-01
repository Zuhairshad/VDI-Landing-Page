import Link from 'next/link'
import { requireAdmin } from '@/lib/admin-check'
import { db } from '@/lib/supabase'

const industries = [
  { key: 'medical', label: 'Medical and Clinical' },
  { key: 'education', label: 'Education' },
  { key: 'logistics', label: 'Logistics and Trade' },
  { key: 'ecommerce', label: 'E-commerce and Social Media' },
]

export default async function IndustryDataPage() {
  await requireAdmin()

  const counts: Record<string, number> = {}
  await Promise.all(
    industries.map(async ({ key }) => {
      const { count } = await db
        .from('industry_data')
        .select('*', { count: 'exact', head: true })
        .eq('industry', key)
      counts[key] = count ?? 0
    })
  )

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 24, color: '#fafafa' }}>Industry Data</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        {industries.map(({ key, label }) => (
          <Link
            key={key}
            href={`/admin/industry-data/${key}`}
            style={{
              display: 'block',
              padding: '24px 20px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 10,
              textDecoration: 'none',
              color: '#fafafa',
              transition: 'background 0.15s',
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{label}</p>
            <p style={{ fontSize: 24, fontWeight: 700, color: '#fafafa' }}>{counts[key]}</p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>data points</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
