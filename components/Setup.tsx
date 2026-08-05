'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

function SetupMockUI() {
  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-[680px] mx-auto"
      style={{
        background: 'rgba(12,12,12,0.92)',
        border: '1px solid rgba(250,250,250,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Header */}
      <div
        className="px-5 py-4 border-b"
        style={{ borderColor: 'rgba(250,250,250,0.07)' }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold"
            style={{ background: 'rgba(84,27,4,0.7)', color: 'rgb(250,250,250)' }}
          >
            PN
          </div>
          <div>
            <p className="text-[13px] font-medium" style={{ color: 'rgb(250,250,250)' }}>
              Dr. Priya Nair
            </p>
            <p className="text-[11px]" style={{ color: 'rgba(250,250,250,0.5)' }}>
              Head of Clinical Content, Helix Medical
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(250,250,250,0.07)' }}>
        {/* Left: sectors */}
        <div className="p-5" style={{ background: 'rgba(12,12,12,0.92)' }}>
          <p className="text-[11px] uppercase tracking-wider mb-4" style={{ color: 'rgba(250,250,250,0.32)' }}>
            Connect sectors
          </p>
          {['Medical', 'Logistics', 'Education', 'Marketing'].map((s) => (
            <div key={s} className="flex items-center justify-between py-1.5">
              <span className="text-[13px]" style={{ color: 'rgba(250,250,250,0.7)' }}>{s}</span>
              <span className="text-[11px] font-medium" style={{ color: 'rgb(74,222,128)' }}>✓</span>
            </div>
          ))}
        </div>

        {/* Right: activity */}
        <div className="p-5" style={{ background: 'rgba(12,12,12,0.92)' }}>
          <p className="text-[11px] uppercase tracking-wider mb-4" style={{ color: 'rgba(250,250,250,0.32)' }}>
            Activity
          </p>
          {[
            { event: 'Claim extracted', time: '0:01' },
            { event: 'Bank match found', time: '0:02' },
            { event: 'Routing to specialist', time: '0:03' },
            { event: 'Record generated', time: '0:18' },
          ].map((item) => (
            <div key={item.event} className="flex items-center justify-between py-1.5">
              <span className="text-[12px]" style={{ color: 'rgba(250,250,250,0.6)' }}>{item.event}</span>
              <span className="text-[11px]" style={{ color: 'rgba(250,250,250,0.32)' }}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const steps = [
  {
    num: '01/',
    title: 'Extract claims',
    desc: 'Submit AI-generated content. ClarifyData breaks it into individual, checkable assertions.',
  },
  {
    num: '02/',
    title: 'Match & route',
    desc: 'Claims hit the fact bank instantly. Unmatched ones go to the right specialist.',
  },
  {
    num: '03/',
    title: 'Get your record',
    desc: 'Receive verdicts with source, verifier, and export-ready documentation.',
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="eyebrow-pill mb-6 inline-block">Simple Setup</span>
          <h2
            className="mb-3 md:mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Verify in three steps.
          </h2>
          <p
            className="max-w-[520px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Connect your content, select your sectors, and let ClarifyData route every claim to the right specialist.
          </p>
        </motion.div>

        {/* Large card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="landscape-card rounded-2xl overflow-hidden mb-8 flex items-center justify-center min-h-[320px] md:min-h-[480px]"
          style={{
            border: '1px solid rgba(250,250,250,0.07)',
            padding: '40px 32px',
          }}
        >
          <SetupMockUI />
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
