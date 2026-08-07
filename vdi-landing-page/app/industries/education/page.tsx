import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import {
  Sparkles,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  FileCheck,
  Award,
  Search
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

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-5 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none blur-[160px]"
          style={{ background: 'radial-gradient(circle, rgba(194, 89, 24, 0.28) 0%, transparent 70%)' }}
        />

        <div className="max-w-[950px] mx-auto text-center relative z-10">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <GraduationCap className="w-4 h-4" style={{ color: COPPER }} />
            <span>Education & Academic Intelligence</span>
          </span>
          <h1 className="text-[38px] md:text-[60px] font-semibold tracking-tight leading-[1.14] mb-6">
            Verified Academic Citations & Educational Institutional Benchmarking
          </h1>
          <p className="text-[17px] md:text-[20px] text-white/80 max-w-[780px] mx-auto leading-[30px] mb-8">
            Ensure zero hallucinated references in academic manuscripts, audit educational survey data, and access verified graduate outcome benchmarks across higher education.
          </p>
        </div>
      </section>

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
