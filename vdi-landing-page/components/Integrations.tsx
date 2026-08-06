'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const sectors = [
  {
    name: 'Medical & Clinical',
    icon: '⚕',
    color: 'rgba(23,114,117,0.15)',
    borderColor: 'rgba(23,114,117,0.3)',
    accentColor: 'rgb(100,200,203)',
    items: ['Clinical guidelines', 'Drug references & dosing', 'Procedural standards', 'Trial methodologies'],
    specialists: 42,
    claims: '118k',
  },
  {
    name: 'Logistics & Trade',
    icon: '⚓',
    color: 'rgba(0,155,254,0.1)',
    borderColor: 'rgba(0,155,254,0.25)',
    accentColor: 'rgb(80,180,254)',
    items: ['Tariff classifications', 'Dangerous goods rules', 'Carrier documentation', 'Customs procedures'],
    specialists: 28,
    claims: '79k',
  },
  {
    name: 'Social & Marketing',
    icon: '◎',
    color: 'rgba(255,200,80,0.08)',
    borderColor: 'rgba(255,200,80,0.2)',
    accentColor: 'rgb(255,210,100)',
    items: ['Product specifications', 'Comparative claims', 'Advertising language', 'Statistics attribution'],
    specialists: 19,
    claims: '93k',
  },
  {
    name: 'Education',
    icon: '◻',
    color: 'rgba(255,243,240,0.06)',
    borderColor: 'rgba(255,243,240,0.15)',
    accentColor: 'rgb(255,243,240)',
    items: ['Curriculum standards', 'Exam specifications', 'Grade sequencing', 'Prescribed texts'],
    specialists: 31,
    claims: '52k',
    badge: 'Launching first',
  },
]

export default function Integrations() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section ref={ref} id="integrations" className="py-24 md:py-32">
      <div className="inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
          className="mb-12"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.07em] mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Integrations
          </p>
          <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
            <h2 className="text-[36px] md:text-[40px] font-medium leading-[1.2] tracking-[-1.6px] max-w-xl" style={{ color: 'rgb(255,243,240)' }}>
              Four sectors. Deep specialist coverage in each.
            </h2>
            <p className="text-[14px] tracking-[-0.28px] max-w-xs md:text-right" style={{ color: 'rgba(255,255,255,0.45)' }}>
              120 credentialed specialists across four domains.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {sectors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 + i * 0.1, duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
              className="group relative rounded-2xl p-6 transition-all duration-400 cursor-default"
              style={{
                background: s.color,
                border: `1px solid ${s.borderColor}`,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = s.color.replace('0.15', '0.22').replace('0.1', '0.16').replace('0.08', '0.12').replace('0.06', '0.1') }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = s.color }}
            >
              {/* Badge */}
              {s.badge && (
                <span
                  className="absolute top-4 right-4 text-[10px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,243,240,0.1)', color: 'rgba(255,243,240,0.6)' }}
                >
                  {s.badge}
                </span>
              )}

              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: s.borderColor, color: s.accentColor }}
                >
                  {s.icon}
                </span>
                <h3 className="text-[16px] font-medium tracking-[-0.32px]" style={{ color: 'rgb(255,243,240)' }}>
                  {s.name}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-col gap-2 mb-5">
                {s.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full shrink-0" style={{ background: s.accentColor }} />
                    <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4 border-t" style={{ borderColor: s.borderColor.replace('0.3', '0.15').replace('0.25', '0.12').replace('0.2', '0.1').replace('0.15', '0.08') }}>
                <div>
                  <p className="text-[18px] font-medium" style={{ color: s.accentColor }}>{s.specialists}</p>
                  <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>specialists</p>
                </div>
                <div>
                  <p className="text-[18px] font-medium" style={{ color: s.accentColor }}>{s.claims}</p>
                  <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>verified claims</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
