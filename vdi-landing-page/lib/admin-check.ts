import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword || adminPassword === 'PLACEHOLDER_SET_YOUR_PASSWORD') return false
  return token === btoa(adminPassword + ':clarifydata-admin')
}

export async function requireAdmin(): Promise<void> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin_token')?.value
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword || adminPassword === 'PLACEHOLDER_SET_YOUR_PASSWORD') {
    redirect('/admin/login')
  }

  const expectedToken = btoa(adminPassword + ':clarifydata-admin')

  if (!token || token !== expectedToken) {
    redirect('/admin/login')
  }
}
