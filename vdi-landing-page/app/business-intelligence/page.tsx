'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  BarChart3,
  ClipboardCheck,
  ArrowRight,
  TrendingUp,
  Users,
  Layers,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function BusinessIntelligencePage() {
  const s1 = useSection()
  const s2 = useSection()
  const s3 = useSection()
  const s4 = useSection()
  const s5 = useSection()
  const s6 = useSection()
  const s7 = useSection()
  const s8 = useSection()

  const biTypes = [
    {
      title: 'Descriptive BI',
      subtitle: 'What happened and when',
      desc: 'Summarizes historical data to establish baselines and track performance over time. Descriptive BI is the foundation layer — before you can explain why something happened, you need an accurate picture of what happened. Requires accurate, complete, and well-structured historical records.',
    },
    {
      title: 'Diagnostic BI',
      subtitle: 'Why it happened',
      desc: 'Compares periods, segments, channels, and variables to find the causes behind observed performance changes. Diagnostic BI is only reliable when the underlying data uses consistent definitions across the comparison dimensions. Requires consistent metric definitions and clear source attribution for each data point.',
    },
    {
      title: 'Predictive BI',
      subtitle: 'What might happen next',
      desc: 'Uses historical patterns, market signals, and trend extrapolation to project future states. Predictive BI is only as reliable as the verified historical data it is trained on. Unverified inputs produce statistically coherent but factually unreliable forecasts that carry hidden risk.',
    },
    {
      title: 'Decision Support BI',
      subtitle: 'What action should we take',
      desc: 'Synthesizes multiple data streams into actionable recommendations. Decision support BI requires the highest level of data confidence and should always include human review for high-stakes outputs. It sits at the point where data quality directly determines business outcomes.',
    },
  ]

  const deliverables = [
    {
      title: 'Executive Summaries with Traceable Evidence',
      desc: 'Board-ready summaries where every material claim is connected to a dated, cited source. Not just conclusions — the evidence chain that supports them.',
    },
    {
      title: 'Competitor Analysis Reports',
      desc: 'Structured comparisons of competitor positioning, pricing, product offerings, and market messaging, verified against current sources and normalized for definition differences.',
    },
    {
      title: 'Market Entry Assessments',
      desc: 'Evidence-based evaluations of market size, growth trajectory, competitive intensity, regulatory environment, and customer demand — each figure traced to its source.',
    },
    {
      title: 'Performance Benchmark Reports',
      desc: 'Industry and peer benchmarking with consistent definitions, documented time windows, and explicit flags where comparison data uses different methodologies.',
    },
    {
      title: 'Forecast Models with Source Attribution',
      desc: 'Projection models where every input assumption is documented, sourced, and assigned a confidence level reflecting the reliability of the underlying evidence.',
    },
    {
      title: 'Regulatory and Compliance Data Packages',
      desc: 'Data compilations for regulatory submissions with full provenance trails, version control, and human reviewer sign-off documentation.',
    },
  ]

  const personas = [
    {
      role: 'Business Analysts',
      icon: <Users className="w-4 h-4" style={{ color: COPPER }} />,
      desc: 'Structure and verify information before it reaches executives. Clarify Data reduces the time spent hunting for reliable sources and building manual evidence trails — letting analysts focus on the interpretation and recommendation layer.',
    },
    {
      role: 'Data Analysts',
      icon: <BarChart3 className="w-4 h-4" style={{ color: COPPER }} />,
      desc: 'Clean, validate, and contextualize datasets for BI pipelines. Clarify Data adds verification and market context to the data preparation workflow, ensuring that what enters the pipeline is both structurally sound and factually grounded.',
    },
    {
      role: 'BI Analysts',
      icon: <TrendingUp className="w-4 h-4" style={{ color: COPPER }} />,
      desc: 'Build reports and dashboards with verified, provenance-rich data. When the underlying data has been verified before it reaches the BI layer, the time spent correcting reports after delivery drops significantly.',
    },
    {
      role: 'Consultants',
      icon: <Layers className="w-4 h-4" style={{ color: COPPER }} />,
      desc: 'Deliver client intelligence with documented evidence trails. Clarify Data provides the verification infrastructure that allows consultants to stand behind their findings when clients challenge the source or currency of specific claims.',
    },
    {
      role: 'Business Owners',
      icon: <ClipboardCheck className="w-4 h-4" style={{ color: COPPER }} />,
      desc: 'Make strategic decisions with verified market and performance data. Clarify Data provides business owners with intelligence that is not just presented confidently but demonstrably grounded in current, cross-checked evidence.',
    },
  ]

  const limitationPoints = [
    'Clarify Data is not a traditional BI tool or dashboard builder — it does not produce interactive visualization dashboards',
    'Does not replace statistical modeling software or dedicated data science environments',
    'Does not provide guaranteed accuracy for any market figure — all intelligence reflects available sources at a point in time',
    'Does not make investment, financial, legal, or medical decisions on behalf of users or clients',
    'All outputs require human review before use in high-stakes, regulated, or public-facing contexts',
  ]

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        {/* Hero */}
        <PageHeroHeader
          eyebrow="Business Intelligence"
          icon={<BarChart3 className="w-4 h-4" style={{ color: COPPER }} />}
          title="Business Intelligence That Starts With Evidence, Not Assumptions"
          subtitle="Most BI tools show you what the numbers say. Clarify Data also helps you understand where the numbers came from, whether the underlying data is reliable, and how much confidence you can place in each conclusion."
        />

        {/* Section 1 — What Is Business Intelligence */}
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
                  <BarChart3 className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>The Foundation</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[36px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Business intelligence turns structured, verified data into actionable insight
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.72)', fontSize: '16px', lineHeight: '26px' }}>
                  <p>
                    Business intelligence is the practice of collecting, processing, and analyzing data to support better organizational decisions. At its best, BI provides decision-makers with timely, accurate, contextual information — not just about what happened inside the organization, but about how those internal patterns compare to market conditions, competitor behavior, and industry benchmarks.
                  </p>
                  <p>
                    The operative word is accurate. A BI process that ingests unverified data produces outputs that are statistically coherent but factually unreliable. Dashboards look the same whether the underlying data is correct or not. Trends look equally compelling when built on verified figures and when built on AI-generated statistics that have no source. The difference only becomes visible when someone challenges a number and no one can trace where it came from.
                  </p>
                  <p>
                    Clarify Data approaches business intelligence as an evidence problem before it is a visualization problem. Before data reaches a report or dashboard, it needs to be clean, consistently structured, verified against available sources, and contextualized within current market conditions. That preparation work is what separates BI that can be defended from BI that merely looks convincing.
                  </p>
                </div>
              </div>

              {/* Right — BI capabilities card */}
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
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    <BarChart3 className="w-4.5 h-4.5" style={{ color: COPPER }} />
                  </div>
                  <p className="text-[15px] font-semibold text-white">BI covers four core capabilities</p>
                </div>
                <div className="flex flex-col gap-5">
                  {[
                    { label: 'Descriptive', desc: 'What happened — historical data organized into baselines and trends.' },
                    { label: 'Diagnostic', desc: 'Why it happened — analysis of causes behind observed performance changes.' },
                    { label: 'Predictive', desc: 'What might happen — forecasts based on verified historical patterns and market signals.' },
                    { label: 'Decision Support', desc: 'What should we do — synthesized intelligence to inform high-stakes choices.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5"
                        style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: COPPER }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold mb-0.5" style={{ color: COPPER }}>
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

        {/* Section 2 — The Data Quality Problem */}
        <section ref={s2.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s2.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <ClipboardCheck className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>The Problem</span>
                </span>
                <h2
                  className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  A dashboard built on unverified data produces confident-looking wrong answers
                </h2>
                <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.6)', lineHeight: '26px' }}>
                  The presentation layer of business intelligence — charts, dashboards, trend lines — makes data look authoritative regardless of its actual reliability. Data quality problems become invisible once they are dressed in a visualization.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Without */}
                <div
                  className="rounded-2xl p-7"
                  style={{
                    background: 'rgba(16,16,20,0.95)',
                    border: '1px solid rgba(250,250,250,0.08)',
                  }}
                >
                  <p className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: 'rgba(250,250,250,0.4)' }}>
                    Without verified data
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {[
                      'Decisions based on market figures that are two or three years out of date',
                      'AI-generated statistics treated as verified facts inside executive reports',
                      'Competitor comparisons using different definitions of the same metric',
                      'Forecasts built on input assumptions that no source actually supports',
                      'Reports that cannot be traced back to their original data sources',
                      'Analysts who disagree on the numbers but have no shared evidence base to resolve the conflict',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '22px' }}>
                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-white/25" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* With */}
                <div
                  className="rounded-2xl p-7"
                  style={{
                    background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                    border: `1px solid ${COPPER_BORDER}`,
                  }}
                >
                  <p className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: COPPER }}>
                    With verified data
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {[
                      'Every metric connected to a dated, traceable source with a documented access date',
                      'AI-generated content checked against available evidence before it enters reports',
                      'Comparisons normalized for definition and time window differences, with original values retained',
                      'Forecasts built on input assumptions that are cross-checked against at least two independent sources',
                      'Reports with full provenance trails that survive audit and executive scrutiny',
                      'A shared evidence base that reduces analyst disagreement and accelerates sign-off',
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

        {/* Section 3 — Four Types of BI */}
        <section ref={s3.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s3.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Analytics Types</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Understanding what happened is only the beginning
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                The four types of business intelligence represent a maturity progression. Most organizations operate primarily in descriptive and diagnostic BI. Organizations with strong data foundations can move reliably into predictive and decision support territory — but only when the underlying data quality supports it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {biTypes.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s3.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-7"
                  style={{
                    background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                    border: `1px solid ${COPPER_BORDER}`,
                  }}
                >
                  <p className="text-[12px] font-semibold uppercase tracking-widest mb-2" style={{ color: COPPER }}>
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

        {/* Section 4 — Verified Market Intelligence */}
        <section ref={s4.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s4.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Left */}
              <div>
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Market Context</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[34px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  BI without market context is BI in a vacuum
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.68)', fontSize: '15px', lineHeight: '25px' }}>
                  <p>
                    Internal performance metrics tell you what happened inside your organization. They cannot tell you whether those results are good relative to what is happening in your market. A revenue decline can represent a strategic failure or a commendable outcome during a period of broad industry contraction. Without verified market context, internal BI cannot distinguish between the two.
                  </p>
                  <p>
                    Competitor behavior, pricing dynamics, demand signals, and regulatory changes give internal performance its meaning. An organization that is growing at eight percent annually needs to know whether its competitors are growing at four percent or fourteen percent before it can assess what that growth rate represents strategically. That contextual data must be verified before it influences strategic conclusions.
                  </p>
                  <p>
                    Clarify Data integrates market intelligence as a verification context layer — not as a separate research exercise, but as part of the same information quality workflow that applies to internal data. Market figures are sourced, dated, cross-checked, and assigned a confidence level before they appear alongside internal metrics in any analytical output.
                  </p>
                </div>
              </div>

              {/* Right — market intelligence card */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-widest mb-5" style={{ color: COPPER }}>
                  Clarify Data market intelligence includes
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    'Competitor positioning and messaging analysis',
                    'Pricing signals and market rate benchmarks',
                    'Regulatory updates affecting market conditions',
                    'Demand trend indicators by segment and geography',
                    'Industry performance benchmarks and peer comparisons',
                    'Supply chain indicators relevant to your sector',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.78)' }}>
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: COPPER }} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5 — Deliverables */}
        <section ref={s5.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s5.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Deliverables</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Reports your team can act on with confidence
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Each deliverable from Clarify Data is designed to connect conclusions to evidence in a form that survives scrutiny — from internal review to board presentation to regulatory audit.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {deliverables.map((item, i) => (
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
                  <h3 className="text-[15px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                    {item.title}
                  </h3>
                  <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.6)', lineHeight: '21px' }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — Who Uses Clarify Data */}
        <section ref={s6.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s6.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Users className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Built For</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                BI across every function that depends on reliable information
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Business intelligence is not the exclusive domain of the BI team. Every function that uses data to make decisions benefits from a verified foundation — and from knowing which parts of that foundation are strong and which carry uncertainty.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {personas.map((persona, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s6.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-6 flex items-start gap-4"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(16,16,20,0.95) 100%)'
                      : 'rgba(16,16,20,0.95)',
                    border: i % 2 === 0
                      ? `1px solid ${COPPER_BORDER}`
                      : '1px solid rgba(250,250,250,0.08)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    {persona.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold mb-2" style={{ color: 'rgb(250,250,250)' }}>
                      {persona.role}
                    </h3>
                    <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.64)', lineHeight: '22px' }}>
                      {persona.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
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
                      What Clarify Data BI Does Not Do
                    </h2>
                    <p className="text-[14px] mt-1" style={{ color: 'rgba(250,250,250,0.5)' }}>
                      Responsible use requires understanding the scope and boundaries of the platform.
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
                      Clarify Data is designed to improve the information foundation that business intelligence is built on. It is not a replacement for the BI platforms, statistical tools, or specialized software that organizations use to visualize, model, and distribute intelligence.
                    </p>
                    <p>
                      The platform's role is to ensure that what enters those tools is reliable, traceable, and current — and to flag the findings where uncertainty is high enough to require human judgment before consequential decisions are made.
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
