'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import * as Accordion from '@radix-ui/react-accordion'

const questions = [
  {
    q: 'Do I need technical skills to use ClarifyData?',
    a: 'No. Submit content via the dashboard directly. No integration is required during the pilot phase — just paste or upload your AI-generated content and ClarifyData handles the rest.',
  },
  {
    q: 'How fast is verification?',
    a: 'Claims that match our verified fact bank return in seconds. Claims requiring specialist review typically return within hours. We do not use AI for the specialist step — a credentialed human verifies against primary sources.',
  },
  {
    q: 'Which sectors do you cover?',
    a: 'Medical & clinical, logistics & trade, social & marketing, and education. Each sector has its own specialist pool with relevant credentials. The education sector is launching first.',
  },
  {
    q: 'Is there a free plan?',
    a: 'The education sector pilot is free, structured, and open now. No integration required — submit content directly via the dashboard. All other sectors start on the Starter plan at $99/month.',
  },
  {
    q: "What's included in the Verified plan?",
    a: 'All four sectors, unlimited bank lookups, 250 human verifications per month, exportable records in PDF and JSON, priority turnaround, up to 10 team members, and three-year record retention.',
  },
  {
    q: 'Can teams use ClarifyData together?',
    a: 'Yes. The Verified plan includes up to 10 seats. The Enterprise plan supports unlimited seats. Role-based access and shared dashboards are included in both.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<string>('')
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="faq"
      className="section-pad"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner">
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow-pill mb-6 inline-block">Common Question</span>
            <h2
              className="mb-4 text-[26px] md:text-[40px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-1.2px',
                lineHeight: '1.2',
                color: 'rgb(250,250,250)',
              }}
            >
              Everything you need to know.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(250,250,250,0.6)', lineHeight: '24px' }}>
              Can&rsquo;t find what you&rsquo;re looking for? Our support team is one message away.
            </p>
          </motion.div>

          {/* Right column: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion.Root
              type="single"
              collapsible
              value={open}
              onValueChange={setOpen}
              className="flex flex-col"
            >
              {questions.map((item, i) => (
                <Accordion.Item
                  key={item.q}
                  value={`item-${i}`}
                  className="border-b"
                  style={{ borderColor: 'rgba(250,250,250,0.08)' }}
                >
                  <Accordion.Trigger
                    className="flex w-full items-center justify-between gap-6 py-5 text-left outline-none cursor-pointer group"
                  >
                    <span
                      className="text-[16px] font-medium transition-colors duration-200"
                      style={{
                        color: open === `item-${i}` ? 'rgb(250,250,250)' : 'rgba(250,250,250,0.8)',
                        letterSpacing: '-0.3px',
                      }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[14px] transition-all duration-200"
                      style={{
                        background:
                          open === `item-${i}` ? 'rgba(250,250,250,0.1)' : 'rgba(250,250,250,0.07)',
                        color:
                          open === `item-${i}` ? 'rgb(250,250,250)' : 'rgba(250,250,250,0.4)',
                        transform: open === `item-${i}` ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      +
                    </span>
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden">
                    <AnimatePresence>
                      {open === `item-${i}` && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.44, 0, 0.56, 1] }}
                        >
                          <p
                            className="pb-5 text-[15px] leading-6"
                            style={{ color: 'rgba(250,250,250,0.55)' }}
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
              <div className="border-b" style={{ borderColor: 'rgba(250,250,250,0.08)' }} />
            </Accordion.Root>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
