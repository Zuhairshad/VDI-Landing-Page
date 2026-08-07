import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  Stethoscope,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Database,
  AlertTriangle,
  Microscope
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Medical & Clinical Data Verification | Clarify Data',
  description: 'Comprehensive clinical data verification, medical literature auditing, FDA/PubMed ground truth matching, and healthcare benchmarking.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function MedicalIndustryPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      {/* Hero Header using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Medical & Healthcare Industry Intelligence"
        icon={<Stethoscope className="w-4 h-4" style={{ color: COPPER }} />}
        title="Verified Clinical Intelligence for Smarter Healthcare Decisions"
        subtitle="Clarify Data combines multi-agent AI verification, PubMed/FDA ground truth cross-matching, and MD expert review to ensure 100% accurate clinical claims, drug safety alerts, and hospital benchmarking."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-left max-w-[850px] mx-auto pt-4">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
            <ShieldCheck className="w-5 h-5 shrink-0" style={{ color: COPPER }} />
            <div>
              <div className="text-[14px] font-semibold text-white">99.4% Citation Precision</div>
              <div className="text-[12px] text-white/60">Validated against PubMed & ClinicalTrials.gov</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
            <Microscope className="w-5 h-5 shrink-0" style={{ color: COPPER }} />
            <div>
              <div className="text-[14px] font-semibold text-white">MD Expert Verification</div>
              <div className="text-[12px] text-white/60">Human-in-the-loop review for edge cases</div>
            </div>
          </div>
        </div>
      </PageHeroHeader>

      {/* The Healthcare Data Challenge */}
      <section className="py-20 px-5 border-t border-white/10 bg-black/40">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[30px] md:text-[42px] font-semibold mb-4">The Healthcare Data Noise Challenge</h2>
            <p className="text-white/70 max-w-[700px] mx-auto text-[16px] leading-[26px]">
              In healthcare and clinical research, unverified AI summaries and inaccurate medical claims carry extreme financial and regulatory risks. Clarify Data eliminates this uncertainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.35) 0%, rgba(16, 16, 20, 0.95) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <AlertTriangle className="w-8 h-8 mb-4 text-amber-400" />
              <h3 className="text-[20px] font-semibold mb-3">Hallucinated References</h3>
              <p className="text-white/70 text-[14px] leading-[24px]">
                Standard LLMs frequently invent DOIs, clinical trial outcomes, and drug efficacy percentages when summarizing research.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.35) 0%, rgba(16, 16, 20, 0.95) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <Database className="w-8 h-8 mb-4" style={{ color: COPPER }} />
              <h3 className="text-[20px] font-semibold mb-3">Fragmented Silos</h3>
              <p className="text-white/70 text-[14px] leading-[24px]">
                Clinical trial registries, FDA recall logs, and hospital cost reports live in disconnected databases with incompatible formats.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.35) 0%, rgba(16, 16, 20, 0.95) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <Activity className="w-8 h-8 mb-4" style={{ color: COPPER }} />
              <h3 className="text-[20px] font-semibold mb-3">Regulatory Penalties</h3>
              <p className="text-white/70 text-[14px] leading-[24px]">
                Publishing inaccurate health product claims or faulty diagnostic data risks compliance audits, lawsuits, and brand damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Verification Modules for Healthcare */}
      <section className="py-20 px-5 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-amber-400 mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-[32px] md:text-[46px] font-semibold mb-4">
              4 Verification Engines for Medical Teams
            </h2>
          </div>

          <div className="space-y-8">
            {/* Engine 1 */}
            <div
              className="p-8 md:p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-start justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(20, 20, 25, 0.95) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div className="max-w-[600px]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm border border-amber-500/30">
                    01
                  </span>
                  <h3 className="text-[24px] font-semibold text-white">Clinical Literature & Claim Audit</h3>
                </div>
                <p className="text-white/75 text-[15px] leading-[26px] mb-6">
                  Input raw articles, marketing copy, or research drafts. Our system extracts every clinical assertion, maps it to PubMed/Europe PMC indexing, and validates sample sizes, p-values, and trial phases.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>NCBI & PubMed DOI Verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-400" />
                    <span>P-Value & Statistical Auditing</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[320px] p-6 rounded-2xl bg-black/60 border border-white/10 text-xs text-white/70 space-y-3 shrink-0">
                <div className="flex items-center justify-between text-white/90 font-semibold border-b border-white/10 pb-2">
                  <span>Audit Preview</span>
                  <span className="text-emerald-400">PASSED</span>
                </div>
                <div><strong>Claim:</strong> "Drug X reduces inflammation by 42% in Phase III trials."</div>
                <div><strong>Ground Truth:</strong> ClinicalTrials.gov NCT0481239 (Sample: N=1,420)</div>
                <div className="text-[11px] text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                  ✓ Verified: Match score 99.8%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embed Demo Form */}
      <BookDemo />

      <CtaFooter />
    </div>
  )
}
