import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { db } from '@/lib/supabase'
import PageHero from '@/components/PageHero'
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

const CATEGORY_COLORS: Record<string, string> = {
  'Model Release': '#3b82f6',
  'Research': '#8b5cf6',
  'Industry News': '#f59e0b',
  'Tool Update': '#22c55e',
  'Regulation': '#ef4444',
  'General': '#6b7280',
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
  const color = CATEGORY_COLORS[update.category] ?? CATEGORY_COLORS['General']
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
        <PageHero
          eyebrow={update.category}
          title={update.title}
          intro={update.summary ?? undefined}
          before={<Link href="/ai-updates" className="article-back">Back to AI Updates</Link>}
          noteLabel="Published"
          note={
            <span className="shader-hero-meta">
              <time dateTime={publishedIso}>{published}</time>
              <span style={{ color, background: color + '18', padding: '2px 10px', borderRadius: 4, fontSize: 12, fontWeight: 700 }}>
                {update.category}
              </span>
            </span>
          }
        />
        <div className="article-column article-body">
          {contentHtml && (
            <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          )}
        </div>
      </article>
      <FinalCta title="Apply AI intelligence to your real data decisions." />
    </main>
  )
}
