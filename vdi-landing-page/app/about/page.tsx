import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import PageHeroHeader from '@/components/PageHeroHeader'
import { ShieldCheck, Target, Users, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Clarify Data | Verified Data Intelligence Platform',
  description: 'Learn about Clarify Data\'s mission to eliminate market uncertainty through AI verification, continuously updated intelligence, and human expert review.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      {/* Hero Section using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Our Mission"
        title="Building the Foundation for Verified Market Intelligence"
        subtitle="Clarify Data was founded to transform raw, noisy information into accurate, structured, and actionable market intelligence that modern enterprises can trust."
      />

      {/* Core Values / Pillars Grid */}
      <section className="py-16 px-5 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[28px] md:text-[40px] font-semibold mb-3">Our Core Pillars</h2>
            <p className="text-white/70 max-w-[600px] mx-auto text-[16px]">
              How we guarantee complete verification and transparency across every dataset.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(194, 89, 24, 0.15)' }}>
                <ShieldCheck className="w-6 h-6" style={{ color: COPPER }} />
              </div>
              <h3 className="text-[20px] font-semibold mb-3">Continuous Verification</h3>
              <p className="text-white/70 text-[15px] leading-[24px]">
                Our multi-agent verification pipeline validates claims against trusted datasets, ensuring live market metrics are accurate to 99.4%.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(194, 89, 24, 0.15)' }}>
                <Target className="w-6 h-6" style={{ color: COPPER }} />
              </div>
              <h3 className="text-[20px] font-semibold mb-3">Domain-Specific Precision</h3>
              <p className="text-white/70 text-[15px] leading-[24px]">
                Built specifically for Medical, E-Commerce, Logistics, and Education, providing specialized benchmarks that general AI tools miss.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(194, 89, 24, 0.15)' }}>
                <Users className="w-6 h-6" style={{ color: COPPER }} />
              </div>
              <h3 className="text-[20px] font-semibold mb-3">Human Expert Review</h3>
              <p className="text-white/70 text-[15px] leading-[24px]">
                Automated models are combined with domain experts for edge-case verification, ensuring zero hallucinated metrics in critical reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-5 border-t border-white/10 bg-black/40">
        <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-[36px] md:text-[48px] font-bold text-white mb-1" style={{ color: COPPER }}>99.4%</div>
            <div className="text-[14px] text-white/60 font-medium">Verification Accuracy</div>
          </div>
          <div>
            <div className="text-[36px] md:text-[48px] font-bold text-white mb-1" style={{ color: COPPER }}>4+</div>
            <div className="text-[14px] text-white/60 font-medium">Target Industries</div>
          </div>
          <div>
            <div className="text-[36px] md:text-[48px] font-bold text-white mb-1" style={{ color: COPPER }}>24/7</div>
            <div className="text-[14px] text-white/60 font-medium">Live Market Triggers</div>
          </div>
          <div>
            <div className="text-[36px] md:text-[48px] font-bold text-white mb-1" style={{ color: COPPER }}>10M+</div>
            <div className="text-[14px] text-white/60 font-medium">Data Points Analyzed Daily</div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </div>
  )
}
