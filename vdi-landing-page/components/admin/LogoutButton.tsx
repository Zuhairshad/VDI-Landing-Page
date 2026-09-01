'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full text-left px-3 py-2 rounded text-sm text-white/50 hover:text-white hover:bg-white/10 transition-colors"
    >
      Sign out
    </button>
  )
}
