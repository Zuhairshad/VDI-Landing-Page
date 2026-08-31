import Link from 'next/link'

export default function FinalCta({
  title = 'Bring a real question. Leave with a clearer evidence path.',
  body = 'Show us the dataset, claim, report, or market question your team needs to trust. We will map the relevant workflow and the review points it requires.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="section-inner final-cta-inner">
        <p className="eyebrow">A practical next step</p>
        <h2 id="final-cta-title">{title}</h2>
        <p>{body}</p>
        <div className="button-row">
          <Link href="/#book-demo" className="button button-light">Book a Demo</Link>
          <Link href="/how-it-works" className="button button-quiet">See the Workflow</Link>
        </div>
      </div>
    </section>
  )
}
