'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const resources = [
  {
    title: 'Data Verification',
    desc: 'Learn how organizations verify data, evaluate evidence, identify unreliable information, and improve data accuracy.',
    href: '/data-verification',
  },
  {
    title: 'Business Intelligence',
    desc: 'Learn how businesses transform trusted data into reports, KPIs, benchmarks, insights, and better decisions.',
    href: '/business-intelligence',
  },
  {
    title: 'Data Analytics',
    desc: 'Understand the processes, techniques, and roles involved in turning raw data into meaningful insights.',
    href: '/data-analytics',
  },
  {
    title: 'Business Analysis',
    desc: 'Learn how business analysts use data, market intelligence, and evidence to evaluate problems and opportunities.',
    href: '/business-analysis',
  },
  {
    title: 'Data Validation',
    desc: 'Understand validation methods, tools, examples, and the difference between validation and verification.',
    href: '/data-validation',
  },
  {
    title: 'Data Sorting',
    desc: 'Learn how to clean, organize, standardize, deduplicate, and prepare raw data for analysis.',
    href: '/data-sorting',
  },
]

export default function SeoHub() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="learn"
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
          <span className="eyebrow-pill mb-4 inline-block">Learn</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            Data Intelligence Resources
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 + i * 0.06 }}
            >
              <Link
                href={resource.href}
                className="block rounded-2xl p-6 h-full transition-all duration-300 group"
                style={{
                  background: 'rgba(16,16,20,0.95)',
                  border: '1px solid rgba(250,250,250,0.07)',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = COPPER_BORDER)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(250,250,250,0.07)')}
              >
                <h3 className="text-[18px] font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-[13px] text-white/60 leading-[20px] mb-4">{resource.desc}</p>
                <span
                  className="flex items-center gap-1.5 text-[13px] font-medium"
                  style={{ color: COPPER_COLOR }}
                >
                  Explore {resource.title} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
