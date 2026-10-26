import { NextResponse } from 'next/server'
import { isRateLimited, recordHit } from '@/lib/rate-limit'

const failedLoginLimit = { scope: 'admin-login', limit: 10, windowMs: 15 * 60 * 1000 }

export async function POST(request: Request) {
  const blocked = isRateLimited(request, failedLoginLimit)
  if (blocked) return blocked

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const values = body as Record<string, unknown>
  const email = typeof values.email === 'string' ? values.email.trim().toLowerCase() : ''
  const password = typeof values.password === 'string' ? values.password : ''
  const adminPassword = process.env.ADMIN_PASSWORD
  const adminEmail = process.env.ADMIN_EMAIL ?? ''

  if (!adminPassword || !password || password !== adminPassword || (adminEmail && email !== adminEmail)) {
    recordHit(request, failedLoginLimit)
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
  }

  const token = btoa(password + ':clarifydata-admin')

  const response = NextResponse.json({ success: true })
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 86400,
    path: '/',
  })

  return response
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.set('admin_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
  return response
}
