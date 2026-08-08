import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'About ClarifyData | Information Quality Workflows',
  description:
    'Learn why ClarifyData is building traceable workflows for claim checking, source comparison, provenance, and responsible human review.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'
const CARD_BACKGROUND =
  'linear-gradient(135deg, rgba(84, 27, 4, 0.28) 0%, rgba(20, 20, 25, 0.94) 100%)'

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

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <main>
        <PageHeroHeader
          eyebrow="Our mission"
          icon={<Compass className="w-4 h-4" style={{ color: COPPER }} />}
          title="Make important information easier to verify, explain, and revisit"
          subtitle="ClarifyData is building workflows that connect claims to evidence, preserve provenance, expose uncertainty, and keep responsible human review at the center of consequential decisions."
        />

        <section className="section-pad border-t border-white/10">
          <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: COPPER }}>
                The problem
              </p>
              <h2 className="text-[29px] md:text-[43px] font-semibold tracking-tight leading-[1.2]">
                More information does not automatically create better decisions
              </h2>
            </div>
            <div className="space-y-5 text-[16px] md:text-[17px] leading-[29px] text-white/68">
              <p>
                Teams work across search results, reports, spreadsheets, policy documents, product pages, and AI-generated summaries. Sources change, definitions differ, dates become stale, and confident language can conceal gaps in the underlying evidence.
              </p>
              <p>
                The difficult work is not simply finding another answer. It is understanding where each claim came from, whether the source actually supports it, how the information was transformed, what conflicts remain, and who is responsible for the final judgment.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10 bg-black/30">
          <div className="section-inner grid gap-8 lg:grid-cols-2">
            <article
              className="rounded-3xl p-7 md:p-10"
              style={{ background: CARD_BACKGROUND, border: `1px solid ${COPPER_BORDER}` }}
            >
              <ShieldCheck className="w-8 h-8 mb-5" style={{ color: COPPER }} />
              <h2 className="text-[27px] md:text-[35px] font-semibold tracking-tight mb-5">What ClarifyData is building</h2>
              <p className="text-[15px] md:text-[16px] leading-[27px] text-white/70 mb-5">
                ClarifyData is developing an information-quality workflow for decomposing material into checkable claims, organizing source evidence, comparing conflicting records, and preparing reviewable outputs.
              </p>
              <p className="text-[15px] md:text-[16px] leading-[27px] text-white/70">
                The product direction emphasizes traceable records and repeatable methods. Capabilities described on this site are workflows and design goals unless a specific implementation is demonstrated; they are not guarantees of accuracy, coverage, integrations, or outcomes.
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-10">
              <ListChecks className="w-8 h-8 mb-5" style={{ color: COPPER }} />
              <h2 className="text-[27px] md:text-[35px] font-semibold tracking-tight mb-5">A record people can challenge</h2>
              <p className="text-[15px] md:text-[16px] leading-[27px] text-white/70 mb-5">
                A useful result should show the original question, source selection, dates and versions, relevant evidence, transformations, open issues, and review decisions, not only a final summary.
              </p>
              <p className="text-[15px] md:text-[16px] leading-[27px] text-white/70">
                That record supports review and correction. It does not make every source complete, remove bias, or replace the expertise required to interpret evidence in context.
              </p>
            </article>
          </div>
        </section>

        <section className="section-pad border-t border-white/10">
          <div className="section-inner">
            <div className="max-w-[720px] mb-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: COPPER }}>
                Product principles
              </p>
              <h2 className="text-[29px] md:text-[43px] font-semibold tracking-tight mb-4">How we want the workflow to behave</h2>
              <p className="text-[16px] leading-[27px] text-white/65">
                These principles guide the product direction and the way this site describes it.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {principles.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl p-7"
                  style={{ background: CARD_BACKGROUND, border: `1px solid ${COPPER_BORDER}` }}
                >
                  <Icon className="w-7 h-7 mb-4" style={{ color: COPPER }} />
                  <h3 className="text-[20px] font-semibold mb-3">{title}</h3>
                  <p className="text-[15px] leading-[25px] text-white/65">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10 bg-black/30">
          <div className="section-inner grid gap-8 lg:grid-cols-2">
            <article>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: COPPER }}>
                Responsible use and limitations
              </p>
              <h2 className="text-[29px] md:text-[40px] font-semibold tracking-tight mb-5">Verification is a process, not a promise of certainty</h2>
              <div className="space-y-4 text-[15px] md:text-[16px] leading-[27px] text-white/68">
                <p>Sources can be wrong, incomplete, biased, unavailable, or superseded. Automated extraction can miss context, and different reviewers can reasonably interpret the same evidence differently.</p>
                <p>Outputs should communicate scope, freshness, assumptions, and unresolved questions. ClarifyData should not be used as the sole basis for medical, legal, regulatory, safety, employment, credit, or other high-impact decisions.</p>
              </div>
            </article>
            <article
              className="rounded-3xl p-7 md:p-9"
              style={{ background: 'rgba(194, 89, 24, 0.1)', border: `1px solid ${COPPER_BORDER}` }}
            >
              <Users className="w-8 h-8 mb-5" style={{ color: COPPER }} />
              <h2 className="text-[27px] md:text-[34px] font-semibold tracking-tight mb-5">Human responsibility in verification</h2>
              <div className="space-y-4 text-[15px] leading-[26px] text-white/72">
                <p>Organizations evaluating or using these workflows, together with their reviewers, remain responsible for choosing appropriate sources, confirming permission to use submitted material, protecting sensitive information, and applying the right professional standard.</p>
                <p>A meaningful review requires subject-matter competence, access to the evidence, time to challenge the result, and authority to stop or revise the decision.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-pad border-t border-white/10">
          <div className="section-inner">
            <div className="max-w-[760px] mb-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: COPPER }}>
                Four focused markets
              </p>
              <h2 className="text-[29px] md:text-[43px] font-semibold tracking-tight mb-4">Different evidence, different review responsibilities</h2>
              <p className="text-[16px] leading-[27px] text-white/65">
                The underlying quality principles are shared, but each market needs its own sources, definitions, time horizons, and human checkpoints.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {markets.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-7">
                  <Icon className="w-7 h-7 mb-4" style={{ color: COPPER }} />
                  <h3 className="text-[21px] font-semibold mb-3">{title}</h3>
                  <p className="text-[15px] leading-[25px] text-white/65">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10 bg-black/30">
          <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SearchCheck className="w-8 h-8 mb-5" style={{ color: COPPER }} />
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: COPPER }}>
                Information quality approach
              </p>
              <h2 className="text-[29px] md:text-[40px] font-semibold tracking-tight">From a broad question to a reviewable record</h2>
            </div>
            <ol className="space-y-4">
              {qualitySteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                  <span
                    className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center text-[12px] font-semibold"
                    style={{ background: 'rgba(194, 89, 24, 0.15)', color: COPPER }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-[15px] leading-[25px] text-white/70 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-white/10">
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
