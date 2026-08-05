'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const statements = [
  {
    line: 'AI writes fast.',
    sub: 'In 2026, 85% of enterprises use AI to generate content at scale.',
  },
  {
    line: 'Errors travel faster.',
    sub: 'Leading models hallucinate on 69–88% of legal queries. The same happens in clinical, compliance, and educational content.',
  },
  {
    line: 'Verification is the gap between shipping and standing behind it.',
    sub: 'ClarifyData closes that gap — claim by claim, specialist by specialist.',
  },
]

function Statement({ line, sub, index }: { line: string; sub: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.44, 0, 0.56, 1] }}
      className="border-t py-14 md:py-16 grid md:grid-cols-[1fr_360px] gap-8 items-start"
      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <h2
        className="text-[32px] md:text-[40px] font-medium leading-[1.2] tracking-[-1.6px]"
        style={{ color: index < 2 ? 'rgba(255,243,240,0.55)' : 'rgb(255,243,240)' }}
      >
        {line}
      </h2>
      <p
        className="text-[15px] leading-6 tracking-[-0.15px] pt-1"
        style={{ color: 'rgba(255,255,255,0.45)' }}
      >
        {sub}
      </p>
    </motion.div>
  )
}

export default function Intro() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="inner">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
          className="text-[12px] font-medium uppercase tracking-[0.07em] mb-12"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Intro
        </motion.p>

        {statements.map((s, i) => (
          <Statement key={i} {...s} index={i} />
        ))}
      </div>
    </section>
  )
}
