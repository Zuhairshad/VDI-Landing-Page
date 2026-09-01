import { requireAdmin } from '@/lib/admin-check'
import { db } from '@/lib/supabase'

interface DemoRequest {
  id: string
  email: string
  company: string
  industry: string
  description: string
  read: boolean
  created_at: string
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function AdminDashboardPage() {
  await requireAdmin()

  const [demoResult, blogResult, recentResult] = await Promise.all([
    db.from('demo_requests').select('id, read'),
    db.from('blog_posts').select('id, published'),
    db.from('demo_requests').select('*').order('created_at', { ascending: false }).limit(5),
  ])

  const demoRequests = (demoResult.data ?? []) as { id: string; read: boolean }[]
  const blogPosts = (blogResult.data ?? []) as { id: string; published: boolean }[]
  const recentRequests = (recentResult.data ?? []) as DemoRequest[]

  const totalDemo = demoRequests.length
  const unreadDemo = demoRequests.filter((r) => !r.read).length
  const totalBlogs = blogPosts.length
  const publishedBlogs = blogPosts.filter((b) => b.published).length

  const stats = [
    { label: 'Total Demo Requests', value: totalDemo },
    { label: 'Unread Requests', value: unreadDemo },
    { label: 'Published Posts', value: publishedBlogs },
    { label: 'Total Blog Posts', value: totalBlogs },
  ]

  return (
    <div>
      <h1 style={{ fontSize: 22, fontWeight: 600, marginBottom: 24, color: '#fafafa' }}>Dashboard</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 40 }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 10,
              padding: '20px 20px',
            }}
          >
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>{stat.label}</p>
            <p style={{ fontSize: 28, fontWeight: 700, color: '#fafafa' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: 14, color: 'rgba(255,255,255,0.8)' }}>Recent Demo Requests</h2>
      <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              {['Date', 'Company', 'Email', 'Industry', 'Status'].map((h) => (
                <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentRequests.length === 0 && (
              <tr>
                <td colSpan={5} style={{ padding: '20px 16px', color: 'rgba(255,255,255,0.35)', textAlign: 'center' }}>No requests yet.</td>
              </tr>
            )}
            {recentRequests.map((req) => (
              <tr key={req.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.6)' }}>{formatDate(req.created_at)}</td>
                <td style={{ padding: '10px 16px', color: '#fafafa' }}>{req.company}</td>
                <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.7)' }}>{req.email}</td>
                <td style={{ padding: '10px 16px', color: 'rgba(255,255,255,0.6)' }}>{req.industry}</td>
                <td style={{ padding: '10px 16px' }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: 4,
                    background: req.read ? 'rgba(255,255,255,0.08)' : 'rgba(251, 191, 36, 0.15)',
                    color: req.read ? 'rgba(255,255,255,0.4)' : 'rgb(251, 191, 36)',
                  }}>
                    {req.read ? 'Read' : 'Unread'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
