'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const footerCols = [
  {
    heading: 'Platform',
    links: [
      { label: 'Data Sort', href: '/#features' },
      { label: 'Data Verification', href: '/data-verification' },
      { label: 'Market Intelligence', href: '/#features' },
      { label: 'AI Claim Verification', href: '/#features' },
      { label: 'Business Intelligence', href: '/#features' },
      { label: 'Dynamic Reports', href: '/#features' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Data Verification Guide', href: '/data-verification' },
      { label: 'Business Intelligence', href: '/business-intelligence' },
      { label: 'Business Analysis', href: '/business-analysis' },
      { label: 'Data Analytics', href: '/data-analytics' },
      { label: 'Trust Index Methodology', href: '/trust-index' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'E-Commerce', href: '/industries/marketing-ecommerce' },
      { label: 'Healthcare', href: '/industries/medical-clinical' },
      { label: 'Logistics', href: '/industries/logistics-trade' },
      { label: 'Education', href: '/industries/education' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Data Processing Agreement', href: '/dpa' },
    ],
  },
]

interface CtaFooterProps {
  showCta?: boolean
}

export default function CtaFooter({ showCta = true }: CtaFooterProps) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <footer ref={ref}>
      {showCta && (
        <section
          id="final-cta"
          className="landscape-card relative overflow-hidden py-24 md:py-32 text-center"
        >
          <div className="section-inner relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-pill mb-8 inline-block">Make Data Easier to Trust</span>
              <h2
                className="mb-3 md:mb-4 max-w-[760px] mx-auto text-[28px] md:text-[48px]"
                style={{ fontWeight: 500, letterSpacing: '-1.44px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
              >
                Make Important Decisions With Evidence You Can Trace
              </h2>
              <p
                className="max-w-[540px] mx-auto mb-10 text-[15px] md:text-[18px]"
                style={{ fontWeight: 500, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
              >
                Bring us the information your team depends on. A dataset. An AI-generated report. A market assumption. A forecast. A business question.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <Link
                  href="/#book-demo"
                  className="px-6 py-3 rounded-full text-[16px] font-medium transition-all duration-200"
                  style={{ background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.88)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgb(250,250,250)' }}
                >
                  Book a Demo
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-6 py-3 rounded-full text-[16px] font-medium transition-all duration-200"
                  style={{ background: 'rgba(250,250,250,0.1)', color: 'rgb(250,250,250)', border: '1px solid rgba(250,250,250,0.2)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.18)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.1)' }}
                >
                  See How Clarify Data Works
                </Link>
              </div>

              <p style={{ fontSize: '14px', color: 'rgba(250,250,250,0.32)' }}>
                Bring a real document or dataset and see how the verification workflow applies to your use case.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer nav */}
      <div style={{ background: 'rgb(10,10,10)', borderTop: '1px solid rgba(250,250,250,0.07)' }}>
        <div className="section-inner py-16">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            {/* Brand */}
            <div className="max-w-[280px]">
              <Link href="/" className="flex items-center gap-2 mb-3">
                <Image src="/logo.png" alt="Clarify Data" width={36} height={36} className="rounded-lg" />
                <span className="text-[18px] font-semibold tracking-tight" style={{ color: 'rgb(250,250,250)' }}>
                  CLARIFY DATA
                </span>
              </Link>
              <p style={{ fontSize: '13px', color: 'rgba(250,250,250,0.4)', lineHeight: '20px' }}>
                Clarify Data provides data verification, market intelligence, business intelligence, AI claim verification, and human-supported information-quality workflows.
              </p>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerCols.map((col) => (
                <div key={col.heading}>
                  <p className="text-[11px] font-medium uppercase tracking-wider mb-4" style={{ color: 'rgba(250,250,250,0.32)' }}>
                    {col.heading}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="text-[14px] transition-colors duration-200"
                          style={{ color: 'rgba(250,250,250,0.5)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'rgb(250,250,250)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,250,0.5)')}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[12px] mb-6" style={{ color: 'rgba(250,250,250,0.25)', lineHeight: '18px' }}>
            Clarify Data provides informational verification, data intelligence, and market intelligence. It does not provide medical, legal, or financial advice.
          </p>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(250,250,250,0.07)' }}
          >
            <p style={{ fontSize: '13px', color: 'rgba(250,250,250,0.32)' }}>
              © 2026 Clarify Data. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: 'rgb(74,222,128)' }} />
              <span style={{ fontSize: '13px', color: 'rgba(250,250,250,0.4)' }}>
                Designed for responsible human review
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
