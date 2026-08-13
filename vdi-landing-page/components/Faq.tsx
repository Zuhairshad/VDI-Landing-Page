'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import * as Accordion from '@radix-ui/react-accordion'

const questions = [
  {
    q: 'What is Clerify Data and how does it help my business?',
    a: 'Clerify Data is a data verification, market intelligence, and business benchmarking platform. It combines automated data processing, continuously updated market intelligence, AI claim verification, business benchmarking, dynamic reporting, and human expert review to help organizations make accurate, evidence-backed decisions.',
  },
  {
    q: 'How does Data Sort clean and standardize messy data?',
    a: 'Data Sort accepts raw data in CSV, Excel, documents, or API feeds. The system analyzes data fields, missing values, duplicates, and asks target questions (e.g., sorting rules, key columns, mapping preferences) to automatically standardize, clean, deduplicate, and export clean datasets.',
  },
  {
    q: 'How does AI Claim Verification work with ChatGPT, Gemini, Claude, Grok, and DeepSeek?',
    a: 'You can paste or upload AI-generated content. Clerify Data parses the response into individual claims and cross-references each assertion against verified industry datasets, delivering confidence scores, verdicts (Verified, Misleading, Unsupported, etc.), and human verifier reviews when required.',
  },
  {
    q: 'Is private business data stored in the system for Business Benchmarking?',
    a: 'No. Clerify Data is engineered with a strict zero-database storage policy for enterprise private data. Confidential metrics are processed in-memory solely for prediction, verification, and benchmark audit reports, and are purged immediately after analysis.',
  },
  {
    q: 'When is Human Expert Review triggered?',
    a: 'Human review is triggered for critical, uncertain, conflicting, low-confidence, or high-impact cases (such as sensitive medical statements, major executive decisions, or complex industry edge cases) to ensure 100% audit-grade reliability.',
  },
  {
    q: 'Which key industries are supported?',
    a: 'Clerify Data serves four primary verticals: Social Media & E-commerce, Medical & Healthcare, Logistics & Supply Chain, and Education — each equipped with domain-specific verification rules and expert analyst pools.',
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
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow-pill mb-6 inline-block">Common Questions</span>
            <h2
              className="mb-4 text-[26px] md:text-[40px]"
              style={{
                fontWeight: 600,
                letterSpacing: '-1.2px',
                lineHeight: '1.2',
                color: 'rgb(250,250,250)',
              }}
            >
              Everything you need to know about Clerify Data.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(250,250,250,0.6)', lineHeight: '24px' }}>
              Have more questions about integration, data security, or custom enterprise deployments? Reach out to our team.
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
                            style={{ color: 'rgba(250,250,250,0.65)' }}
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
