'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

function ClinicalUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[260px] mx-auto"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: 'rgba(250,250,250,0.32)' }}>Clinical review</p>
      {['Drug X: 40% symptom reduction', 'Dosing: 10mg twice daily', 'Trial: 12-week randomised'].map((c) => (
        <div key={c} className="flex items-center justify-between py-1.5">
          <span className="text-[12px]" style={{ color: 'rgba(250,250,250,0.65)' }}>{c}</span>
          <span className="text-[10px] font-medium ml-2 shrink-0" style={{ color: 'rgb(74,222,128)' }}>✓</span>
        </div>
      ))}
    </div>
  )
}

function TradeUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[260px] mx-auto"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: 'rgba(250,250,250,0.32)' }}>Trade compliance</p>
      {['HS Code: 3004.90 · ✓ Confirmed', 'DG Class III · ✓ Matched', 'Customs duty: 2.7% · ✓'].map((c) => (
        <div key={c} className="py-1.5">
          <span className="text-[12px]" style={{ color: 'rgba(250,250,250,0.65)' }}>{c}</span>
        </div>
      ))}
    </div>
  )
}

function MarketingUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[260px] mx-auto"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: 'rgba(250,250,250,0.32)' }}>Marketing claims</p>
      {['ISO 9001 certified · ✓', '9/10 practitioners · ✓', '23% efficiency gain · ✓'].map((c) => (
        <div key={c} className="py-1.5">
          <span className="text-[12px]" style={{ color: 'rgba(250,250,250,0.65)' }}>{c}</span>
        </div>
      ))}
    </div>
  )
}

function CurriculumUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[260px] mx-auto"
      style={{ background: 'rgba(12,12,12,0.92)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: 'rgba(250,250,250,0.32)' }}>Curriculum check</p>
      {['A-Level Spec 2026 · ✓', 'Exam board: AQA · ✓', 'Prescribed text · ✓ Confirmed'].map((c) => (
        <div key={c} className="py-1.5">
          <span className="text-[12px]" style={{ color: 'rgba(250,250,250,0.65)' }}>{c}</span>
        </div>
      ))}
    </div>
  )
}

const cases = [
  {
    title: 'Clinical Publications',
    desc: 'Verify drug claims, trial data, and dosing references before they go public.',
    UI: ClinicalUI,
  },
  {
    title: 'Trade Compliance',
    desc: 'Check tariff classifications, dangerous goods rules, and customs procedures.',
    UI: TradeUI,
  },
  {
    title: 'Marketing Copy',
    desc: 'Validate product specs, comparative claims, and statistics attribution.',
    UI: MarketingUI,
  },
  {
    title: 'Curriculum Content',
    desc: 'Confirm curriculum standards, exam specifications, and prescribed texts.',
    UI: CurriculumUI,
  },
]

export default function UseCases() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="usecases"
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
          <span className="eyebrow-pill mb-6 inline-block">Use Cases</span>
          <h2
            className="mb-3 md:mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Built for teams that can't afford to be wrong.
          </h2>
          <p
            className="max-w-[520px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Use ClarifyData across clinical, compliance, marketing, and education workflows.
          </p>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="landscape-card rounded-2xl overflow-hidden flex flex-col min-h-[240px] md:min-h-[320px]"
              style={{
                border: '1px solid rgba(250,250,250,0.07)',
              }}
            >
              {/* Visual */}
              <div className="flex-1 flex items-center justify-center p-6">
                <c.UI />
              </div>
              {/* Text */}
              <div className="px-6 pb-6">
                <h4
                  className="mb-1.5 text-[16px] md:text-[22px]"
                  style={{
                    fontWeight: 500,
                    letterSpacing: '-0.6px',
                    color: 'rgb(250,250,250)',
                  }}
                >
                  {c.title}
                </h4>
                <p style={{ fontSize: '15px', color: 'rgba(250,250,250,0.6)', lineHeight: '22px' }}>
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
