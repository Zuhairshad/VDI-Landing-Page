'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  Building2,
  ShoppingCart,
  Heart,
  Truck,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

function useSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-6%' })
  return { ref, inView }
}

export default function IndustriesPage() {
  const s1 = useSection()
  const s2 = useSection()

  const industries = [
    {
      icon: <ShoppingCart className="w-5 h-5" style={{ color: COPPER }} />,
      title: 'E-Commerce & Marketing',
      desc: 'Verify product claims, market sizing figures, competitor intelligence, and AI-generated marketing content. Clarify Data flags overreaching assertions and unsupported performance projections before they reach campaigns or client reports.',
      href: '/industries/marketing-ecommerce',
    },
    {
      icon: <Heart className="w-5 h-5" style={{ color: COPPER }} />,
      title: 'Healthcare & Clinical',
      desc: 'Clinical data requires verified sources, documented evidence trails, and human review for high-stakes findings. Clarify Data structures verification workflows around clinical evidence standards. (Not a medical device or clinical decision support tool.)',
      href: '/industries/medical-clinical',
    },
    {
      icon: <Truck className="w-5 h-5" style={{ color: COPPER }} />,
      title: 'Logistics & Trade',
      desc: 'Verify trade data, supplier claims, market intelligence, and logistics cost projections against primary sources. Clarify Data helps logistics teams work from confirmed figures rather than unverified estimates.',
      href: '/industries/logistics-trade',
    },
    {
      icon: <GraduationCap className="w-5 h-5" style={{ color: COPPER }} />,
      title: 'Education',
      desc: 'Educational institutions and EdTech companies work with accreditation data, research claims, program outcomes, and content accuracy. Clarify Data applies structured verification to the information that informs enrollment, curriculum, and partnerships.',
      href: '/industries/education',
    },
  ]

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        <PageHeroHeader
          eyebrow="INDUSTRIES"
          icon={<Building2 className="w-4 h-4" style={{ color: COPPER }} />}
          title="Data Verification for Your Industry"
          subtitle="Verification requirements vary by industry. The evidence standards, regulatory context, and data types that matter in healthcare are different from those in logistics, education, or e-commerce. Clarify Data builds verification workflows around the context your industry requires."
        />

        {/* Section 1 — Industry Cards */}
        <section ref={s1.ref} className="section-pad" style={{ background: 'rgb(10,10,10)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s1.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>SECTORS</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Four Industries. One Verification Standard.
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px]" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Each industry section covers the specific data types, verification challenges, and evidence standards relevant to that sector.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {industries.map((industry, i) => (
                <motion.a
                  key={i}
                  href={industry.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={s1.inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.08 }}
                  className="group rounded-2xl p-7 flex flex-col gap-4 transition-opacity hover:opacity-90"
                  style={
                    i % 2 === 0
                      ? {
                          background: 'linear-gradient(135deg, rgba(84,27,4,0.3) 0%, rgba(16,16,20,0.95) 100%)',
                          border: `1px solid ${COPPER_BORDER}`,
                        }
                      : {
                          background: 'rgba(16,16,20,0.95)',
                          border: '1px solid rgba(250,250,250,0.07)',
                        }
                  }
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}
                  >
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-semibold mb-3" style={{ color: 'rgb(250,250,250)' }}>
                      {industry.title}
                    </h3>
                    <p className="text-[14px]" style={{ color: 'rgba(250,250,250,0.62)', lineHeight: '23px' }}>
                      {industry.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold" style={{ color: COPPER }}>
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — CTA */}
        <section ref={s2.ref} className="section-pad" style={{ background: 'rgb(12,12,12)' }}>
          <div className="section-inner">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={s2.inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="eyebrow-pill mb-6 inline-flex items-center gap-2">
                <ArrowRight className="w-3.5 h-3.5" style={{ color: COPPER }} />
                <span>CLARIFY DATA</span>
              </span>
              <h2
                className="mb-4 text-[26px] md:text-[38px] font-semibold tracking-tight leading-[1.2] max-w-[640px] mx-auto"
                style={{ color: 'rgb(250,250,250)' }}
              >
                Every Industry Has Different Evidence Standards
              </h2>
              <p className="max-w-[620px] mx-auto text-[16px] mb-8" style={{ color: 'rgba(250,250,250,0.65)', lineHeight: '26px' }}>
                Tell us your industry and the type of data you need to verify. We'll show you how the verification workflow applies to your use case.
              </p>
              <a
                href="/#book-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold transition-opacity hover:opacity-80"
                style={{ background: COPPER, color: 'rgb(250,250,250)' }}
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        <BookDemo />
      </main>
      <CtaFooter />
    </div>
  )
}
