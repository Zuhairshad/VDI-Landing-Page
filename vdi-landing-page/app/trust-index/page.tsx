'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  Star,
  ClipboardCheck,
  ArrowRight,
  Shield,
  AlertTriangle,
  Users,
  CheckCircle2,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function TrustIndexPage() {
  const s1 = useSection()
  const s2 = useSection()
  const s3 = useSection()
  const s4 = useSection()
  const s5 = useSection()
  const s6 = useSection()
  const s7 = useSection()
  const s8 = useSection()
  const s9 = useSection()

  const nineFactors = [
    {
      num: '01',
      title: 'Source Authority',
      desc: 'Is the source responsible for or close to the underlying information? Primary regulatory databases, official government publications, peer-reviewed research, and direct measurements score higher than secondary aggregators or unattributed summaries. The closer a source is to the original event, measurement, or decision, the higher its authority score.',
    },
    {
      num: '02',
      title: 'Source Freshness',
      desc: 'Is the information current for the intended decision window? A market size figure from three years ago may be entirely irrelevant to a decision made today. Freshness is evaluated relative to the specific decision context — a figure that is adequately current for one purpose may be dangerously stale for another.',
    },
    {
      num: '03',
      title: 'Directness of Support',
      desc: 'Does the source support the exact claim being made, or only a related, analogous, or adjacent one? A source that reports the general trend in a market does not directly support a specific figure drawn from that market. Indirect or inferential evidence weakens the confidence score, and this weakening is explicitly recorded.',
    },
    {
      num: '04',
      title: 'Source Agreement',
      desc: 'Do independent sources align after controlling for differences in definitions, time windows, methodologies, and geographies? Consistent agreement across multiple diverse, independent sources significantly strengthens confidence. Disagreement — even partial — is documented and contributes to a lower score until resolved.',
    },
    {
      num: '05',
      title: 'Extraction Quality',
      desc: 'How precisely was the relevant passage, data field, or finding identified, extracted, and matched to the claim being evaluated? High extraction quality means the specific text or data point is cited, not just the source document. Ambiguous or approximate extraction reduces this factor score.',
    },
    {
      num: '06',
      title: 'Evidence Completeness',
      desc: 'Is the evidence base sufficient to support the claim, or are there known gaps in source coverage that could materially affect the conclusion? Completeness accounts for what is missing — the sources that were searched but did not return relevant results, the time periods that lack data, and the geographies or segments that are not covered.',
    },
    {
      num: '07',
      title: 'Conflict Resolution',
      desc: 'Have conflicts between sources been acknowledged, documented, and addressed? Smoothing over source disagreements without explanation produces artificially elevated confidence. This factor rewards transparent conflict documentation and penalizes unexplained inconsistencies in the final evidence record.',
    },
    {
      num: '08',
      title: 'Review Status',
      desc: 'Has a qualified human reviewer checked the source mapping, extraction accuracy, and interpretation of the evidence? Expert-reviewed findings carry additional confidence above what the algorithmic scoring produces — and the reviewer identity, qualifications, and review date are attached to the record.',
    },
    {
      num: '09',
      title: 'Temporal Consistency',
      desc: 'Does the information remain internally consistent across the time period it covers, or do there appear to be anomalies, discontinuities, or unexplained reversals that suggest data quality issues or collection methodology changes? Temporal inconsistencies trigger investigation before the score is finalized.',
    },
  ]

  const scoreRanges = [
    {
      range: '75–100',
      label: 'High Confidence',
      color: COPPER,
      borderStyle: `1px solid ${COPPER_BORDER}`,
      bgStyle: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
      desc: 'Multiple authoritative, current, and consistent sources directly support the claim. Source agreement is high, extraction quality is precise, and no unresolved conflicts exist in the evidence record. Human review is recommended for high-stakes decisions, but the evidence base is strong enough to proceed with confidence in most contexts.',
    },
    {
      range: '45–74',
      label: 'Moderate Confidence',
      color: 'rgba(250,250,250,0.7)',
      borderStyle: '1px solid rgba(250,250,250,0.08)',
      bgStyle: 'rgba(16,16,20,0.95)',
      desc: 'Evidence exists but carries limitations — the support may be indirect, the sources may be partially stale, the extraction may be imprecise, or the sources may not fully agree. The finding is supported but not strongly confirmed. Additional source research or human review is recommended before acting on this finding in a significant decision context.',
    },
    {
      range: 'Below 45',
      label: 'Lower Confidence',
      color: 'rgba(250,250,250,0.55)',
      borderStyle: '1px solid rgba(250,250,250,0.08)',
      bgStyle: 'rgba(16,16,20,0.95)',
      desc: 'Evidence is thin, outdated, conflicting, or missing for one or more key elements of the claim. The finding should not be acted upon without a thorough review by a qualified professional. The low score is itself important information — it identifies where the evidence base needs strengthening before a conclusion can responsibly be drawn.',
    },
  ]

  const vdiStatuses = [
    {
      symbol: '✓',
      label: 'Fully Verified',
      desc: 'Strong, consistent evidence directly supports the claim from multiple authoritative sources. Source agreement is high, extraction is precise, and the evidence is current for the decision window.',
    },
    {
      symbol: '◐',
      label: 'Partially Verified',
      desc: 'Some elements of the claim are well-supported, but others lack direct evidence, have minor inconsistencies, or rely on sources that are not fully authoritative for this specific claim.',
    },
    {
      symbol: '○',
      label: 'Unverified',
      desc: 'Insufficient evidence is available from accessible sources to support or contradict the claim at this time. The absence of verification is itself a documented finding, not a gap in the process.',
    },
    {
      symbol: '⚡',
      label: 'Conflicting',
      desc: 'Independent sources provide materially different information when normalized for definitions and time windows. The nature, scale, and possible causes of the conflict have been documented.',
    },
    {
      symbol: '↻',
      label: 'Outdated',
      desc: 'Supporting evidence exists but predates the decision window by a margin that creates material uncertainty. Newer data may have superseded the figures that the claim is based on.',
    },
    {
      symbol: '…',
      label: 'Requires Further Analysis',
      desc: 'The claim is complex enough — or the evidence landscape is ambiguous enough — that a deeper investigation is warranted before a verification status can be responsibly assigned.',
    },
    {
      symbol: '◈',
      label: 'Human Verified',
      desc: 'A qualified analyst has reviewed the evidence, confirmed the source mapping, and validated the interpretation. The reviewer identity and review date are attached to the record.',
    },
    {
      symbol: '⚠',
      label: 'High-Risk or High-Impact',
      desc: 'The finding has significant potential consequences if acted upon incorrectly. Professional review is required before any action is taken based on this finding, regardless of the Trust Index score.',
    },
  ]

  const escalationTriggers = [
    'Trust Index score below the threshold established for the specific decision context',
    'Conflicting sources that cannot be algorithmically resolved — requiring expert interpretation',
    'High-impact or regulated decision context where the consequences of error are severe',
    'AI-generated claims in sensitive areas where available sources cannot confirm or deny',
    'Temporal inconsistencies that require domain expertise to interpret',
    'Customer-specified escalation rules based on their own risk thresholds and governance requirements',
  ]

  const practicalSteps = [
    {
      num: '01',
      title: 'Set context-appropriate thresholds before analysis begins',
      desc: 'Establish what Trust Index score constitutes sufficient confidence for the specific decision context. A threshold appropriate for an internal operational report may not be appropriate for a regulatory submission or a public-facing claim.',
    },
    {
      num: '02',
      title: 'Use the score to prioritize review effort',
      desc: 'Not every finding requires the same depth of human review. Findings with high Trust Index scores and no conflict flags can often proceed with light review. Findings with lower scores or conflict flags warrant closer attention from qualified reviewers.',
    },
    {
      num: '03',
      title: 'Read the factor breakdown, not just the aggregate',
      desc: 'A score of 65 produced by high source authority but very low freshness tells a different story than a 65 produced by moderate performance across all nine factors. Understanding which factors are driving the score guides the right corrective action.',
    },
    {
      num: '04',
      title: 'Treat unverified findings as assumptions, not facts',
      desc: 'When a claim cannot be verified — because sources are unavailable, because the evidence is insufficient, or because the claim falls outside the scope of available source coverage — it is documented as an assumption. Assumptions are labeled and tracked, not silently incorporated.',
    },
    {
      num: '05',
      title: 'Use confidence scores to communicate uncertainty to stakeholders',
      desc: 'The Trust Index provides a shared language for communicating evidence strength to non-technical stakeholders. Rather than presenting findings as binary (true or false), analysts can communicate the degree of confidence and the specific factors that limit it.',
    },
    {
      num: '06',
      title: 'Refresh scores when conditions change',
      desc: 'A Trust Index score reflects the state of available evidence at a specific point in time. When underlying conditions change — new data is published, a source is updated, a competitor makes a market move — affected findings should be re-verified and scores updated accordingly.',
    },
  ]

  const limitationsBullets = [
    'A high Trust Index score does not mean the underlying claim is true — it means the available evidence strongly supports it',
    'The score is bounded by what sources are accessible — unavailable sources are not scored, they are noted as gaps',
    'Different domains have different appropriate thresholds — a 70 may be adequate for a market research summary and insufficient for a clinical data submission',
    'The score reflects evidence at a point in time and must be refreshed when underlying conditions change',
    'Human judgment is required to interpret the score in context — the algorithm cannot account for domain-specific knowledge that changes the weight of specific factors',
  ]

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        {/* Hero */}
        <PageHeroHeader
          eyebrow="Trust Index Methodology"
          icon={<Star className="w-4 h-4" style={{ color: COPPER }} />}
          title="The Trust Index: How Clarify Data Measures the Strength of Evidence"
          subtitle="A single verdict is not enough. The Trust Index communicates not just whether a finding is supported, but how strongly it is supported, how fresh the evidence is, and where the weaknesses are."
        />

        {/* Section 1 — Why a Confidence Score Matters */}
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
                  <Star className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>The Problem</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[36px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  A binary pass/fail verdict hides the information you actually need
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.72)', fontSize: '16px', lineHeight: '26px' }}>
                  <p>
                    Verification systems that return only a pass or fail verdict are operationally convenient but analytically insufficient. A claim that is technically supported by a single outdated source from an aggregator of questionable authority has not "passed" in any meaningful sense — yet a binary system would treat it identically to a claim supported by five independent, authoritative, current sources with high extraction precision and documented consistency.
                  </p>
                  <p>
                    AI systems create a particular version of this problem. They produce fluent, confident-sounding outputs that give no indication of the actual strength of the evidence behind any specific assertion. When those outputs enter business workflows, the uncertainty travels with them invisibly — until a decision is made on the basis of a claim that was never grounded in reliable evidence in the first place.
                  </p>
                  <p>
                    A confidence score makes hidden uncertainty visible. It creates a shared language for communicating evidence strength that works across analytical teams, executives, reviewers, and auditors — not a binary verdict but a graded measure that guides appropriate action based on the specific stakes of the decision at hand.
                  </p>
                </div>
              </div>

              {/* Right — contrast card */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <div className="mb-7">
                  <p className="text-[13px] font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(250,250,250,0.4)' }}>
                    Without confidence scoring
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      'Pass/fail verdict gives no indication of evidence strength',
                      'A weakly-supported claim looks identical to a strongly-supported one',
                      'Teams cannot prioritize review effort based on risk',
                      'Stakeholders have no language to express degrees of certainty',
                      'Uncertainty travels invisibly through decision-making processes',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px]" style={{ color: 'rgba(250,250,250,0.58)', lineHeight: '20px' }}>
                        <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="pt-6"
                  style={{ borderTop: '1px solid rgba(250,250,250,0.08)' }}
                >
                  <p className="text-[13px] font-semibold uppercase tracking-wider mb-4" style={{ color: COPPER }}>
                    With Trust Index scoring
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      'Graded score communicates evidence strength across nine dimensions',
                      'Weak and strong evidence are explicitly differentiated',
                      'Review effort is allocated based on score threshold and decision stakes',
                      'Shared language for uncertainty across technical and non-technical audiences',
                      'Uncertainty is documented, traceable, and actionable',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13px]" style={{ color: 'rgba(250,250,250,0.78)', lineHeight: '20px' }}>
                        <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" style={{ color: COPPER }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 — Nine Factors */}
        <section ref={s2.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s2.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                  <Star className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Scoring Dimensions</span>
                </span>
                <h2
                  className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  Nine factors combine to produce the overall Trust Index score
                </h2>
                <p className="max-w-[640px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.6)', lineHeight: '26px' }}>
                  Each factor addresses a distinct dimension of evidence quality. Together, they produce a score that reflects not just whether a claim is supported but the nature and strength of that support.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {nineFactors.map((factor, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={s2.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.06 + i * 0.07 }}
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
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold"
                        style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: COPPER }}
                      >
                        {factor.num}
                      </div>
                      <h3 className="text-[15px] font-semibold" style={{ color: 'rgb(250,250,250)' }}>
                        {factor.title}
                      </h3>
                    </div>
                    <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '21px' }}>
                      {factor.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 — Score Ranges */}
        <section ref={s3.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s3.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Score Ranges</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                What a Trust Index score tells you and what it does not
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Score ranges provide guidance for how to proceed with a finding — but they are not verdicts. The appropriate action depends on the combination of the score, the specific factors driving it, and the decision context it is being used in.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {scoreRanges.map((range, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s3.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.1 }}
                  className="rounded-2xl p-7"
                  style={{
                    background: range.bgStyle,
                    border: range.borderStyle,
                  }}
                >
                  <div
                    className="text-[32px] font-bold mb-2 tracking-tight"
                    style={{ color: range.color }}
                  >
                    {range.range}
                  </div>
                  <p className="text-[16px] font-semibold mb-4" style={{ color: 'rgb(250,250,250)' }}>
                    {range.label}
                  </p>
                  <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '23px' }}>
                    {range.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — VDI Status Classifications */}
        <section ref={s4.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s4.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Classification System</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Eight classification statuses that provide additional context beyond the score
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                The Verified Data Index classification provides a qualitative label that sits alongside the numeric Trust Index score. Together, they give a more complete picture of the evidence situation than either alone.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {vdiStatuses.map((status, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s4.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.07 }}
                  className="rounded-2xl p-5 flex items-start gap-4"
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
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold mt-0.5"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}`, color: COPPER }}
                  >
                    {status.symbol}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold mb-1.5" style={{ color: 'rgb(250,250,250)' }}>
                      {status.label}
                    </p>
                    <p className="text-[13px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '21px' }}>
                      {status.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Escalation to Human Review */}
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
                  <Users className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Escalation</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[34px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  The Trust Index guides escalation — it does not replace human judgment
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.68)', fontSize: '15px', lineHeight: '25px' }}>
                  <p>
                    The Trust Index is a decision-support tool. It tells analysts and stakeholders how much confidence the evidence base supports — and implicitly, how much confidence it does not support. When the score falls below a threshold that is meaningful for the specific decision context, or when specific factor scores reveal weaknesses that are material to the decision being made, the appropriate response is escalation to a qualified human reviewer.
                  </p>
                  <p>
                    What a human reviewer brings to this process is not just an additional check — it is domain expertise, contextual knowledge, professional accountability, and the capacity to make judgment calls that an algorithm cannot. A financial analyst reviewing a low-confidence market forecast brings industry pattern recognition that changes the interpretation of conflicting source data. A clinical researcher reviewing a healthcare claim brings knowledge of the specific studies, populations, and methodologies that determines whether indirect evidence is sufficient for the context.
                  </p>
                  <p>
                    The Trust Index identifies when escalation is needed. It does not determine what a human reviewer should conclude. That conclusion is documented separately and attached to the final evidence record with the reviewer's identity, date, and notes — creating a transparent audit trail from score to decision.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-widest mb-5" style={{ color: COPPER }}>
                  Human review is triggered when
                </p>
                <ul className="flex flex-col gap-4">
                  {escalationTriggers.map((trigger, i) => (
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

        {/* Section 6 — Limitations of Confidence Scoring */}
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
                  <AlertTriangle className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  <span>Limitations</span>
                </span>
                <h2
                  className="mb-6 text-[26px] md:text-[34px] font-semibold tracking-tight leading-[1.2]"
                  style={{ color: 'rgb(250,250,250)' }}
                >
                  What the Trust Index cannot do
                </h2>
                <div className="flex flex-col gap-5" style={{ color: 'rgba(250,250,250,0.68)', fontSize: '15px', lineHeight: '25px' }}>
                  <p>
                    A high Trust Index score reflects the strength of available evidence for a specific claim at a specific point in time. It does not guarantee that the claim is factually accurate. New evidence can emerge that contradicts previously well-supported findings. Source errors can propagate across multiple independent sources, producing a false appearance of high agreement. The scoring algorithm cannot account for evidence it cannot access.
                  </p>
                  <p>
                    The scores are only as reliable as the sources available and accessible in the verification process. For claims in domains with thin source coverage — emerging technologies, early-stage markets, novel clinical areas, rapidly evolving regulatory environments — even a well-constructed verification process may produce low scores that reflect the limits of the available evidence landscape rather than a genuine absence of support.
                  </p>
                  <p>
                    Different domains require different score thresholds to represent equivalent levels of practical confidence. A Trust Index score that is entirely adequate for a market research summary may be wholly inadequate for a clinical trial data submission or a regulatory filing. Teams must set thresholds relative to the specific risk profile of the decision they are supporting — there is no universal threshold that applies across all contexts.
                  </p>
                </div>
              </div>

              {/* Right — limitation bullets */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'rgba(16,16,20,0.95)',
                  border: '1px solid rgba(250,250,250,0.08)',
                }}
              >
                <p className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: 'rgba(250,250,250,0.4)' }}>
                  Specific limitations of Trust Index scoring
                </p>
                <ul className="flex flex-col gap-4">
                  {limitationsBullets.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.7)', lineHeight: '22px' }}>
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: COPPER }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7 — How to Use the Trust Index in Practice */}
        <section ref={s7.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s7.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>Practical Application</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2]"
                style={{ color: 'rgb(250,250,250)' }}
              >
                A confidence score is only useful if teams know what to do with it
              </h2>
              <p className="max-w-[680px] text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                The Trust Index is not a passive label attached to findings — it is an active decision-support tool. These six practices help teams use it to improve the quality and defensibility of their analytical outputs.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {practicalSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s7.inView ? { opacity: 1, y: 0 } : {}}
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

        {/* Section 8 — Limitations Banner */}
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
                      Platform-Wide Limitations
                    </h2>
                    <p className="text-[14px] mt-1" style={{ color: 'rgba(250,250,250,0.5)' }}>
                      The Trust Index and all Clarify Data outputs are subject to these foundational constraints.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <ul className="flex flex-col gap-4">
                    {[
                      'Clarify Data does not provide medical, legal, financial, or regulatory advice',
                      'All outputs require human review before use in high-stakes, regulated, or public-facing contexts',
                      'The platform does not guarantee the completeness or accuracy of any market figure',
                      'Trust Index scores reflect evidence available at a specific point in time and must be refreshed',
                      'Results are only as reliable as the sources accessible during the verification process',
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'rgba(250,250,250,0.72)', lineHeight: '22px' }}>
                        <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: COPPER }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div style={{ color: 'rgba(250,250,250,0.6)', fontSize: '14px', lineHeight: '24px' }}>
                    <p className="mb-4">
                      The Trust Index methodology is designed to make uncertainty explicit and actionable — not to eliminate it. Every score is a measure of evidence strength, not a guarantee of factual accuracy. The most useful thing the Trust Index can do is tell you clearly when the evidence is not strong enough to support the decision you are about to make.
                    </p>
                    <p>
                      When that is the case, the appropriate response is more investigation, stronger sources, broader coverage, or — in high-stakes contexts — qualified professional review. Clarify Data is designed to facilitate each of these responses, not to substitute for them.
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
