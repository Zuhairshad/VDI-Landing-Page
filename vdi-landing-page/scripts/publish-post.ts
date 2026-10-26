/**
 * Insert ONE new blog post or AI update into Supabase, the same way the admin panel does
 * (app/api/admin/blogs and app/api/admin/ai-updates). Insert only: it never updates,
 * upserts, or deletes, and it refuses to run if the slug already exists.
 *
 *   node scripts/publish-post.ts <post.json> [--publish] [--dry-run]
 *   node scripts/publish-post.ts --list [blog|ai-update]
 *   node scripts/publish-post.ts --setup-check
 *
 * Env vars (no .env file is read; pass them in, e.g. `node --env-file=.env.local ...`):
 *   NEXT_PUBLIC_SUPABASE_URL    Supabase project URL
 *   SUPABASE_SERVICE_ROLE_KEY   service role key (the admin API writes with this key)
 *
 * Exit codes: 0 ok, 1 invalid input / config / database error, 2 slug already exists.
 * Writing rules live in docs/CONTENT_RULES.md.
 */
import { readFileSync } from 'node:fs'
import { createClient } from '@supabase/supabase-js'

type PostType = 'blog' | 'ai-update'

interface Source {
  label: string
  url: string
}

interface PostInput {
  type: PostType
  title: string
  slug: string
  excerpt: string
  content: string
  metaTitle: string
  metaDescription: string
  tags: string[]
  sources: Source[]
  category: string
  images: string[]
  primaryKeyword: string
}

const TABLES: Record<PostType, { table: string; excerptColumn: string; path: string }> = {
  blog: { table: 'blog_posts', excerptColumn: 'excerpt', path: '/blog' },
  'ai-update': { table: 'ai_updates', excerptColumn: 'summary', path: '/ai-updates' },
}

// Kept in sync with components/admin/BlogEditor.tsx (every blog row stores this text).
const ABOUT_US =
  'Clarify Data helps teams prepare information, verify consequential claims, and turn evidence into reviewable business intelligence.'

// Kept in sync with components/admin/AiUpdateEditor.tsx.
const AI_UPDATE_CATEGORIES = ['General', 'Model Release', 'Research', 'Industry News', 'Tool Update', 'Regulation']

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const MAX_IMAGES = 4
const EXCERPT_MAX = 160
const META_DESCRIPTION_RANGE = [140, 160] as const
const INTERNAL_LINKS_RANGE = [2, 3] as const

const BANNED_WORDS =
  /\b(delv\w*|landscape\w*|leverag\w*|robust\w*|seamless\w*|unlock\w*|game[- ]changer\w*|tapestry|elevat\w*)\b/i
