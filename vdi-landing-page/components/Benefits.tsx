'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  TrendingUp,
  FileCheck2,
  Lock,
  Zap,
  ArrowRight
} from 'lucide-react'

// Site copper color token
const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'

const problems = [
  'Messy, duplicated, and inconsistently formatted datasets',
  'Outdated market information and unverified AI assumptions',
  'Conflicting industry indicators without supporting evidence',
  'Static business reports that become outdated instantly',
  'Lack of human expert verification for critical decisions'
]

const advantages = [
  {
    icon: <Database className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: 'Multi-Format Data Sorting & Cleaning',
    desc: 'Converts raw CSV, Excel, documents, and API data into clean, mapped, deduplicated datasets with automated quality indicators.'
  },
  {
    icon: <TrendingUp className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: 'Continuously Updated Market Intelligence',
    desc: 'Real-time market tracking that updates indicators daily and delivers automated trigger alerts when key trends shift.'
  },
  {
    icon: <FileCheck2 className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: 'AI Claim Verification & Scoring',
    desc: 'Evaluates content from ChatGPT, Gemini, Claude, Grok, and DeepSeek, providing confidence scores and evidence-backed verdicts.'
  },
  {
    icon: <Lock className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: 'Private Business Benchmarking & Audits',
    desc: 'Processes sensitive corporate metrics with zero permanent DB storage to generate custom BI reports and market performance comparisons.'
  },
  {
    icon: <Zap className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: 'Dynamic Reports & Divergence Alerts',
    desc: 'Version-controlled reports with "What Changed" sections and real-time alerts when actual market data diverges from expectations.'
  }
]

export default function Benefits() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="benefits"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-block">The Clarify Data Advantage</span>
          <h2
            className="mb-4 text-[28px] md:text-[46px]"
            style={{
              fontWeight: 600,
              letterSpacing: '-1.2px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Why Businesses Need Clarify Data
          </h2>
          <p
            className="max-w-[660px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Organizations work with increasing volumes of raw data, AI content, and market reports — but more data doesn't equal better decisions.
          </p>
        </motion.div>

        {/* Problem vs Solution Split */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Common Problems */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 rounded-2xl p-6 md:p-8 flex flex-col justify-between"
            style={{
              background: 'rgba(28, 12, 10, 0.7)',
              border: '1px solid rgba(194, 89, 24, 0.3)',
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4" style={{ color: COPPER_COLOR }}>
                <AlertTriangle className="w-5 h-5" style={{ color: COPPER_COLOR }} />
                <h3 className="text-[18px] font-semibold text-white">Common Market Challenges</h3>
              </div>
              <p className="text-[13px] text-white/60 mb-5 leading-[20px]">
                Businesses struggle with unverified data, outdated reports, and risky AI assumptions:
              </p>
              <div className="space-y-3">
                {problems.map((prob) => (
                  <div key={prob} className="flex items-start gap-2.5 text-[13px] text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: COPPER_COLOR }} />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-right">
              <span className="text-[12px] font-medium inline-flex items-center gap-1" style={{ color: COPPER_COLOR }}>
                Clarify Data Solution <ArrowRight className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
              </span>
            </div>
          </motion.div>

          {/* Right Column: Clarify Data Advantages Grid */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8 grid sm:grid-cols-2 gap-4"
          >
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="landscape-card rounded-2xl p-5 md:p-6 flex flex-col justify-between"
                style={{
                  border: '1px solid rgba(250,250,250,0.08)',
                }}
              >
                <div>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3.5 border border-white/10" style={{ background: COPPER_BG }}>
                    {adv.icon}
                  </div>
                  <h4 className="text-[16px] font-semibold text-white mb-2">
                    {adv.title}
                  </h4>
                  <p className="text-[13px] text-white/70 leading-[20px]">
                    {adv.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-medium" style={{ color: COPPER_COLOR }}>
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
                  <span>Verified Advantage</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
