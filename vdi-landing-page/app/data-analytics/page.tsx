'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  TrendingUp,
  ClipboardCheck,
  ArrowRight,
  BarChart3,
  Layers,
  AlertTriangle,
  Shield,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function DataAnalyticsPage() {
  const s1 = useSection()
  const s2 = useSection()
  const s3 = useSection()
  const s4 = useSection()
  const s5 = useSection()
  const s6 = useSection()
  const s7 = useSection()
  const s8 = useSection()

  const analyticsWorkflow = [
    {
      num: '01',
      title: 'Define the analytical question',
      desc: 'Establish what is being analyzed, what decisions the analysis will inform, what time window is relevant, and what level of confidence is required before the output can be acted upon.',
    },
    {
      num: '02',
      title: 'Collect raw data from relevant sources',
      desc: 'Gather data from internal systems, market databases, third-party providers, and research sources. Document the origin, format, access date, and known limitations of each source before processing begins.',
    },
    {
      num: '03',
      title: 'Sort and structure the data',
      desc: 'Normalize formats, resolve naming inconsistencies, align time periods, and establish a consistent data schema. Analytics cannot be reliable when different data streams use different definitions for the same concept.',
    },
    {
      num: '04',
      title: 'Validate for completeness and consistency',
      desc: 'Check for missing values, duplicate records, type violations, range anomalies, and cross-field inconsistencies. Document every issue found and the resolution applied — or the decision to leave it unresolved with a documented reason.',
    },
    {
      num: '05',
      title: 'Verify key figures against primary sources',
      desc: 'For market figures, benchmark data, AI-generated statistics, and any input that will drive significant analytical conclusions, verify against an independent source. Assign a Trust Index confidence score to each verified figure.',
    },
    {
      num: '06',
      title: 'Build the analytical model with documented assumptions',
      desc: 'Construct the analysis with explicit, documented assumptions. Every assumption that cannot be directly verified from a source is flagged as such and assigned a sensitivity rating based on its impact on the analytical conclusions.',
    },
    {
      num: '07',
      title: 'Deliver results with source lineage and confidence levels',
      desc: 'The output includes not just conclusions and figures but the evidence chain that supports each material claim, the confidence level of each verified input, and explicit flags for findings that carry elevated uncertainty.',
    },
    {
      num: '08',
      title: 'Archive the methodology for future refresh',
      desc: 'Document the full methodology — sources, validation decisions, verification outcomes, model assumptions, and review notes — so that the analysis can be updated efficiently when new data becomes available or conditions change.',
    },
  ]

  const analyticsLevels = [
    {
      title: 'Descriptive Analytics',
      subtitle: 'What happened',
      desc: 'Summarizes historical data into reports, dashboards, and trend visualizations. This is the foundation layer of analytics — and the layer where data quality problems are most dangerous, because errors in historical records propagate into every subsequent analytical layer. Requires accurate, complete, and consistently structured historical records.',
    },
    {
      title: 'Diagnostic Analytics',
      subtitle: 'Why it happened',
      desc: 'Uses drill-down analysis, data mining, and correlation techniques to explain observed outcomes. Diagnostic analytics is only reliable when the underlying data uses consistent metric definitions across the comparison dimensions and when source attribution is documented clearly enough to trace any finding back to its origin.',
    },
    {
      title: 'Predictive Analytics',
      subtitle: 'What will likely happen',
      desc: 'Applies statistical models, machine learning techniques, and trend extrapolation to forecast future states. Predictive analytics is uniquely sensitive to data quality — garbage inputs produce mathematically coherent but factually unreliable forecasts. Requires verified historical baselines and clearly documented assumptions for every model input.',
    },
    {
      title: 'Prescriptive Analytics',
      subtitle: 'What should we do',
      desc: 'Recommends specific actions based on predicted outcomes, defined constraints, and organizational objectives. Prescriptive analytics sits at the highest-stakes point in the analytics maturity curve — where data quality directly translates into business decisions. Requires the highest confidence in underlying data and mandatory human review before any output drives consequential action.',
    },
  ]

  const challenges = [
    {
      icon: <Layers className="w-4 h-4" style={{ color: COPPER }} />,
      title: 'Data Silos',
      desc: 'Information trapped in disconnected systems with no common definitions, no shared governance, and no mechanism for ensuring that the same concept is measured the same way across departments and tools.',
    },
    {
      icon: <BarChart3 className="w-4 h-4" style={{ color: COPPER }} />,
      title: 'Source Inconsistency',
      desc: 'Different teams using different versions of the same metric — different date ranges, different inclusion criteria, different aggregation methods — producing numbers that look comparable but are not.',
    },
    {
      icon: <AlertTriangle className="w-4 h-4" style={{ color: COPPER }} />,
      title: 'AI Content in Pipelines',
      desc: 'Unverified AI-generated data entering analytics workflows as if it were primary source material — carrying the appearance of precision while having no connection to independently verifiable evidence.',
    },
    {
      icon: <TrendingUp className="w-4 h-4" style={{ color: COPPER }} />,
      title: 'Recency Gaps',
      desc: 'Using market benchmarks, competitive data, or industry figures that are too old for the decision being made — treating two-year-old figures as current context without flagging the staleness risk.',
    },
    {
      icon: <Shield className="w-4 h-4" style={{ color: COPPER }} />,
      title: 'Missing Provenance',
      desc: 'Numbers in dashboards and reports with no record of where they came from, when they were collected, or how they were calculated — making it impossible to audit findings or update them as conditions change.',
    },
    {
      icon: <ClipboardCheck className="w-4 h-4" style={{ color: COPPER }} />,
      title: 'Human Review Absence',
      desc: 'High-impact analytical outputs released and acted upon without qualified sign-off — treating the automated output as final rather than as input to a review process that includes appropriate domain expertise.',
    },
  ]

  const teamCapabilities = [
    {
      title: 'Pre-analytics data preparation',
      desc: 'Sorting, cleaning, and structuring raw data before it enters analytics pipelines. Reduces the data preparation burden on analytics teams significantly.',
    },
    {
      title: 'Structural validation layer',
      desc: 'Automated checks for completeness, type consistency, duplicates, and range violations — with documented resolution recommendations for each issue found.',
    },
    {
      title: 'Claim-level verification',
      desc: 'Trust Index scoring for market figures, benchmark data, and AI-generated statistics — with source documentation and confidence levels attached to each verified finding.',
    },
    {
      title: 'Market intelligence context',
      desc: 'Continuously updated market data that provides verified external context for internal analytics — making it possible to benchmark performance against current market conditions.',
    },
    {
      title: 'Human review escalation',
      desc: 'Structured escalation workflow for findings that are uncertain, high-impact, or situated in regulated domains — with reviewer notes attached to the analytical record.',
    },
  ]

  const limitationPoints = [
    'Clarify Data is not a dedicated analytics platform or statistical modeling environment',
    'Does not produce interactive visualizations, dashboards, or automated reporting pipelines',
    'Does not replace specialized data science tools, statistical software, or machine learning infrastructure',
    'Does not guarantee market data accuracy — all external figures reflect available sources at a point in time',
    'Does not provide investment, financial, clinical, or legal advice — all outputs require human review in these domains',
  ]

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        {/* Hero */}
        <PageHeroHeader
          eyebrow="Data Analytics"
          icon={<TrendingUp className="w-4 h-4" style={{ color: COPPER }} />}
          title="Data Analytics Built on a Foundation You Can Actually Trust"
          subtitle="Analytics produces useful answers only when the underlying data is clean, verified, and consistently structured. Clarify Data prepares your information for analysis before the analysis begins."
        />

        {/* Section 1 — What Is Data Analytics */}
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
                  <TrendingUp className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>The Discipline</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[36px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Data analytics is the process of examining data to draw conclusions that inform decisions
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.72)', fontSize: '16px', lineHeight: '26px' }}>
                  <p>
                    At its core, data analytics is the practice of examining structured information to identify patterns, measure performance, understand causes, and project future states. It spans the full range from simple descriptive summaries to complex predictive models — and at every point on that spectrum, the quality of the underlying data determines the reliability of the output.
                  </p>
                  <p>
                    The most sophisticated analytical methods cannot compensate for unreliable inputs. A machine learning model trained on unverified data will produce precise-looking outputs built on a foundation that cannot be trusted. A trend analysis built on inconsistently defined metrics will identify movements that do not correspond to any real-world change. The credibility of analytics depends on the credibility of the data it starts with.
                  </p>
                  <p>
                    This is why data preparation — cleaning, validating, verifying, and documenting the source and quality of information before analysis begins — is not a preliminary step that can be skipped under time pressure. It is the work that determines whether the analytical conclusions that follow are reliable enough to act on. Clarify Data makes this preparation layer systematic, documented, and reproducible.
                  </p>
                </div>
              </div>

              {/* Right — four types card */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-widest mb-5" style={{ color: COPPER }}>
                  Four types of analytics
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    { num: '1', label: 'Descriptive', desc: 'What happened — historical data organized into baselines and trend reports.' },
                    { num: '2', label: 'Diagnostic', desc: 'Why it happened — analysis of causes behind observed performance changes.' },
                    { num: '3', label: 'Predictive', desc: 'What will likely happen — forecasts built on verified historical patterns.' },
                    { num: '4', label: 'Prescriptive', desc: 'What should we do — action recommendations based on predicted outcomes.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5"
                        style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: COPPER }}
                      >
                        {item.num}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold mb-0.5" style={{ color: 'rgb(250,250,250)' }}>
                          {item.label}
                        </p>
                        <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.6)', lineHeight: '20px' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 — Data Quality Foundation */}
        <section ref={s2.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s2.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Why Data Quality Matters</span>
                </span>
                <h2
                  className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Garbage in, garbage out is not a metaphor. It is a daily business problem.
                </h2>
                <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.6)', lineHeight: '26px' }}>
                  Data quality problems at the input stage become analytical errors at the output stage. The further downstream the error travels before it is discovered, the more expensive it is to correct.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Problems */}
                <div
                  className="rounded-2xl p-7"
                  style={{
                    background: 'rgba(16,16,20,0.95)',
                    border: '1px solid rgba(250,250,250,0.08)',
                  }}
                >
                  <p className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: 'rgba(250,250,250,0.4)' }}>
                    Signs your analytics data has quality problems
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {[
                      'Different teams get different numbers from the same data source',
                      'Metrics shift unexpectedly and no one can explain why the trend changed',
                      'Data from AI tools is used in reports without independent verification',
                      'Reports are frequently corrected after delivery when stakeholders find errors',
                      'Analysts spend more time finding and cleaning data than analyzing it',
                      'Dashboards show conflicting figures for the same KPI depending on who built the report',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '22px' }}>
                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-white/25" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div
                  className="rounded-2xl p-7"
                  style={{
                    background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                    border: `1px solid ${COPPER_BORDER}`,
                  }}
                >
                  <p className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: COPPER }}>
                    What clean, verified data enables
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {[
                      'Consistent numbers across teams because definitions and sources are shared',
                      'Explainable trends because every metric change can be traced to its cause',
                      'AI-generated content that enters workflows only after independent verification',
                      'Reports that survive stakeholder scrutiny because the source trail is documented',
                      'Analysts focused on interpretation and insight rather than data hunting and cleaning',
                      'Unified dashboards built on a single verified source of truth for each metric',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px]" style={{ color: 'rgba(250,250,250,0.75)', lineHeight: '22px' }}>
                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: COPPER }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 — Analytics Workflow */}
        <section ref={s3.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s3.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Analytics Workflow</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                From raw data to a result you can stand behind
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Each step in this workflow produces a documented output that feeds the next step. The final analytical result carries with it the full record of how it was produced — making it reproducible, auditable, and updatable.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {analyticsWorkflow.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s3.inView ? { opacity: 1, y: 0 } : {}}
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

        {/* Section 4 — Four Levels */}
        <section ref={s4.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s4.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Analytics Maturity</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Analytics evolves from describing the past to shaping the future
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Each level of analytics maturity builds on the one before it. You cannot reliably diagnose causes in noisy data. You cannot reliably predict from unverified baselines. And you cannot responsibly prescribe action from predictions you cannot trace to trustworthy inputs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {analyticsLevels.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s4.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-7"
                  style={{
                    background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                    border: `1px solid ${COPPER_BORDER}`,
                  }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: COPPER }}>
                    {card.subtitle}
                  </p>
                  <h3 className="text-[18px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
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

        {/* Section 5 — Common Challenges */}
        <section ref={s5.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s5.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Challenges</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                The obstacles that reduce the value of analytics programs
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Most analytics failures are not failures of analytical method. They are failures of data quality, source documentation, or the review process that should catch errors before they reach decision-makers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {challenges.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s5.inView ? { opacity: 1, y: 0 } : {}}
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
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    {card.icon}
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

        {/* Section 6 — How Clarify Data Supports Analytics Teams */}
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
                  <Shield className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Platform Support</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[34px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  How Clarify Data improves the analytics data foundation
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.68)', fontSize: '15px', lineHeight: '25px' }}>
                  <p>
                    Analytics teams in most organizations spend a disproportionate share of their time on data preparation — collecting, cleaning, reconciling, and validating data before any analysis can begin. This work is essential, but it is not where analytical expertise creates the most value. It is where missing infrastructure creates the most risk.
                  </p>
                  <p>
                    Clarify Data provides a structured, documented approach to the preparation layer — ensuring that data entering analytics pipelines has been validated, verified, and contextualized before it drives conclusions. This does not replace the analytical work of the team. It creates the reliable foundation that makes that work more efficient and more defensible.
                  </p>
                  <p>
                    The platform also provides the market intelligence context that gives internal analytics its strategic meaning. When internal performance data is placed alongside verified, current market benchmarks, the analytical conclusions it supports become significantly richer — and the recommendations it informs become significantly more actionable.
                  </p>
                </div>
              </div>

              {/* Right — capability cards */}
              <div className="flex flex-col gap-4">
                {teamCapabilities.map((cap, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={s6.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                    className="rounded-xl p-5"
                    style={
                      i % 2 === 0
                        ? {
                            background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(16,16,20,0.95) 100%)',
                            border: `1px solid ${COPPER_BORDER}`,
                          }
                        : {
                            background: 'rgba(16,16,20,0.95)',
                            border: '1px solid rgba(250,250,250,0.08)',
                          }
                    }
                  >
                    <h3 className="text-[14px] font-semibold mb-1.5" style={{ color: 'rgb(250,250,250)' }}>
                      {cap.title}
                    </h3>
                    <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.58)', lineHeight: '20px' }}>
                      {cap.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7 — Limitations */}
        <section ref={s7.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s7.inView ? { opacity: 1, y: 0 } : {}}
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
                      What Clarify Data Does Not Do for Data Analytics
                    </h2>
                    <p className="text-[14px] mt-1" style={{ color: 'rgba(250,250,250,0.5)' }}>
                      Understanding the boundaries of the platform helps teams use it where it creates the most value.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="flex flex-col gap-4">
                    {limitationPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.72)', lineHeight: '22px' }}>
                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: COPPER }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div style={{ color: 'rgba(250,250,250,0.6)', fontSize: '14px', lineHeight: '24px' }}>
                    <p className="mb-4">
                      Clarify Data sits at the data preparation and verification layer of the analytics stack. It is designed to complement, not replace, the analytics tools, statistical platforms, and data science infrastructure that organizations use to model and visualize information.
                    </p>
                    <p>
                      The value it provides is a reliable, well-documented data foundation — one where the provenance of each input is known, the confidence level of each verified figure is explicit, and the escalation path for uncertain or high-stakes findings is built into the workflow rather than left to chance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BookDemo */}
        <section ref={s8.ref} className="border-t border-white/10" style={{ background: 'rgb(10,10,10)' }}>
          <BookDemo />
        </section>
      </main>
      <CtaFooter />
    </div>
  )
}
