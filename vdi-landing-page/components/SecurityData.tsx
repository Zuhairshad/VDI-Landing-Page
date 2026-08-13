'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const dataPoints = [
  'Why the information is being processed',
  'Whether information is stored',
  'How long information is retained',
  'Who can access it',
  'Which security controls apply',
  'When information is deleted',
  'Whether information can be used for model training',
]

const enterpriseItems = [
  'Data-retention policies',
  'Access controls',
  'Security requirements',
  'Reporting requirements',
  'Privacy configurations',
]

export default function SecurityData() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="data-handling"
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
          <span className="eyebrow-pill mb-4 inline-block">Data Handling</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            Your Business Data Should Come With Clear Rules
          </h2>
          <p
            className="max-w-[620px] mx-auto text-[15px] md:text-[17px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Before an organization provides sensitive information, it should understand exactly how that information will be handled.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* What we communicate */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-7"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(16,16,20,0.95) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
              <ShieldCheck className="w-5 h-5" style={{ color: COPPER_COLOR }} />
            </div>
            <h3 className="text-[18px] font-semibold text-white mb-3">Clarify Data Communicates</h3>
            <ul className="flex flex-col gap-2.5">
              {dataPoints.map(p => (
                <li key={p} className="flex items-center gap-2 text-[14px] text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: COPPER_COLOR }} />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl p-7 flex flex-col"
            style={{
              background: 'rgba(16,16,20,0.95)',
              border: '1px solid rgba(250,250,250,0.08)',
            }}
          >
            <h3 className="text-[18px] font-semibold text-white mb-3">Enterprise Requirements</h3>
            <p className="text-[14px] text-white/65 leading-[22px] mb-4">
              Enterprise requirements may include customized configurations for:
            </p>
            <ul className="flex flex-col gap-2.5 mb-6">
              {enterpriseItems.map(item => (
                <li key={item} className="flex items-center gap-2 text-[14px] text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: COPPER_COLOR }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 mt-auto">
              <Link
                href="/privacy-policy"
                className="text-[13px] transition-colors"
                style={{ color: COPPER_COLOR }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Privacy Policy →
              </Link>
              <Link
                href="/dpa"
                className="text-[13px] transition-colors"
                style={{ color: COPPER_COLOR }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Data Processing Agreement →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
