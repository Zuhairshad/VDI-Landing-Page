'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const entries = [
  {
    date: 'Apr 15, 2026',
    title: 'Education sector launch',
    body: 'Curriculum verification is now live. Coverage spans exam specifications, grade sequencing, prescribed texts, and assessment criteria. Pilot access is free — no integration required.',
    tag: 'New sector',
  },
  {
    date: 'Mar 8, 2026',
    title: 'Exportable records v2',
    body: 'Every record now includes verifier credentials, source URL with paragraph reference, and ISO 8601 review timestamp. Download as PDF or JSON. Import-ready for audit tools.',
    tag: 'Records',
  },
  {
    date: 'Feb 2, 2026',
    title: 'EU AI Act compliance toolkit',
    body: 'Article 50 (effective August 2026) requires disclosure of AI-generated content in public interest contexts. Our verification records constitute the genuine human review the exemption requires. Templates and audit trails now bundled on all paid plans.',
    tag: 'Compliance',
  },
  {
    date: 'Jan 20, 2026',
    title: 'Logistics & trade sector',
    body: 'Tariff classifications, dangerous goods rules, carrier documentation, and customs procedures now in the verified fact bank. 28 specialists on the logistics panel with immediate availability.',
    tag: 'New sector',
  },
]

export default function Changelog() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} id="changelog" className="py-24 md:py-32 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          className="flex flex-col md:flex-row md:items-end gap-4 justify-between mb-16"
        >
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.07em] mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Changelog
            </p>
            <h2 className="text-[36px] md:text-[40px] font-medium leading-[1.2] tracking-[-1.6px]" style={{ color: 'rgb(255,243,240)' }}>
              What&apos;s new
            </h2>
          </div>
          <a
            href="#"
            className="text-[14px] tracking-[-0.28px] self-start md:self-end transition-colors duration-300"
            style={{ color: 'rgba(255,255,255,0.45)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgb(255,243,240)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
          >
            Full changelog →
          </a>
        </motion.div>

        <div className="flex flex-col">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
              className="group grid md:grid-cols-[200px_1fr] gap-6 py-8 border-b transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.06)' }}
            >
              <div className="flex md:flex-col gap-4 md:gap-3">
                <span className="text-[13px] tabular-nums" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {entry.date}
                </span>
                <span
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full self-start"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}
                >
                  {entry.tag}
                </span>
              </div>
              <div>
                <h3
                  className="text-[16px] font-medium tracking-[-0.32px] mb-2 transition-colors duration-300"
                  style={{ color: 'rgb(255,243,240)' }}
                >
                  {entry.title}
                </h3>
                <p className="text-[14px] leading-6 tracking-[-0.14px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {entry.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
