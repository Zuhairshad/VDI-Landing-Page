'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

function ClaimExtractionUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[260px] mx-auto"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <p className="text-[11px] uppercase tracking-wider mb-3" style={{ color: 'rgba(250,250,250,0.32)' }}>Parsed → 4 claims</p>
      {['Drug X reduces symptoms', 'Standard protocols apply', '12-week trial conducted', 'Peer-reviewed results'].map((c, i) => (
        <div key={c} className="flex items-center gap-2 py-1">
          <span className="text-[10px] px-1.5 py-0.5 rounded font-medium" style={{ background: 'rgba(84,27,4,0.5)', color: 'rgba(250,250,250,0.7)' }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-[12px]" style={{ color: 'rgba(250,250,250,0.65)' }}>{c}</span>
        </div>
      ))}
    </div>
  )
}

function HumanSpecialistsUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[240px] mx-auto"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <div className="flex items-center gap-2.5 mb-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-semibold" style={{ background: 'rgba(84,27,4,0.6)', color: 'rgb(250,250,250)' }}>
          PA
        </div>
        <div>
          <p className="text-[13px] font-medium" style={{ color: 'rgb(250,250,250)' }}>Dr. P. Adeyemi</p>
          <p className="text-[11px]" style={{ color: 'rgba(250,250,250,0.45)' }}>Clinical Pharmacology</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg" style={{ background: 'rgba(74,222,128,0.1)' }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgb(74,222,128)' }} />
        <span className="text-[11px]" style={{ color: 'rgba(250,250,250,0.6)' }}>Reviewing primary sources</span>
      </div>
    </div>
  )
}

function FactBankUI() {
  return (
    <div
      className="rounded-xl p-5 w-full max-w-[220px] mx-auto text-center"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <p className="text-[32px] font-medium" style={{ color: 'rgb(250,250,250)', letterSpacing: '-1px' }}>342k</p>
      <p className="text-[13px] mb-3" style={{ color: 'rgba(250,250,250,0.5)' }}>verified claims</p>
      <div className="flex gap-1 justify-center">
        {[4, 6, 5, 7, 4, 6, 8, 5, 7, 6].map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-sm"
            style={{
              height: `${h * 4}px`,
              background: i === 9 ? 'rgba(84,27,4,0.9)' : 'rgba(250,250,250,0.15)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function VerificationRecordsUI() {
  return (
    <div
      className="rounded-xl overflow-hidden w-full max-w-[280px] mx-auto"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      {[
        { k: 'Verdict', v: 'Verified', green: true },
        { k: 'Source', v: 'PubMed 2024', green: false },
        { k: 'Verifier', v: 'Dr. P. Adeyemi', green: false },
        { k: 'Confidence', v: '99%', green: false },
      ].map((row) => (
        <div key={row.k} className="flex items-center justify-between px-4 py-2 border-b last:border-0" style={{ borderColor: 'rgba(250,250,250,0.06)' }}>
          <span className="text-[11px]" style={{ color: 'rgba(250,250,250,0.32)' }}>{row.k}</span>
          <span className="text-[12px] font-medium" style={{ color: row.green ? 'rgb(74,222,128)' : 'rgba(250,250,250,0.7)' }}>{row.v}</span>
        </div>
      ))}
    </div>
  )
}

function EuActUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[240px] mx-auto"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold" style={{ background: 'rgba(84,27,4,0.7)', color: 'rgb(250,250,250)' }}>EU</div>
        <div>
          <p className="text-[12px] font-medium" style={{ color: 'rgb(250,250,250)' }}>AI Act Article 50</p>
          <p className="text-[10px]" style={{ color: 'rgba(250,250,250,0.4)' }}>Compliance record</p>
        </div>
      </div>
      <div className="px-3 py-2 rounded-lg" style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)' }}>
        <p className="text-[11px]" style={{ color: 'rgb(74,222,128)' }}>✓ Audit-grade retention</p>
        <p className="text-[11px] mt-0.5" style={{ color: 'rgba(250,250,250,0.5)' }}>3yr record · Export ready</p>
      </div>
    </div>
  )
}

function MultiSectorUI() {
  const sectors = ['Medical', 'Logistics', 'Marketing', 'Education']
  return (
    <div className="flex flex-wrap gap-2 justify-center w-full max-w-[240px] mx-auto">
      {sectors.map((s) => (
        <span
          key={s}
          className="px-3 py-1.5 rounded-full text-[12px] font-medium"
          style={{ background: 'rgba(84,27,4,0.45)', color: 'rgba(250,250,250,0.8)', border: '1px solid rgba(84,27,4,0.6)' }}
        >
          {s}
        </span>
      ))}
    </div>
  )
}

const features = [
  {
    title: 'Claim Extraction',
    desc: 'Break content into individual, verifiable assertions automatically.',
    UI: ClaimExtractionUI,
  },
  {
    title: 'Human Specialists',
    desc: 'Credentialed experts verify against primary sources — not another model.',
    UI: HumanSpecialistsUI,
  },
  {
    title: 'Fact Bank',
    desc: 'Bank matches return in seconds. Coverage compounds with use.',
    UI: FactBankUI,
  },
  {
    title: 'Verification Records',
    desc: 'Every result ships with source, verifier, date, and confidence score.',
    UI: VerificationRecordsUI,
  },
  {
    title: 'EU AI Act Ready',
    desc: 'Article 50 compliance records built in. Audit-grade retention included.',
    UI: EuActUI,
  },
  {
    title: 'Multi-sector',
    desc: 'Medical, logistics, marketing, and education — each with its own specialist pool.',
    UI: MultiSectorUI,
  },
]

export default function Features() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="features"
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
          <span className="eyebrow-pill mb-6 inline-block">Features</span>
          <h2
            className="mb-3 md:mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Everything you need to verify AI content.
          </h2>
          <p
            className="max-w-[520px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            A complete verification system built for teams publishing at scale.
          </p>
        </motion.div>

        {/* 2x3 grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.06 }}
              className="landscape-card rounded-2xl overflow-hidden flex flex-col min-h-[240px] md:min-h-[320px]"
              style={{
                border: '1px solid rgba(250,250,250,0.07)',
              }}
            >
              {/* Visual */}
              <div className="flex-1 flex items-center justify-center p-6">
                <feat.UI />
              </div>
              {/* Text */}
              <div className="px-6 pb-6">
                <h4
                  className="mb-1.5"
                  style={{
                    fontSize: '18px',
                    fontWeight: 500,
                    letterSpacing: '-0.4px',
                    color: 'rgb(250,250,250)',
                  }}
                >
                  {feat.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'rgba(250,250,250,0.6)', lineHeight: '21px' }}>
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
