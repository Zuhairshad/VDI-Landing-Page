import Link from 'next/link'

const packages = [
  {
    name: 'Prepare',
    fit: 'For teams that need analysis-ready information',
    description: 'Profile, map, normalize, validate, and document supplied data before it enters reporting or verification work.',
    includes: ['Source and schema inventory', 'Data preparation and validation workflow', 'Exception and quality reporting'],
  },
  {
    name: 'Verify',
    fit: 'For teams that need inspectable claim support',
    description: 'Structure claims, map evidence, record conflicts, and route uncertainty through an agreed human-review process.',
    includes: ['Claim and source mapping', 'Evidence and provenance records', 'Review states and limitations'],
  },
  {
    name: 'Intelligence',
    fit: 'For recurring analysis and market context',
    description: 'Connect prepared internal metrics with external evidence, comparison logic, and versioned reporting designed around a defined decision.',
    includes: ['Analytics and comparison framework', 'Market evidence workflow', 'Change-aware reporting design'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad pricing-section" aria-labelledby="pricing-heading">
      <div className="section-inner">
        <header className="pricing-heading">
          <div>
            <p className="eyebrow">Engagement packages</p>
            <h2 id="pricing-heading">Scope and pricing follow the evidence problem</h2>
          </div>
          <p>
            Data volume alone does not determine the work. Source access, refresh cadence, evidence standards,
            review requirements, and deliverables all affect scope. We provide a written proposal after a short discovery call.
          </p>
        </header>

        <div className="pricing-grid">
          {packages.map((item, index) => (
            <article key={item.name}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.name}</h3>
              <p className="pricing-fit">{item.fit}</p>
              <p>{item.description}</p>
              <ul>{item.includes.map((include) => <li key={include}>{include}</li>)}</ul>
            </article>
          ))}
        </div>

        <div className="pricing-action">
          <p><strong>Every proposal defines:</strong> inputs, workflow, responsibilities, deliverables, limitations, and review checkpoints.</p>
          <Link href="/#book-demo" className="button button-light">Discuss Your Scope</Link>
        </div>
      </div>
    </section>
  )
}
