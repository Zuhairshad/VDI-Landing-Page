'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  ArrowRight,
  Compass,
  Eye,
  GraduationCap,
  HeartPulse,
  ListChecks,
  Scale,
  SearchCheck,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react'
import BookDemo from '@/components/BookDemo'
import CtaFooter from '@/components/CtaFooter'
import Nav from '@/components/Nav'
import PageHeroHeader from '@/components/PageHeroHeader'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'
const CARD_COPPER = 'linear-gradient(135deg, rgba(84, 27, 4, 0.28) 0%, rgba(20, 20, 25, 0.94) 100%)'

const principles = [
  {
    icon: SearchCheck,
    title: 'Evidence before confidence',
    description: 'A polished answer is only a starting point. Material claims should be connected to sources that a reviewer can inspect.',
  },
  {
    icon: Eye,
    title: 'Provenance stays visible',
    description: 'Source dates, versions, transformations, conflicts, and review decisions should remain attached to the result.',
  },
  {
    icon: Scale,
    title: 'Uncertainty is information',
    description: 'Missing evidence and unresolved disagreement should be reported clearly rather than hidden behind false precision.',
  },
  {
    icon: Users,
    title: 'People retain responsibility',
    description: 'Automation can organize evidence, but qualified people must own high-impact interpretation, approval, and action.',
  },
]

const markets = [
  {
    icon: HeartPulse,
    title: 'Medical and clinical',
    description: 'Trace literature claims to dated sources, compare studies, surface conflicting findings, and prepare evidence for required clinical or regulatory review.',
  },
  {
    icon: Truck,
    title: 'Logistics and trade',
    description: 'Compare suppliers, trade lanes, tariffs, and market signals while recording source freshness, exceptions, and operational review decisions.',
  },
  {
    icon: ShoppingBag,
    title: 'Marketing and e-commerce',
    description: 'Structure competitor, catalogue, price, promotion, and review research without pretending that unlike products or time windows are directly comparable.',
  },
  {
    icon: GraduationCap,
    title: 'Education and research',
    description: 'Support literature discovery, citation checking, institutional comparison, and policy research with version-aware source records and academic review.',
  },
]

