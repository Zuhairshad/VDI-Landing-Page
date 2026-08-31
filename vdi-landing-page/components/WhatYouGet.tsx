'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const rows = [
  {
    eyebrow: 'What you get: 01',
    title: 'Verification records you can stake your name on.',
    body: 'Every claim carries a source URL, a verifier name, a review date, and a confidence rating. When a client, regulator, or editor asks how you know what you know, you can provide the record, not just an explanation.',
    side: 'right',
    visual: <RecordVisual />,
  },
  {
    eyebrow: 'What you get: 02',
    title: 'Human specialists who check what no model can.',
    body: 'Unmatched claims do not go to a second model for a second opinion. They can go to a qualified specialist in the relevant domain for review against primary sources such as clinical trials, regulatory filings, or official curricula.',
    side: 'left',
    visual: <SpecialistVisual />,
  },
  {
    eyebrow: 'What you get: 03',
    title: 'Coverage that grows with every engagement.',
    body: 'Every new claim we verify becomes part of the shared fact bank. New clients benefit from every verification we\'ve done before. The more the bank is used, the faster and more complete it becomes.',
    side: 'right',
    visual: <CoverageVisual />,
  },
]

function RecordVisual() {
  return (
    <div
      className="w-full h-full flex flex-col p-6 rounded-2xl"
      style={{ background: 'rgba(15,15,15,0.85)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <p className="text-[11px] uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Verification record
      </p>
      {[
        { k: 'Verdict', v: 'Verified', accent: true },
        { k: 'Claim', v: 'Drug X reduces symptoms by 40%', accent: false },
        { k: 'Source', v: 'PubMed 2024 · PMID 38291047', accent: false },
        { k: 'Verifier', v: 'Dr. P. Adeyemi · Clin. Pharmacology', accent: false },
        { k: 'Reviewed', v: '4 Aug 2026 · 14:22 UTC', accent: false },
        { k: 'Retained', v: '3 years (until Aug 2029)', accent: false },
      ].map((r) => (
        <div key={r.k} className="flex gap-4 py-2.5 border-b last:border-0" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <span className="text-[11px] w-20 shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>{r.k}</span>
          <span className="text-[12px]" style={{ color: r.accent ? 'rgb(100,200,203)' : 'rgba(255,255,255,0.65)' }}>{r.v}</span>
        </div>
      ))}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 py-2 text-[12px] rounded-lg border" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.1)' }}>Export PDF</button>
        <button className="flex-1 py-2 text-[12px] rounded-lg border" style={{ color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.1)' }}>Export JSON</button>
      </div>
    </div>
  )
}

function SpecialistVisual() {
  return (
    <div
      className="w-full h-full flex flex-col gap-3 p-6 rounded-2xl"
      style={{ background: 'rgba(15,15,15,0.85)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <p className="text-[11px] uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Specialist network
      </p>
      {[
        { sector: 'Medical & Clinical', count: '42 specialists', active: 3 },
        { sector: 'Logistics & Trade', count: '28 specialists', active: 1 },
        { sector: 'Social & Marketing', count: '19 specialists', active: 5 },
        { sector: 'Education', count: '31 specialists', active: 2 },
      ].map((s) => (
        <div key={s.sector} className="flex items-center justify-between px-3 py-2.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <p className="text-[12px] font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.sector}</p>
            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{s.count}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            <span className="text-[11px]" style={{ color: 'rgb(100,200,203)' }}>{s.active} reviewing</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function CoverageVisual() {
  const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
  const vals = [12, 19, 28, 41, 58, 79, 105, 138, 178, 224, 279, 342]
  const max = 342
  return (
    <div
      className="w-full h-full flex flex-col p-6 rounded-2xl"
      style={{ background: 'rgba(15,15,15,0.85)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[11px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>Fact bank growth</p>
          <p className="text-[28px] font-medium mt-1" style={{ color: 'rgb(255,243,240)' }}>342k</p>
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.35)' }}>verified claims</p>
        </div>
        <span className="text-[12px] px-2 py-1 rounded-full" style={{ background: 'rgba(23,114,117,0.2)', color: 'rgb(100,200,203)' }}>+23% this month</span>
      </div>
      <div className="flex items-end gap-1 h-24">
        {vals.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
              className="w-full rounded-sm origin-bottom"
              style={{
                height: `${(v / max) * 100}%`,
                background: i === vals.length - 1 ? 'rgb(23,114,117)' : 'rgba(255,255,255,0.1)',
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{months[0]}</span>
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>{months[months.length - 1]}</span>
      </div>
    </div>
  )
}

export default function WhatYouGet() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} id="about" className="py-24 md:py-32">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          className="mb-20"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.07em] mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
            What you get
          </p>
          <h2 className="text-[36px] md:text-[40px] font-medium leading-[1.2] tracking-[-1.6px] max-w-xl" style={{ color: 'rgb(255,243,240)' }}>
            Three things every verified piece of content carries.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24">
          {rows.map((row, i) => (
            <motion.div
              key={row.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.44, 0, 0.56, 1] }}
              className={`grid md:grid-cols-2 gap-12 items-center ${row.side === 'left' ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Text */}
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.06em] mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  {row.eyebrow}
                </p>
                <h3 className="text-[26px] md:text-[28px] font-medium leading-[1.2] tracking-[-0.84px] mb-5" style={{ color: 'rgb(255,243,240)' }}>
                  {row.title}
                </h3>
                <p className="text-[15px] leading-6 tracking-[-0.15px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {row.body}
                </p>
              </div>

              {/* Visual */}
              <div className="min-h-[320px]">
                {row.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