// Em dash, en dash, figure dash, horizontal bar, minus sign, and the rarer long dashes.
const DASH_CHARACTERS = /[\u2012-\u2015\u2212\u2E3A\u2E3B\uFE58]/
// ASCII stand-ins for a dash: a hyphen with spaces around it, or a double hyphen. Hyphens inside words are fine.
const DASH_STAND_INS = /\S[ \t]-[ \t]\S|(?<!-)--(?!-)/
const BANNED_PHRASES = [/in today['’]s fast-paced world/i, /\bin conclusion\b/i]

class UserError extends Error {}

function fail(message: string, code = 1): never {
  console.error(`error: ${message}`)
  process.exit(code)
}

function describe(error: { message?: string; code?: string }) {
  return error.message || error.code || 'unknown error'
}

function isType(value: unknown): value is PostType {
  return value === 'blog' || value === 'ai-update'
}

/** Role named by a Supabase key: legacy JWT keys carry a role claim, new keys use a prefix. Undefined if unknown. */
function keyRole(key: string): string | undefined {
  if (key.startsWith('sb_publishable_')) return 'anon'
  if (key.startsWith('sb_secret_')) return 'service_role'
  try {
    const payload = JSON.parse(Buffer.from(key.split('.')[1] ?? '', 'base64url').toString('utf8'))
    return typeof payload.role === 'string' ? payload.role : undefined
  } catch {
    return undefined
  }
}

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  const missing = [
    !url || url.includes('placeholder') ? 'NEXT_PUBLIC_SUPABASE_URL' : '',
    !key || key.startsWith('PLACEHOLDER') ? 'SUPABASE_SERVICE_ROLE_KEY' : '',
  ].filter(Boolean)
  if (missing.length > 0 || !url || !key) {
    throw new UserError(`missing or placeholder env var(s): ${missing.join(', ')}`)
  }
  const role = keyRole(key)
  if (role === 'anon' || role === 'authenticated') {
    throw new UserError(`SUPABASE_SERVICE_ROLE_KEY holds a "${role}" key. Use the service_role (secret) key from Project Settings, API`)
  }
  console.error(`target: ${new URL(url).host}`)
  return createClient(url, key, { auth: { persistSession: false } })
}

function text(raw: Record<string, unknown>, key: string, errors: string[], required = true): string {
  const value = raw[key]
  if (value === undefined || value === null || value === '') {
    if (required) errors.push(`"${key}" is required`)
    return ''
  }
  if (typeof value !== 'string') {
    errors.push(`"${key}" must be a string`)
    return ''
  }
  return value.trim()
}

function links(raw: Record<string, unknown>, key: string, errors: string[], required: boolean): Source[] {
  const value = raw[key]
  if (value === undefined || value === null) {
    if (required) errors.push(`"${key}" is required for this type`)
    return []
  }
  if (!Array.isArray(value) || (required && value.length === 0)) {
    errors.push(`"${key}" must be ${required ? 'a non-empty ' : 'an '}array of {label, url}`)
    return []
  }
  return value.flatMap((item, i): Source[] => {
    const label = typeof item?.label === 'string' ? item.label.trim() : ''
    const url = typeof item?.url === 'string' ? item.url.trim() : ''
    if (!label || !/^https?:\/\/\S+$/.test(url)) {
      errors.push(`"${key}[${i}]" needs a label and an http(s) url`)
      return []
    }
    return [{ label, url }]
  })
}

function stringList(raw: Record<string, unknown>, key: string, errors: string[], required: boolean): string[] {
  const value = raw[key]
  if (value === undefined || value === null) {
    if (required) errors.push(`"${key}" is required`)
    return []
  }
  if (!Array.isArray(value) || value.some((v) => typeof v !== 'string' || !v.trim()) || (required && value.length === 0)) {
    errors.push(`"${key}" must be ${required ? 'a non-empty ' : 'an '}array of non-empty strings`)
    return []
  }
  return value.map((v: string) => v.trim())
}

function parseInput(file: string): PostInput {
  let raw: unknown
  try {
    raw = JSON.parse(readFileSync(file, 'utf8'))
  } catch (err) {
    throw new UserError(`cannot read ${file}: ${err instanceof Error ? err.message : String(err)}`)
  }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new UserError('input must be a JSON object')

  const r = raw as Record<string, unknown>
  const errors: string[] = []
  if (!isType(r.type)) throw new UserError('"type" must be "blog" or "ai-update"')
  const type = r.type

  const post: PostInput = {
    type,
    title: text(r, 'title', errors),
    slug: text(r, 'slug', errors),
    excerpt: text(r, 'excerpt', errors),
    content: text(r, 'content', errors),
    metaTitle: text(r, 'metaTitle', errors),
    metaDescription: text(r, 'metaDescription', errors),
    tags: stringList(r, 'tags', errors, true),
    sources: links(r, 'sources', errors, type === 'ai-update'),
    category: text(r, 'category', errors, false) || 'General',
    images: stringList(r, 'images', errors, false),
    primaryKeyword: text(r, 'primaryKeyword', errors, false),
  }

  if (post.slug && !SLUG_PATTERN.test(post.slug)) errors.push('"slug" must be lowercase letters, digits and single hyphens')
  if (post.excerpt.length > EXCERPT_MAX) errors.push(`"excerpt" is ${post.excerpt.length} chars, max ${EXCERPT_MAX}`)
  if (type === 'ai-update' && !AI_UPDATE_CATEGORIES.includes(post.category)) {
    errors.push(`"category" must be one of: ${AI_UPDATE_CATEGORIES.join(', ')}`)
  }
  if (type === 'ai-update' && post.images.length > 0) errors.push('"images" is only supported for blog posts')
  if (post.images.length > MAX_IMAGES) errors.push(`"images" allows at most ${MAX_IMAGES} URLs`)
  if (post.images.some((url) => !/^https:\/\/\S+$/.test(url))) errors.push('"images" must be https URLs (upload via the admin panel first)')

  errors.push(...checkContentRules(post))
  if (errors.length > 0) throw new UserError(`invalid input:\n  - ${errors.join('\n  - ')}`)
  return post
}

function findDash(value: string): string | undefined {
  const withoutCode = value.replace(/```[\s\S]*?```|`[^`]*`/g, '')
  return value.match(DASH_CHARACTERS)?.[0] ?? withoutCode.match(DASH_STAND_INS)?.[0]
}

/** Mechanical checks from docs/CONTENT_RULES.md. Judgement calls (tone, sentence length) stay with the writer. */
function checkContentRules(post: PostInput): string[] {
  const errors: string[] = []
  const fields: [string, string][] = [
    ['title', post.title],
    ['excerpt', post.excerpt],
    ['content', post.content],
    ['metaTitle', post.metaTitle],
    ['metaDescription', post.metaDescription],
    ...post.sources.map((s, i): [string, string] => [`sources[${i}].label`, s.label]),
  ]

  for (const [name, value] of fields) {
    const dash = findDash(value)
    if (dash) errors.push(`"${name}" contains a dash: ${JSON.stringify(dash)}. Use a comma, a period, or "and"`)
    const banned = value.match(BANNED_WORDS)?.[0] ?? BANNED_PHRASES.map((p) => value.match(p)?.[0]).find(Boolean)
    if (banned) errors.push(`"${name}" contains banned wording: "${banned}"`)
    if (/\p{Extended_Pictographic}/u.test(value)) errors.push(`"${name}" contains an emoji`)
  }

  const descLength = post.metaDescription.length
  if (descLength && (descLength < META_DESCRIPTION_RANGE[0] || descLength > META_DESCRIPTION_RANGE[1])) {
    errors.push(`"metaDescription" is ${descLength} chars, must be ${META_DESCRIPTION_RANGE[0]} to ${META_DESCRIPTION_RANGE[1]}`)
  }

  // The page template renders the title as the H1, so the body starts at H2.
  if (/^# /m.test(post.content)) errors.push('"content" must not contain an H1 (the title is rendered as the H1)')
  if (!/^## /m.test(post.content)) errors.push('"content" needs at least one H2 heading')
  if (post.type === 'ai-update' && /^#{2,3}\s*sources\b/im.test(post.content)) {
    errors.push('"content" must not have its own Sources heading (the script appends it from "sources")')
  }

  const internalLinks = post.content.match(/\]\(\/[^)\s]*\)/g)?.length ?? 0
  if (internalLinks < INTERNAL_LINKS_RANGE[0] || internalLinks > INTERNAL_LINKS_RANGE[1]) {
    errors.push(`"content" has ${internalLinks} internal links, needs ${INTERNAL_LINKS_RANGE[0]} to ${INTERNAL_LINKS_RANGE[1]} (markdown links starting with "/")`)
  }

  if (post.primaryKeyword) {
    const keyword = post.primaryKeyword.toLowerCase()
    const firstWords = post.content.replace(/[#*_`>\[\]()]/g, ' ').split(/\s+/).filter(Boolean).slice(0, 100).join(' ')
    if (!post.title.toLowerCase().includes(keyword)) errors.push('primaryKeyword is missing from the title')
    if (!firstWords.toLowerCase().includes(keyword)) errors.push('primaryKeyword is missing from the first 100 words')
    if (!post.metaDescription.toLowerCase().includes(keyword)) errors.push('primaryKeyword is missing from the metaDescription')
  }
  return errors
}

