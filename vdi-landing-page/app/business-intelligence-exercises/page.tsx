import PageHero from '@/components/PageHero'
import ArticleRichText from '@/components/ArticleRichText'
import FinalCta from '@/components/FinalCta'
import FaqAccordion from '@/components/FaqAccordion'
import { biExercisesArticle } from '@/lib/bi-exercises-article'
import { pageMetadata, site } from '@/lib/site'

export const metadata = pageMetadata({
  title: biExercisesArticle.title,
  description: biExercisesArticle.summary,
  path: '/business-intelligence-exercises',
})

export default function BiExercisesPage() {
  const article = biExercisesArticle
  const canonical = new URL('/business-intelligence-exercises', site.url).toString()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: article.title,
        url: canonical,
        numberOfItems: article.exercises!.length,
        itemListElement: article.exercises!.map((exercise) => ({
          '@type': 'ListItem',
          position: exercise.number,
          name: `Exercise ${exercise.number}: ${exercise.title}`,
          url: `${canonical}#exercise-${exercise.number}`,
        })),
      },
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
          eyebrow="Practice"
          title={article.title}
          intro={article.lede ?? article.summary}
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

          {article.exercises!.map((exercise) => (
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

        </div>
      </article>
      {article.faqs && (
        <FaqAccordion
          items={article.faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
          heading="Frequently asked questions"
          subtext="Have more questions about these exercises or how to apply the method to a real brief?"
        />
      )}
      <FinalCta title="Run the AI claim exercise on a live brief." />
    </main>
  )
}
