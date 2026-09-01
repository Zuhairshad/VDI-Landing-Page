import { requireAdmin } from '@/lib/admin-check'
import AdminNav from '@/components/admin/AdminNav'
import LogoutButton from '@/components/admin/LogoutButton'

export const metadata = {
  title: 'Clarify Admin',
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin()

  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0a0a0a', color: '#fafafa', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <aside
            style={{
              width: 224,
              minWidth: 224,
              background: '#0a0a0a',
              borderRight: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              zIndex: 40,
            }}
          >
            <div className="px-4 py-5 border-b border-white/8">
              <span className="text-sm font-semibold tracking-wide text-white/80">Clarify Admin</span>
            </div>
            <AdminNav />
            <div className="px-2 py-3 border-t border-white/8">
              <LogoutButton />
            </div>
          </aside>
          <main style={{ marginLeft: 224, flex: 1, padding: '32px', minHeight: '100vh' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
