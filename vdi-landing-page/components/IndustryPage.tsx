import type { ReactNode } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileInput,
  FileOutput,
  Layers3,
  ListChecks,
  SearchCheck,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from 'lucide-react'
import BookDemo from '@/components/BookDemo'
import CtaFooter from '@/components/CtaFooter'
import Nav from '@/components/Nav'
import PageHeroHeader from '@/components/PageHeroHeader'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.3)'
const MODULE_BACKGROUND =
  'linear-gradient(145deg, rgba(54, 20, 7, 0.72) 0%, rgba(18, 18, 20, 0.96) 62%)'

const capabilityIcons = [
  SearchCheck,
  Layers3,
  SlidersHorizontal,
  ListChecks,
  ShieldCheck,
  ClipboardCheck,
]

export interface IndustryItem {
  title: string
  description: string
}

export interface IndustryPageData {
  eyebrow: string
  icon: ReactNode
  title: string
  subtitle: string
  context: {
    title: string
    paragraphs: string[]
  }
  problem: {
    title: string
    paragraphs: string[]
  }
  challenges: IndustryItem[]
  workflow: IndustryItem[]
  capabilities: IndustryItem[]
  exampleInputs: string[]
  exampleOutputs: string[]
  qualityConsiderations: IndustryItem[]
  reviewCheckpoints: IndustryItem[]
  useCases: IndustryItem[]
  limitations: string[]
  criticalNote?: string
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="max-w-[760px] mx-auto mb-11 md:mb-14 text-center">
      <span className="eyebrow-pill mb-5 inline-flex">{eyebrow}</span>
      <h2 className="text-[28px] md:text-[42px] font-semibold tracking-tight leading-[1.18] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[15px] md:text-[17px] leading-[27px] text-white/62">
          {description}
        </p>
      )}
    </div>
  )
}

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[14px] md:text-[15px] leading-[24px] text-white/68"
        >
          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: COPPER }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function ReviewColumn({
  icon,
  title,
  items,
}: {
  icon: ReactNode
  title: string
  items: IndustryItem[]
}) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-7">
        <span
          className="w-11 h-11 rounded-xl inline-flex items-center justify-center shrink-0"
          style={{ background: 'rgba(194, 89, 24, 0.13)', border: `1px solid ${COPPER_BORDER}` }}
        >
          {icon}
        </span>
        <h2 className="text-[25px] md:text-[32px] font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="border-y border-white/10 divide-y divide-white/10">
        {items.map((item, index) => (
          <article key={item.title} className="grid grid-cols-[32px_1fr] gap-4 py-6">
            <span className="text-[12px] font-semibold pt-1" style={{ color: COPPER }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
              <p className="text-[14px] md:text-[15px] leading-[24px] text-white/62">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <main>
        <PageHeroHeader
          eyebrow={data.eyebrow}
          icon={data.icon}
          title={data.title}
          subtitle={data.subtitle}
        />

        <section className="section-pad border-t border-white/10">
          <div className="section-inner">
            <div className="grid lg:grid-cols-2 border-y border-white/10">
              {[data.context, data.problem].map((section, index) => (
                <article
                  key={section.title}
                  className={`py-10 md:py-12 ${
                    index === 0
                      ? 'lg:pr-14'
                      : 'border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-14'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-7">
                    <span
                      className="w-11 h-11 rounded-xl inline-flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(194, 89, 24, 0.13)',
                        border: `1px solid ${COPPER_BORDER}`,
                      }}
                    >
                      {index === 0 ? (
                        <SearchCheck className="w-5 h-5" style={{ color: COPPER }} />
                      ) : (
                        <ShieldCheck className="w-5 h-5" style={{ color: COPPER }} />
                      )}
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/42">
                      {index === 0 ? 'Industry context' : 'Information-quality problem'}
                    </p>
                  </div>
                  <h2 className="text-[26px] md:text-[34px] font-semibold tracking-tight leading-[1.22] mb-6 max-w-[500px]">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-[15px] md:text-[16px] leading-[27px] text-white/64">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10 bg-black/25">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Key challenges"
              title="Where information quality breaks down"
              description="The workflow begins by making ambiguity, missing context, and source conflicts visible instead of smoothing them into one unsupported answer."
            />
            <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
              {data.challenges.map((item, index) => (
                <article
                  key={item.title}
                  className="py-7 border-b border-white/10"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[12px] font-semibold" style={{ color: COPPER }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <h3 className="text-[19px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-[14px] md:text-[15px] leading-[24px] text-white/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Step-by-step workflow"
              title="A reviewable path from question to evidence"
              description="The original request, source choices, transformations, and review decisions stay connected from one step to the next."
            />
            <ol
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgb(15,15,16)', border: '1px solid rgba(250,250,250,0.09)' }}
            >
              {data.workflow.map((item, index) => (
                <li
                  key={item.title}
                  className="grid gap-3 md:grid-cols-[70px_minmax(190px,0.8fr)_minmax(0,1.4fr)] md:items-center px-5 md:px-7 py-5 md:py-6 border-b border-white/10 last:border-b-0"
                >
                  <span
                    className="w-9 h-9 rounded-lg inline-flex items-center justify-center text-[12px] font-semibold"
                    style={{ background: 'rgba(194, 89, 24, 0.14)', color: COPPER }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[17px] md:text-[18px] font-semibold">{item.title}</h3>
                  <p className="text-[14px] md:text-[15px] leading-[24px] text-white/60">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-pad border-t border-white/10 bg-black/25">
          <div className="section-inner">
            <SectionHeading
              eyebrow="ClarifyData capabilities"
              title="Modules designed around the workflow"
              description="These are intended workflow capabilities, not claims of a live third-party integration or guaranteed result."
            />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.capabilities.map((item, index) => {
                const Icon = capabilityIcons[index % capabilityIcons.length]
                return (
                  <article
                    key={item.title}
                    className="min-h-[240px] rounded-2xl p-6 md:p-7 flex flex-col"
                    style={{ background: MODULE_BACKGROUND, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <span
                        className="w-10 h-10 rounded-xl inline-flex items-center justify-center"
                        style={{ background: 'rgba(194, 89, 24, 0.14)' }}
                      >
                        <Icon className="w-5 h-5" style={{ color: COPPER }} />
                      </span>
                      <span className="text-[11px] font-semibold text-white/28">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-[19px] font-semibold mb-3">{item.title}</h3>
                    <p className="text-[14px] md:text-[15px] leading-[24px] text-white/62 mt-auto">
                      {item.description}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10">
          <div className="section-inner">
            <SectionHeading eyebrow="Inputs and deliverables" title="What moves through the workflow" />
            <div className="grid lg:grid-cols-2 border-y border-white/10">
              <article className="py-9 md:py-11 lg:pr-14">
                <div className="flex items-center gap-4 mb-7">
                  <span
                    className="w-11 h-11 rounded-xl inline-flex items-center justify-center"
                    style={{ background: 'rgba(194, 89, 24, 0.13)', border: `1px solid ${COPPER_BORDER}` }}
                  >
                    <FileInput className="w-5 h-5" style={{ color: COPPER }} />
                  </span>
                  <h3 className="text-[23px] font-semibold">Example inputs</h3>
                </div>
                <TextList items={data.exampleInputs} />
              </article>
              <article className="py-9 md:py-11 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-14">
                <div className="flex items-center gap-4 mb-7">
                  <span
                    className="w-11 h-11 rounded-xl inline-flex items-center justify-center"
                    style={{ background: 'rgba(194, 89, 24, 0.13)', border: `1px solid ${COPPER_BORDER}` }}
                  >
                    <FileOutput className="w-5 h-5" style={{ color: COPPER }} />
                  </span>
                  <h3 className="text-[23px] font-semibold">Example deliverables</h3>
                </div>
                <TextList items={data.exampleOutputs} />
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10 bg-black/25">
          <div className="section-inner grid gap-14 lg:grid-cols-2 lg:gap-16">
            <ReviewColumn
              icon={<ShieldCheck className="w-5 h-5" style={{ color: COPPER }} />}
              title="Quality and provenance"
              items={data.qualityConsiderations}
            />
            <ReviewColumn
              icon={<Users className="w-5 h-5" style={{ color: COPPER }} />}
              title="Human-review checkpoints"
              items={data.reviewCheckpoints}
            />
          </div>
        </section>

        <section className="section-pad border-t border-white/10">
          <div className="section-inner">
            <SectionHeading
              eyebrow="Practical use cases"
              title="Questions teams could structure and review"
            />
            <div className="grid gap-x-12 md:grid-cols-2 border-t border-white/10">
              {data.useCases.map((item, index) => (
                <article
                  key={item.title}
                  className="grid grid-cols-[34px_1fr] gap-4 py-7 border-b border-white/10"
                >
                  <span className="text-[12px] font-semibold pt-1" style={{ color: COPPER }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[19px] font-semibold mb-3">{item.title}</h3>
                    <p className="text-[14px] md:text-[15px] leading-[24px] text-white/60">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-white/10">
          <div className="section-inner">
            <div
              className="relative overflow-hidden rounded-3xl p-7 md:p-10 lg:p-12"
              style={{
                background:
                  'radial-gradient(ellipse 90% 130% at 100% 100%, rgba(112, 42, 8, 0.48) 0%, rgba(35, 15, 7, 0.78) 45%, rgb(16, 16, 17) 80%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div className="relative z-10 grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
                <div>
                  <ClipboardCheck className="w-8 h-8 mb-5" style={{ color: COPPER }} />
                  <h2 className="text-[27px] md:text-[34px] font-semibold leading-[1.2]">
                    Limitations and responsible use
                  </h2>
                </div>
                <div>
                  <TextList items={data.limitations} />
                  {data.criticalNote && (
                    <p className="mt-6 pt-5 border-t border-white/10 text-[14px] md:text-[15px] leading-[24px] text-white/76">
                      <strong className="text-white">High-impact use:</strong> {data.criticalNote}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="section-inner pt-16 text-center">
            <p className="inline-flex items-center gap-2 text-[14px] text-white/60">
              Bring a real workflow and source set to the conversation
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
