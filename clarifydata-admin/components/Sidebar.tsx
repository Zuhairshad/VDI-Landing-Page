'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const navLinks = [
  { href: '/', label: 'Dashboard', icon: '▤' },
  { href: '/blogs', label: 'Blogs', icon: '✎' },
  { href: '/ai-updates', label: 'AI Updates', icon: '◈' },
  { href: '/demo-requests', label: 'Demo Requests', icon: '◻' },
  { href: '/industry-data', label: 'Industry Data', icon: '◫' },
  { href: '/verifications', label: 'Verifications', icon: '◉' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <aside style={{
      position: 'fixed', top: 0, left: 0, bottom: 0, width: 240,
      background: '#0f0f0f',
      borderRight: '1px solid rgba(255,255,255,0.07)',
      display: 'flex', flexDirection: 'column',
      zIndex: 50,
    }}>
      {/* Brand */}
      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Clarify Data" style={{ width: 32, height: 32, objectFit: 'contain', borderRadius: 6, flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.01em' }}>Clarify Data</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 1 }}>Admin</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 10px', overflowY: 'auto' }}>
        {navLinks.map(link => {
          const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '8px 10px',
                borderRadius: 7,
                marginBottom: 2,
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? '#fafafa' : 'rgba(255,255,255,0.5)',
                background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                transition: 'all 0.1s',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 14, opacity: isActive ? 1 : 0.6 }}>{link.icon}</span>
              {link.label}
              {link.href === '/demo-requests' && <UnreadBadge />}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '12px 10px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <button
          onClick={handleLogout}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            width: '100%', padding: '8px 10px', borderRadius: 7,
            background: 'transparent', border: 'none',
            fontSize: 13, color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer', textAlign: 'left',
            transition: 'all 0.1s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#f87171'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.08)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent' }}
        >
          <span style={{ fontSize: 14 }}>⎋</span>
          Sign out
        </button>
      </div>
    </aside>
  )
}

function UnreadBadge() {
  return null
}
