import Link from 'next/link'
import Brand from './Brand'
import { footerNavigation, legalNavigation } from '@/lib/site'

export default function CtaFooter() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>
            Evidence-led data preparation, claim verification, market research, and
            business intelligence workflows designed for responsible human review.
          </p>
        </div>

        <div className="footer-columns">
          {footerNavigation.map((column) => (
            <div key={column.heading}>
              <h2>{column.heading}</h2>
              <ul>
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="section-inner footer-legal">
        <p>© 2026 Clarify Data. Informational workflows only, not medical, legal, or financial advice.</p>
        <nav aria-label="Legal navigation">
          {legalNavigation.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
