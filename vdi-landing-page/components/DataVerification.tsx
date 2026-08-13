'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { CheckCircle2, Shield, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const validationPoints = [
  'Missing values',
  'Invalid formats',
  'Incorrect data types',
  'Duplicate records',
  'Inconsistent categories',
  'Structural problems',
]

const verificationPoints = [
  'Source quality',
  'Evidence strength',
  'Information freshness',
  'Agreement between sources',
  'Historical information',
  'Relevant market data',
  'Human expert review',
]

export default function DataVerification() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="data-verification"
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
          <span className="eyebrow-pill mb-4 inline-block">Data Verification</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            Data Validation Checks the Rules.{' '}
            <span style={{ color: COPPER_COLOR }}>Data Verification Checks the Evidence.</span>
          </h2>
          <p
            className="max-w-[640px] mx-auto text-[15px] md:text-[17px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            These concepts are related, but they are not identical. Clarify Data connects data sorting, data validation, data verification, and business intelligence into one broader workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Data Validation */}
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
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
              <CheckCircle2 className="w-5 h-5" style={{ color: COPPER_COLOR }} />
            </div>
            <h3 className="text-[20px] font-semibold text-white mb-2">Data Validation</h3>
            <p className="text-[14px] text-white/70 leading-[22px] mb-5">
              Data validation helps determine whether information follows required structures, formats, rules, ranges, or business requirements. It can identify issues such as:
            </p>
            <ul className="flex flex-col gap-2">
              {validationPoints.map(point => (
                <li key={point} className="flex items-center gap-2 text-[14px] text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: COPPER_COLOR }} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Data Verification */}
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
              <Shield className="w-5 h-5" style={{ color: COPPER_COLOR }} />
            </div>
            <h3 className="text-[20px] font-semibold text-white mb-2">Data Verification</h3>
            <p className="text-[14px] text-white/70 leading-[22px] mb-5">
              Data verification focuses on whether important information is accurate, supported, current, consistent, and reliable enough for its intended use. Verification may consider:
            </p>
            <ul className="flex flex-col gap-2">
              {verificationPoints.map(point => (
                <li key={point} className="flex items-center gap-2 text-[14px] text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: COPPER_COLOR }} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ background: 'rgba(250,250,250,0.03)', border: '1px solid rgba(250,250,250,0.07)' }}
        >
          <p className="text-[14px] text-white/70 leading-[22px] max-w-[600px]">
            <strong className="text-white/90">Why both matter:</strong> Validated data can still contain incorrect information. Verified information can also be difficult to analyze if it is poorly structured.
          </p>
          <Link
            href="/data-verification"
            className="flex items-center gap-2 text-[14px] font-medium whitespace-nowrap transition-colors"
            style={{ color: COPPER_COLOR }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Learn About Data Verification <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
