import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ADMIN_COOKIE, verifyAdminSession } from '@/lib/admin-session'

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  return verifyAdminSession(cookieStore.get(ADMIN_COOKIE)?.value)
}

export async function requireAdmin(): Promise<void> {
  if (!(await isAuthenticated())) {
    redirect('/admin/login')
  }
}
