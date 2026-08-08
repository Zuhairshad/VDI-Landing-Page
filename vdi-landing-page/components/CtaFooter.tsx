'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const footerCols = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms of use', href: '/terms-of-use' },
      { label: 'Cookie policy', href: '/cookie-policy' },
      { label: 'Data processing agreement', href: '/dpa' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Medical & clinical', href: '/industries/medical-clinical' },
      { label: 'Logistics & trade', href: '/industries/logistics-trade' },
      { label: 'Marketing & E-commerce', href: '/industries/marketing-ecommerce' },
      { label: 'Education', href: '/industries/education' },
    ],
  },
  {
    heading: 'Social & Digest',
    links: [
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
      { label: 'Twitter / X', href: 'https://x.com', external: true },
      { label: 'GitHub', href: 'https://github.com', external: true },
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
          id="early-access"
          className="landscape-card relative overflow-hidden py-24 md:py-32 text-center"
        >
          <div className="section-inner relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-pill mb-8 inline-block">Start a Conversation</span>
              <h2
                className="mb-3 md:mb-4 max-w-[700px] mx-auto text-[28px] md:text-[48px]"
                style={{
                  fontWeight: 500,
                  letterSpacing: '-1.44px',
                  lineHeight: '1.2',
                  color: 'rgb(250,250,250)',
                }}
              >
                Bring important claims back to evidence.
              </h2>
              <p
                className="max-w-[520px] mx-auto mb-10 text-[15px] md:text-[18px]"
                style={{
                  fontWeight: 500,
                  color: 'rgba(250,250,250,0.8)',
                  lineHeight: '26px',
                }}
              >
                Tell us about the sources, decisions, and review responsibilities in your information-quality workflow.
              </p>

              <div className="flex items-center justify-center gap-3 mb-6">
                <Link
                  href="/#book-demo"
                  className="px-6 py-3 rounded-full text-[16px] font-medium transition-all duration-200"
                  style={{ background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.88)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgb(250,250,250)' }}
                >
                  Book a Demo
                </Link>
              </div>

              <p style={{ fontSize: '14px', color: 'rgba(250,250,250,0.32)' }}>
                Share a real use case through the existing demo request form
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
            <div className="max-w-[240px]">
              <Link href="/" className="flex items-center gap-2 mb-3">
                <Image src="/logo.png" alt="ClarifyData" width={36} height={36} className="rounded-lg" />
                <span
                  className="text-[18px] font-semibold tracking-tight"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  CLARIFYDATA
                </span>
              </Link>
              <p style={{ fontSize: '13px', color: 'rgba(250,250,250,0.4)', lineHeight: '20px' }}>
                Traceable information-quality workflows for modern teams.
              </p>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerCols.map((col) => (
                <div key={col.heading}>
                  <p
                    className="text-[11px] font-medium uppercase tracking-wider mb-4"
                    style={{ color: 'rgba(250,250,250,0.32)' }}
                  >
                    {col.heading}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((item) => (
                      <li key={item.label}>
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[14px] transition-colors duration-200"
                            style={{ color: 'rgba(250,250,250,0.5)' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'rgb(250,250,250)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,250,0.5)')}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-[14px] transition-colors duration-200"
                            style={{ color: 'rgba(250,250,250,0.5)' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'rgb(250,250,250)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,250,0.5)')}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(250,250,250,0.07)' }}
          >
            <p style={{ fontSize: '13px', color: 'rgba(250,250,250,0.32)' }}>
              © 2026 ClarifyData. All rights reserved.
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
