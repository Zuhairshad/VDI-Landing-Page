'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/demo-requests', label: 'Demo Requests' },
  { href: '/admin/blogs', label: 'Blogs' },
  { href: '/admin/industry-data', label: 'Industry Data' },
  { href: '/admin/ai-updates', label: 'AI Updates' },
  { href: '/admin/verifications', label: 'Verifications' },
]

export default function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="flex-1 py-4">
      {navLinks.map((link) => {
        const isActive =
          link.href === '/admin' ? pathname === '/admin' : pathname.startsWith(link.href)
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 mx-2 rounded text-sm transition-colors mb-0.5 ${
              isActive
                ? 'bg-white/15 text-white font-medium'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
