'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  Layers,
  ClipboardCheck,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Database,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function DataSortingPage() {
  const s1 = useSection()
  const s2 = useSection()
  const s3 = useSection()
  const s4 = useSection()

  const sortingTypes = [
    { title: 'Organize', desc: 'Arrange records into a consistent structure so that fields, types, and hierarchies align across all data sources.' },
    { title: 'Standardize', desc: 'Apply uniform formats, naming conventions, and unit labels so that equivalent values are expressed the same way everywhere.' },
    { title: 'Deduplicate', desc: 'Identify and resolve records that represent the same entity — preventing inflated counts and skewed aggregations.' },
    { title: 'Structure', desc: 'Map raw data to a defined schema so that downstream validation and analysis can operate on a reliable, predictable foundation.' },
  ]

  const sortingSteps = [
    {
      num: '01',
      title: 'Format Normalization',
      desc: 'Standardize date formats, currency symbols, unit labels, and encoding across all data sources. Inconsistent formats are the most common source of silent analytical errors.',
    },
    {
      num: '02',
      title: 'Schema Alignment',
      desc: 'Map fields from different source systems to a unified schema. A field called "client_name" in one system and "account_holder" in another may refer to the same concept and must be consolidated.',
    },
    {
      num: '03',
      title: 'Duplicate Detection and Resolution',
      desc: 'Identify records that represent the same entity across different imports. Duplicates inflate counts, distort averages, and introduce systematic bias into any downstream analysis.',
    },
    {
      num: '04',
      title: 'Missing Value Assessment',
      desc: 'Classify missing values as missing at random, missing systematically, or structurally absent. Each type requires a different resolution strategy.',
    },
    {
      num: '05',
      title: 'Outlier Flagging',
      desc: 'Identify statistical outliers in numerical fields and flag them for human review rather than automated deletion. An outlier may be an error or a genuinely significant data point.',
    },
    {
      num: '06',
      title: 'Type Correction',
      desc: 'Convert values stored as the wrong type. Numeric values stored as strings, boolean values stored as integers, and dates stored as text are common ingestion errors that must be corrected before analysis.',
    },
    {
      num: '07',
      title: 'Categorical Standardization',
      desc: '"US", "U.S.", "United States", and "USA" should resolve to a single canonical value. Consolidate variant spellings, abbreviations, and aliases within categorical fields.',
    },
    {
      num: '08',
      title: 'Documentation of Changes',
      desc: 'Record every transformation applied to the raw data, including the original value, the applied change, and the rule or judgment that justified it. This creates the audit trail required for verified analysis.',
    },
  ]

  const layerCards = [
    {
      title: 'Data Sorting',
      label: 'Layer 1',
      desc: 'Organizes and standardizes raw data. Resolves format inconsistencies, duplicates, and schema mismatches. Operates on structure and organization. Does not check for factual accuracy.',
      copper: false,
    },
    {
      title: 'Data Validation',
      label: 'Layer 2',
      desc: 'Checks that data conforms to defined rules. Identifies type violations, missing required fields, and range anomalies. Operates on rules and constraints. Does not check whether the data is true.',
      copper: false,
    },
    {
      title: 'Data Verification',
      label: 'Layer 3',
      desc: 'Checks that data is factually accurate. Evaluates claims against source evidence, assigns confidence scores, and flags findings that require human review. Operates on evidence and source alignment.',
      copper: true,
    },
  ]

  const platformCards = [
    {
      title: 'Automated Format Normalization',
      desc: 'Clarify Data detects and corrects format inconsistencies across data sources automatically, without requiring manual field mapping.',
    },
    {
      title: 'Schema Unification',
      desc: 'Data from different systems is mapped to a unified schema. Inconsistent field names and structural variations are resolved before analysis begins.',
    },
    {
      title: 'Duplication Management',
      desc: 'Potential duplicates are flagged and resolved using configurable matching rules, with ambiguous cases routed to human review rather than auto-deleted.',
    },
    {
      title: 'Full Transformation Audit',
      desc: 'Every sorting decision is recorded. The audit trail documents what was changed, what rule was applied, and what the original value was — so the sorted data is reproducible and defensible.',
    },
  ]

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        <PageHeroHeader
          eyebrow="DATA SORTING"
          icon={<Layers className="w-4 h-4" style={{ color: COPPER }} />}
          title="Data Sorting: How to Organize, Standardize, and Prepare Raw Data for Analysis"
          subtitle="Raw data arrives in inconsistent formats, with duplicates, structural gaps, and naming variations. Data sorting transforms that raw material into a structured, reliable foundation for analysis."
        />

        {/* Section 1 — What Is Data Sorting */}
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
                  <Layers className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>DEFINITION</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[36px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Data Sorting Is the First Step in Any Reliable Data Workflow
                </h2>
                <p style={{ color: 'rgba(250,250,250,0.72)', fontSize: '16px', lineHeight: '26px' }}>
                  Data sorting — sometimes called data cleaning or data preparation — is the process of organizing, standardizing, deduplicating, and structuring raw data before validation or analysis begins. Businesses receive data from multiple systems, external sources, and manual entry — each with its own format, naming convention, and level of completeness. A CRM export uses different date formats than a spreadsheet export. An API response uses field names that conflict with a legacy database schema. A manually entered dataset mixes "United States", "US", and "U.S." interchangeably. Sorting resolves those inconsistencies before they propagate into analysis. It is not optional infrastructure — it is the prerequisite for any data quality work that follows.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {sortingTypes.map((card, i) => (
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

        {/* Section 2 — Common Data Sorting Tasks */}
        <section ref={s2.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s2.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <ClipboardCheck className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>PROCESS</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                What Data Sorting Actually Involves
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Data sorting is not a single operation. It is a structured sequence of tasks applied to raw data before it enters an analytical workflow.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {sortingSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s2.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.07 }}
                  className="flex items-start gap-5 rounded-2xl p-5"
                  style={{
                    background: 'rgba(16,16,20,0.95)',
                    border: '1px solid rgba(250,250,250,0.07)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold mt-0.5"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: COPPER }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold mb-1.5" style={{ color: 'rgb(250,250,250)' }}>
                      {step.title}
                    </h3>
                    <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.58)', lineHeight: '21px' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Three Layers of Data Quality */}
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
                Three Layers of Data Quality
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Sorting, validation, and verification are sequential quality layers — each addressing a different class of data problem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {layerCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s3.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.1 }}
                  className="rounded-2xl p-7"
                  style={
                    card.copper
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
                  <p
                    className="text-[11px] font-semibold uppercase tracking-widest mb-2"
                    style={{ color: card.copper ? COPPER : 'rgba(250,250,250,0.35)' }}
                  >
                    {card.label}
                  </p>
                  <h3 className="text-[18px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                    {card.title}
                  </h3>
                  <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '23px' }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — How Clarify Data Handles Sorting */}
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
                <span>PLATFORM</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Sorting Is Where Clarify Data Starts
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Before validation or verification begins, Clarify Data structures and normalizes your data — so every downstream step works from a reliable foundation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {platformCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s4.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-7"
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
                    <Database className="w-4 h-4" style={{ color: COPPER }} />
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

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s4.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <a
                href="/data-verification"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold transition-opacity hover:opacity-80"
                style={{ background: COPPER, color: 'rgb(250,250,250)' }}
              >
                See How the Full Workflow Works
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
