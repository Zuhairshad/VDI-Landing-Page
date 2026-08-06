'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import ShaderBackground from './ShaderBackground'

const testimonials = [
  {
    id: 0,
    cardTitle: 'From AI-generated content to verified, exportable records.',
    quote:
      'ClarifyData helped our clinical team verify content at scale without growing our fact-checking headcount. What used to take days now runs automatically in the background.',
    name: 'Dr. Amara Osei-Bonsu',
    role: 'Head of Clinical Publications, Meridian Health',
    avatar: 'AO',
  },
  {
    id: 1,
    cardTitle: 'From tariff guesswork to audit-ready compliance documentation.',
    quote:
      'Tariff classification errors were costing us on every cross-border shipment. We stopped second-guessing AI output and started verifying it. Record export made our customs audits straightforward for the first time.',
    name: 'Tom Kirwan',
    role: 'Trade Compliance Director, NorthRoute Freight',
    avatar: 'TK',
  },
  {
    id: 2,
    cardTitle: 'From bottlenecked fact-checking to minutes-per-piece turnaround.',
    quote:
      'AI-written content was fast but needed human eyes on every fact before going live. That was the bottleneck. ClarifyData moved that check from hours to minutes.',
    name: 'Rachel Stenberg',
    role: 'VP Marketing, Formstack',
    avatar: 'RS',
  },
]

const stats = [
  { value: '69–88%', label: 'reduction in undetected hallucinations' },
  { value: '4.3×',  label: 'faster than manual verification' },
  { value: '98%',   label: 'specialist accuracy rate' },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden section-pad"
      style={{ background: 'rgb(28,9,2)' }}
    >
      {/* Same WebGL shader as hero */}
      <ShaderBackground />

      {/* Subtle top/bottom darkening */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,3,1,0.32) 0%, rgba(10,3,1,0.0) 20%, rgba(10,3,1,0.0) 80%, rgba(10,3,1,0.32) 100%)',
        }}
      />

      <div className="section-inner relative z-10">

        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="eyebrow-pill mb-6 inline-block">Customer Stories</span>
          <h2
            className="mb-3 text-[28px] md:text-[48px]"
            style={{ fontWeight: 500, letterSpacing: '-1.44px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            Teams verify hours of content every week.
          </h2>
          <p
            className="max-w-[420px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.75)', lineHeight: '26px' }}
          >
            See how teams use ClarifyData to publish AI content they can stand behind.
          </p>
        </div>

        {/* Testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-7 md:p-10 mb-6"
            style={{
              background: 'rgba(8,3,1,0.80)',
              border: '1px solid rgba(250,250,250,0.1)',
            }}
          >
            <p
              className="mb-5 text-[17px] md:text-[20px]"
              style={{ fontWeight: 500, color: 'rgb(250,250,250)', lineHeight: '1.4', letterSpacing: '-0.3px' }}
            >
              {current.cardTitle}
            </p>

            <p
              className="mb-8 text-[14px] md:text-[16px]"
              style={{ lineHeight: '26px', color: 'rgba(250,250,250,0.65)', maxWidth: '640px' }}
            >
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                style={{ background: 'rgba(84,27,4,0.9)', color: 'rgb(250,250,250)', border: '2px solid rgba(250,250,250,0.15)' }}
              >
                {current.avatar}
              </div>
              <div>
                <p className="text-[15px] font-semibold" style={{ color: 'rgb(250,250,250)' }}>
                  {current.name}
                </p>
                <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.45)' }}>
                  {current.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats + arrows */}
        <div className="flex items-end justify-between gap-4">
          <div className="grid grid-cols-3 flex-1">
            {stats.map((s, i) => (
              <div
                key={s.value}
                className="pr-4 md:pr-10"
                style={{
                  borderLeft: i > 0 ? '1px solid rgba(250,250,250,0.12)' : 'none',
                  paddingLeft: i > 0 ? '16px' : '0',
                }}
              >
                <p
                  className="text-[26px] md:text-[40px]"
                  style={{ fontWeight: 500, letterSpacing: '-1px', lineHeight: '1', color: 'rgb(250,250,250)', marginBottom: '6px' }}
                >
                  {s.value}
                </p>
                <p className="text-[11px] md:text-[14px]" style={{ color: 'rgba(250,250,250,0.5)', lineHeight: '18px' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 shrink-0 pb-1">
            <button
              onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 text-[11px]"
              style={{ background: 'rgba(250,250,250,0.1)', color: 'rgba(250,250,250,0.8)', border: '1px solid rgba(250,250,250,0.15)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.2)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.1)' }}
              aria-label="Previous"
            >◀</button>
            <button
              onClick={() => setActive((a) => (a + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 text-[11px]"
              style={{ background: 'rgba(250,250,250,0.1)', color: 'rgba(250,250,250,0.8)', border: '1px solid rgba(250,250,250,0.15)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.2)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(250,250,250,0.1)' }}
              aria-label="Next"
            >▶</button>
          </div>
        </div>

      </div>
    </section>
  )
}
