'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowDown } from 'lucide-react'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const workflowSteps = [
  'Raw Data',
  'Data Sorting & Cleaning',
  'Data Validation',
  'Data Verification',
  'Market Intelligence',
  'Data Analytics',
  'Business Intelligence',
  'Human Verification When Needed',
  'Business Decision',
]

const steps = [
  {
    num: '01/',
    title: 'Submit Your Data or Content',
    desc: 'Upload CSV, Excel, documents, AI-generated content, business reports, or API data. Clarify Data identifies the structure and determines what requires cleaning, analysis, or verification.',
  },
  {
    num: '02/',
    title: 'Structure, Analyze and Verify',
    desc: 'The platform cleans datasets, identifies individual claims, and compares information with verified datasets, current market intelligence, and relevant benchmarks.',
  },
  {
    num: '03/',
    title: 'Get Actionable Output',
    desc: 'Receive clean datasets, verification reports, business intelligence, market indicators, benchmark reports, risk analysis, dynamic reports, and recommended actions.',
  },
]

export default function Setup() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="setup"
      className="section-pad"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="eyebrow-pill mb-6 inline-block">From Raw Data to Trusted Decisions</span>
          <h2
            className="mb-3 md:mb-4 text-[28px] md:text-[48px]"
            style={{ fontWeight: 500, letterSpacing: '-1.44px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            One Connected Data Intelligence Workflow
          </h2>
          <p
            className="max-w-[560px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Clarify Data connects the stages that businesses normally handle through separate tools and manual processes.
          </p>
        </motion.div>

        {/* Workflow visual */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="landscape-card rounded-2xl overflow-hidden mb-8 flex items-center justify-center"
          style={{ border: '1px solid rgba(250,250,250,0.07)', padding: '40px 32px' }}
        >
          <div className="flex flex-col items-center gap-1 w-full max-w-[420px]">
            {workflowSteps.map((step, i) => (
              <div key={step} className="flex flex-col items-center w-full">
                <div
                  className="w-full text-center px-5 py-2.5 rounded-xl text-[13px] font-medium"
                  style={{
                    background: i === 0 || i === workflowSteps.length - 1
                      ? COPPER_BG
                      : 'rgba(250,250,250,0.04)',
                    border: i === 0 || i === workflowSteps.length - 1
                      ? `1px solid ${COPPER_BORDER}`
                      : '1px solid rgba(250,250,250,0.08)',
                    color: i === 0 || i === workflowSteps.length - 1
                      ? COPPER_COLOR
                      : 'rgba(250,250,250,0.8)',
                  }}
                >
                  {step}
                </div>
                {i < workflowSteps.length - 1 && (
                  <ArrowDown className="w-3.5 h-3.5 my-0.5" style={{ color: 'rgba(250,250,250,0.2)' }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <p className="text-[14px] font-medium mb-2" style={{ color: 'rgba(250,250,250,0.32)' }}>
                {step.num}
              </p>
              <h4
                className="mb-2"
                style={{ fontSize: '20px', fontWeight: 500, letterSpacing: '-0.5px', color: 'rgb(250,250,250)' }}
              >
                {step.title}
              </h4>
              <p style={{ fontSize: '15px', color: 'rgba(250,250,250,0.6)', lineHeight: '22px' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
