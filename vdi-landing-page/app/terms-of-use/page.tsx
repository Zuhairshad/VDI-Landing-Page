import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import PageHeroHeader from '@/components/PageHeroHeader'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Use | Clarify Data',
  description: 'Terms of Use for Clarify Data verified intelligence platform.',
}

const COPPER = 'rgb(194, 89, 24)'

export default function TermsOfUsePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      {/* Hero Header using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Terms & Conditions"
        icon={<FileText className="w-3.5 h-3.5" style={{ color: COPPER }} />}
        title="Terms of Use"
        subtitle="Last updated: August 6, 2026"
      />

      <main className="max-w-[850px] mx-auto py-16 px-5">
        <div className="space-y-8 text-white/80 text-[15px] leading-[26px]">
          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Clarify Data platform, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">2. Service Scope & Intellectual Property</h2>
            <p>
              Clarify Data grants authorized users a limited, non-exclusive, non-transferable license to access our platform reports, market indicators, and verification tools. All software, algorithms, data structures, and branding remain the exclusive intellectual property of Clarify Data.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">3. Accuracy & Verification Disclaimer</h2>
            <p>
              While Clarify Data employs continuous multi-agent verification and expert human review to ensure high accuracy, users acknowledge that market intelligence indicators are provided for informational decision-making and should be evaluated in context with domain-specific regulations.
            </p>
          </section>
        </div>
      </main>

      <CtaFooter />
    </div>
  )
}
