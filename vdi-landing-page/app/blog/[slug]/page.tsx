import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import FinalCta from '@/components/FinalCta'
import { db } from '@/lib/supabase'
import { pageMetadata } from '@/lib/site'

export const dynamic = 'force-dynamic'

interface DbBlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  images: string[] | null
  published: boolean
  published_at: string | null
  created_at: string
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { data } = await db
    .from('blog_posts')
    .select('title, excerpt, slug')
    .eq('slug', slug)
    .eq('published', true)
    .single()
  if (!data) return {}
  const post = data as { title: string; excerpt: string | null; slug: string }
  return pageMetadata({ title: post.title, description: post.excerpt ?? '', path: `/blog/${post.slug}` })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data } = await db
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!data) notFound()

  const post = data as DbBlogPost
  const heroImage = post.images?.[0] ?? null
  const restImages = post.images?.slice(1) ?? []
  const dateStr = post.published_at ?? post.created_at
  const d = new Date(dateStr)
  const published = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  const publishedIso = d.toISOString().slice(0, 10)

  const contentHtml = post.content
    ? (marked(post.content) as string)
    : ''

  const contentWithImages = restImages.length > 0
    ? contentHtml + restImages.map(src =>
        `<img src="${src}" alt="" style="width:100%;border-radius:10px;margin:32px 0;display:block;" />`
      ).join('')
    : contentHtml

  return (
    <main id="main-content">
      <article>
        <div className="article-header">
          <Link href="/blog" className="article-back">Back to Journal</Link>

          <div className="article-header-meta">
            <span>Journal</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'currentColor', display: 'inline-block', opacity: 0.4 }} />
            <time dateTime={publishedIso}>{published}</time>
          </div>

          <h1>{post.title}</h1>

          {post.excerpt && (
            <p className="article-lead">{post.excerpt}</p>
          )}
        </div>

        {heroImage && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt={post.title}
              className="article-hero-img"
              style={{ marginTop: 36 }}
            />
          </>
        )}

        <hr className="article-header-divider" />

        <div className="article-column article-body">
          {contentWithImages ? (
            <div dangerouslySetInnerHTML={{ __html: contentWithImages }} />
          ) : (
            <p style={{ color: 'rgba(250,250,250,0.4)', textAlign: 'center', padding: '40px 0' }}>
              No content yet.
            </p>
          )}
        </div>
      </article>

      <FinalCta />
    </main>
  )
}
