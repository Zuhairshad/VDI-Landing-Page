import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import FinalCta from '@/components/FinalCta'
import PageHero from '@/components/PageHero'
import ArticleRichText from '@/components/ArticleRichText'
import { articles, getArticle } from '@/lib/articles'
import { db } from '@/lib/supabase'
import { pageMetadata, site } from '@/lib/site'

export const dynamic = 'force-dynamic'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

interface DbBlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  about_us: string | null
  images: string[] | null
  post_refs: { label: string; url: string }[] | null
  urls: { label: string; url: string }[] | null
  published: boolean
  published_at: string | null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (article) {
    return pageMetadata({ title: article.title, description: article.summary, path: `/blog/${article.slug}` })
  }
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

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)

  if (article) {
    const canonical = new URL(`/blog/${article.slug}`, site.url).toString()
    const jsonLd = article.exercises || article.faqs
      ? {
          '@context': 'https://schema.org',
          '@graph': [
            ...(article.exercises
              ? [{
                  '@type': 'ItemList',
                  name: article.title,
                  url: canonical,
                  numberOfItems: article.exercises.length,
                  itemListElement: article.exercises.map((exercise) => ({
                    '@type': 'ListItem',
                    position: exercise.number,
                    name: `Exercise ${exercise.number}: ${exercise.title}`,
                    url: `${canonical}#exercise-${exercise.number}`,
                  })),
                }]
              : []),
            ...(article.faqs
              ? [{
                  '@type': 'FAQPage',
                  mainEntity: article.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                  })),
                }]
              : []),
          ],
        }
      : null

    return (
      <main id="main-content">
        {jsonLd && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        )}
        <article>
          <PageHero
            eyebrow={article.category}
            title={article.title}
            intro={article.lede ?? article.summary}
            before={<Link href="/blog" className="article-back">Back to Journal</Link>}
            noteLabel="Article details"
            note={<span className="shader-hero-meta"><time dateTime={article.publishedIso}>{article.published}</time><span>{article.readTime}</span></span>}
          />
          <div className="article-column article-body">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}><ArticleRichText text={paragraph} /></p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}><ArticleRichText text={bullet} /></li>
                    ))}
                  </ul>
                )}
                {section.takeaway && <aside><strong>Practical takeaway</strong>{section.takeaway}</aside>}
              </section>
            ))}

            {article.exercises?.map((exercise) => (
              <section key={exercise.number} id={`exercise-${exercise.number}`}>
                <p className="exercise-skill">{exercise.skill}</p>
                <h2>Exercise {exercise.number}: {exercise.title}</h2>
                {exercise.paragraphs.map((paragraph) => (
                  <p key={paragraph}><ArticleRichText text={paragraph} /></p>
                ))}
                {exercise.bullets && (
                  <ul>
                    {exercise.bullets.map((bullet) => (
                      <li key={bullet}><ArticleRichText text={bullet} /></li>
                    ))}
                  </ul>
                )}
                {(exercise.dataset || exercise.extraDatasets) && (
                  <p className="dataset-links">
                    {exercise.dataset && (
                      <a href={`/practice-datasets/${exercise.dataset.file}`} download>
                        {exercise.dataset.label}
                      </a>
                    )}
                    {exercise.extraDatasets?.map((dataset) => (
                      <a key={dataset.file} href={`/practice-datasets/${dataset.file}`} download>
                        {dataset.label}
                      </a>
                    ))}
                  </p>
                )}
                {exercise.walkthrough && (
                  <aside>
                    <strong>Walkthrough</strong>
                    {exercise.walkthrough.map((paragraph) => (
                      <p key={paragraph}><ArticleRichText text={paragraph} /></p>
                    ))}
                  </aside>
                )}
              </section>
            ))}

            {article.trailingSections?.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}><ArticleRichText text={paragraph} /></p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}><ArticleRichText text={bullet} /></li>
                    ))}
                  </ul>
                )}
                {section.takeaway && <aside><strong>Practical takeaway</strong>{section.takeaway}</aside>}
              </section>
            ))}

            {article.faqs && (
              <section>
                <h2>Frequently asked questions</h2>
                <dl className="article-faq">
                  {article.faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt>{faq.question}</dt>
                      <dd>{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>
        </article>
        <FinalCta title={article.exercises ? 'Run the AI claim exercise on a live brief.' : 'Apply the method to a real evidence problem.'} />
      </main>
    )
  }

  // Fall back to DB post
  const { data } = await db
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (!data) notFound()

  const post = data as DbBlogPost
  const images = post.images ?? []
  const postRefs = post.post_refs ?? []
  const furtherUrls = post.urls ?? []
  const contentHtml = post.content ? (marked(post.content) as string) : ''

  return (
    <main id="main-content">
      <article>
        <PageHero
          eyebrow="Journal"
          title={post.title}
          intro={post.excerpt ?? undefined}
          before={<Link href="/blog" className="article-back">Back to Journal</Link>}
        />

        {images.length > 0 && (
          <section style={{ padding: '40px 32px', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(images.length, 2)}, 1fr)`,
              gap: 12,
            }}>
              {images.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{ width: '100%', borderRadius: 10, display: 'block' }}
                />
              ))}
            </div>
          </section>
        )}

        <div className="article-column article-body">
          {post.about_us && (
            <section>
              <h2>About Clarify Data</h2>
              <p>{post.about_us}</p>
            </section>
          )}

          {contentHtml && (
            <section>
              <h2>Article</h2>
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </section>
          )}

          {postRefs.length > 0 && (
            <section>
              <h2>References</h2>
              <ul>
                {postRefs.map((ref) => (
                  <li key={ref.url}>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">{ref.label || ref.url}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {furtherUrls.length > 0 && (
            <section>
              <h2>Further Reading</h2>
              <ul>
                {furtherUrls.map((u) => (
                  <li key={u.url}>
                    <a href={u.url} target="_blank" rel="noopener noreferrer">{u.label || u.url}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
      <FinalCta />
    </main>
  )
}
