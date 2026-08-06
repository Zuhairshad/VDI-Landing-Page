'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  {
    value: '69–88',
    suffix: '%',
    label: 'hallucination rate',
    sub: 'Leading AI models answering legal queries — Stanford RegLab & HAI',
  },
  {
    value: '4.3',
    suffix: ' hrs',
    label: 'per employee weekly',
    sub: 'Average time organisations spend manually verifying AI-generated content',
  },
  {
    value: '85',
    suffix: '%',
    label: 'enterprise AI adoption',
    sub: 'Share of enterprises using AI to generate content in 2026',
  },
  {
    value: '50',
    suffix: '+',
    label: 'papers with false citations',
    sub: 'Papers at NeurIPS 2025 containing AI-hallucinated references that passed peer review',
  },
]

function CountUp({ value, inView }: { value: string; inView: boolean }) {
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!inView) return
    if (value.includes('–')) {
      setDisplay(value)
      return
    }
    const num = parseFloat(value)
    const duration = 1800
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = num * eased
      setDisplay(current % 1 === 0 ? Math.floor(current).toString() : current.toFixed(1))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(value)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return <>{display}</>
}

export default function Numbers() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <section
      ref={ref}
      id="numbers"
      className="py-24 md:py-32 border-t border-b"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="inner">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[12px] font-medium uppercase tracking-[0.07em] mb-16 text-center"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="flex flex-col p-8 md:p-10"
              style={{ background: '#000' }}
            >
              <div className="flex items-baseline gap-1 mb-3">
                <span
                  className="text-[48px] md:text-[56px] font-medium leading-none tracking-[-2.5px]"
                  style={{ color: 'rgb(255,243,240)' }}
                >
                  <CountUp value={s.value} inView={inView} />
                </span>
                <span
                  className="text-[24px] font-medium tracking-[-0.5px]"
                  style={{ color: 'rgba(255,243,240,0.5)' }}
                >
                  {s.suffix}
                </span>
              </div>
              <p className="text-[14px] font-medium tracking-[-0.28px] mb-2" style={{ color: 'rgb(255,243,240)' }}>
                {s.label}
              </p>
              <p className="text-[12px] leading-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
