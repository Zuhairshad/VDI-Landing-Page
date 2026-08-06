'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const companies = [
  'Meridian Health',
  'NorthRoute',
  'Formstack',
  'OpenLearn',
  'Mediascope',
  'Stackwise',
]

export default function Logos() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      className="section-pad"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
          style={{ fontSize: '14px', color: 'rgba(250,250,250,0.32)' }}
        >
          Trusted by teams at world-class companies
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {companies.map((name) => (
            <span
              key={name}
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'rgba(250,250,250,0.35)',
                letterSpacing: '-0.3px',
              }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
