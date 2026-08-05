'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

function ClaimsUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[260px] mx-auto"
      style={{
        background: 'rgba(12,12,12,0.92)',
        border: '1px solid rgba(250,250,250,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <p className="text-[11px] uppercase tracking-wider mb-3" style={{ color: 'rgba(250,250,250,0.32)' }}>
        Claims verified
      </p>
      {[
        'Reduces symptoms by 40%',
        'Standard care protocols',
        '12-week clinical trial',
      ].map((claim) => (
        <div key={claim} className="flex items-center justify-between py-1.5">
          <span className="text-[12px]" style={{ color: 'rgba(250,250,250,0.7)' }}>{claim}</span>
          <span className="text-[11px] font-medium ml-2 shrink-0" style={{ color: 'rgb(74,222,128)' }}>✓</span>
        </div>
      ))}
    </div>
  )
}

function SpecialistUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[240px] mx-auto"
      style={{
        background: 'rgba(12,12,12,0.92)',
        border: '1px solid rgba(250,250,250,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0"
          style={{ background: 'rgba(84,27,4,0.6)', color: 'rgb(250,250,250)' }}
        >
          PA
        </div>
        <div>
          <p className="text-[13px] font-medium" style={{ color: 'rgb(250,250,250)' }}>
            Dr. P. Adeyemi
          </p>
          <p className="text-[11px]" style={{ color: 'rgba(250,250,250,0.5)' }}>
            Clin. Pharmacology
          </p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgb(74,222,128)' }} />
            <span className="text-[11px]" style={{ color: 'rgba(250,250,250,0.5)' }}>Reviewing…</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function RecordUI() {
  return (
    <div
      className="rounded-xl overflow-hidden w-full max-w-[280px] mx-auto"
      style={{
        background: 'rgba(12,12,12,0.92)',
        border: '1px solid rgba(250,250,250,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {[
        { k: 'Verdict', v: 'Verified', highlight: true },
        { k: 'Source', v: 'PubMed 2024', highlight: false },
        { k: 'Retained', v: '3 years', highlight: false },
      ].map((row) => (
        <div
          key={row.k}
          className="flex items-center justify-between px-4 py-2.5 border-b last:border-0"
          style={{ borderColor: 'rgba(250,250,250,0.06)' }}
        >
          <span className="text-[11px]" style={{ color: 'rgba(250,250,250,0.35)' }}>{row.k}</span>
          <span
            className="text-[12px] font-medium"
            style={{ color: row.highlight ? 'rgb(74,222,128)' : 'rgba(250,250,250,0.7)' }}
          >
            {row.v}
          </span>
        </div>
      ))}
    </div>
  )
}

const cards = [
  {
    title: 'Verify instantly',
    desc: 'Bank-matched claims return in seconds. No queue, no wait.',
    UI: ClaimsUI,
  },
  {
    title: 'Human specialists',
    desc: 'Unmatched claims go to credentialed experts, not another model.',
    UI: SpecialistUI,
  },
  {
    title: 'Records that hold',
    desc: 'Every result ships with source, verifier, date, and confidence score.',
    UI: RecordUI,
  },
]

export default function Benefits() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="benefits"
      className="section-pad"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-6 inline-block">Why teams choose us</span>
          <h2
            className="mb-3 md:mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            More accuracy. Less verification overhead.
          </h2>
          <p
            className="max-w-[560px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Submit AI-generated content and get back claim-by-claim verdicts with exportable records — no fact-checking team required.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="landscape-card rounded-2xl overflow-hidden flex flex-col min-h-[280px] md:min-h-[380px]"
              style={{
                border: '1px solid rgba(250,250,250,0.07)',
              }}
            >
              {/* Visual area */}
              <div className="flex-1 flex items-center justify-center p-6">
                <card.UI />
              </div>
              {/* Text */}
              <div className="px-6 pb-6">
                <h4
                  className="mb-2 text-[18px] md:text-[26px]"
                  style={{
                    fontWeight: 500,
                    letterSpacing: '-0.78px',
                    color: 'rgb(250,250,250)',
                  }}
                >
                  {card.title}
                </h4>
                <p style={{ fontSize: '16px', color: 'rgba(250,250,250,0.6)', lineHeight: '24px' }}>
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
