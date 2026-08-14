'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  Shield,
  CheckCircle2,
  ClipboardCheck,
  ArrowRight,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function DataVerificationPage() {
  const s1 = useSection()
  const s2 = useSection()
  const s3 = useSection()
  const s4 = useSection()
  const s5 = useSection()
  const s6 = useSection()
  const s7 = useSection()
  const s8 = useSection()
  const s9 = useSection()

  const useCaseCards = [
    {
      num: '01',
      title: 'AI-Generated Reports and Summaries',
      desc: 'Language models can produce plausible-sounding figures, citations, and market statistics that have no grounding in real sources. Verification confirms whether AI-generated claims are supported by actual evidence before they enter business workflows.',
    },
    {
      num: '02',
      title: 'Market Research and Competitive Intelligence',
      desc: 'Market size figures, competitor pricing, and growth forecasts vary widely depending on the source, methodology, and reporting date. Verification connects each data point to its origin and flags inconsistencies before decisions are made.',
    },
    {
      num: '03',
      title: 'Third-Party Data Purchases',
      desc: 'Purchased datasets often arrive with limited provenance documentation. Verification establishes how current the data is, how it was collected, and whether the claims it supports hold up against independent sources.',
    },
    {
      num: '04',
      title: 'Regulatory and Compliance Filings',
      desc: 'Regulatory submissions require that reported figures are accurate, traceable, and current. A verification process ensures that each material claim in a filing is supported by documentation that can survive audit scrutiny.',
    },
    {
      num: '05',
      title: 'Healthcare and Clinical Evidence',
      desc: 'Clinical claims must be traced to specific studies, trial phases, patient populations, and publication dates. Verification identifies whether cited evidence directly supports the clinical assertion or only analogously relates to it.',
    },
    {
      num: '06',
      title: 'Financial Forecasts and Investment Decisions',
      desc: 'Forecasts built on unverified market assumptions or AI-generated trend data can produce significantly wrong projections. Verification applies evidence standards to each input assumption before it enters a financial model.',
    },
  ]

  const verificationTypes = [
    {
      title: 'Source Verification',
      desc: 'Confirming that the source itself is credible, current, and authoritative. Not all sources are equal — a primary regulatory database carries more weight than a secondary aggregator citing an unnamed study. Source verification establishes whether the origin of a claim is trustworthy before evaluating the claim itself.',
    },
    {
      title: 'Claim Verification',
      desc: 'Matching specific assertions to the exact passages, data fields, or findings that support them. A claim may appear plausible even when no source actually makes it. Claim verification requires locating the precise text or data that a specific assertion is based on.',
    },
    {
      title: 'Consistency Verification',
      desc: 'Checking whether multiple independent sources agree when normalized for definitions, time windows, and geography. When sources conflict, consistency verification documents the nature and scale of the disagreement rather than resolving it arbitrarily.',
    },
    {
      title: 'Temporal Verification',
      desc: 'Confirming that information is current and has not been superseded by newer data, corrections, or changes in underlying conditions. A figure that was accurate two years ago may be materially wrong today. Temporal verification flags recency risk explicitly.',
    },
  ]

  const platformModules = [
    {
      title: 'Data Sort and Clean',
      desc: 'Structures and normalizes raw inputs before verification begins. Inconsistently formatted data cannot be reliably verified — this module establishes a clean, consistent foundation for the verification process.',
    },
    {
      title: 'Data Validation',
      desc: 'Checks structural and format rules: required fields, data types, acceptable ranges, and consistency constraints. Validation ensures the data is analyzable before verification evaluates whether it is accurate.',
    },
    {
      title: 'Data Verification',
      desc: 'Evaluates claims against available evidence and assigns a Trust Index score reflecting confidence level, source quality, freshness, and consistency. Each finding is documented with source passages, dates, and conflict notes.',
    },
    {
      title: 'Market Intelligence',
      desc: 'Continuously updated market data that serves as verification context. When a business claim references market conditions, this module provides the current evidence base against which the claim can be checked.',
    },
    {
      title: 'Human Review',
      desc: 'Analyst escalation for findings that are uncertain, high-impact, or situated in regulated industries. Human review is not optional for consequential decisions — it is a structured part of the verification workflow.',
    },
  ]

  const verificationSteps = [
    {
      num: '01',
      title: 'Define the scope and verification criteria',
      desc: 'Establish what is being verified, what sources are acceptable, what time window is relevant, and what confidence threshold is required for the decision context.',
    },
    {
      num: '02',
      title: 'Decompose content into individual checkable claims',
      desc: 'Break documents, reports, or datasets into discrete assertions that can each be evaluated independently. Compound claims that mix several facts are split into verifiable units.',
    },
    {
      num: '03',
      title: 'Identify appropriate sources for each claim',
      desc: 'Match each claim to the category of source most likely to contain direct, authoritative evidence — primary databases, official publications, peer-reviewed research, or direct measurements.',
    },
    {
      num: '04',
      title: 'Collect source passages, dates, and versions',
      desc: 'Retrieve the specific text, data field, or finding from each source that is most relevant to the claim. Record the publication date, version, and access date for each source consulted.',
    },
    {
      num: '05',
      title: 'Compare claims against evidence and record conflicts',
      desc: 'Evaluate whether the source passage directly, partially, or only analogously supports the claim. When multiple sources disagree, document the nature of the conflict rather than selecting a winner arbitrarily.',
    },
    {
      num: '06',
      title: 'Assign a confidence score and verification status',
      desc: 'Produce a Trust Index score based on source authority, freshness, directness of support, and source agreement. Assign a verification status — verified, partially verified, conflicting, or unverified.',
    },
    {
      num: '07',
      title: 'Route high-impact or uncertain findings to human review',
      desc: 'Escalate claims with low confidence scores, conflicting evidence, or high decision stakes to a qualified analyst. Human review is documented and attached to the final verification record.',
    },
  ]

  const humanEscalationPoints = [
    'Conflicting sources that cannot be algorithmically resolved',
    'Trust Index score below the threshold set for the decision context',
    'High-impact decision with significant operational or financial consequences',
    'Sensitive industry context including healthcare, legal, or financial services',
    'AI-generated claims in areas where available sources are insufficient to confirm or deny',
    'Unusual, rapidly changing, or emerging market conditions where standard sources lag reality',
  ]

  const limitationPoints = [
    'Cannot guarantee completeness of available evidence — verification is only as strong as the sources consulted',
    'Cannot replace professional judgment in regulated fields such as healthcare, law, or financial services',
    'Only as reliable as the sources that are available and accessible for the specific claim and time period',
    'Does not provide medical, legal, or financial advice — all outputs require human review before consequential use',
    'Requires a clearly defined scope and consistent definitions to produce meaningful results',
  ]

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        {/* Hero */}
        <PageHeroHeader
          eyebrow="Data Verification Guide"
          icon={<Shield className="w-4 h-4" style={{ color: COPPER }} />}
          title="Data Verification Is Not the Same as Data Validation. Here Is the Difference."
          subtitle="Validation checks if your data follows the rules. Verification checks whether your data is actually true, supported by evidence, and reliable enough for the decisions you need to make."
        />

        {/* Section 1 — What is Data Verification */}
        <section ref={s1.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s1.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Left */}
              <div>
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>The Definition</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[36px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Data verification is the process of confirming that information is accurate, supported, and reliable
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.72)', fontSize: '16px', lineHeight: '26px' }}>
                  <p>
                    Data can be structurally valid and still be factually wrong. A dataset may have no missing fields, consistent types, and values within expected ranges — and still contain figures that have no basis in reality. This is the gap that data verification addresses. It is not about the format of information. It is about whether the information is true.
                  </p>
                  <p>
                    Verification connects individual claims to the evidence that supports them. Each assertion — a market size figure, a competitor claim, an AI-generated statistic, a regulatory requirement — must be traceable to a specific source passage with a known date, a documented method, and an explicit level of support. Without that connection, a claim is an assumption dressed as a fact.
                  </p>
                  <p>
                    The need for verification has intensified with the adoption of AI-generated content and third-party data in business workflows. Language models produce fluent, confident-sounding outputs that may contain fabricated figures, hallucinated citations, or outdated market conditions. Verification applies the same evidence standard to AI-generated content that it applies to any other information source: is this claim supported, and can that support be documented?
                  </p>
                </div>
              </div>

              {/* Right — Process card */}
              <div
                className="rounded-2xl p-7 flex flex-col gap-5"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-widest" style={{ color: COPPER }}>
                  The Verification Process
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    'Identify claims that require verification',
                    'Locate relevant, current sources',
                    'Compare claims against evidence',
                    'Score confidence and flag conflicts',
                    'Route uncertain findings to human review',
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold"
                        style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: COPPER }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.85)' }}>
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 — Validation vs Verification */}
        <section ref={s2.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s2.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Two Different Questions</span>
                </span>
                <h2
                  className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  One checks the format. The other checks the facts.
                </h2>
                <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                  Validation and verification are often used interchangeably, but they answer fundamentally different questions about your data. Understanding the distinction is the first step toward building a complete data quality program.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Validation card */}
                <div
                  className="rounded-2xl p-7"
                  style={{
                    background: 'rgba(16,16,20,0.95)',
                    border: '1px solid rgba(250,250,250,0.08)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(250,250,250,0.06)', border: '1px solid rgba(250,250,250,0.12)' }}
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-white/60" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-white">Data Validation</h3>
                  </div>
                  <p className="text-[14px] mb-5" style={{ color: 'rgba(250,250,250,0.55)', lineHeight: '22px' }}>
                    Checks whether data conforms to defined structural rules and format expectations. Answers the question: <em>is this data well-formed?</em>
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      'Format and data type compliance',
                      'Required fields present and populated',
                      'Duplicate record detection',
                      'Range and boundary checks',
                      'Referential integrity constraints',
                      'Structural consistency rules',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px]" style={{ color: 'rgba(250,250,250,0.7)' }}>
                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: 'rgba(250,250,250,0.35)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verification card */}
                <div
                  className="rounded-2xl p-7"
                  style={{
                    background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                    border: `1px solid ${COPPER_BORDER}`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                    >
                      <Shield className="w-4.5 h-4.5" style={{ color: COPPER }} />
                    </div>
                    <h3 className="text-[18px] font-semibold text-white">Data Verification</h3>
                  </div>
                  <p className="text-[14px] mb-5" style={{ color: 'rgba(250,250,250,0.55)', lineHeight: '22px' }}>
                    Checks whether data is accurate, traceable to credible sources, and current enough for the intended decision. Answers the question: <em>is this data true?</em>
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      'Accuracy against primary and secondary sources',
                      'Freshness relative to the decision window',
                      'Source credibility and authority',
                      'Consistency across independent sources',
                      'Evidence strength for AI-generated claims',
                      'Conflict documentation when sources disagree',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px]" style={{ color: 'rgba(250,250,250,0.7)' }}>
                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: COPPER }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full-width callout */}
              <div
                className="rounded-2xl p-7 md:p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.18) 0%, rgba(16,16,20,0.85) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <h3 className="text-[18px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                  Why Both Matter Together
                </h3>
                <p className="text-[15px]" style={{ color: 'rgba(250,250,250,0.7)', lineHeight: '26px' }}>
                  Validated data can still be factually wrong. A dataset that passes every structural check may contain market figures that are three years old, AI-generated statistics that have no source, or competitor claims that no independent source supports. Verified data, on the other hand, can be difficult to analyze if it is poorly structured, inconsistently formatted, or incomplete. Clarify Data connects both processes — validation ensures the data is analyzable; verification ensures it is accurate.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 — When You Need Data Verification */}
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
                <span>Use Cases</span>
              </span>
              <h2
                className="mb-5 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[700px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Verification is critical when the cost of a wrong decision is high
              </h2>
              <div className="max-w-[680px] mx-auto flex flex-col gap-4 text-left" style={{ color: 'rgba(250,250,250,0.68)', fontSize: '16px', lineHeight: '26px' }}>
                <p>
                  Not every dataset or report requires the same level of verification rigor. An internal operations dashboard updated with first-party transactional data carries different verification requirements than a market entry analysis built on AI-generated competitive intelligence. The question is not whether verification matters, but how much is appropriate for the decision being made.
                </p>
                <p>
                  The categories below represent situations where verification is not optional. They share a common characteristic: acting on wrong information in these contexts produces consequences that are difficult or impossible to reverse.
                </p>
                <p>
                  In each case, the goal of verification is not to achieve certainty — that is rarely possible with real-world information — but to make the level of uncertainty explicit, document the evidence that exists, and route findings that exceed acceptable uncertainty thresholds to human reviewers who can make a judgment.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {useCaseCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s3.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-6"
                  style={
                    i % 2 === 0
                      ? {
                          background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                          border: `1px solid ${COPPER_BORDER}`,
                        }
                      : {
                          background: 'rgba(16,16,20,0.95)',
                          border: '1px solid rgba(250,250,250,0.08)',
                        }
                  }
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold mb-4"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: COPPER }}
                  >
                    {card.num}
                  </div>
                  <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                    {card.title}
                  </h3>
                  <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '22px' }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — The Verification Process */}
        <section ref={s4.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s4.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>How It Works</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                A structured path from claim to verified evidence
              </h2>
              <p className="max-w-[600px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Verification is not a single step — it is a sequence of decisions, each of which must be documented. The process below describes how Clarify Data approaches each piece of information from initial claim identification to final status assignment.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {verificationSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s4.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
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
                    <h3 className="text-[16px] font-semibold mb-1.5" style={{ color: 'rgb(250,250,250)' }}>
                      {step.title}
                    </h3>
                    <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '22px' }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Types of Verification */}
        <section ref={s5.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s5.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Verification Methods</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Different information requires different verification approaches
              </h2>
              <p className="max-w-[600px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Verification is not a single technique applied uniformly. The method appropriate for checking a specific statistic differs from the method used to evaluate whether a source is authoritative, or whether information is current enough for a time-sensitive decision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {verificationTypes.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s5.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-7"
                  style={{
                    background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                    border: `1px solid ${COPPER_BORDER}`,
                  }}
                >
                  <h3 className="text-[17px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                    {card.title}
                  </h3>
                  <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.68)', lineHeight: '23px' }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Human Review */}
        <section ref={s6.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s6.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Left */}
              <div>
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Human + AI</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[34px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Automation handles volume. Human judgment handles consequence.
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.68)', fontSize: '15px', lineHeight: '25px' }}>
                  <p>
                    Automated verification systems excel at high-volume, structured tasks: checking hundreds of claims against a source library, scoring confidence based on consistent criteria, flagging conflicts, and routing outputs for review. They do not excel at judgment calls — situations where conflicting evidence requires interpretation, where domain expertise changes the weight of a source, or where the stakes of an error justify additional scrutiny beyond what an algorithm can provide.
                  </p>
                  <p>
                    Regulated industries create a specific need for human review. Healthcare, legal, financial services, and government contexts carry professional obligations that cannot be delegated to an automated system. A verification finding that will inform a clinical decision or a regulatory filing must be reviewed by a qualified professional, regardless of how high the algorithmic confidence score is.
                  </p>
                  <p>
                    AI-generated claims in sensitive domains require particular attention. When a language model produces a clinical statistic, a legal precedent, or a financial projection, the verification process must determine whether any credible source actually supports that claim. When no such source can be found, the finding must go to a human reviewer who can assess whether the absence of evidence reflects a genuine gap or a limitation in the available source library.
                  </p>
                </div>
              </div>

              {/* Right — escalation card */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-widest mb-5" style={{ color: COPPER }}>
                  When Clarify Data escalates to human review
                </p>
                <ul className="flex flex-col gap-4">
                  {humanEscalationPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.78)' }}>
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: COPPER }} />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7 — How Clarify Data Approaches Verification */}
        <section ref={s7.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s7.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>The Platform</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Five connected modules that support end-to-end data verification
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Verification does not begin with the verification step. It begins with data that is clean enough to verify and ends with a human reviewer who can act on findings with confidence. Clarify Data provides each layer of this process as part of a connected platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {platformModules.map((mod, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s7.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-6"
                  style={
                    i % 2 === 0
                      ? {
                          background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                          border: `1px solid ${COPPER_BORDER}`,
                        }
                      : {
                          background: 'rgba(16,16,20,0.95)',
                          border: '1px solid rgba(250,250,250,0.08)',
                        }
                  }
                >
                  <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                    {mod.title}
                  </h3>
                  <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '22px' }}>
                    {mod.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8 — Limitations */}
        <section ref={s8.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s8.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div
                className="rounded-2xl p-7 md:p-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.22) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    <ClipboardCheck className="w-5 h-5" style={{ color: COPPER }} />
                  </div>
                  <div>
                    <h2 className="text-[22px] md:text-[28px] font-semibold" style={{ color: 'rgb(250,250,250)' }}>
                      What Data Verification Cannot Do
                    </h2>
                    <p className="text-[14px] mt-1" style={{ color: 'rgba(250,250,250,0.5)' }}>
                      Understanding the limits of verification is part of using it responsibly.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[14px] font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(250,250,250,0.4)' }}>
                      Important limitations
                    </p>
                    <ul className="flex flex-col gap-4">
                      {limitationPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.72)', lineHeight: '22px' }}>
                          <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: COPPER }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ color: 'rgba(250,250,250,0.6)', fontSize: '14px', lineHeight: '24px' }}>
                    <p className="mb-4">
                      Data verification is a process, not a guarantee. Even a well-executed verification workflow operates within the constraints of the source library available to it. If the best available sources are incomplete, outdated, or biased, the verification output will reflect those limitations regardless of how carefully the process is followed.
                    </p>
                    <p>
                      Clarify Data is designed to make these limitations visible rather than hide them. A finding that cannot be verified is reported as unverified, not fabricated into false confidence. The goal is not to eliminate uncertainty — it is to measure and document it so that the humans who make consequential decisions can do so with an accurate understanding of what the evidence actually supports.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BookDemo */}
        <section ref={s9.ref} className="border-t border-white/10" style={{ background: 'rgb(10,10,10)' }}>
          <BookDemo />
        </section>
      </main>
      <CtaFooter />
    </div>
  )
}
