'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import * as Switch from '@radix-ui/react-switch'

const companies = ['Meridian Health', 'NorthRoute', 'Formstack', 'OpenLearn', 'Mediascope', 'Stackwise']

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: 99,
    yearly: 79,
    features: [
      'One sector',
      'Unlimited bank lookups',
      '25 human verifications/month',
      'Claim-level dashboard',
      'Records retained 12 months',
      'Email support',
    ],
    cta: 'Get Started Free',
    highlight: false,
  },
  {
    id: 'verified',
    name: 'Verified',
    monthly: 499,
    yearly: 399,
    badge: 'MOST POPULAR',
    features: [
      'All four sectors',
      'Unlimited bank lookups',
      '250 human verifications/month',
      'Exportable records (PDF + JSON)',
      'Priority turnaround',
      'Up to 10 team members',
      'Records retained 3 years',
    ],
    cta: 'Start free trial',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthly: null,
    yearly: null,
    features: [
      'Everything in Verified',
      'API access + pipeline integration',
      'Named assigned verifiers',
      'Private corpus for internal sources',
      'Contracted turnaround times',
      'Unlimited seats',
      'Dedicated account contact',
    ],
    cta: 'Contact sales',
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
      className="section-pad"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-6 inline-block">Pricing</span>
          <h2
            className="mb-3 md:mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Simple plans for every team.
          </h2>
          <p
            className="max-w-[480px] mx-auto mb-8 text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Start verifying, upgrade when your team and content volume grow.
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

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="relative flex flex-col rounded-2xl p-6"
              style={{
                background: 'rgb(18,18,18)',
                border: plan.highlight
                  ? '1px solid rgba(250,250,250,0.2)'
                  : '1px solid rgba(250,250,250,0.07)',
              }}
            >
              {plan.badge && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                  style={{ background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }}
                >
                  {plan.badge}
                </span>
              )}

              {/* Name */}
              <p
                className="text-[12px] font-medium uppercase tracking-wider mb-4"
                style={{ color: 'rgba(250,250,250,0.4)' }}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 mb-6">
                {plan.monthly !== null ? (
                  <>
                    <span
                      className="text-[40px] md:text-[56px]"
                      style={{
                        fontWeight: 400,
                        letterSpacing: '-2.24px',
                        lineHeight: 1,
                        color: 'rgb(250,250,250)',
                      }}
                    >
                      ${yearly ? plan.yearly : plan.monthly}
                    </span>
                    <span style={{ fontSize: '16px', color: 'rgba(250,250,250,0.4)' }}>/mo</span>
                  </>
                ) : (
                  <span
                    style={{
                      fontSize: '40px',
                      fontWeight: 400,
                      letterSpacing: '-1.5px',
                      color: 'rgb(250,250,250)',
                    }}
                  >
                    Custom
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 text-[11px]" style={{ color: 'rgb(74,222,128)' }}>✓</span>
                    <span className="text-[14px] leading-5" style={{ color: 'rgba(250,250,250,0.65)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.id === 'enterprise' ? '#contact' : '#overview'}
                className="block text-center py-3 rounded-full text-[16px] font-medium transition-all duration-200"
                style={
                  plan.highlight || plan.id === 'starter'
                    ? { background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }
                    : {
                        background: 'rgba(250,250,250,0.18)',
                        color: 'rgb(250,250,250)',
                        border: '1px solid rgba(250,250,250,0.18)',
                      }
                }
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  if (plan.highlight || plan.id === 'starter') {
                    el.style.background = 'rgba(250,250,250,0.88)'
                  } else {
                    el.style.background = 'rgba(250,250,250,0.24)'
                  }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  if (plan.highlight || plan.id === 'starter') {
                    el.style.background = 'rgb(250,250,250)'
                  } else {
                    el.style.background = 'rgba(250,250,250,0.18)'
                  }
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t"
          style={{ borderColor: 'rgba(250,250,250,0.07)' }}
        >
          {companies.map((name) => (
            <span
              key={name}
              style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(250,250,250,0.25)' }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
