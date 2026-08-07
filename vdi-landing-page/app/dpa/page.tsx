import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import PageHeroHeader from '@/components/PageHeroHeader'
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

      {/* Hero Header using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Enterprise Compliance"
        icon={<Lock className="w-3.5 h-3.5" style={{ color: COPPER }} />}
        title="Data Processing Agreement (DPA)"
        subtitle="Last updated: August 6, 2026"
      />

      <main className="max-w-[850px] mx-auto py-16 px-5">
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
