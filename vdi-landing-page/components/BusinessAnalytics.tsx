'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { BarChart3, Search, TrendingUp, AlertCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const analyticsTypes = [
  {
    icon: BarChart3,
    title: 'Descriptive Analysis',
    question: 'What happened?',
    desc: 'Understand historical and current performance.',
  },
  {
    icon: Search,
    title: 'Diagnostic Analysis',
    question: 'Why did it happen?',
    desc: 'Identify patterns, relationships, changes, and possible contributing factors.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analysis',
    question: 'What could happen next?',
    desc: 'Use historical information, trends, and market indicators to evaluate possible outcomes.',
  },
  {
    icon: AlertCircle,
    title: 'Decision Support',
    question: 'What requires attention?',
    desc: 'Identify important risks, opportunities, performance gaps, and changing indicators.',
  },
]

export default function BusinessAnalytics() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="business-analytics"
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
          <span className="eyebrow-pill mb-4 inline-block">Business Analytics</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            Understand What Happened, Why It Happened and What May Matter Next
          </h2>
          <p
            className="max-w-[640px] mx-auto text-[15px] md:text-[17px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Business analytics transforms data into insights that can help organizations understand performance and make better decisions. Clarify Data strengthens this process by improving the structure, quality, context, and reliability of the information being analyzed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {analyticsTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
              className="rounded-2xl p-6 flex flex-col"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(16,16,20,0.95) 100%)'
                  : 'rgba(16,16,20,0.95)',
                border: i % 2 === 0
                  ? `1px solid ${COPPER_BORDER}`
                  : '1px solid rgba(250,250,250,0.08)',
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
                <type.icon className="w-5 h-5" style={{ color: COPPER_COLOR }} />
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-1">{type.title}</h3>
              <p className="text-[13px] font-medium mb-2" style={{ color: COPPER_COLOR }}>{type.question}</p>
              <p className="text-[13px] text-white/65 leading-[20px]">{type.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="text-center"
        >
          <Link
            href="/business-analytics"
            className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors"
            style={{ color: COPPER_COLOR }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Explore Business Analytics <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
