'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (res.ok) {
        router.push('/admin')
      } else {
        const data = await res.json() as { error?: string }
        setError(data.error ?? 'Invalid credentials.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: 8,
    color: '#fafafa',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
  }

  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0a0a0a', color: '#fafafa', fontFamily: 'system-ui, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ width: '100%', maxWidth: 360, padding: '0 16px' }}>
          <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 6, color: '#fafafa' }}>Clarify Admin</h1>
          <p style={{ margin: '0 0 28px', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Sign in to your account</p>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 14 }}>
              <label htmlFor="email" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@company.com"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="password" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                style={inputStyle}
              />
            </div>
            {error && (
              <p style={{ fontSize: 13, color: '#f87171', marginBottom: 12 }}>{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '10px 12px',
                background: loading ? 'rgba(255,255,255,0.2)' : '#fafafa',
                color: '#0a0a0a',
                border: 'none',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Signing in…' : 'Sign in'}
            </button>
          </form>
        </div>
      </body>
    </html>
  )
}
