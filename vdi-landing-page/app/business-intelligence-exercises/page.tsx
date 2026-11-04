import PageHero from '@/components/PageHero'
import VideoEmbed from '@/components/VideoEmbed'
import ArticleRichText from '@/components/ArticleRichText'
import FinalCta from '@/components/FinalCta'
import FaqAccordion from '@/components/FaqAccordion'
import { biExercisesArticle } from '@/lib/bi-exercises-article'
import type { ArticleDataset, ArticleSection } from '@/lib/articles'
import { pageMetadata, site } from '@/lib/site'

const PATH = '/business-intelligence-exercises'

export const metadata = pageMetadata({
  title: biExercisesArticle.metaTitle ?? biExercisesArticle.title,
  description: biExercisesArticle.metaDescription ?? biExercisesArticle.summary,
  path: PATH,
})

function DatasetLinks({ datasets }: { datasets: ArticleDataset[] }) {
  return (
    <p className="dataset-links">
      {datasets.map((dataset) => (
        <a key={dataset.file} href={`/practice-datasets/${dataset.file}`} download>
          {dataset.label}
        </a>
      ))}
    </p>
  )
}

function ProseSection({ section }: { section: ArticleSection }) {
  return (
    <section>
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
      {section.datasets && <DatasetLinks datasets={section.datasets} />}
      {section.takeaway && <aside><strong>Practical takeaway</strong>{section.takeaway}</aside>}
    </section>
  )
}

export default function BiExercisesPage() {
  const article = biExercisesArticle
  const exercises = article.exercises!
  const canonical = new URL(PATH, site.url).toString()
  const datasets = article.sections.flatMap((section) => section.datasets ?? [])
  const [introSection, ...prepSections] = article.sections

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonical}#article`,
        headline: article.title,
        description: article.metaDescription ?? article.summary,
        url: canonical,
        mainEntityOfPage: canonical,
        datePublished: article.publishedIso,
        dateModified: article.updatedIso ?? article.publishedIso,
        inLanguage: 'en',
        about: ['Business intelligence', 'Data analysis', 'Data quality'],
        author: { '@type': 'Organization', name: site.name, url: site.url },
        publisher: { '@type': 'Organization', name: site.name, url: site.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Business Intelligence Exercises', item: canonical },
        ],
      },
      {
        '@type': 'ItemList',
        name: article.title,
        url: canonical,
        numberOfItems: exercises.length,
        itemListElement: exercises.map((exercise) => ({
          '@type': 'ListItem',
          position: exercise.number,
          name: `Exercise ${exercise.number}: ${exercise.title}`,
          url: `${canonical}#exercise-${exercise.number}`,
        })),
      },
      ...datasets.map((dataset) => ({
        '@type': 'Dataset',
        name: dataset.file,
        description: `Free practice dataset for the business intelligence exercises on ${site.name}. ${article.sections
          .flatMap((section) => section.bullets ?? [])
          .find((bullet) => bullet.startsWith(dataset.file))
          ?.slice(dataset.file.length + 2) ?? ''}`.trim(),
        url: canonical,
        isAccessibleForFree: true,
        creator: { '@type': 'Organization', name: site.name, url: site.url },
        distribution: {
          '@type': 'DataDownload',
          encodingFormat: 'text/csv',
          contentUrl: new URL(`/practice-datasets/${dataset.file}`, site.url).toString(),
        },
      })),
      {
        '@type': 'FAQPage',
        mainEntity: article.faqs!.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  }

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <PageHero
          bgImage="/hero-bg-bi-exercises.webp"
          eyebrow="Practice"
          title={article.title}
          intro={article.lede ?? article.summary}
          noteLabel="Article details"
          note={
            <span className="shader-hero-meta">
              {article.updatedIso ? (
                <time dateTime={article.updatedIso}>Updated {article.updated}</time>
              ) : (
                <time dateTime={article.publishedIso}>{article.published}</time>
              )}
              <span>{article.readTime}</span>
            </span>
          }
        />
        <section style={{ background: 'rgb(10,10,10)', padding: '72px 0' }}>
          <div className="section-inner">
            <VideoEmbed
              videoId="wv4a_99YUBo"
              title="Business intelligence exercises walkthrough"
            />
          </div>
        </section>
        <div className="article-column article-body">
          {introSection && <ProseSection section={introSection} />}

          <nav aria-labelledby="exercise-list-heading">
            <h2 id="exercise-list-heading">All {exercises.length} exercises at a glance</h2>
            <ol>
              {exercises.map((exercise) => (
                <li key={exercise.number}>
                  <a href={`#exercise-${exercise.number}`}>{exercise.number}. {exercise.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          {prepSections.map((section) => (
            <ProseSection key={section.heading} section={section} />
          ))}

          {exercises.map((exercise) => {
            const exerciseDatasets = [exercise.dataset, ...(exercise.extraDatasets ?? [])].filter(
              (dataset): dataset is ArticleDataset => Boolean(dataset),
            )
            return (
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
                {exerciseDatasets.length > 0 && <DatasetLinks datasets={exerciseDatasets} />}
                {exercise.walkthrough && (
                  <aside>
                    <strong>Walkthrough</strong>
                    {exercise.walkthrough.map((paragraph) => (
                      <p key={paragraph}><ArticleRichText text={paragraph} /></p>
                    ))}
                  </aside>
                )}
              </section>
            )
          })}

          {article.trailingSections?.map((section) => (
            <ProseSection key={section.heading} section={section} />
          ))}
        </div>
      </article>
      {article.faqs && (
        <FaqAccordion
          items={article.faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
          heading="Business intelligence exercises FAQ"
          subtext="Have more questions about these exercises or how to apply the method to a real brief?"
        />
      )}
      <FinalCta title="Run the AI claim exercise on a live brief." />
    </main>
  )
}
