import Link from 'next/link'
import FinalCta from '@/components/FinalCta'
import PageHero from '@/components/PageHero'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Industry Evidence Workflows',
  description: 'Explore context-specific data preparation, evidence, provenance, and human-review workflows for four industries.',
  path: '/industries',
})

const industries = [
  {
    title: 'Marketing & E-commerce',
    href: '/industries/marketing-ecommerce',
    text: 'Compare products, prices, promotions, catalogues, reviews, and campaign claims without losing SKU, market, timing, or source context.',
  },
  {
    title: 'Medical & Clinical',
    href: '/industries/medical-clinical',
    text: 'Organize literature, map claims to sources, preserve conflicting findings, and prepare evidence for required professional review.',
  },
  {
    title: 'Logistics & Trade',
    href: '/industries/logistics-trade',
    text: 'Track time-sensitive tariff, route, cost, supplier, and trade information with definitions, dates, and accountable review attached.',
  },
  {
    title: 'Education',
    href: '/industries/education',
    text: 'Structure policy, accreditation, program, research, and outcome evidence while preserving population and methodology limits.',
  },
]

export default function IndustriesPage() {
  return (
    <main id="main-content">
      <PageHero
        bgImage="/hero-bg-industries.png"
        eyebrow="Industries"
        title="One evidence discipline, adapted to each operating context"
        intro="The relevant sources, risks, definitions, and reviewer responsibilities differ by industry. The workflow should reflect those differences."
        noteLabel="Our approach"
        note="Start with the decision and evidence standard, then configure preparation, verification, and review around the real context."
      />

      <section className="content-section">
        <div className="section-inner">
          <header className="section-heading"><p className="eyebrow">Explore by industry</p><h2>Four focused workflow guides</h2></header>
          <div className="industry-directory">
            {industries.map((industry, index) => (
              <Link key={industry.href} href={industry.href}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h2>{industry.title}</h2><p>{industry.text}</p></div>
                <strong aria-hidden="true">Explore →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta title="Your evidence standard should match the decision." body="Bring the industry, source set, and intended use. We will identify the preparation, verification, and human-review steps that matter." />
    </main>
  )
}
