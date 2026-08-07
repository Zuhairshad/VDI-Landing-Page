import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  GraduationCap,
  BookOpen,
  Award
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Education & Academic Research Data Verification | Clarify Data',
  description: 'Verified academic research citation auditing, university outcome benchmarking, and publication data sorting.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function EducationIndustryPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      {/* Hero Header using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Education & Academic Intelligence"
        icon={<GraduationCap className="w-4 h-4" style={{ color: COPPER }} />}
        title="Verified Academic Citations & Educational Institutional Benchmarking"
        subtitle="Ensure zero hallucinated references in academic manuscripts, audit educational survey data, and access verified graduate outcome benchmarks across higher education."
      />

      {/* Capabilities */}
      <section className="py-20 px-5 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <BookOpen className="w-8 h-8 mb-4" style={{ color: COPPER }} />
            <h3 className="text-[22px] font-semibold mb-3 text-white">Automated Citation & DOI Audit</h3>
            <p className="text-white/70 text-[15px] leading-[26px]">
              Upload dissertations, research papers, or academic grant proposals. Our verification engine parses references against CrossRef, OpenAlex, and PubMed to flag missing or invalid citations instantly.
            </p>
          </div>

          <div
            className="p-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <Award className="w-8 h-8 mb-4" style={{ color: COPPER }} />
            <h3 className="text-[22px] font-semibold mb-3 text-white">Graduate Outcome Benchmarking</h3>
            <p className="text-white/70 text-[15px] leading-[26px]">
              Access normalized institutional benchmarks comparing degree tuition costs, alumni employment placement rates, and research grant allocations across global universities.
            </p>
          </div>
        </div>
      </section>

      {/* Embed Demo Form */}
      <BookDemo />

      <CtaFooter />
    </div>
  )
}
