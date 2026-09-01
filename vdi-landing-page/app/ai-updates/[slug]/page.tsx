import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { db } from '@/lib/supabase'
import FinalCta from '@/components/FinalCta'
import { pageMetadata, site } from '@/lib/site'

export const dynamic = 'force-dynamic'

interface AiUpdate {
  id: string
  title: string
  slug: string
  summary: string | null
  content: string
  category: string
  published: boolean
  published_at: string | null
  created_at: string
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data } = await db
    .from('ai_updates')
    .select('title, summary, slug')
    .eq('slug', slug)
    .eq('published', true)
    .single()
  if (!data) return {}
  const u = data as { title: string; summary: string | null; slug: string }
  return pageMetadata({ title: u.title, description: u.summary ?? '', path: `/ai-updates/${u.slug}` })
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  'Model Releases':    { bg: 'rgba(99,102,241,0.15)',  text: '#a5b4fc' },
  'Policy & Regulation': { bg: 'rgba(245,158,11,0.15)', text: '#fbbf24' },
  'Research':          { bg: 'rgba(96,165,250,0.15)', text: '#93c5fd' },
  'Industry Adoption': { bg: 'rgba(139,92,246,0.15)', text: '#c4b5fd' },
  'Tools & Platforms': { bg: 'rgba(16,185,129,0.15)', text: '#6ee7b7' },
  'Data Practices':    { bg: 'rgba(249,115,22,0.15)', text: '#fdba74' },
  'General':           { bg: 'rgba(107,114,128,0.15)', text: '#9ca3af' },
}

export default async function AiUpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data } = await db
    .from('ai_updates')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!data) notFound()

  const update = data as AiUpdate
  const dateStr = update.published_at ?? update.created_at
  const d = new Date(dateStr)
  const published = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const publishedIso = d.toISOString().slice(0, 10)
  const catStyle = CATEGORY_COLORS[update.category] ?? CATEGORY_COLORS['General']
  const contentHtml = update.content ? (marked(update.content) as string) : ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: update.title,
    description: update.summary ?? '',
    datePublished: publishedIso,
    url: new URL(`/ai-updates/${update.slug}`, site.url).toString(),
    publisher: { '@type': 'Organization', name: 'Clarify Data', url: site.url },
  }

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <div className="article-header">
          <Link href="/ai-updates" className="article-back">Back to AI Updates</Link>

          <div className="article-header-meta">
            <span
              className="article-category-badge"
              style={{ background: catStyle.bg, color: catStyle.text }}
            >
              {update.category}
            </span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'currentColor', display: 'inline-block', opacity: 0.4 }} />
            <time dateTime={publishedIso}>{published}</time>
          </div>

          <h1>{update.title}</h1>

          {update.summary && (
            <p className="article-lead">{update.summary}</p>
          )}
        </div>

        <hr className="article-header-divider" />

        <div className="article-column article-body">
          {contentHtml ? (
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          ) : (
            <p style={{ color: 'rgba(250,250,250,0.4)', textAlign: 'center', padding: '40px 0' }}>
              No content yet.
            </p>
          )}
        </div>
      </article>

      <FinalCta title="Apply AI intelligence to your real data decisions." />
    </main>
  )
}
