'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import PageHeroHeader from './PageHeroHeader'

// ─── Mock UI Components ───────────────────────────────────────────────────────

function TrustScoreMock() {
  const bars = [
    { label: 'Source Quality', pct: 91 },
    { label: 'Data Freshness', pct: 88 },
    { label: 'Source Consistency', pct: 84 },
    { label: 'Industry Relevance', pct: 93 },
    { label: 'Human Verification', pct: 100 },
  ]
  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-[480px] mx-auto"
      style={{
        background: 'rgba(12,12,12,0.92)',
        border: '1px solid rgba(250,250,250,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="px-5 py-3.5 border-b flex items-center justify-between"
        style={{ borderColor: 'rgba(250,250,250,0.07)' }}
      >
        <span className="text-[13px] font-medium" style={{ color: 'rgb(250,250,250)' }}>
          Clerify Data Trust Index
        </span>
        <span className="text-[11px] uppercase tracking-widest" style={{ color: 'rgba(250,250,250,0.32)' }}>
          Live
        </span>
      </div>
      <div
        className="p-6 flex flex-col items-center border-b"
        style={{ borderColor: 'rgba(250,250,250,0.07)' }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
          style={{
            background: 'rgba(84,27,4,0.25)',
            border: '2px solid rgba(145,55,10,0.55)',
          }}
        >
          <span
            style={{
              fontSize: '26px',
              fontWeight: 600,
              letterSpacing: '-1px',
              color: 'rgb(250,250,250)',
            }}
          >
            87
          </span>
        </div>
        <p className="text-[12px]" style={{ color: 'rgba(250,250,250,0.45)' }}>
          Overall Trust Score
        </p>
      </div>
      <div className="p-5 space-y-3.5">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between mb-1.5">
              <span className="text-[12px]" style={{ color: 'rgba(250,250,250,0.55)' }}>
                {b.label}
              </span>
              <span className="text-[12px] font-medium" style={{ color: 'rgb(250,250,250)' }}>
                {b.pct}%
              </span>
            </div>
            <div className="h-[3px] rounded-full" style={{ background: 'rgba(250,250,250,0.07)' }}>
              <div
                className="h-[3px] rounded-full"
                style={{ width: `${b.pct}%`, background: 'rgba(145,55,10,0.85)' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function VDIMock() {
  const items = [
    { label: 'Fully Verified', count: 24, dot: 'rgb(74,222,128)' },
    { label: 'Partially Verified', count: 8, dot: 'rgba(250,180,50,0.9)' },
    { label: 'Human-Verified', count: 19, dot: 'rgba(145,80,20,0.9)' },
    { label: 'Requires Analysis', count: 3, dot: 'rgba(250,130,50,0.8)' },
    { label: 'Conflicting Data', count: 2, dot: 'rgba(250,60,50,0.75)' },
  ]
  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-[480px] mx-auto"
      style={{
        background: 'rgba(12,12,12,0.92)',
        border: '1px solid rgba(250,250,250,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="px-5 py-3.5 border-b flex items-center justify-between"
        style={{ borderColor: 'rgba(250,250,250,0.07)' }}
      >
        <span className="text-[13px] font-medium" style={{ color: 'rgb(250,250,250)' }}>
          Verified Data Index
        </span>
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-medium"
          style={{ background: 'rgba(74,222,128,0.1)', color: 'rgb(74,222,128)' }}
        >
          Updated
        </span>
      </div>
      <div className="p-5">
        {items.map((item, i) => (
          <div
            key={item.label}
            className="flex items-center justify-between py-3"
            style={{
              borderBottom:
                i < items.length - 1 ? '1px solid rgba(250,250,250,0.05)' : 'none',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: item.dot }}
              />
              <span className="text-[13px]" style={{ color: 'rgba(250,250,250,0.65)' }}>
                {item.label}
              </span>
            </div>
            <span
              className="text-[14px] font-medium"
              style={{ color: 'rgb(250,250,250)' }}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function QueryResultMock() {
  const metrics = [
    { label: 'Data Accuracy', value: '91%', sub: 'vs market data' },
    { label: 'Confidence Score', value: '87', sub: 'out of 100' },
    { label: 'Trust Index', value: '87 / 100', sub: 'Strong' },
    { label: 'Human Verified', value: 'Yes', sub: 'Complete' },
  ]
  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-[480px] mx-auto"
      style={{
        background: 'rgba(12,12,12,0.92)',
        border: '1px solid rgba(250,250,250,0.1)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        className="px-5 py-3.5 border-b"
        style={{ borderColor: 'rgba(250,250,250,0.07)' }}
      >
        <p className="text-[13px] font-medium" style={{ color: 'rgb(250,250,250)' }}>
          Query Verification Result
        </p>
        <p className="text-[11px] mt-0.5" style={{ color: 'rgba(250,250,250,0.4)' }}>
          Q3 2025 Market Analysis — AI-generated report
        </p>
      </div>
      <div
        className="grid grid-cols-2 gap-px"
        style={{ background: 'rgba(250,250,250,0.05)' }}
      >
        {metrics.map((item) => (
          <div
            key={item.label}
            className="p-4"
            style={{ background: 'rgba(12,12,12,0.92)' }}
          >
            <p className="text-[11px] mb-1" style={{ color: 'rgba(250,250,250,0.4)' }}>
              {item.label}
            </p>
            <p
              className="text-[18px] font-medium"
              style={{ color: 'rgb(250,250,250)', letterSpacing: '-0.5px' }}
            >
              {item.value}
            </p>
            <p className="text-[11px]" style={{ color: 'rgba(250,250,250,0.35)' }}>
              {item.sub}
            </p>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div
          className="rounded-xl p-3.5"
          style={{
            background: 'rgba(84,27,4,0.18)',
            border: '1px solid rgba(84,27,4,0.35)',
          }}
        >
          <p
            className="text-[10px] uppercase tracking-wider mb-1.5"
            style={{ color: 'rgba(250,250,250,0.35)' }}
          >
            Analyst Note
          </p>
          <p
            className="text-[12px]"
            style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '18px' }}
          >
            AI projections align with current market actuals. Minor divergence in supply
            chain metrics — recommend monitoring through Q4.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <PageHeroHeader
      eyebrow="Platform Overview"
      title="How Clerify Data Works"
      subtitle="A data verification and business intelligence platform that combines AI models, continuously updated market data, automated analytics, and human-verified results to help organizations make accurate, confident decisions."
    />
  )
}

// ─── Layers ───────────────────────────────────────────────────────────────────

const layers = [
  {
    num: '01',
    label: 'Layer 1',
    title: 'AI Model Integration',
    desc: 'Supported AI models are connected to the Clerify Data system. When a user submits a query, claim, report, or AI-generated response, the system collects the relevant output and prepares it for comparison against current market data.',
    detail:
      'The purpose of this layer is to understand what the AI model is claiming and identify the facts, statistics, assumptions, predictions, and recommendations that require verification.',
    tags: [
      'Business Research',
      'Market Analysis',
      'Content Generation',
      'Industry Reporting',
      'Forecasting',
      'Strategic Recommendations',
      'Data Interpretation',
    ],
  },
  {
    num: '02',
    label: 'Layer 2',
    title: 'Current Market Data Collection',
    desc: 'Clerify Data collects current information from relevant and permitted online market sources for a specific industry — identifying developments that may not yet be available within general AI models or may have changed since last update.',
    detail:
      'Collected data is cleaned, structured, categorized, and stored according to the platform\'s data governance and retention policies. The system focuses on industry-specific information so verification is relevant to the user\'s business and market.',
    tags: [
      'Industry Websites',
      'Market Reports',
      'Public Datasets',
      'Regulatory Publications',
      'Research Sources',
      'Company Announcements',
      'News & Industry Updates',
    ],
  },
  {
    num: '03',
    label: 'Layer 3',
    title: 'AI Data and Market Data Comparison',
    desc: 'Clerify Data compares AI-generated information with the latest market data, analyzing whether the AI response is accurate, partially accurate, outdated, unsupported, misleading, inconsistent, or unable to be verified.',
    detail:
      'Automated comparison jobs can run on a scheduled basis. When new data becomes available, the system updates its analysis, recalculates results, and identifies whether a previous conclusion is still accurate.',
    tags: [
      'Facts & Statistics',
      'Market Trends',
      'Business Assumptions',
      'Forecasts & Projections',
      'Customer Behavior',
      'Competitor Activity',
      'Demand Indicators',
    ],
  },
]

function LayersSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="eyebrow-pill mb-6 inline-block">Verification Process</span>
          <h2
            className="mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Multiple Verification Layers
          </h2>
          <p
            className="max-w-[520px] mx-auto text-[15px] md:text-[18px]"
            style={{
              fontWeight: 500,
              color: 'rgba(250,250,250,0.7)',
              lineHeight: '26px',
            }}
          >
            Each layer adds precision, context, and confidence — building toward a result
            you can act on with certainty.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.num}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="landscape-card rounded-2xl p-6 md:p-8"
              style={{ border: '1px solid rgba(250,250,250,0.07)' }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                {/* Number column */}
                <div className="flex-shrink-0 md:w-[100px]">
                  <div
                    className="inline-flex items-center px-3 py-1.5 rounded-full mb-3"
                    style={{
                      background: 'rgba(84,27,4,0.28)',
                      border: '1px solid rgba(84,27,4,0.5)',
                    }}
                  >
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: 'rgba(250,250,250,0.7)', letterSpacing: '0.04em' }}
                    >
                      {layer.label}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '52px',
                      fontWeight: 500,
                      letterSpacing: '-2px',
                      color: 'rgba(250,250,250,0.1)',
                      lineHeight: 1,
                    }}
                  >
                    {layer.num}
                  </p>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="mb-3 text-[20px] md:text-[26px]"
                    style={{
                      fontWeight: 500,
                      letterSpacing: '-0.78px',
                      color: 'rgb(250,250,250)',
                    }}
                  >
                    {layer.title}
                  </h3>
                  <p
                    className="mb-2 text-[15px] md:text-[16px]"
                    style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '25px' }}
                  >
                    {layer.desc}
                  </p>
                  <p
                    className="mb-5 text-[14px]"
                    style={{ color: 'rgba(250,250,250,0.42)', lineHeight: '22px' }}
                  >
                    {layer.detail}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[12px] font-medium"
                        style={{
                          background: 'rgba(250,250,250,0.07)',
                          border: '1px solid rgba(250,250,250,0.1)',
                          color: 'rgba(250,250,250,0.55)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Continuous Updates ───────────────────────────────────────────────────────

const continuousItems = [
  {
    title: 'Collect Updated Market Data',
    desc: 'Scheduled processes automatically pull fresh industry-specific data from permitted sources on a continuous basis.',
  },
  {
    title: 'Compare With Historical Data',
    desc: 'New data is compared against historical baselines to detect meaningful changes and identify market divergence.',
  },
  {
    title: 'Recalculate Accuracy & Confidence',
    desc: 'Accuracy percentages and confidence levels are automatically updated whenever new data changes a previous finding.',
  },
  {
    title: 'Revise the Trust Index',
    desc: 'The Clerify Data Trust Index is recalculated to reflect the latest verified information and current market conditions.',
  },
  {
    title: 'Trigger Alerts and Report Updates',
    desc: 'Users are notified when new data changes a previous result or when market conditions shift significantly.',
  },
  {
    title: 'Highlight Changes in Findings',
    desc: 'Reports clearly indicate when a previously verified conclusion has been revised due to new or contradictory evidence.',
  },
]

function ContinuousUpdatesSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="md:flex md:items-end md:justify-between gap-12">
            <div>
              <span className="eyebrow-pill mb-6 inline-block">Always Current</span>
              <h2
                className="mb-4 text-[28px] md:text-[48px] max-w-[520px]"
                style={{
                  fontWeight: 500,
                  letterSpacing: '-1.44px',
                  lineHeight: '1.2',
                  color: 'rgb(250,250,250)',
                }}
              >
                Continuous Data Updates
              </h2>
            </div>
            <p
              className="max-w-[360px] text-[15px] md:text-[16px]"
              style={{
                color: 'rgba(250,250,250,0.55)',
                lineHeight: '25px',
                marginBottom: '4px',
                flexShrink: 0,
              }}
            >
              Clerify Data reports are not limited to a single point in time. They evolve
              as the market changes and as additional verified data becomes available.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {continuousItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="rounded-2xl p-5 md:p-6"
              style={{
                background: 'rgb(18,18,18)',
                border: '1px solid rgba(250,250,250,0.07)',
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: 'rgba(84,27,4,0.35)',
                    border: '1px solid rgba(84,27,4,0.5)',
                  }}
                >
                  <span
                    className="text-[10px] font-semibold"
                    style={{ color: 'rgba(250,250,250,0.7)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h4
                    className="mb-1.5 text-[15px] md:text-[16px]"
                    style={{ fontWeight: 500, color: 'rgb(250,250,250)' }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'rgba(250,250,250,0.52)', lineHeight: '21px' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Query Verification ───────────────────────────────────────────────────────

const queryOutputs = [
  'Data accuracy percentage',
  'Difference between AI data and current market data',
  'Supporting evidence',
  'Confidence score',
  'Clerify Data Trust Index',
  'Verified Data Index',
  'Market change indicators',
  'Risk warnings',
  'Recommended corrections',
  'Business analyst comments',
  'Human verification status',
]

function QueryVerificationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow-pill mb-6 inline-block">User Query</span>
            <h2
              className="mb-4 text-[28px] md:text-[40px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-1.2px',
                lineHeight: '1.2',
                color: 'rgb(250,250,250)',
              }}
            >
              Submit any query. Receive a clear verification result.
            </h2>
            <p
              className="mb-6 text-[15px] md:text-[16px]"
              style={{ color: 'rgba(250,250,250,0.6)', lineHeight: '25px' }}
            >
              When a registered user submits a query, document, claim, dataset, or
              AI-generated response, Clerify Data compares it against verified datasets
              and returns a structured result showing not only whether a statement is
              correct, but how reliable the available evidence is.
            </p>
            <p
              className="mb-4 text-[13px] uppercase tracking-wider"
              style={{ color: 'rgba(250,250,250,0.32)' }}
            >
              Result includes
            </p>
            <div className="space-y-2.5">
              {queryOutputs.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(145,55,10,0.85)' }}
                  />
                  <span style={{ fontSize: '14px', color: 'rgba(250,250,250,0.6)' }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <QueryResultMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Trust Index ──────────────────────────────────────────────────────────────

const trustFactors = [
  'Quality of the available sources',
  'Number of supporting data points',
  'Freshness of the information',
  'Consistency between sources',
  'Difference between AI output and market data',
  'Historical accuracy',
  'Industry relevance',
  'Level of uncertainty',
  'Human verification status',
]

function TrustIndexSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <TrustScoreMock />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="eyebrow-pill mb-6 inline-block">Scoring System</span>
            <h2
              className="mb-4 text-[28px] md:text-[40px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-1.2px',
                lineHeight: '1.2',
                color: 'rgb(250,250,250)',
              }}
            >
              The Clerify Data Trust Index
            </h2>
            <p
              className="mb-6 text-[15px] md:text-[16px]"
              style={{ color: 'rgba(250,250,250,0.6)', lineHeight: '25px' }}
            >
              A scoring system that communicates the reliability of a query, claim, report,
              or dataset. A higher Trust Index indicates strong support from current and
              relevant evidence. A lower score may indicate limited data, conflicting
              sources, outdated information, or the need for expert review.
            </p>
            <p
              className="mb-4 text-[13px] uppercase tracking-wider"
              style={{ color: 'rgba(250,250,250,0.32)' }}
            >
              Score factors
            </p>
            <div className="space-y-2.5">
              {trustFactors.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: 8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                  className="flex items-center gap-2.5"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(145,55,10,0.85)' }}
                  />
                  <span style={{ fontSize: '14px', color: 'rgba(250,250,250,0.6)' }}>
                    {f}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Verified Data Index ──────────────────────────────────────────────────────

const vdiStatuses = [
  { label: 'Fully verified data', icon: '✓', color: 'rgb(74,222,128)' },
  { label: 'Partially verified data', icon: '◐', color: 'rgba(250,180,50,0.9)' },
  { label: 'Unverified data', icon: '○', color: 'rgba(250,250,250,0.35)' },
  { label: 'Conflicting data', icon: '⚡', color: 'rgba(250,80,50,0.8)' },
  { label: 'Outdated data', icon: '↻', color: 'rgba(250,250,250,0.35)' },
  { label: 'Data requiring further analysis', icon: '…', color: 'rgba(250,180,50,0.7)' },
  { label: 'Human-verified data', icon: '◈', color: 'rgba(185,90,20,0.9)' },
  { label: 'High-risk or high-impact data', icon: '⚠', color: 'rgba(250,50,50,0.75)' },
]

function VDISection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
      <div className="section-inner">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow-pill mb-6 inline-block">Data Clarity</span>
            <h2
              className="mb-4 text-[28px] md:text-[40px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-1.2px',
                lineHeight: '1.2',
                color: 'rgb(250,250,250)',
              }}
            >
              Verified Data Index
            </h2>
            <p
              className="mb-6 text-[15px] md:text-[16px]"
              style={{ color: 'rgba(250,250,250,0.6)', lineHeight: '25px' }}
            >
              In addition to the Trust Index, Clerify Data provides a Verified Data Index
              — indicating the level of confirmation achieved through automated verification
              and human review. It makes complex verification results easier for business
              owners, managers, analysts, and decision-makers to understand at a glance.
            </p>
            <p
              className="mb-4 text-[13px] uppercase tracking-wider"
              style={{ color: 'rgba(250,250,250,0.32)' }}
            >
              Status types
            </p>
            <div className="space-y-2.5">
              {vdiStatuses.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="text-[14px] w-5 text-center flex-shrink-0"
                    style={{ color: s.color }}
                  >
                    {s.icon}
                  </span>
                  <span style={{ fontSize: '14px', color: 'rgba(250,250,250,0.6)' }}>
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <VDIMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Human Verification ───────────────────────────────────────────────────────

const whenTriggered = [
  'Conflicting evidence',
  'Rapid market changes',
  'Limited datasets',
  'Industry-specific terminology',
  'High-impact business decisions',
  'Sensitive information',
  'Unusual market behavior',
  'Context AI models may misunderstand',
  'Forecasts based on uncertain assumptions',
]

const analystSteps = [
  'Review the original user query',
  'Examine the AI-generated result',
  'Review the available market data',
  'Check the quality and relevance of evidence',
  'Identify conflicts or missing information',
  'Evaluate important industry context',
  'Confirm or revise the automated result',
  'Add professional notes and recommendations',
  'Approve the final Trust Index',
  'Prepare the verified report',
]

function HumanVerificationSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="eyebrow-pill mb-6 inline-block">Human Review</span>
          <h2
            className="mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Why Human Verification Matters
          </h2>
          <p
            className="max-w-[580px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.7)', lineHeight: '26px' }}
          >
            Automated systems process large amounts of information quickly — but not every
            business question can be resolved through automation alone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="landscape-card rounded-2xl p-6 md:p-8"
            style={{ border: '1px solid rgba(250,250,250,0.07)' }}
          >
            <h3
              className="mb-2 text-[18px] md:text-[22px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-0.6px',
                color: 'rgb(250,250,250)',
              }}
            >
              When Human Review Is Triggered
            </h3>
            <p
              className="mb-6 text-[14px]"
              style={{ color: 'rgba(250,250,250,0.48)', lineHeight: '22px' }}
            >
              Queries are escalated to a business analyst when automation encounters edge
              cases that require professional judgment and industry context.
            </p>
            <div className="space-y-2.5">
              {whenTriggered.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(145,55,10,0.85)' }}
                  />
                  <span style={{ fontSize: '14px', color: 'rgba(250,250,250,0.62)' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'rgb(18,18,18)',
              border: '1px solid rgba(250,250,250,0.07)',
            }}
          >
            <h3
              className="mb-2 text-[18px] md:text-[22px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-0.6px',
                color: 'rgb(250,250,250)',
              }}
            >
              The Analyst Review Process
            </h3>
            <p
              className="mb-6 text-[14px]"
              style={{ color: 'rgba(250,250,250,0.48)', lineHeight: '22px' }}
            >
              Industry-experienced analysts complete a structured review before delivering
              the final verified report.
            </p>
            <div className="space-y-3">
              {analystSteps.map((step, i) => (
                <div key={step} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(84,27,4,0.38)',
                      border: '1px solid rgba(84,27,4,0.52)',
                    }}
                  >
                    <span
                      className="text-[10px] font-semibold"
                      style={{ color: 'rgba(250,250,250,0.7)' }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '14px',
                      color: 'rgba(250,250,250,0.6)',
                      lineHeight: '20px',
                      paddingTop: '3px',
                    }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── BI Reports ───────────────────────────────────────────────────────────────

const reportContents = [
  'Executive summary',
  'Query verification results',
  'Data accuracy percentage',
  'Clerify Data Trust Index',
  'Verified Data Index',
  'Market comparison',
  'Industry trend analysis',
  'Key market changes',
  'Business risks',
  'Growth opportunities',
  'Forecast updates',
  'Analyst recommendations',
  'Supporting evidence',
  'Human verification status',
]

const deliveryFormats = [
  'Clerify Data Dashboard',
  'Email',
  'PDF',
  'Microsoft Word',
  'Microsoft Excel',
  'CSV',
  'API',
  'Custom Enterprise Format',
]

function BIReportsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="eyebrow-pill mb-6 inline-block">Business Intelligence</span>
          <h2
            className="mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            From Verified Data to BI Reports
          </h2>
          <p
            className="max-w-[520px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.7)', lineHeight: '26px' }}
          >
            Clerify Data converts verified information into practical business intelligence
            and structured reports — ready for decision-makers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="landscape-card rounded-2xl p-6 md:p-8"
            style={{ border: '1px solid rgba(250,250,250,0.07)' }}
          >
            <h3
              className="mb-2 text-[18px] md:text-[22px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-0.6px',
                color: 'rgb(250,250,250)',
              }}
            >
              What a BI Report Contains
            </h3>
            <p
              className="mb-5 text-[14px]"
              style={{ color: 'rgba(250,250,250,0.48)', lineHeight: '22px' }}
            >
              A structured, decision-ready report with complete verification context and
              supporting evidence.
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {reportContents.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
                  className="flex items-center gap-2"
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: 'rgba(145,55,10,0.85)' }}
                  />
                  <span style={{ fontSize: '13px', color: 'rgba(250,250,250,0.55)' }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: 'rgb(18,18,18)',
              border: '1px solid rgba(250,250,250,0.07)',
            }}
          >
            <h3
              className="mb-2 text-[18px] md:text-[22px]"
              style={{
                fontWeight: 500,
                letterSpacing: '-0.6px',
                color: 'rgb(250,250,250)',
              }}
            >
              Delivery Formats
            </h3>
            <p
              className="mb-6 text-[14px]"
              style={{ color: 'rgba(250,250,250,0.48)', lineHeight: '22px' }}
            >
              Reports are delivered through any format your team already uses — no
              integration work required.
            </p>
            <div className="space-y-0">
              {deliveryFormats.map((fmt, i) => (
                <motion.div
                  key={fmt}
                  initial={{ opacity: 0, x: 8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                  className="flex items-center justify-between py-3"
                  style={{
                    borderBottom:
                      i < deliveryFormats.length - 1
                        ? '1px solid rgba(250,250,250,0.05)'
                        : 'none',
                  }}
                >
                  <span style={{ fontSize: '14px', color: 'rgba(250,250,250,0.65)' }}>
                    {fmt}
                  </span>
                  <span
                    className="text-[11px] px-2.5 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(74,222,128,0.1)',
                      color: 'rgb(74,222,128)',
                    }}
                  >
                    Available
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Full Workflow ─────────────────────────────────────────────────────────────

const workflowSteps = [
  'A user submits a query, claim, document, dataset, or AI-generated response.',
  'The system identifies the information that requires verification.',
  'Connected AI models provide the relevant AI-generated data.',
  'Clerify Data collects current industry-specific market information.',
  'The system cleans and structures the available data.',
  'AI results are compared with current and historical market data.',
  'Accuracy, difference, and confidence levels are calculated.',
  'The initial Clerify Data Trust Index is generated.',
  'Edge cases and high-impact queries are sent to a human verifier.',
  'An experienced business analyst reviews the evidence.',
  'The Trust Index and Verified Data Index are confirmed or updated.',
  'A final verification or BI report is delivered to the user.',
  'Scheduled data updates continue monitoring relevant market changes.',
  'Users are alerted when new data changes a previous result.',
]

function WorkflowSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="eyebrow-pill mb-6 inline-block">End-to-End</span>
          <h2
            className="mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            The Complete Workflow
          </h2>
          <p
            className="max-w-[480px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.7)', lineHeight: '26px' }}
          >
            From initial submission to final verified report — every step, every time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="landscape-card rounded-2xl p-6 md:p-10"
          style={{ border: '1px solid rgba(250,250,250,0.07)' }}
        >
          <div className="grid md:grid-cols-2 gap-5 md:gap-7">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: i < 8 ? 'rgba(84,27,4,0.32)' : 'rgba(74,222,128,0.1)',
                    border:
                      i < 8
                        ? '1px solid rgba(84,27,4,0.52)'
                        : '1px solid rgba(74,222,128,0.28)',
                  }}
                >
                  <span
                    className="text-[10px] font-semibold"
                    style={{
                      color: i < 8 ? 'rgba(250,250,250,0.7)' : 'rgb(74,222,128)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(250,250,250,0.6)',
                    lineHeight: '22px',
                    paddingTop: '7px',
                  }}
                >
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── The Advantage ─────────────────────────────────────────────────────────────

const advantages = [
  {
    label: 'Input Processing',
    title: 'Artificial Intelligence',
    desc: 'AI models help process questions, identify claims, analyze content, and organize information at scale — forming the foundation of every verification workflow and enabling fast, broad-coverage analysis.',
  },
  {
    label: 'Data Currency',
    title: 'Current Market Data',
    desc: 'Continuously updated industry data helps identify developments that may not yet appear in general AI model responses — keeping results relevant, timely, and grounded in real market conditions.',
  },
  {
    label: 'Automation',
    title: 'Automated Business Analytics',
    desc: 'The system compares datasets, detects differences, calculates accuracy, identifies trends, and generates business intelligence automatically — reducing manual effort and human error.',
  },
  {
    label: 'Expert Review',
    title: 'Human Verification',
    desc: 'Experienced business analysts review edge cases, confirm critical results, and add industry-specific judgment — providing the professional layer that automation alone cannot replicate.',
  },
]

function AdvantageSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section ref={ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="eyebrow-pill mb-6 inline-block">Four Capabilities</span>
          <h2
            className="mb-4 text-[28px] md:text-[48px]"
            style={{
              fontWeight: 500,
              letterSpacing: '-1.44px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            The Clerify Data Advantage
          </h2>
          <p
            className="max-w-[520px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 500, color: 'rgba(250,250,250,0.7)', lineHeight: '26px' }}
          >
            Four capabilities working together to create a more reliable approach to data
            verification and business decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="landscape-card rounded-2xl p-6 md:p-8"
              style={{ border: '1px solid rgba(250,250,250,0.07)' }}
            >
              <div
                className="inline-flex px-3 py-1 rounded-full mb-5"
                style={{
                  background: 'rgba(84,27,4,0.25)',
                  border: '1px solid rgba(84,27,4,0.42)',
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'rgba(250,250,250,0.6)',
                  }}
                >
                  {item.label}
                </span>
              </div>
              <h3
                className="mb-3 text-[20px] md:text-[24px]"
                style={{
                  fontWeight: 500,
                  letterSpacing: '-0.72px',
                  color: 'rgb(250,250,250)',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(250,250,250,0.58)', lineHeight: '23px' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <>
      <HeroSection />
      <LayersSection />
      <ContinuousUpdatesSection />
      <QueryVerificationSection />
      <TrustIndexSection />
      <VDISection />
      <HumanVerificationSection />
      <BIReportsSection />
      <WorkflowSection />
      <AdvantageSection />
    </>
  )
}
