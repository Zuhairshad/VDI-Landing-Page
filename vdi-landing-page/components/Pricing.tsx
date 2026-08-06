'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import * as Switch from '@radix-ui/react-switch'
import { Layers, ShieldCheck, CheckCircle2 } from 'lucide-react'

const overviewData = [
  {
    module: '1. Data Sort',
    value: 'Converts messy data into a clean, mapped, and deduplicated dataset',
    humanReview: 'None by default',
    output: 'CSV, Excel, API output, and data quality report',
    price: 'Lowest (Foundation)',
    priceBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
  },
  {
    module: '2. Verified Market Intelligence',
    value: 'Confirms important market changes with evidence, indicators, and expert notes',
    humanReview: 'Critical and uncertain cases',
    output: 'Trusted dataset, alerts, and weekly report',
    price: 'Premium',
    priceBadge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
  },
  {
    module: '3. AI Claim Verification',
    value: 'Checks AI-generated statements against trusted industry data',
    humanReview: 'Low-confidence or high-impact claims',
    output: 'Verdict, evidence, confidence score, and recommendation',
    price: 'Add-on / Usage-based',
    priceBadge: 'bg-sky-500/20 text-sky-300 border-sky-500/30'
  },
  {
    module: '4. Business Benchmarking',
    value: 'Compares private business metrics with verified market behavior',
    humanReview: 'Conflicts, sensitive analysis, material gaps',
    output: 'Benchmark dashboard, business audit, and customized report',
    price: 'Premium / Enterprise',
    priceBadge: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
  },
  {
    module: '5. Dynamic Reports',
    value: 'Explains how market changes affect trends, indicators, and projections',
    humanReview: 'Exceptional market shifts',
    output: 'Versioned report, alerts, and "What Changed" section',
    price: 'Included in Verified Tiers',
    priceBadge: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
  }
]

const plans = [
  {
    id: 'starter',
    name: 'Data Sort & Basic',
    monthly: 99,
    yearly: 79,
    features: [
      'Raw data cleaning & mapping',
      'CSV, Excel, & API outputs',
      'Standard deduplication rules',
      'Data quality issue reports',
      'Optional human review add-on',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    id: 'verified',
    name: 'Verified Intelligence',
    monthly: 499,
    yearly: 399,
    badge: 'MOST POPULAR',
    features: [
      'All 5 Clarify Data Modules',
      'Continuous daily market intelligence',
      'AI Claim Verification & Scoring',
      'Dynamic reports with "What Changed"',
      'Human analyst edge-case reviews',
      'Up to 10 team seats',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Benchmarking',
    monthly: null,
    yearly: null,
    features: [
      'Everything in Verified',
      'Private data with Zero DB persistence',
      'Custom Business Audit Reports',
      'Private market benchmark dashboards',
      'Dedicated verifiers & SLA',
      'Custom API pipeline integration',
    ],
    cta: 'Contact Enterprise Sales',
    highlight: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="pricing"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>Modules & Pricing</span>
          </span>
          <h2
            className="mb-4 text-[28px] md:text-[46px]"
            style={{
              fontWeight: 600,
              letterSpacing: '-1.2px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Clarify Data Module Overview & Pricing
          </h2>
          <p
            className="max-w-[600px] mx-auto mb-8 text-[15px] md:text-[18px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Select individual verification modules or access the complete platform suite.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span
              className="text-[14px] font-medium"
              style={{ color: yearly ? 'rgba(250,250,250,0.4)' : 'rgb(250,250,250)' }}
            >
              Monthly
            </span>
            <Switch.Root
              checked={yearly}
              onCheckedChange={setYearly}
              className="relative w-11 h-6 rounded-full outline-none cursor-pointer transition-colors duration-300"
              style={{ background: yearly ? 'rgb(84,27,4)' : 'rgba(250,250,250,0.2)' }}
            >
              <Switch.Thumb
                className="block w-5 h-5 rounded-full will-change-transform"
                style={{
                  background: 'rgb(250,250,250)',
                  transform: yearly ? 'translateX(22px)' : 'translateX(2px)',
                  marginTop: '2px',
                  transition: 'transform 200ms',
                }}
              />
            </Switch.Root>
            <span
              className="text-[14px] font-medium"
              style={{ color: yearly ? 'rgb(250,250,250)' : 'rgba(250,250,250,0.4)' }}
            >
              Yearly
            </span>
            <AnimatePresence>
              {yearly && (
                <motion.span
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="text-[12px] font-medium px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(74,222,128,0.15)', color: 'rgb(74,222,128)' }}
                >
                  20% off
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="relative flex flex-col rounded-2xl p-6 md:p-7"
              style={{
                background: 'rgb(16,16,18)',
                border: plan.highlight
                  ? '1px solid rgba(245,158,11,0.4)'
                  : '1px solid rgba(250,250,250,0.08)',
              }}
            >
              {plan.badge && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold px-3.5 py-1 rounded-full whitespace-nowrap shadow-md"
                  style={{ background: 'rgb(245,158,11)', color: 'rgb(10,10,10)' }}
                >
                  {plan.badge}
                </span>
              )}

              <p
                className="text-[12px] font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'rgba(250,250,250,0.5)' }}
              >
                {plan.name}
              </p>

              <div className="flex items-baseline gap-1.5 mb-6">
                {plan.monthly !== null ? (
                  <>
                    <span
                      className="text-[42px] md:text-[52px]"
                      style={{
                        fontWeight: 600,
                        letterSpacing: '-2px',
                        lineHeight: 1,
                        color: 'rgb(250,250,250)',
                      }}
                    >
                      ${yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span style={{ fontSize: '15px', color: 'rgba(250,250,250,0.4)' }}>/mo</span>
                  </>
                ) : (
                  <span
                    style={{
                      fontSize: '36px',
                      fontWeight: 600,
                      letterSpacing: '-1px',
                      color: 'rgb(250,250,250)',
                    }}
                  >
                    Custom Enterprise
                  </span>
                )}
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-[14px] leading-5" style={{ color: 'rgba(250,250,250,0.75)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.id === 'enterprise' ? '#overview' : '#overview'}
                className="block text-center py-3.5 rounded-full text-[15px] font-semibold transition-all duration-200"
                style={
                  plan.highlight || plan.id === 'starter'
                    ? { background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }
                    : {
                        background: 'rgba(250,250,250,0.12)',
                        color: 'rgb(250,250,250)',
                        border: '1px solid rgba(250,250,250,0.18)',
                      }
                }
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Module Overview Table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8"
          style={{
            background: 'rgba(16, 16, 20, 0.75)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,250,250,0.1)'
          }}
        >
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="text-[20px] font-semibold text-white">Clarify Data Module Overview</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-[13px] font-semibold text-white/50 uppercase">
                  <th className="py-3 px-4 w-[22%]">Module</th>
                  <th className="py-3 px-4 w-[28%]">Customer Value</th>
                  <th className="py-3 px-4 w-[22%]">Human Review</th>
                  <th className="py-3 px-4 w-[28%]">MVP Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-[13px]">
                {overviewData.map((row) => (
                  <tr key={row.module} className="hover:bg-white/[0.02]">
                    <td className="py-4 px-4 font-semibold text-white">
                      <div>{row.module}</div>
                      <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded border font-medium ${row.priceBadge}`}>
                        {row.price}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white/80">{row.value}</td>
                    <td className="py-4 px-4 text-white/70">{row.humanReview}</td>
                    <td className="py-4 px-4 text-white/80 font-medium">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
