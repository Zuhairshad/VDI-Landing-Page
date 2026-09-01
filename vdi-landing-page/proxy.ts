import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword || adminPassword === 'PLACEHOLDER_SET_YOUR_PASSWORD') {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  const expectedToken = btoa(adminPassword + ':clarifydata-admin')
  const cookieToken = request.cookies.get('admin_token')?.value

  if (!cookieToken || cookieToken !== expectedToken) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
