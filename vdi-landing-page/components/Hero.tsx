'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import ShaderBackground from './ShaderBackground'
import { Sparkles, ShieldCheck } from 'lucide-react'

// Site copper color token
const COPPER_COLOR = 'rgb(194, 89, 24)'

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

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,3,1,0.28) 0%, rgba(10,3,1,0.0) 28%, rgba(10,3,1,0.0) 68%, rgba(10,3,1,0.38) 100%)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-5 py-24 md:py-32 max-w-[920px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="eyebrow-pill flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
            <span>Verified Data Intelligence</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-6 text-[32px] md:text-[58px]"
          style={{ fontWeight: 600, letterSpacing: '-1.8px', lineHeight: '1.18', color: 'rgb(250,250,250)' }}
        >
          Verified Data Intelligence for Smarter Business Decisions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mb-10 max-w-[680px] text-[16px] md:text-[19px]"
          style={{ fontWeight: 450, lineHeight: '28px', color: 'rgba(250,250,250,0.85)' }}
        >
          Clarify Data combines automated data sorting, continuously updated market intelligence, AI claim verification, business benchmarking, and expert human review to transform raw information into structured, actionable insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <a
            href="#features"
            className="px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-medium transition-all duration-200 shadow-lg"
            style={{ background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.88)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgb(250,250,250)' }}
          >
            Explore Platform Modules
          </a>
          <a
            href="#workflows"
            className="px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-medium transition-all duration-200"
            style={{ background: 'rgba(250,250,250,0.12)', color: 'rgb(250,250,250)', border: '1px solid rgba(250,250,250,0.2)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.2)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.12)' }}
          >
            View Workflows & Market Default
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex items-center gap-2 text-[13px] text-white/40"
        >
          <ShieldCheck className="w-4 h-4" style={{ color: COPPER_COLOR }} />
          <span>Serving E-Commerce · Medical · Supply Chain · Education</span>
        </motion.p>
      </div>
    </section>
  )
}
