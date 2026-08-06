'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import ShaderBackground from './ShaderBackground'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      id="overview"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'rgb(28,9,2)' }}
    >
      <ShaderBackground />

      {/* Subtle vignette so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,3,1,0.28) 0%, rgba(10,3,1,0.0) 28%, rgba(10,3,1,0.0) 68%, rgba(10,3,1,0.38) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-5 py-24 md:py-32 max-w-[880px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="eyebrow-pill">⬡ Human Verification Platform</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-6 text-[30px] md:text-[56px]"
          style={{ fontWeight: 500, letterSpacing: '-1.68px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
        >
          The machine wrote it. Someone still has to stand behind it.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-10 max-w-[560px] text-[15px] md:text-[18px]"
          style={{ fontWeight: 500, lineHeight: '26px', color: 'rgba(250,250,250,0.8)' }}
        >
          ClarifyData decomposes AI-generated content into individual claims and validates each
          against human-verified facts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <a
            href="#pricing"
            className="px-6 py-3 rounded-full text-[15px] md:text-[16px] font-medium transition-colors duration-200"
            style={{ background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.88)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgb(250,250,250)' }}
          >
            Request early access
          </a>
          <a
            href="#setup"
            className="px-6 py-3 rounded-full text-[15px] md:text-[16px] font-medium transition-colors duration-200"
            style={{ background: 'rgba(250,250,250,0.15)', color: 'rgb(250,250,250)', border: '1px solid rgba(250,250,250,0.2)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.22)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.15)' }}
          >
            See the method
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.32 }}
          style={{ fontSize: '13px', color: 'rgba(250,250,250,0.32)' }}
        >
          SOC 2 ready · GDPR compliant · 120 specialists · EU AI Act Article 50
        </motion.p>
      </div>
    </section>
  )
}
