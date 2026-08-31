import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FinalCta from '@/components/FinalCta'
import PageHero from '@/components/PageHero'
import ArticleRichText from '@/components/ArticleRichText'
import { articles, getArticle } from '@/lib/articles'
import { pageMetadata, site } from '@/lib/site'

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return pageMetadata({ title: article.title, description: article.summary, path: `/blog/${article.slug}` })
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

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
          before={<Link href="/blog" className="article-back">← Journal</Link>}
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
