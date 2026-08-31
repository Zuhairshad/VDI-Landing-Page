import type { ReactNode } from 'react'
import FinalCta from './FinalCta'
import PageHero from './PageHero'

export interface IndustryItem {
  title: string
  description: string
}

export interface IndustryPageData {
  eyebrow: string
  icon: ReactNode
  title: string
  subtitle: string
  context: { title: string; paragraphs: string[] }
  problem: { title: string; paragraphs: string[] }
  challenges: IndustryItem[]
  workflow: IndustryItem[]
  capabilities: IndustryItem[]
  exampleInputs: string[]
  exampleOutputs: string[]
  qualityConsiderations: IndustryItem[]
  reviewCheckpoints: IndustryItem[]
  useCases: IndustryItem[]
  limitations: string[]
  criticalNote?: string
}

function ItemGrid({ items }: { items: IndustryItem[] }) {
  return (
    <div className="content-items industry-item-grid">
      {items.map((item) => (
        <article key={item.title} className="content-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  )
}

function StringList({ items }: { items: string[] }) {
  return <ul className="plain-list">{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

export default function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <main id="main-content">
      <PageHero
        eyebrow={<span className="industry-eyebrow">{data.icon}{data.eyebrow}</span>}
        title={data.title}
        intro={data.subtitle}
        noteLabel="Responsible use"
        note="Industry context changes the evidence standard. High-impact interpretation and approval stay with accountable, qualified professionals."
      />

      <section className="content-section content-section-split">
        <div className="section-inner">
          <div className="content-items">
            {[data.context, data.problem].map((item) => (
              <article key={item.title} className="content-item">
                <h2>{item.title}</h2>
                {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <header className="section-heading">
            <p className="eyebrow">Industry challenges</p>
            <h2>Where information quality needs deliberate controls</h2>
          </header>
          <ItemGrid items={data.challenges} />
        </div>
      </section>

      <section className="content-section content-section-steps">
        <div className="section-inner">
          <header className="section-heading">
            <p className="eyebrow">Reviewable workflow</p>
            <h2>A path from scoped question to accountable decision</h2>
          </header>
          <div className="content-items">
            {data.workflow.map((item, index) => (
              <article key={item.title} className="content-item">
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <header className="section-heading">
            <p className="eyebrow">Directional capabilities</p>
            <h2>Modules designed around the work</h2>
            <p>These describe intended workflows, not guaranteed integrations, automated decisions, or fixed deliverables.</p>
          </header>
          <ItemGrid items={data.capabilities} />
        </div>
      </section>

      <section className="content-section industry-inputs">
        <div className="section-inner">
          <header className="section-heading">
            <p className="eyebrow">Inputs and deliverables</p>
            <h2>What moves through the workflow</h2>
          </header>
          <div className="content-items">
            <article className="content-item"><h3>Example inputs</h3><StringList items={data.exampleInputs} /></article>
            <article className="content-item"><h3>Example deliverables</h3><StringList items={data.exampleOutputs} /></article>
          </div>
        </div>
      </section>

      <section className="content-section content-section-split">
        <div className="section-inner">
          <header className="section-heading">
            <p className="eyebrow">Quality and oversight</p>
            <h2>Provenance and human-review checkpoints</h2>
          </header>
          <div className="content-items">
            <article className="content-item"><h2>Quality considerations</h2><ItemGrid items={data.qualityConsiderations} /></article>
            <article className="content-item"><h2>Human-review checkpoints</h2><ItemGrid items={data.reviewCheckpoints} /></article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-inner">
          <header className="section-heading"><p className="eyebrow">Practical use cases</p><h2>Questions teams can structure and review</h2></header>
          <ItemGrid items={data.useCases} />
        </div>
      </section>

      <section className="content-section limitations-section">
        <div className="section-inner limitations-panel">
          <header><p className="eyebrow">Limitations</p><h2>Use the output with its boundaries visible</h2></header>
          <StringList items={data.limitations} />
          {data.criticalNote && <p className="critical-note"><strong>High-impact use:</strong> {data.criticalNote}</p>}
        </div>
      </section>

      <FinalCta title="Bring the industry context, not just the data." body="Show us the decision, sources, evidence standard, and review responsibilities. We will map a workflow around what the use case actually requires." />
    </main>
  )
}
