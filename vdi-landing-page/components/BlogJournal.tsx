import Link from 'next/link'
import { db } from '@/lib/supabase'

interface DbPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  published_at: string | null
  created_at: string
}

export default async function BlogJournal() {
  const { data } = await db
    .from('blog_posts')
    .select('id, title, slug, excerpt, published_at, created_at')
    .eq('published', true)
    .order('published_at', { ascending: false })

  const posts: DbPost[] = (data ?? []) as DbPost[]

  return (
    <section className="content-section journal-list" aria-labelledby="journal-heading">
      <div className="section-inner">
        <header className="section-heading">
          <p className="eyebrow">Information quality journal</p>
          <h2 id="journal-heading">Methods teams can use in real review work</h2>
          <p>Practical guidance on evidence, provenance, human oversight, and repeatable research.</p>
        </header>
        {posts.length === 0 ? (
          <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '48px 0' }}>
            No articles published yet.
          </p>
        ) : (
          <div className="journal-grid">
            {posts.map((post) => {
              const dateStr = post.published_at ?? post.created_at
              const d = new Date(dateStr)
              const published = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
              const publishedIso = d.toISOString().slice(0, 10)
              return (
                <article key={post.slug}>
                  <div className="journal-meta">
                    <span>Journal</span>
                    <time dateTime={publishedIso}>{published}</time>
                  </div>
                  <h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                  <p>{post.excerpt ?? ''}</p>
                  <div className="journal-card-footer">
                    <Link href={`/blog/${post.slug}`}>Read article</Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
