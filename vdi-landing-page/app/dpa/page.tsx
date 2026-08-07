import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import { Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Processing Agreement (DPA) | Clarify Data',
  description: 'Data Processing Agreement for enterprise compliance.',
}

const COPPER = 'rgb(194, 89, 24)'

export default function DpaPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <main className="max-w-[850px] mx-auto pt-32 pb-24 px-5">
        <div className="mb-10 text-center">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Enterprise Compliance</span>
          </span>
          <h1 className="text-[36px] md:text-[48px] font-semibold mb-3">Data Processing Agreement (DPA)</h1>
          <p className="text-white/60 text-[14px]">Last updated: August 6, 2026</p>
        </div>

        <div className="space-y-8 text-white/80 text-[15px] leading-[26px]">
          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">1. Scope & Definitions</h2>
            <p>
              This Data Processing Agreement governs the processing of personal and business data provided by customers in connection with Clarify Data verification modules in compliance with GDPR, CCPA, and SOC 2 standards.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">2. Processing Security & Sub-Processors</h2>
            <p>
              Clarify Data agrees to maintain appropriate technical and organizational measures to safeguard data against unauthorized access, loss, or alteration.
            </p>
          </section>
        </div>
      </main>

      <CtaFooter />
    </div>
  )
}
