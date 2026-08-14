'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  ClipboardCheck,
  Layers,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function DataValidationPage() {
  const s1 = useSection()
  const s2 = useSection()
  const s3 = useSection()
  const s4 = useSection()
  const s5 = useSection()

  const validationTypes = [
    { title: 'Format Validation', desc: 'Checks that values conform to a required pattern — date formats, phone numbers, email addresses, postal codes.' },
    { title: 'Type Validation', desc: 'Ensures that each field contains the correct data type: numeric, string, boolean, date, or enumerated value.' },
    { title: 'Range Validation', desc: 'Verifies that numeric or date values fall within acceptable minimum and maximum boundaries for the field.' },
    { title: 'Uniqueness Validation', desc: 'Identifies duplicate records or non-unique values in fields that require a single distinct value per entity.' },
  ]

  const validationMethods = [
    {
      title: 'Field-Level Validation',
      desc: 'Check individual field values against type, format, and range rules defined in the data schema.',
    },
    {
      title: 'Cross-Field Validation',
      desc: 'Evaluate relationships between fields. A start date cannot follow an end date. A discount rate cannot exceed the listed price.',
    },
    {
      title: 'Record-Level Validation',
      desc: 'Check each row for internal consistency. Missing required fields, conflicting values, and logical contradictions are flagged at the record level.',
    },
    {
      title: 'Referential Integrity',
      desc: 'Ensure that values referencing another table or list actually exist in the source they point to. Orphaned foreign keys indicate a structural data problem.',
    },
    {
      title: 'Statistical Validation',
      desc: 'Identify outliers, anomalous distributions, and unexpected shifts in aggregated data that may indicate collection errors or source inconsistencies.',
    },
    {
      title: 'Completeness Validation',
      desc: 'Measure the proportion of required fields that contain valid values. High missing-data rates in critical fields signal a collection or ingestion problem.',
    },
  ]

  const decisionCards = [
    {
      title: 'Validation is sufficient',
      desc: 'Operational data with low stakes: contact records, form submissions, inventory counts, internal identifiers, log events. The cost of a wrong value is low and correctable.',
    },
    {
      title: 'Validation + Spot-check',
      desc: 'Analytical data used in regular reporting: sales figures, traffic data, CRM exports. Validate all records; spot-verify figures that appear anomalous or will be used in board-level reporting.',
    },
    {
      title: 'Validation + Full Verification',
      desc: 'Market research, AI-generated content, competitor data, financial projections, and any claim that will be published, presented to clients, or used to make significant resource allocation decisions.',
    },
  ]

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        <PageHeroHeader
          eyebrow="DATA VALIDATION"
          icon={<ClipboardCheck className="w-4 h-4" style={{ color: COPPER }} />}
          title="Data Validation: Rules, Methods, and When Verification Is Also Required"
          subtitle="Data validation checks that your data meets defined rules and structural expectations. It is the foundation of a data quality workflow — but it does not check whether the information is actually true."
        />

        {/* Section 1 — What Is Data Validation */}
        <section ref={s1.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s1.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              <div>
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <ClipboardCheck className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>DEFINITION</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[36px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Validation Checks the Rules. Verification Checks the Evidence.
                </h2>
                <p style={{ color: 'rgba(250,250,250,0.72)', fontSize: '16px', lineHeight: '26px' }}>
                  Data validation is a quality control process that ensures data conforms to a defined format, type, range, and structure before it enters a system or analytical workflow. It catches format errors, type violations, missing required fields, duplicates, and range anomalies — automatically, at scale, before data enters downstream processes. Validation does not assess whether a value is factually true. A birth date of 1990-03-15 will pass every format and range check even if the person was actually born in 1985. Catching that kind of error requires verification — a separate process that checks facts against evidence.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {validationTypes.map((card, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5"
                    style={
                      i % 2 === 0
                        ? {
                            background: 'linear-gradient(135deg, rgba(84,27,4,0.3) 0%, rgba(16,16,20,0.95) 100%)',
                            border: `1px solid ${COPPER_BORDER}`,
                          }
                        : {
                            background: 'rgba(16,16,20,0.95)',
                            border: '1px solid rgba(250,250,250,0.07)',
                          }
                    }
                  >
                    <h3 className="text-[14px] font-semibold mb-1.5" style={{ color: 'rgb(250,250,250)' }}>
                      {card.title}
                    </h3>
                    <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.58)', lineHeight: '20px' }}>
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 — Common Validation Methods */}
        <section ref={s2.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s2.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>METHODS</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Six Common Data Validation Techniques
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Different validation methods catch different classes of error. Most data quality workflows apply several techniques in sequence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {validationMethods.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s2.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-6"
                  style={
                    i % 2 === 0
                      ? {
                          background: 'linear-gradient(135deg, rgba(84,27,4,0.3) 0%, rgba(16,16,20,0.95) 100%)',
                          border: `1px solid ${COPPER_BORDER}`,
                        }
                      : {
                          background: 'rgba(16,16,20,0.95)',
                          border: '1px solid rgba(250,250,250,0.07)',
                        }
                  }
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    <ClipboardCheck className="w-4 h-4" style={{ color: COPPER }} />
                  </div>
                  <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                    {card.title}
                  </h3>
                  <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '21px' }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Validation vs Verification */}
        <section ref={s3.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s3.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>COMPARISON</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Data Validation and Data Verification Solve Different Problems
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Both are essential. Neither replaces the other.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s3.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'rgba(16,16,20,0.95)',
                  border: '1px solid rgba(250,250,250,0.07)',
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: 'rgba(250,250,250,0.4)' }}>
                  Data Validation
                </p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    'Checks that data conforms to a defined format or schema',
                    'Identifies missing fields, type violations, and range errors',
                    'Can be automated at ingestion or processing time',
                    'Does not check whether the data accurately reflects reality',
                    'Cannot catch a correctly formatted but factually wrong value',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '22px' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'rgba(250,250,250,0.3)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(84,27,4,0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: COPPER }}>
                  Data Verification
                </p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    'Checks that data accurately reflects an external source or event',
                    'Evaluates whether a claim or figure is supported by evidence',
                    'Assigns a confidence score based on source quality and alignment',
                    'Catches factually wrong values that pass all format checks',
                    'Requires source evaluation, not just schema comparison',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px]" style={{ color: 'rgba(250,250,250,0.75)', lineHeight: '22px' }}>
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: COPPER }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4 — Decision Guide */}
        <section ref={s4.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s4.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>DECISION GUIDE</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                When Validation Is Enough — and When Verification Is Also Required
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                The stakes attached to a data point determine how much checking it needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {decisionCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s4.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.1 }}
                  className="rounded-2xl p-7"
                  style={
                    i === 2
                      ? {
                          background: 'linear-gradient(135deg, rgba(84,27,4,0.3) 0%, rgba(16,16,20,0.95) 100%)',
                          border: `1px solid ${COPPER_BORDER}`,
                        }
                      : {
                          background: 'rgba(16,16,20,0.95)',
                          border: '1px solid rgba(250,250,250,0.07)',
                        }
                  }
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-4 text-[12px] font-bold"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: COPPER }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                    {card.title}
                  </h3>
                  <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '21px' }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — CTA */}
        <section ref={s5.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s5.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>CLARIFY DATA</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Validate Automatically. Verify What Matters.
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px] mb-8" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Clarify Data runs validation at ingestion and verification for high-stakes inputs — producing a single data quality score that covers both.
              </p>
              <a
                href="/data-verification"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold transition-opacity hover:opacity-80"
                style={{ background: COPPER, color: 'rgb(250,250,250)' }}
              >
                See How Verification Works
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <BookDemo />
      </main>
      <CtaFooter />
    </div>
  )
}