/** Same row shape the admin API routes insert. */
function buildRow(post: PostInput, publish: boolean): Record<string, unknown> {
  const publishedAt = publish ? new Date().toISOString() : null
  if (post.type === 'blog') {
    return {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      about_us: ABOUT_US,
      images: post.images,
      post_refs: post.sources,
      urls: [],
      published: publish,
      published_at: publishedAt,
    }
  }
  const sources = post.sources.map((s) => `- [${s.label}](${s.url})`).join('\n')
  return {
    title: post.title,
    slug: post.slug,
    summary: post.excerpt,
    content: `${post.content}\n\n## Sources\n\n${sources}\n`,
    category: post.category,
    published: publish,
    published_at: publishedAt,
  }
}

async function listPosts(types: PostType[]) {
  const db = getClient()
  for (const type of types) {
    const { table } = TABLES[type]
    const pageSize = 1000
    for (let from = 0; ; from += pageSize) {
      const { data, error } = await db
        .from(table)
        .select('title, slug, published')
        .order('created_at', { ascending: false })
        .range(from, from + pageSize - 1)
      if (error) throw new UserError(`could not list ${table}: ${describe(error)}`)
      for (const row of data ?? []) {
        console.log([type, row.published ? 'published' : 'draft', row.slug, row.title].join('\t'))
      }
      if ((data?.length ?? 0) < pageSize) break
    }
  }
}

