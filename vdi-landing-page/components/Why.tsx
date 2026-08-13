'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const features = [
  {
    eyebrow: '01',
    title: 'Instant for bank claims',
    body: 'Claims that match our verified fact bank resolve in seconds. No queue, no wait. Results return before your workflow knows they were ever checked.',
  },
  {
    eyebrow: '02',
    title: 'Hours for new claims',
    body: 'Unmatched claims go to human specialists. Not another model — a credentialed domain expert working from primary sources. Typical return: a few hours.',
  },
  {
    eyebrow: '03',
    title: 'Coverage compounds',
    body: 'Every verified claim joins the shared fact bank. Every client that follows benefits from every verification that came before them. The bank gets better with use.',
  },
  {
    eyebrow: '04',
    title: 'Exportable records',
    body: 'Every result ships with source, verifier, confidence score, and review date. Download as PDF or JSON. Built for audit, built for disclosure.',
  },
  {
    eyebrow: '05',
    title: 'EU AI Act ready',
    body: 'Article 50 requires disclosure of AI-generated content in public interest contexts. Our verification records constitute the genuine human review the exemption requires.',
  },
]

export default function Why() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} id="why" className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      {/* Header */}
      <div className="inner py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.07em] mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Why Clarify Data
          </p>
          <h2 className="text-[36px] md:text-[40px] font-medium leading-[1.2] tracking-[-1.6px] max-w-2xl" style={{ color: 'rgb(255,243,240)' }}>
            Five things that make human verification work at scale.
          </h2>
        </motion.div>
      </div>

      {/* Feature grid — full bleed */}
      <div
        className="grid grid-cols-1 md:grid-cols-5 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.eyebrow}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
            className="group p-8 border-b md:border-b-0 md:border-r last:border-r-0 transition-colors duration-300"
            style={{
              borderColor: 'rgba(255,255,255,0.06)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
          >
            <span className="text-[11px] font-medium tracking-[0.06em]" style={{ color: 'rgba(255,255,255,0.25)' }}>
              {f.eyebrow}
            </span>
            <h3
              className="text-[16px] font-medium leading-5 tracking-[-0.32px] mt-4 mb-3"
              style={{ color: 'rgb(255,243,240)' }}
            >
              {f.title}
            </h3>
            <p className="text-[13px] leading-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
              {f.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
