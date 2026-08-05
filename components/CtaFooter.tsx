'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Image from 'next/image'

const footerCols = [
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy policy', 'Terms of use', 'Cookie policy', 'Data processing agreement'],
  },
  {
    heading: 'Industries',
    links: ['Medical & clinical', 'Logistics & trade', 'Marketing', 'Education'],
  },
  {
    heading: 'Social',
    links: ['LinkedIn', 'Twitter / X', 'GitHub', 'Newsletter'],
  },
]

export default function CtaFooter() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <footer ref={ref}>
      {/* CTA section */}
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
            <span className="eyebrow-pill mb-8 inline-block">Start Today</span>
            <h2
              className="mb-3 md:mb-4 max-w-[700px] mx-auto text-[28px] md:text-[48px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-1.44px',
                lineHeight: '1.2',
                color: 'rgb(250,250,250)',
              }}
            >
              Let verification handle the risk.
            </h2>
            <p
              className="max-w-[520px] mx-auto mb-10 text-[15px] md:text-[18px]"
              style={{
                fontWeight: 500,
                color: 'rgba(250,250,250,0.8)',
                lineHeight: '26px',
              }}
            >
              Create your first verification record, connect your content, and publish with confidence every week.
            </p>

            <div className="flex items-center justify-center gap-3 mb-6">
              <a
                href="#pricing"
                className="px-6 py-3 rounded-full text-[16px] font-medium transition-all duration-200"
                style={{ background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.88)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgb(250,250,250)' }}
              >
                Request early access
              </a>
              <a
                href="#overview"
                className="px-6 py-3 rounded-full text-[16px] font-medium transition-all duration-200"
                style={{
                  background: 'rgba(250,250,250,0.18)',
                  color: 'rgb(250,250,250)',
                  border: '1px solid rgba(250,250,250,0.18)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.24)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.18)' }}
              >
                Book a Demo
              </a>
            </div>

            <p style={{ fontSize: '14px', color: 'rgba(250,250,250,0.32)' }}>
              No credit card required · Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer nav */}
      <div style={{ background: 'rgb(10,10,10)', borderTop: '1px solid rgba(250,250,250,0.07)' }}>
        <div className="section-inner py-16">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
            {/* Brand */}
            <div className="max-w-[240px]">
              <div className="flex items-center gap-2 mb-3">
                <Image src="/logo.png" alt="ClarifyData" width={36} height={36} className="rounded-lg" />
                <span
                  className="text-[18px] font-semibold tracking-tight"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  CLARIFYDATA
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(250,250,250,0.4)', lineHeight: '20px' }}>
                Human-verified fact checking for modern teams.
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
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[14px] transition-colors duration-200"
                          style={{ color: 'rgba(250,250,250,0.5)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'rgb(250,250,250)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(250,250,250,0.5)')}
                        >
                          {link}
                        </a>
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
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