/** Read-only: confirms the env vars work and both tables are reachable, so a routine fails before it writes anything. */
async function setupCheck() {
  const db = getClient()
  for (const { table } of Object.values(TABLES)) {
    const { error } = await db.from(table).select('id', { count: 'exact', head: true })
    if (error) throw new UserError(`cannot read ${table}: ${describe(error)}`)
  }
  console.log('ok: connected, blog_posts and ai_updates are readable')
}

async function publish(file: string, publishNow: boolean, dryRun: boolean) {
  const post = parseInput(file)
  const { table, path } = TABLES[post.type]
  const db = getClient()

  const { data: existing, error: lookupError } = await db.from(table).select('id').eq('slug', post.slug).limit(1)
  if (lookupError) throw new UserError(`slug lookup failed: ${describe(lookupError)}`)
  if (existing && existing.length > 0) fail(`slug "${post.slug}" already exists in ${table}. Nothing was written.`, 2)

  console.error(`note: metaTitle, metaDescription and tags are validated but not stored (no columns in ${table}). The page meta description comes from "${TABLES[post.type].excerptColumn}".`)

  if (dryRun) {
    console.log(JSON.stringify({ dryRun: true, table, path: `${path}/${post.slug}`, published: publishNow }))
    return
  }

  const { data, error } = await db
    .from(table)
    .insert(buildRow(post, publishNow))
    .select('id, slug, published, published_at, created_at')
    .single()
  // 23505 is a unique violation: another writer took the slug between the check and the insert.
  if (error?.code === '23505') fail(`slug "${post.slug}" already exists in ${table}. Nothing was written.`, 2)
  if (error || !data) throw new UserError(`insert failed: ${error ? describe(error) : 'no row returned'}`)

  console.log(JSON.stringify({ table, ...data, path: `${path}/${data.slug}` }))
  if (!data.published) console.error('saved as a draft. Publish it from the admin panel, or pass --publish when creating.')
}

async function main() {
  const args = process.argv.slice(2)
  const flags = new Set(args.filter((a) => a.startsWith('--')))
  const positional = args.filter((a) => !a.startsWith('--'))
  const unknown = [...flags].filter((f) => !['--list', '--publish', '--dry-run', '--setup-check', '--help'].includes(f))
  if (unknown.length > 0) throw new UserError(`unknown flag(s): ${unknown.join(', ')}`)

  if (flags.has('--help') || args.length === 0) {
    console.log('usage:\n  node scripts/publish-post.ts <post.json> [--publish] [--dry-run]\n  node scripts/publish-post.ts --list [blog|ai-update]\n  node scripts/publish-post.ts --setup-check')
    return
  }

  if (flags.has('--setup-check')) {
    await setupCheck()
    return
  }

  if (flags.has('--list')) {
    const [type, ...rest] = positional
    if (rest.length > 0 || (type !== undefined && !isType(type))) throw new UserError('--list takes an optional type: blog or ai-update')
    await listPosts(type === undefined ? ['blog', 'ai-update'] : [type as PostType])
    return
  }

  if (positional.length !== 1) throw new UserError('expected exactly one JSON file')
  await publish(positional[0], flags.has('--publish'), flags.has('--dry-run'))
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)))
