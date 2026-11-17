import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/server'

export const metadata: Metadata = { title: 'Dashboard' }

async function getStats() {
  const db = createAdminClient()
  const [blogs, aiUpdates, demoRequests, industryData, verifications] = await Promise.all([
    db.from('blog_posts').select('id, published', { count: 'exact' }),
    db.from('ai_updates').select('id, published', { count: 'exact' }),
    db.from('demo_requests').select('id, read', { count: 'exact' }),
    db.from('industry_data').select('id', { count: 'exact' }),
    db.from('verification_jobs').select('id, status', { count: 'exact' }),
  ])

  const blogData = blogs.data ?? []
  const aiData = aiUpdates.data ?? []
  const demoData = demoRequests.data ?? []
  const verifyData = verifications.data ?? []

  return {
    blogs: { total: blogData.length, published: blogData.filter(b => b.published).length },
    aiUpdates: { total: aiData.length, published: aiData.filter(a => a.published).length },
    demoRequests: { total: demoData.length, unread: demoData.filter(d => !d.read).length },
    industryData: industryData.data?.length ?? 0,
    verifications: { total: verifyData.length, completed: verifyData.filter(v => v.status === 'completed').length },
  }
}

async function getRecentDemoRequests() {
  const db = createAdminClient()
  const { data } = await db
    .from('demo_requests')
    .select('id, email, company, industry, read, created_at')
    .order('created_at', { ascending: false })
    .limit(5)
  return data ?? []
}

function StatCard({ label, value, sub, color }: { label: string; value: number; sub?: string; color?: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12,
      padding: '20px 24px',
    }}>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{label}</p>
      <p style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: color ?? '#fafafa' }}>{value}</p>
      {sub && <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{sub}</p>}
    </div>
  )
}

export default async function DashboardPage() {
  const [stats, recent] = await Promise.all([getStats(), getRecentDemoRequests()])

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 4 }}>Dashboard</h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Overview of your Clarify Data platform</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 14, marginBottom: 36 }}>
        <StatCard label="Blog Posts" value={stats.blogs.total} sub={`${stats.blogs.published} published`} />
        <StatCard label="AI Updates" value={stats.aiUpdates.total} sub={`${stats.aiUpdates.published} published`} />
        <StatCard
          label="Demo Requests"
          value={stats.demoRequests.total}
          sub={stats.demoRequests.unread > 0 ? `${stats.demoRequests.unread} unread` : 'All read'}
          color={stats.demoRequests.unread > 0 ? '#f59e0b' : undefined}
        />
        <StatCard label="Industry Data" value={stats.industryData} sub="benchmark rows" />
        <StatCard label="Verifications" value={stats.verifications.total} sub={`${stats.verifications.completed} completed`} />
      </div>

      {recent.length > 0 && (
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
            <h2 style={{ fontSize: 15, fontWeight: 600 }}>Recent Demo Requests</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Company</th><th>Email</th><th>Industry</th><th>Status</th><th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recent.map(r => (
                <tr key={r.id}>
                  <td style={{ fontWeight: 500 }}>{r.company}</td>
                  <td style={{ color: 'rgba(255,255,255,0.5)' }}>{r.email}</td>
                  <td style={{ color: 'rgba(255,255,255,0.5)' }}>{r.industry}</td>
                  <td>
                    <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.06em', background: r.read ? 'rgba(255,255,255,0.06)' : 'rgba(245,158,11,0.15)', color: r.read ? 'rgba(255,255,255,0.35)' : '#f59e0b' }}>
                      {r.read ? 'Read' : 'New'}
                    </span>
                  </td>
                  <td style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>
                    {new Date(r.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
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
