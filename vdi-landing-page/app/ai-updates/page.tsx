import Link from 'next/link'
import { db } from '@/lib/supabase'
import PageHero from '@/components/PageHero'
import FinalCta from '@/components/FinalCta'
import { pageMetadata } from '@/lib/site'

export const dynamic = 'force-dynamic'

export const metadata = pageMetadata({
  title: 'AI Data Updates',
  description: 'Daily updates on AI models, research, and industry developments relevant to data verification and business intelligence.',
  path: '/ai-updates',
})

const CATEGORY_COLORS: Record<string, string> = {
  'Model Release': '#3b82f6',
  'Research': '#8b5cf6',
  'Industry News': '#f59e0b',
  'Tool Update': '#22c55e',
  'Regulation': '#ef4444',
  'General': '#6b7280',
}

export default async function AiUpdatesPage() {
  const { data } = await db
    .from('ai_updates')
    .select('id, title, slug, summary, category, published_at, created_at')
    .eq('published', true)
    .order('published_at', { ascending: false })

  const updates = (data ?? []) as {
    id: string
    title: string
    slug: string
    summary: string | null
    category: string
    published_at: string | null
    created_at: string
  }[]

  return (
    <main id="main-content">
      <PageHero
        eyebrow="AI Intelligence"
        title="AI Data Updates"
        intro="Daily updates on AI models, research breakthroughs, and industry developments that matter for data verification and business intelligence."
        noteLabel="Cadence"
        note="Updated daily by the Clarify Data team."
      />

      <section className="content-section">
        <div className="section-inner">
          {updates.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '64px 0', fontSize: 15 }}>
              No updates published yet. Check back soon.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {updates.map((update) => {
                const dateStr = update.published_at ?? update.created_at
                const d = new Date(dateStr)
                const published = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                const publishedIso = d.toISOString().slice(0, 10)
                const color = CATEGORY_COLORS[update.category] ?? CATEGORY_COLORS['General']

                return (
                  <article key={update.id} style={{
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    padding: '28px 0',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color,
                        background: color + '18',
                        padding: '3px 10px',
                        borderRadius: 4,
                      }}>
                        {update.category}
                      </span>
                      <time dateTime={publishedIso} style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                        {published}
                      </time>
                    </div>
                    <h2 style={{ fontSize: 'clamp(17px, 2vw, 21px)', fontWeight: 600, margin: '0 0 10px', lineHeight: 1.35 }}>
                      <Link href={`/ai-updates/${update.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {update.title}
                      </Link>
                    </h2>
                    {update.summary && (
                      <p style={{ margin: '0 0 14px', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                        {update.summary}
                      </p>
                    )}
                    <Link href={`/ai-updates/${update.slug}`} style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                    }}>
                      Read update →
                    </Link>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </main>
  )
}
