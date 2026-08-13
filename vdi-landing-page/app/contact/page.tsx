'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  MessageSquare,
  CalendarCheck,
  ClipboardList,
  Users,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  FileText,
  Database,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'
const CARD_COPPER = 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)'

const demoSteps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Tell us what you need to verify',
    description: 'Fill out the form with your industry, use case, and a brief description of the data or content you need reviewed. The more specific, the better.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'We schedule a focused session',
    description: 'A member of the Clarify Data team will reach out to confirm a time that works. Sessions typically run 30–45 minutes.',
  },
  {
    icon: Users,
    step: '03',
    title: 'See the workflow on your data',
    description: 'Bring a real document, dataset, or AI-generated report. We walk through how the verification pipeline applies to your specific use case — not a generic demo.',
  },
]

const bringItems = [
  { icon: FileText, label: 'An AI-generated report or summary you need to verify' },
  { icon: Database, label: 'A raw dataset or spreadsheet that needs structuring and validation' },
  { icon: Lightbulb, label: 'A market assumption or business question you want to stress-test' },
  { icon: CheckCircle2, label: 'A forecast or claim that requires traceable source evidence' },
]

const faqs = [
  {
    question: 'Is the demo free?',
    answer: 'Yes. The demo is a no-commitment conversation focused on understanding your specific data challenge.',
  },
  {
    question: 'Who should attend?',
    answer: 'Anyone who works with data quality, business intelligence, AI-generated content, or compliance workflows. Analysts, data leads, and decision-makers are all welcome.',
  },
  {
    question: 'What if I don\'t have a dataset ready?',
    answer: 'No problem. We can walk through how the workflow applies to your industry and use case using representative examples.',
  },
  {
    question: 'How long does the demo take?',
    answer: 'Most sessions run 30–45 minutes. We stay focused on your specific use case and don\'t show features that aren\'t relevant.',
  },
]

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function ContactPage() {
  const stepsSection = useSection()
  const bringSection = useSection()
  const faqSection = useSection()

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <PageHeroHeader
        eyebrow="Book a Demo"
        icon={<MessageSquare className="w-3.5 h-3.5" style={{ color: COPPER }} />}
        title="See How Verification Works on Your Data"
        subtitle="Bring a real document, dataset, or AI-generated report. We'll show you exactly how the Clarify Data workflow applies to your use case."
      />

      {/* How the demo works — 3 steps */}
      <section ref={stepsSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={stepsSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-center mb-12"
          >
            <span className="eyebrow-pill mb-4 inline-block">How it works</span>
            <h2
              className="mb-4 text-[26px] md:text-[40px]"
              style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
            >
              Three steps to your demo
            </h2>
            <p className="max-w-[520px] mx-auto text-[15px] text-white/65 leading-[26px]">
              From form submission to a live walkthrough on your real data — no generic pitch decks.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {demoSteps.map(({ icon: Icon, step, title, description }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                animate={stepsSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.48, delay: 0.06 + i * 0.1 }}
                className="rounded-2xl p-7 flex flex-col gap-4"
                style={{
                  background: i === 1 ? CARD_COPPER : 'rgba(16,16,20,0.95)',
                  border: i === 1 ? `1px solid ${COPPER_BORDER}` : '1px solid rgba(250,250,250,0.08)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: COPPER }} />
                  </span>
                  <span className="text-[28px] font-bold" style={{ color: 'rgba(194,89,24,0.2)' }}>{step}</span>
                </div>
                <h3 className="text-[18px] font-semibold">{title}</h3>
                <p className="text-[13px] md:text-[14px] leading-[23px] text-white/62">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to bring — 2-col list + visual anchor */}
      <section ref={bringSection.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
        <div className="section-inner">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={bringSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="eyebrow-pill mb-4 inline-block">What to bring</span>
              <h2
                className="mb-5 text-[26px] md:text-[38px]"
                style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
              >
                The more specific, the more useful the session
              </h2>
              <p className="text-[15px] text-white/65 leading-[26px] mb-8">
                You don't need a polished brief. A rough dataset, an AI report, a market claim, or even just a question you need to answer — any of these make for a great starting point.
              </p>
              <ul className="space-y-3">
                {bringItems.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: COPPER_BG }}
                    >
                      <Icon className="w-4 h-4" style={{ color: COPPER }} />
                    </span>
                    <span className="text-[14px] md:text-[15px] leading-[24px] text-white/72">{label}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={bringSection.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl p-8 md:p-10"
              style={{ background: CARD_COPPER, border: `1px solid ${COPPER_BORDER}` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ background: COPPER_BG }}>
                <CheckCircle2 className="w-5 h-5" style={{ color: COPPER }} />
              </div>
              <h3 className="text-[22px] font-semibold mb-4">What you'll walk away with</h3>
              <ul className="space-y-4">
                {[
                  'A clear picture of how the verification workflow applies to your data type',
                  'Specific steps for turning your raw inputs into traceable, verifiable outputs',
                  'An honest assessment of what Clarify Data can and cannot do for your use case',
                  'A follow-up plan if your use case is a fit for the platform',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 mt-1 shrink-0" style={{ color: COPPER }} />
                    <span className="text-[14px] leading-[24px] text-white/72">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ — 2-col grid */}
      <section ref={faqSection.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={faqSection.inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-center mb-12"
          >
            <span className="eyebrow-pill mb-4 inline-block">Common questions</span>
            <h2
              className="text-[26px] md:text-[38px]"
              style={{ fontWeight: 600, letterSpacing: '-1px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
            >
              About the demo session
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                animate={faqSection.inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.42, delay: 0.06 + i * 0.07 }}
                className="rounded-2xl p-6"
                style={{
                  background: i % 3 === 0 ? CARD_COPPER : 'rgba(16,16,20,0.92)',
                  border: i % 3 === 0 ? `1px solid ${COPPER_BORDER}` : '1px solid rgba(250,250,250,0.07)',
                }}
              >
                <h3 className="text-[17px] font-semibold mb-3">{faq.question}</h3>
                <p className="text-[14px] leading-[24px] text-white/65">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BookDemo form */}
      <section className="border-t border-white/10" style={{ background: 'rgb(12,12,12)' }}>
        <div className="section-inner pt-14 text-center">
          <p className="inline-flex items-center gap-2 text-[14px] text-white/60">
            Fill in the form and we'll be in touch within one business day
            <ArrowRight className="w-4 h-4" style={{ color: COPPER }} />
          </p>
        </div>
        <BookDemo />
      </section>

      <CtaFooter />
    </div>
  )
}