const qualitySteps = [
  'Define the decision, scope, time window, terms, and acceptable source types.',
  'Break complex material into claims, fields, or questions that can be checked independently.',
  'Capture sources with dates, versions, relevant passages, and collection context.',
  'Compare evidence using explicit definitions and record conflicts or missing information.',
  'Route uncertainty and high-impact conclusions to an appropriately qualified reviewer.',
  'Deliver the result with limitations, source lineage, and a review history that can be revisited.',
]

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function AboutPage() {
  const problemSection = useSection()
  const buildingSection = useSection()
  const principlesSection = useSection()
  const limitationsSection = useSection()
  const marketsSection = useSection()
  const stepsSection = useSection()

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <main>
        <PageHeroHeader
          eyebrow="Our mission"
          icon={<Compass className="w-4 h-4" style={{ color: COPPER }} />}
          title="Make important information easier to verify, explain, and revisit"
          subtitle="Clarify Data is building workflows that connect claims to evidence, preserve provenance, expose uncertainty, and keep responsible human review at the center of consequential decisions."
        />

        {/* Problem — full-width text split */}
        <section ref={problemSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={problemSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <span className="eyebrow-pill mb-4 inline-block">The problem</span>
                <h2 className="text-[28px] md:text-[42px] font-semibold tracking-tight leading-[1.2]">
                  More information does not automatically create better decisions
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={problemSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-5 text-[15px] md:text-[17px] leading-[29px] text-white/68"
              >
                <p>
                  Teams work across search results, reports, spreadsheets, policy documents, product pages, and AI-generated summaries. Sources change, definitions differ, dates become stale, and confident language can conceal gaps in the underlying evidence.
                </p>
                <p>
                  The difficult work is not simply finding another answer. It is understanding where each claim came from, whether the source actually supports it, how the information was transformed, what conflicts remain, and who is responsible for the final judgment.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Building / Record — 2-col cards */}
        <section ref={buildingSection.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={buildingSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="text-center mb-10"
            >
              <span className="eyebrow-pill mb-4 inline-block">What we're building</span>
            </motion.div>
            <div className="grid gap-5 lg:grid-cols-2">
              <motion.article
                initial={{ opacity: 0, y: 18 }}
                animate={buildingSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="rounded-3xl p-7 md:p-10"
                style={{ background: CARD_COPPER, border: `1px solid ${COPPER_BORDER}` }}
              >
                <ShieldCheck className="w-8 h-8 mb-5" style={{ color: COPPER }} />
                <h2 className="text-[24px] md:text-[32px] font-semibold tracking-tight mb-5">What Clarify Data is building</h2>
                <p className="text-[15px] md:text-[16px] leading-[27px] text-white/70 mb-4">
                  Clarify Data is developing an information-quality workflow for decomposing material into checkable claims, organizing source evidence, comparing conflicting records, and preparing reviewable outputs.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[27px] text-white/70">
                  The product direction emphasizes traceable records and repeatable methods. Capabilities described on this site are workflows and design goals unless a specific implementation is demonstrated.
                </p>
              </motion.article>

              <motion.article
                initial={{ opacity: 0, y: 18 }}
                animate={buildingSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.14 }}
                className="rounded-3xl p-7 md:p-10"
                style={{ background: 'rgba(16,16,20,0.95)', border: '1px solid rgba(250,250,250,0.08)' }}
              >
                <ListChecks className="w-8 h-8 mb-5" style={{ color: COPPER }} />
                <h2 className="text-[24px] md:text-[32px] font-semibold tracking-tight mb-5">A record people can challenge</h2>
                <p className="text-[15px] md:text-[16px] leading-[27px] text-white/70 mb-4">
                  A useful result should show the original question, source selection, dates and versions, relevant evidence, transformations, open issues, and review decisions — not only a final summary.
                </p>
                <p className="text-[15px] md:text-[16px] leading-[27px] text-white/70">
                  That record supports review and correction. It does not make every source complete, remove bias, or replace the expertise required to interpret evidence in context.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Principles — 2x2 copper gradient cards */}
        <section ref={principlesSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={principlesSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-4 inline-block">Product principles</span>
              <h2 className="text-[28px] md:text-[42px] font-semibold tracking-tight mb-4 max-w-[560px]">
                How we want the workflow to behave
              </h2>
              <p className="text-[16px] leading-[27px] text-white/65 max-w-[480px]">
                These principles guide the product direction and the way this site describes it.
              </p>
            </motion.div>
            <div className="grid gap-5 md:grid-cols-2">
              {principles.map(({ icon: Icon, title, description }, i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={principlesSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-7"
                  style={{ background: CARD_COPPER, border: `1px solid ${COPPER_BORDER}` }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG }}>
                    <Icon className="w-5 h-5" style={{ color: COPPER }} />
                  </div>
                  <h3 className="text-[19px] font-semibold mb-3">{title}</h3>
                  <p className="text-[14px] leading-[25px] text-white/65">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Responsible use — text left + copper highlight card right */}
        <section ref={limitationsSection.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner grid gap-8 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={limitationsSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-pill mb-4 inline-block">Responsible use</span>
              <h2 className="text-[28px] md:text-[38px] font-semibold tracking-tight mb-5">
                Verification is a process, not a promise of certainty
              </h2>
              <div className="space-y-4 text-[15px] md:text-[16px] leading-[27px] text-white/68">
                <p>Sources can be wrong, incomplete, biased, unavailable, or superseded. Automated extraction can miss context, and different reviewers can reasonably interpret the same evidence differently.</p>
                <p>Outputs should communicate scope, freshness, assumptions, and unresolved questions. Clarify Data should not be used as the sole basis for medical, legal, regulatory, safety, employment, credit, or other high-impact decisions.</p>
              </div>
            </motion.article>
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={limitationsSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-7 md:p-9"
              style={{ background: 'rgba(194, 89, 24, 0.1)', border: `1px solid ${COPPER_BORDER}` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: COPPER_BG }}>
                <Users className="w-5 h-5" style={{ color: COPPER }} />
              </div>
              <h2 className="text-[24px] md:text-[30px] font-semibold tracking-tight mb-5">Human responsibility in verification</h2>
              <div className="space-y-4 text-[15px] leading-[26px] text-white/72">
                <p>Organizations evaluating or using these workflows, together with their reviewers, remain responsible for choosing appropriate sources, confirming permission to use submitted material, protecting sensitive information, and applying the right professional standard.</p>
                <p>A meaningful review requires subject-matter competence, access to the evidence, time to challenge the result, and authority to stop or revise the decision.</p>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Markets — copper gradient cards (matching principles style) */}
        <section ref={marketsSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={marketsSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-4 inline-block">Four focused markets</span>
              <h2 className="text-[28px] md:text-[42px] font-semibold tracking-tight mb-4 max-w-[600px]">
                Different evidence, different review responsibilities
              </h2>
              <p className="text-[16px] leading-[27px] text-white/65 max-w-[520px]">
                The underlying quality principles are shared, but each market needs its own sources, definitions, time horizons, and human checkpoints.
              </p>
            </motion.div>
            <div className="grid gap-5 md:grid-cols-2">
              {markets.map(({ icon: Icon, title, description }, i) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={marketsSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.06 + i * 0.08 }}
                  className="rounded-2xl p-7"
                  style={{
                    background: i % 2 === 0 ? CARD_COPPER : 'rgba(16,16,20,0.95)',
                    border: i % 2 === 0 ? `1px solid ${COPPER_BORDER}` : '1px solid rgba(250,250,250,0.08)',
                  }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG }}>
                    <Icon className="w-5 h-5" style={{ color: COPPER }} />
                  </div>
                  <h3 className="text-[19px] font-semibold mb-3">{title}</h3>
                  <p className="text-[14px] leading-[25px] text-white/65">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Quality approach — left anchor + numbered steps */}
        <section ref={stepsSection.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={stepsSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
                <SearchCheck className="w-5 h-5" style={{ color: COPPER }} />
              </div>
              <span className="eyebrow-pill mb-4 inline-block">Information quality approach</span>
              <h2 className="text-[28px] md:text-[38px] font-semibold tracking-tight">
                From a broad question to a reviewable record
              </h2>
            </motion.div>
            <ol className="space-y-3">
              {qualitySteps.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: 14 }}
                  animate={stepsSection.inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.06 + i * 0.07 }}
                  className="flex items-start gap-4 rounded-2xl p-5"
                  style={{ background: 'rgba(16,16,20,0.92)', border: '1px solid rgba(250,250,250,0.07)' }}
                >
                  <span
                    className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-[12px] font-semibold"
                    style={{ background: COPPER_BG, color: COPPER }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[14px] md:text-[15px] leading-[25px] text-white/70 pt-1">{step}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-white/10" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner pt-16 text-center">
            <p className="inline-flex items-center gap-2 text-[14px] text-white/60">
              Tell us which information-quality workflow you need to make reviewable
              <ArrowRight className="w-4 h-4" style={{ color: COPPER }} />
            </p>
          </div>
          <BookDemo />
        </section>
      </main>

      <CtaFooter />
    </div>
  )
}
