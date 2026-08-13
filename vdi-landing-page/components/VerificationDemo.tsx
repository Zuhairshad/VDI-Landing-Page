'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { CheckCircle2, AlertCircle, Clock, HelpCircle } from 'lucide-react'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const demoStatement = `"The global e-commerce market grew by 28% in 2024, with mobile commerce accounting for more than 60% of all transactions. Consumer spending in the healthcare sector is expected to increase by 15% annually through 2027, driven by digital health adoption."`

const claims = [
  { id: 1, text: 'Global e-commerce market grew by 28% in 2024', verdict: 'Partially Verified', color: 'rgba(234,179,8,0.8)', icon: AlertCircle },
  { id: 2, text: 'Mobile commerce accounts for more than 60% of all transactions', verdict: 'Verified', color: 'rgba(74,222,128,0.8)', icon: CheckCircle2 },
  { id: 3, text: 'Healthcare consumer spending to increase 15% annually through 2027', verdict: 'Outdated', color: 'rgba(156,163,175,0.8)', icon: Clock },
  { id: 4, text: 'Growth driven by digital health adoption', verdict: 'Requires Review', color: COPPER_COLOR, icon: HelpCircle },
]

export default function VerificationDemo() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="verification-demo"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(194, 89, 24, 0.15) 0%, rgba(10,10,10,0) 70%)' }}
      />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-block">See Verification in Action</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            See How One AI Answer Becomes Verifiable Evidence
          </h2>
          <p
            className="max-w-[600px] mx-auto text-[15px] md:text-[17px] mb-3"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Instead of a generic promise, here is how the verification workflow applies to a realistic AI-generated paragraph.
          </p>
          <p className="text-[12px]" style={{ color: 'rgba(250,250,250,0.3)' }}>Illustrative example — not actual production results</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(14,14,18,0.98)',
            border: '1px solid rgba(250,250,250,0.08)',
          }}
        >
          {/* Header bar */}
          <div
            className="px-6 py-4 flex items-center justify-between border-b"
            style={{ borderColor: 'rgba(250,250,250,0.06)' }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-wider" style={{ color: COPPER_COLOR }}>
              Clarify Data — Verification Workflow
            </span>
            <span className="text-[11px] px-2.5 py-1 rounded-full" style={{ background: COPPER_BG, color: COPPER_COLOR, border: `1px solid ${COPPER_BORDER}` }}>
              Illustrative example
            </span>
          </div>

          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: 'rgba(250,250,250,0.06)' }}>
            {/* Left: Input + Claims detected */}
            <div className="p-6 flex flex-col gap-5">
              {/* Original AI Statement */}
              <div>
                <p className="text-[11px] uppercase tracking-wider font-semibold mb-2" style={{ color: 'rgba(250,250,250,0.32)' }}>
                  Original AI Statement
                </p>
                <div
                  className="p-4 rounded-xl text-[13px] leading-[20px] italic"
                  style={{ background: 'rgba(250,250,250,0.03)', border: '1px solid rgba(250,250,250,0.07)', color: 'rgba(250,250,250,0.75)' }}
                >
                  {demoStatement}
                </div>
              </div>

              {/* Claims detected */}
              <div>
                <p className="text-[11px] uppercase tracking-wider font-semibold mb-2" style={{ color: 'rgba(250,250,250,0.32)' }}>
                  Claims Detected
                </p>
                <div
                  className="p-3 rounded-lg flex items-center justify-between text-[13px]"
                  style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                >
                  <span className="text-white/80">Individual claims identified</span>
                  <span className="font-bold" style={{ color: COPPER_COLOR }}>4</span>
                </div>
              </div>

              {/* Trust Index */}
              <div>
                <p className="text-[11px] uppercase tracking-wider font-semibold mb-2" style={{ color: 'rgba(250,250,250,0.32)' }}>
                  Trust Index
                </p>
                <div
                  className="p-3 rounded-lg"
                  style={{ background: 'rgba(250,250,250,0.03)', border: '1px solid rgba(250,250,250,0.07)' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[13px] text-white/80">Overall Evidence Strength</span>
                    <span className="text-[13px] font-semibold" style={{ color: COPPER_COLOR }}>Moderate</span>
                  </div>
                  <div className="w-full rounded-full h-1.5" style={{ background: 'rgba(250,250,250,0.08)' }}>
                    <div className="h-1.5 rounded-full" style={{ width: '55%', background: COPPER_COLOR }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Verification Results */}
            <div className="p-6 flex flex-col gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-wider font-semibold mb-3" style={{ color: 'rgba(250,250,250,0.32)' }}>
                  Verification Results
                </p>
                <div className="flex flex-col gap-2.5">
                  {claims.map(claim => (
                    <div
                      key={claim.id}
                      className="p-3 rounded-xl flex items-start gap-3"
                      style={{ background: 'rgba(250,250,250,0.03)', border: '1px solid rgba(250,250,250,0.06)' }}
                    >
                      <claim.icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: claim.color }} />
                      <div className="flex-1">
                        <p className="text-[12px] text-white/80 leading-[18px] mb-1">{claim.text}</p>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
                          style={{ background: `${claim.color}20`, color: claim.color }}
                        >
                          {claim.verdict}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Human review note */}
              <div
                className="p-3 rounded-lg text-[12px] leading-[18px]"
                style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: 'rgba(250,250,250,0.8)' }}
              >
                <strong style={{ color: COPPER_COLOR }}>Analyst Note:</strong> The healthcare forecast figure references pre-2024 projections. Updated market data suggests revised growth assumptions. Claim escalated for expert review.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
