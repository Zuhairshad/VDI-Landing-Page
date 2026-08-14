'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  ClipboardList,
  ClipboardCheck,
  ArrowRight,
  Shield,
  Search,
  Users,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function BusinessAnalysisPage() {
  const s1 = useSection()
  const s2 = useSection()
  const s3 = useSection()
  const s4 = useSection()
  const s5 = useSection()
  const s6 = useSection()
  const s7 = useSection()
  const s8 = useSection()

  const workflowSteps = [
    {
      num: '01',
      title: 'Define the business question with scope, decision owner, and time constraint',
      desc: 'A well-defined business question is specific about what is being decided, who will make the decision, what time horizon is relevant, and what information would change the outcome. Vague questions produce vague analysis.',
    },
    {
      num: '02',
      title: 'Identify information requirements and acceptable source types',
      desc: 'Before gathering information, document what types of sources are appropriate for each question — primary data, secondary research, internal records, regulatory databases, or market reports — and what minimum standards apply to each.',
    },
    {
      num: '03',
      title: 'Gather and document sources with dates, versions, and access context',
      desc: 'Every source used in the analysis is recorded with its publication date, version, access date, and the specific passages or data fields relevant to each claim. Undocumented sources cannot be audited or updated.',
    },
    {
      num: '04',
      title: 'Validate data structure and flag gaps or inconsistencies',
      desc: 'Before verifying the accuracy of individual claims, confirm that the data is complete, consistently formatted, and internally coherent. Structural problems at this stage, if left unaddressed, compound into interpretation errors later.',
    },
    {
      num: '05',
      title: 'Verify key claims against available evidence and score confidence',
      desc: 'Each material claim in the analysis is checked against its source, scored for confidence based on source authority, freshness, and consistency, and assigned a verification status. Unverified claims are flagged as assumptions.',
    },
    {
      num: '06',
      title: 'Compare alternatives using consistent definitions and time windows',
      desc: 'When comparing options, markets, competitors, or scenarios, normalize for definition differences and time period inconsistencies. Document the original values and the normalization method used.',
    },
    {
      num: '07',
      title: 'Route uncertain or high-impact findings to qualified reviewers',
      desc: 'Findings with low confidence scores, conflicting evidence, or significant decision stakes are escalated to a domain-qualified reviewer before they inform recommendations.',
    },
    {
      num: '08',
      title: 'Deliver recommendations with evidence trail, limitations, and review history',
      desc: 'The final output documents not just the recommendation but the evidence that supports it, the assumptions that could not be verified, the limitations of the analysis, and the review history.',
    },
  ]

  const analysisTypes = [
    {
      title: 'Competitive Analysis',
      desc: 'Structured comparison of competitor positioning, pricing, product offerings, go-to-market approach, and market share. Requires consistent definitions and contemporaneous source dates to produce valid comparisons.',
    },
    {
      title: 'Market Analysis',
      desc: 'Assessment of market size, growth trajectory, segment structure, demand drivers, and customer behavior. Each figure requires a source, a methodology, and a date before it can be included in strategic recommendations.',
    },
    {
      title: 'Feasibility Analysis',
      desc: 'Evaluation of whether a proposed initiative is viable given operational, financial, regulatory, and market constraints. Requires verified data for each constraint boundary to produce a defensible recommendation.',
    },
    {
      title: 'Gap Analysis',
      desc: 'Identification and measurement of the distance between current state and a defined target state. Requires accurate current-state data and clearly defined, evidence-based targets.',
    },
    {
      title: 'Root Cause Analysis',
      desc: 'Systematic investigation tracing a performance problem or incident back to its underlying causes. Requires consistent historical data with reliable timestamps and attribution.',
    },
    {
      title: 'Cost-Benefit Analysis',
      desc: 'Structured comparison of quantifiable and non-quantifiable trade-offs between alternatives. Each cost and benefit figure must be sourced, scoped, and assigned a confidence level before the analysis produces a meaningful result.',
    },
  ]

  const platformCapabilities = [
    'Source documentation at the claim level, with publication dates and access records',
    'Consistent definition management across comparison fields',
    'Conflict flags when independent sources disagree on key figures',
    'Trust Index confidence ratings for each material finding',
    'Recency markers and freshness alerts for time-sensitive data',
    'Human review routing for uncertain or high-stakes findings',
    'Evidence trail packaging for stakeholder review and audit',
    'Structured output templates designed for analyst and executive audiences',
  ]

  const humanReviewTriggers = [
    'Regulated industries where professional obligations apply to the analytical output',
    'Clinical or legal context where analytical conclusions could affect health or legal outcomes',
    'Financial decisions above defined materiality thresholds',
    'Conflicting evidence that cannot be resolved by available algorithmic means',
    'Recommendations with significant operational consequences that are difficult to reverse',
    'Public-facing or compliance-sensitive outputs that will represent the organization externally',
  ]

  const limitationPoints = [
    'Clarify Data does not replace the professional judgment of qualified analysts, lawyers, clinicians, or financial advisors',
    'The platform does not guarantee completeness of evidence — analysis is bounded by available and accessible source material',
    'Outputs are only as current as the sources available at the time of the analysis — scheduled refresh is recommended for ongoing decisions',
    'Does not provide legal, medical, financial, or regulatory advice — outputs require human review in these domains',
    'Requires a clearly defined analytical scope and consistent definitions to produce meaningful results',
  ]

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        {/* Hero */}
        <PageHeroHeader
          eyebrow="Business Analysis"
          icon={<ClipboardList className="w-4 h-4" style={{ color: COPPER }} />}
          title="Business Analysis That Produces Findings You Can Defend"
          subtitle="Good business analysis connects observations to evidence, separates facts from assumptions, and produces a record that a reviewer can challenge, update, or reproduce."
        />

        {/* Section 1 — What Is Business Analysis */}
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
                  <ClipboardList className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>The Discipline</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[36px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Business analysis is the practice of turning business questions into structured, reviewable answers
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.72)', fontSize: '16px', lineHeight: '26px' }}>
                  <p>
                    A business analyst does not just collect information — they define the question, determine what information is relevant to it, gather that information from appropriate sources, compare alternatives using consistent criteria, and present a recommendation that is grounded in evidence rather than opinion. The evidence trail is not an optional add-on. It is the difference between a recommendation that can be challenged and updated and one that has to be accepted or rejected on trust.
                  </p>
                  <p>
                    The information gathering stage is where most business analysis fails. Not in the logical structure of the argument, not in the presentation, but in the quality of the information that the argument is built on. Unverified market figures, AI-generated statistics, outdated competitor data, and internally inconsistent datasets all look the same in a PowerPoint slide. They only reveal themselves when someone asks where a specific number came from.
                  </p>
                  <p>
                    Clarify Data addresses this by providing an information quality layer that runs before the analytical interpretation begins. Sources are documented, claims are verified, conflicts are flagged, and confidence levels are assigned to each material finding. The result is analysis that can be audited, updated, and defended — not just presented.
                  </p>
                </div>
              </div>

              {/* Right — completeness card */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-widest mb-5" style={{ color: COPPER }}>
                  A complete business analysis includes
                </p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    'A clear problem definition with scope and decision owner',
                    'An information gathering plan with acceptable source types',
                    'Source documentation with dates, versions, and access records',
                    'Data validation for structural completeness and consistency',
                    'Evidence-based verification of key claims',
                    'Comparative analysis with consistent definitions and time windows',
                    'Explicit limitations and unverified assumptions',
                    'Review and sign-off documentation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.78)', lineHeight: '22px' }}>
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

        {/* Section 2 — The Information Quality Challenge */}
        <section ref={s2.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s2.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12">
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <Search className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>The Problem</span>
                </span>
                <h2
                  className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Most business analysis fails at the information stage, not the analysis stage
                </h2>
                <p className="max-w-[700px] text-[16px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '26px' }}>
                  The logical structure of a business analysis can be sound while the information it is built on is unreliable. This is the most common failure pattern — not faulty reasoning, but faulty inputs.
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
                    Common information problems in business analysis
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {[
                      'Relying on unverified AI-generated market data as if it were primary research',
                      'Using competitor information from inconsistent reporting dates without normalization',
                      'Citing sources that do not actually support the specific claim being made',
                      'Mixing primary and secondary data without flagging the difference in reliability',
                      'Failing to document what was not found — the absence of evidence is itself evidence',
                      'Conflicting internal and external data with no documented resolution method',
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
                    What structured verification adds
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {[
                      'Source documentation at the claim level, not just a bibliography at the end',
                      'Consistent definitions across comparison fields, with original values retained',
                      'Conflict flags when independent sources disagree on the same figure',
                      'Confidence ratings for each key finding based on source authority and freshness',
                      'Timestamps and recency markers attached to each data point',
                      'Human review notes for high-stakes or contested analytical conclusions',
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

        {/* Section 3 — Workflow */}
        <section ref={s3.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s3.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <ClipboardList className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Step by Step</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                From business question to defensible recommendation
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Each step in this workflow produces a documented output that carries forward into the next step. The goal is not just a recommendation — it is a recommendation that can be explained, challenged, and updated as new information becomes available.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {workflowSteps.map((step, i) => (
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

        {/* Section 4 — Types of Business Analysis */}
        <section ref={s4.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s4.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Search className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Analysis Types</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Different questions require different analytical approaches
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                The information quality requirements differ by analysis type — but the principle remains constant: every material claim must be traceable to a source, and every source must meet the reliability standard appropriate for the decision context.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {analysisTypes.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s4.inView ? { opacity: 1, y: 0 } : {}}
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

        {/* Section 5 — What Clarify Data Brings */}
        <section ref={s5.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s5.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Left */}
              <div>
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Platform Role</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[34px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Clarify Data handles the information-quality work so analysts can focus on the analysis
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.68)', fontSize: '15px', lineHeight: '25px' }}>
                  <p>
                    The most time-consuming and error-prone part of business analysis is not the reasoning — it is the source work. Finding reliable information, documenting where it came from, checking whether a claim is actually supported by the source that supposedly underpins it, reconciling conflicting figures from different sources — this work takes most of the time and introduces most of the risk.
                  </p>
                  <p>
                    Clarify Data provides the infrastructure for this information-quality layer. Sources are tracked at the claim level, not just referenced in a bibliography. Key figures are verified against available evidence. Conflicts between sources are documented rather than quietly resolved. Confidence levels are assigned to each finding so that analysts can communicate the strength of their evidence base, not just their conclusions.
                  </p>
                  <p>
                    The result is analysis that is faster to produce, more defensible under scrutiny, and easier to update when new information becomes available. When conditions change or a stakeholder challenges a finding, the evidence trail makes it possible to identify exactly which claims need to be re-verified and which remain current.
                  </p>
                </div>
              </div>

              {/* Right — capabilities card */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'rgba(16,16,20,0.95)',
                  border: '1px solid rgba(250,250,250,0.08)',
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(250,250,250,0.4)' }}>
                  Platform capabilities for business analysis
                </p>
                <ul className="flex flex-col gap-3.5">
                  {platformCapabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.72)', lineHeight: '22px' }}>
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: COPPER }} />
                      </div>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6 — Human Judgment */}
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
                  <Users className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Human Judgment</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[32px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Automated verification supports analysis. It does not replace analytical judgment.
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.68)', fontSize: '15px', lineHeight: '25px' }}>
                  <p>
                    The value of automated verification is that it handles the high-volume, structured work of checking claims against sources, flagging inconsistencies, and scoring confidence. What it cannot do is make a judgment call — deciding which interpretation of conflicting evidence is most reasonable given the specific context of the decision, or determining that the stakes of a particular recommendation are high enough to require professional review.
                  </p>
                  <p
                    className="pl-4 py-2 border-l-2"
                    style={{ borderColor: COPPER, color: 'rgba(250,250,250,0.8)' }}
                  >
                    In high-consequence contexts, the analyst's role is not just to interpret data — it is to determine whether the evidence base is strong enough to support a recommendation, and to be transparent about where it is not.
                  </p>
                  <p>
                    Clarify Data is designed to make that judgment call easier by providing an explicit confidence score for each finding. When the score is below threshold or the context is high-stakes, the workflow routes the finding to a qualified reviewer rather than proceeding to recommendation. The human judgment is documented and attached to the final analytical record.
                  </p>
                </div>
              </div>

              {/* Right — human review triggers */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-widest mb-5" style={{ color: COPPER }}>
                  Human review is required when analysis involves
                </p>
                <ul className="flex flex-col gap-4">
                  {humanReviewTriggers.map((trigger, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.78)' }}>
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: COPPER }} />
                      </div>
                      {trigger}
                    </li>
                  ))}
                </ul>
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
                      What Clarify Data Does Not Do for Business Analysis
                    </h2>
                    <p className="text-[14px] mt-1" style={{ color: 'rgba(250,250,250,0.5)' }}>
                      Clarify Data improves the information quality foundation — it does not replace analytical expertise.
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
                      Business analysis requires a combination of information quality infrastructure and human analytical judgment. Clarify Data provides the former — the structured gathering, verification, and documentation of the information that analysis is built on. It does not provide the latter — the domain expertise, contextual knowledge, and professional accountability that qualified analysts bring to their work.
                    </p>
                    <p>
                      Every analytical output produced with Clarify Data should be reviewed by a qualified analyst before it informs a consequential decision. The platform is designed to make that review faster and more reliable — not to eliminate it.
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
