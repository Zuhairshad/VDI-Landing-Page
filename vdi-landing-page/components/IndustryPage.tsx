'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'motion/react'
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
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.3)'
const CARD_DARK = 'linear-gradient(145deg, rgba(54, 20, 7, 0.72) 0%, rgba(18, 18, 20, 0.96) 62%)'

const capabilityIcons = [SearchCheck, Layers3, SlidersHorizontal, ListChecks, ShieldCheck, ClipboardCheck]

export interface IndustryItem {
  title: string
  description: string
}

export interface IndustryPageData {
  eyebrow: string
  icon: ReactNode
  title: string
  subtitle: string
  context: { title: string; paragraphs: string[] }
  problem: { title: string; paragraphs: string[] }
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

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[14px] md:text-[15px] leading-[24px] text-white/68">
          <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: COPPER }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function IndustryPage({ data }: { data: IndustryPageData }) {
  const contextSection = useSection()
  const challengesSection = useSection()
  const workflowSection = useSection()
  const capabilitiesSection = useSection()
  const ioSection = useSection()
  const reviewSection = useSection()
  const useCasesSection = useSection()
  const limitationsSection = useSection()

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

        {/* Context + Problem — 2-col split, copper left-accent */}
        <section ref={contextSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {[data.context, data.problem].map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={contextSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="rounded-2xl p-7 md:p-9 flex flex-col gap-4"
                  style={{
                    background: i === 0 ? CARD_DARK : 'rgba(16,16,20,0.95)',
                    border: i === 0 ? `1px solid ${COPPER_BORDER}` : '1px solid rgba(250,250,250,0.08)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                    >
                      {i === 0
                        ? <SearchCheck className="w-4 h-4" style={{ color: COPPER }} />
                        : <ShieldCheck className="w-4 h-4" style={{ color: COPPER }} />}
                    </span>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-white/42">
                      {i === 0 ? 'Industry context' : 'Information-quality problem'}
                    </p>
                  </div>
                  <h2 className="text-[22px] md:text-[28px] font-semibold tracking-tight leading-[1.22]">
                    {s.title}
                  </h2>
                  <div className="space-y-3 text-[14px] md:text-[15px] leading-[26px] text-white/64">
                    {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges — bento card grid */}
        <section ref={challengesSection.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={challengesSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-4 inline-block">Key challenges</span>
              <h2
                className="mb-4 text-[26px] md:text-[38px]"
                style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
              >
                Where information quality breaks down
              </h2>
              <p className="max-w-[580px] mx-auto text-[15px] text-white/65 leading-[26px]">
                The workflow begins by making ambiguity, missing context, and source conflicts visible.
              </p>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.challenges.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={challengesSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.08 + i * 0.07 }}
                  className="rounded-2xl p-6 flex flex-col gap-3"
                  style={{
                    background: i % 3 === 0 ? CARD_DARK : 'rgba(16,16,20,0.92)',
                    border: i % 3 === 0 ? `1px solid ${COPPER_BORDER}` : '1px solid rgba(250,250,250,0.07)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-[0.08em]" style={{ color: COPPER }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: COPPER_BORDER }} />
                  </div>
                  <h3 className="text-[17px] font-semibold">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] leading-[23px] text-white/60">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow — visual vertical steps */}
        <section ref={workflowSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={workflowSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-4 inline-block">Step-by-step workflow</span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] max-w-[600px]"
                style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
              >
                A reviewable path from question to evidence
              </h2>
              <p className="max-w-[520px] text-[15px] text-white/65 leading-[26px]">
                The original request, source choices, transformations, and review decisions stay connected at every step.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical connector line */}
              <div
                className="absolute left-[27px] top-8 bottom-8 w-px hidden md:block"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(194,89,24,0.25) 20%, rgba(194,89,24,0.25) 80%, transparent)' }}
              />
              <div className="space-y-3">
                {data.workflow.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -14 }}
                    animate={workflowSection.inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.42, delay: 0.06 + i * 0.07 }}
                    className="grid md:grid-cols-[56px_minmax(200px,0.85fr)_1fr] gap-3 md:gap-6 items-start rounded-2xl px-5 py-4 md:py-5"
                    style={{ background: 'rgba(16,16,20,0.9)', border: '1px solid rgba(250,250,250,0.07)' }}
                  >
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-bold shrink-0 z-10"
                      style={{ background: COPPER_BG, color: COPPER, border: `1px solid ${COPPER_BORDER}` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[16px] md:text-[17px] font-semibold pt-0.5">{item.title}</h3>
                    <p className="text-[13px] md:text-[14px] leading-[23px] text-white/60">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities — cards with copper gradient */}
        <section ref={capabilitiesSection.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={capabilitiesSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-4 inline-block">Platform capabilities</span>
              <h2
                className="mb-4 text-[26px] md:text-[38px]"
                style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
              >
                Modules designed around the workflow
              </h2>
              <p className="max-w-[520px] mx-auto text-[14px] text-white/55 leading-[24px]">
                Intended workflow capabilities, not claims of a live third-party integration or guaranteed result.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.capabilities.map((item, i) => {
                const Icon = capabilityIcons[i % capabilityIcons.length]
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={capabilitiesSection.inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.06 + i * 0.07 }}
                    className="rounded-2xl p-6 md:p-7 flex flex-col min-h-[220px]"
                    style={{ background: CARD_DARK, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: COPPER_BG }}
                      >
                        <Icon className="w-5 h-5" style={{ color: COPPER }} />
                      </span>
                      <span className="text-[11px] font-semibold text-white/25">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-[18px] font-semibold mb-3">{item.title}</h3>
                    <p className="text-[13px] md:text-[14px] leading-[23px] text-white/60 mt-auto">{item.description}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Inputs + Deliverables — side by side with visual anchor */}
        <section ref={ioSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={ioSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-4 inline-block">Inputs and deliverables</span>
              <h2
                className="text-[26px] md:text-[38px]"
                style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
              >
                What moves through the workflow
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-5">
              {[
                { icon: FileInput, label: 'Example inputs', items: data.exampleInputs, delay: 0 },
                { icon: FileOutput, label: 'Example deliverables', items: data.exampleOutputs, delay: 0.1 },
              ].map(({ icon: Icon, label, items, delay }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={ioSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay }}
                  className="rounded-2xl p-7 md:p-9"
                  style={{ background: 'rgba(16,16,20,0.92)', border: '1px solid rgba(250,250,250,0.08)' }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: COPPER }} />
                    </span>
                    <h3 className="text-[20px] font-semibold">{label}</h3>
                  </div>
                  <TextList items={items} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality + Human Review — cards grid */}
        <section ref={reviewSection.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={reviewSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="mb-12"
            >
              <span className="eyebrow-pill mb-4 inline-block">Quality and oversight</span>
              <h2
                className="text-[26px] md:text-[38px] max-w-[540px]"
                style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
              >
                Provenance and human-review checkpoints
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: 'Quality and provenance', items: data.qualityConsiderations },
                { icon: Users, title: 'Human-review checkpoints', items: data.reviewCheckpoints },
              ].map(({ icon: Icon, title, items }, col) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={reviewSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: col * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: COPPER }} />
                    </span>
                    <h2 className="text-[20px] md:text-[24px] font-semibold">{title}</h2>
                  </div>
                  <div className="space-y-3">
                    {items.map((item, i) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={reviewSection.inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.38, delay: 0.12 + col * 0.1 + i * 0.07 }}
                        className="rounded-xl p-5"
                        style={{ background: 'rgba(16,16,20,0.9)', border: '1px solid rgba(250,250,250,0.07)' }}
                      >
                        <div className="flex items-start gap-3">
                          <span
                            className="text-[11px] font-bold pt-0.5 shrink-0"
                            style={{ color: COPPER }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <h3 className="text-[15px] font-semibold mb-1.5">{item.title}</h3>
                            <p className="text-[13px] leading-[22px] text-white/60">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases — 2-col card grid */}
        <section ref={useCasesSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={useCasesSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-4 inline-block">Practical use cases</span>
              <h2
                className="text-[26px] md:text-[38px]"
                style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
              >
                Questions teams could structure and review
              </h2>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-2">
              {data.useCases.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={useCasesSection.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.42, delay: 0.06 + i * 0.06 }}
                  className="rounded-2xl p-6 flex gap-4"
                  style={{
                    background: i % 4 === 0 || i % 4 === 3 ? CARD_DARK : 'rgba(16,16,20,0.92)',
                    border: i % 4 === 0 || i % 4 === 3 ? `1px solid ${COPPER_BORDER}` : '1px solid rgba(250,250,250,0.07)',
                  }}
                >
                  <span
                    className="text-[12px] font-bold shrink-0 pt-0.5"
                    style={{ color: COPPER }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                    <p className="text-[13px] md:text-[14px] leading-[23px] text-white/60">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Limitations — full-width copper banner */}
        <section ref={limitationsSection.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={limitationsSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl p-8 md:p-12"
              style={{
                background: 'radial-gradient(ellipse 90% 130% at 100% 100%, rgba(112, 42, 8, 0.48) 0%, rgba(35, 15, 7, 0.78) 45%, rgb(16, 16, 17) 80%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
                <div>
                  <ClipboardCheck className="w-8 h-8 mb-4" style={{ color: COPPER }} />
                  <h2 className="text-[24px] md:text-[32px] font-semibold leading-[1.2]">
                    Limitations and responsible use
                  </h2>
                </div>
                <div>
                  <TextList items={data.limitations} />
                  {data.criticalNote && (
                    <p className="mt-6 pt-5 border-t border-white/10 text-[14px] leading-[24px] text-white/76">
                      <strong className="text-white">High-impact use:</strong> {data.criticalNote}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-white/10" style={{ background: 'rgb(10,10,10)' }}>
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
