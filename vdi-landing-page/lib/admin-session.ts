// Signed admin session tokens. The cookie holds an expiry and an HMAC of it,
// never the password. Web Crypto only, so it runs in the proxy and in routes.

export const ADMIN_COOKIE = 'admin_token'
export const ADMIN_SESSION_SECONDS = 86400

const encoder = new TextEncoder()

function getSecret(): string | null {
  const password = process.env.ADMIN_PASSWORD
  if (!password || password === 'PLACEHOLDER_SET_YOUR_PASSWORD') return null
  // Changing the password (or the optional extra secret) signs everyone out.
  return `${process.env.ADMIN_SESSION_SECRET ?? ''}:${password}:clarifydata-admin-session`
}

function toBase64Url(bytes: ArrayBuffer): string {
  let binary = ''
  for (const byte of new Uint8Array(bytes)) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function fromBase64Url(value: string): Uint8Array<ArrayBuffer> | null {
  try {
    const binary = atob(value.replace(/-/g, '+').replace(/_/g, '/'))
    const bytes = new Uint8Array(binary.length)
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
    return bytes
  } catch {
    return null
  }
}

async function getKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  )
}

export async function createAdminSession(): Promise<string | null> {
  const secret = getSecret()
  if (!secret) return null
  const payload = `v1.${Date.now() + ADMIN_SESSION_SECONDS * 1000}`
  const signature = await crypto.subtle.sign('HMAC', await getKey(secret), encoder.encode(payload))
  return `${payload}.${toBase64Url(signature)}`
}

export async function verifyAdminSession(token: string | undefined): Promise<boolean> {
  const secret = getSecret()
  if (!secret || !token) return false

  const parts = token.split('.')
  if (parts.length !== 3 || parts[0] !== 'v1') return false

  const expiresAt = Number(parts[1])
  if (!Number.isFinite(expiresAt) || expiresAt < Date.now()) return false

  const signature = fromBase64Url(parts[2])
  if (!signature) return false

  // subtle.verify compares in constant time.
  return crypto.subtle.verify(
    'HMAC',
    await getKey(secret),
    signature,
    encoder.encode(`${parts[0]}.${parts[1]}`)
  )
}
