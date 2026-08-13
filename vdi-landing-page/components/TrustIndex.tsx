'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const trustFactors = [
  'Quality of available sources',
  'Number of supporting data points',
  'Freshness of information',
  'Consistency between sources',
  'Difference between AI output and market data',
  'Historical accuracy',
  'Industry relevance',
  'Level of uncertainty',
  'Human verification status',
]

const vdiStatuses = [
  { icon: '✓', label: 'Fully verified', desc: 'Strong evidence support' },
  { icon: '◐', label: 'Partially verified', desc: 'Some elements supported' },
  { icon: '○', label: 'Unverified', desc: 'Insufficient evidence' },
  { icon: '⚡', label: 'Conflicting', desc: 'Sources disagree' },
  { icon: '↻', label: 'Outdated', desc: 'Newer evidence exists' },
  { icon: '…', label: 'Requires further analysis', desc: 'More review needed' },
  { icon: '◈', label: 'Human verified', desc: 'Expert reviewed' },
  { icon: '⚠', label: 'High-risk or high-impact', desc: 'Requires careful review' },
]

export default function TrustIndex() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="trust-index"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(194, 89, 24, 0.15) 0%, rgba(10,10,10,0) 70%)' }}
      />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-block">Scoring</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            {"Don't Just Get a Verdict."}{' '}
            <span style={{ color: COPPER_COLOR }}>Understand the Strength of the Evidence.</span>
          </h2>
          <p
            className="max-w-[620px] mx-auto text-[15px] md:text-[17px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            The Clarify Data Trust Index communicates how strongly available evidence supports a claim, report, or dataset. The goal is not to replace uncertainty with another black box — it is to make uncertainty visible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Trust Index */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-7"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <h3 className="text-[20px] font-semibold text-white mb-2">Trust Index</h3>
            <p className="text-[14px] text-white/70 leading-[22px] mb-5">
              The score considers factors such as:
            </p>
            <ul className="flex flex-col gap-2 mb-5">
              {trustFactors.map(f => (
                <li key={f} className="flex items-center gap-2 text-[14px] text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: COPPER_COLOR }} />
                  {f}
                </li>
              ))}
            </ul>
            <div className="p-3 rounded-xl text-[13px]" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
              <p className="text-white/80">A lower score can indicate limited evidence, conflicting sources, outdated information, or the need for expert review.</p>
            </div>
          </motion.div>

          {/* Verified Data Index */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl p-7"
            style={{
              background: 'rgba(16,16,20,0.95)',
              border: '1px solid rgba(250,250,250,0.08)',
            }}
          >
            <h3 className="text-[20px] font-semibold text-white mb-2">Verified Data Index</h3>
            <p className="text-[14px] text-white/70 leading-[22px] mb-5">
              Provides additional context about the level of confirmation achieved. Information can be classified as:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {vdiStatuses.map(s => (
                <div
                  key={s.label}
                  className="flex items-start gap-2 p-2.5 rounded-lg"
                  style={{ background: 'rgba(250,250,250,0.03)', border: '1px solid rgba(250,250,250,0.06)' }}
                >
                  <span className="text-[16px] shrink-0 leading-tight">{s.icon}</span>
                  <div>
                    <p className="text-[12px] font-semibold text-white/90">{s.label}</p>
                    <p className="text-[11px] text-white/45">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="text-center"
        >
          <Link
            href="/trust-index"
            className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
            style={{ color: COPPER_COLOR }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Read the Trust Index Methodology <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
