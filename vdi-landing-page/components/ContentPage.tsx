import Link from 'next/link'
import FinalCta from './FinalCta'
import PageHero from './PageHero'

export interface ContentItem {
  title: string
  text: string
  bullets?: string[]
}

export interface ContentSection {
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  items: ContentItem[]
  variant?: 'grid' | 'steps' | 'split' | 'evidence'
}

export interface ContentPageData {
  eyebrow: string
  title: string
  intro: string
  note?: string
  sections: ContentSection[]
  related?: { label: string; href: string; description: string }[]
  ctaTitle?: string
  ctaBody?: string
}

function Section({ section }: { section: ContentSection }) {
  const variant = section.variant ?? 'grid'

  return (
    <section id={section.id} className={`content-section content-section-${variant}`}>
      <div className="section-inner">
        <header className="section-heading">
          {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
          <h2>{section.title}</h2>
          {section.intro && <p>{section.intro}</p>}
        </header>

        <div className="content-items">
          {section.items.map((item, index) => (
            <article key={item.title} className="content-item">
              {variant === 'steps' && <span className="step-number">{String(index + 1).padStart(2, '0')}</span>}
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.bullets && (
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContentPage({ data }: { data: ContentPageData }) {
  return (
    <main id="main-content">
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        intro={data.intro}
        noteLabel={data.note ? 'Working principle' : undefined}
        note={data.note}
      />

      {data.sections.map((section) => <Section key={section.title} section={section} />)}

      {data.related && (
        <section className="related-section" aria-labelledby="related-heading">
          <div className="section-inner">
            <header className="section-heading">
              <p className="eyebrow">Continue exploring</p>
              <h2 id="related-heading">Related Clarify Data resources</h2>
            </header>
            <div className="related-grid">
              {data.related.map((item) => (
                <Link key={item.href} href={item.href} className="related-link">
                  <strong>{item.label}</strong>
                  <span>{item.description}</span>
                  <span aria-hidden="true">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCta title={data.ctaTitle} body={data.ctaBody} />
    </main>
  )
}
