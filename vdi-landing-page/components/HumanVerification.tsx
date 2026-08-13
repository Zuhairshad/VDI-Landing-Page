'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Users, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const analystCapabilities = [
  'Review the original question or claim',
  'Examine the AI-generated information',
  'Review available market data',
  'Evaluate source quality',
  'Identify missing or conflicting evidence',
  'Consider relevant industry context',
  'Confirm or revise the automated finding',
  'Add professional observations',
  'Review the verification result',
  'Support the final report',
]

const triggers = [
  'Conflicting evidence',
  'Rapid market changes',
  'Limited datasets',
  'Industry-specific context',
  'High-impact decisions',
  'Sensitive information',
  'Unusual market behavior',
  'Uncertain forecasts',
]

export default function HumanVerification() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="human-verification"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-block">Human + AI</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            Automation for Scale.{' '}
            <span style={{ color: COPPER_COLOR }}>Human Judgment Where It Matters.</span>
          </h2>
          <p
            className="max-w-[620px] mx-auto text-[15px] md:text-[17px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Automated systems can process large volumes of information quickly. Not every business question can be resolved automatically. When additional judgment is required, Clarify Data can route the finding to an experienced analyst.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* When human review is triggered */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-7"
            style={{
              background: 'rgba(16,16,20,0.95)',
              border: '1px solid rgba(250,250,250,0.08)',
            }}
          >
            <h3 className="text-[18px] font-semibold text-white mb-3">When Human Review Is Used</h3>
            <p className="text-[14px] text-white/65 leading-[22px] mb-4">Some findings involve:</p>
            <ul className="grid grid-cols-2 gap-2">
              {triggers.map(t => (
                <li key={t} className="flex items-start gap-2 text-[13px] text-white/75">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: COPPER_COLOR }} />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What analysts can do */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl p-7"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
              <Users className="w-5 h-5" style={{ color: COPPER_COLOR }} />
            </div>
            <h3 className="text-[18px] font-semibold text-white mb-3">Human Analysts Can</h3>
            <ul className="flex flex-col gap-2">
              {analystCapabilities.map(c => (
                <li key={c} className="flex items-center gap-2 text-[13px] text-white/80">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: COPPER_COLOR }} />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="text-center"
        >
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
            style={{ color: COPPER_COLOR }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Learn About Human Verification <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
