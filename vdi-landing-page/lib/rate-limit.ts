/**
 * Best-effort, in-memory rate limiting per client IP.
 *
 * State lives in the memory of one server instance. On Vercel each warm serverless instance
 * counts separately and a cold start resets the count, so this slows down abuse but is not a hard
 * cap. For a hard cap, add a Vercel Firewall rate limit rule or a shared store such as Upstash.
 */

export interface RateLimit {
  /** Names the bucket, so each route counts on its own. */
  scope: string
  limit: number
  windowMs: number
}

interface Bucket {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()
const SWEEP_ABOVE = 1000

function clientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
  return forwarded || request.headers.get('x-real-ip')?.trim() || 'unknown'
}

function bucketKey(request: Request, { scope }: RateLimit) {
  return `${scope}:${clientIp(request)}`
}

function activeBucket(key: string, now: number) {
  const bucket = buckets.get(key)
  return bucket && bucket.resetAt > now ? bucket : undefined
}

function tooManyRequests(resetAt: number, now: number) {
  const retryAfter = Math.max(1, Math.ceil((resetAt - now) / 1000))
  return Response.json(
    { error: 'Too many requests. Please wait a while and try again.' },
    { status: 429, headers: { 'Retry-After': String(retryAfter) } },
  )
}

function sweep(now: number) {
  if (buckets.size <= SWEEP_ABOVE) return
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key)
  }
}

function hit(request: Request, config: RateLimit, now: number) {
  const key = bucketKey(request, config)
  const bucket = activeBucket(key, now) ?? { count: 0, resetAt: now + config.windowMs }
  bucket.count += 1
  buckets.set(key, bucket)
  sweep(now)
  return bucket
}

/** Counts this request. Returns a 429 response once the client is over the limit, otherwise null. */
export function rateLimit(request: Request, config: RateLimit, now = Date.now()): Response | null {
  const bucket = hit(request, config, now)
  return bucket.count > config.limit ? tooManyRequests(bucket.resetAt, now) : null
}

/** Checks the limit without counting. Pair with recordHit to count only some outcomes, such as failed logins. */
export function isRateLimited(request: Request, config: RateLimit, now = Date.now()): Response | null {
  const bucket = activeBucket(bucketKey(request, config), now)
  return bucket && bucket.count >= config.limit ? tooManyRequests(bucket.resetAt, now) : null
}

export function recordHit(request: Request, config: RateLimit, now = Date.now()) {
  hit(request, config, now)
}
