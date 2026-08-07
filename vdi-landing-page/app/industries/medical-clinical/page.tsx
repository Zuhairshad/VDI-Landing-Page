import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import { Sparkles, Stethoscope, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medical & Healthcare Verification | Clarify Data',
  description: 'Verified clinical intelligence, treatment outcome benchmarking, and regulatory compliance claims verification.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function MedicalIndustryPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <section className="relative pt-32 pb-16 px-5 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(194, 89, 24, 0.25) 0%, transparent 70%)' }}
        />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Stethoscope className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Medical & Healthcare</span>
          </span>
          <h1 className="text-[36px] md:text-[54px] font-semibold tracking-tight leading-[1.15] mb-4">
            Verified Clinical & Healthcare Intelligence
          </h1>
          <p className="text-[17px] text-white/70 max-w-[700px] mx-auto">
            Eliminate clinical uncertainty with multi-layer verification of treatment outcomes, medical literature claims, and regulatory compliance datasets.
          </p>
        </div>
      </section>

      {/* Module Capabilities */}
      <section className="py-16 px-5 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <h3 className="text-[22px] font-semibold mb-4 text-white">Clinical Claim Verification</h3>
            <p className="text-white/70 text-[15px] leading-[24px] mb-4">
              Cross-references medical studies, clinical trial results, and FDA/EMA databases to flag unverified medical claims before public dissemination.
            </p>
            <ul className="space-y-2 text-[14px] text-white/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: COPPER }} />
                <span>99.4% precision on clinical trial citation accuracy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: COPPER }} />
                <span>Automated PubMed and OpenAlex database alignment</span>
              </li>
            </ul>
          </div>

          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <h3 className="text-[22px] font-semibold mb-4 text-white">Healthcare Benchmarking</h3>
            <p className="text-white/70 text-[15px] leading-[24px] mb-4">
              Continuous monitoring of regional health metrics, pharmaceutical supply pricing, and hospital operational efficiency indices.
            </p>
            <ul className="space-y-2 text-[14px] text-white/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: COPPER }} />
                <span>Real-time divergence alerts for drug shortages</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: COPPER }} />
                <span>Expert MD review for critical diagnostic reports</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BookDemo />
      <CtaFooter />
    </div>
  )
}
