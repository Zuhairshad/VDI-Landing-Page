import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Clarify Data',
  description: 'Privacy Policy for Clarify Data verified intelligence platform.',
}

const COPPER = 'rgb(194, 89, 24)'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <main className="max-w-[850px] mx-auto pt-32 pb-24 px-5">
        <div className="mb-10 text-center">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Legal Compliance</span>
          </span>
          <h1 className="text-[36px] md:text-[48px] font-semibold mb-3">Privacy Policy</h1>
          <p className="text-white/60 text-[14px]">Last updated: August 6, 2026</p>
        </div>

        <div className="space-y-8 text-white/80 text-[15px] leading-[26px]">
          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>
              Clarify Data collects information that you provide directly when registering an account, submitting data verification requests, or scheduling a demo. This includes contact details (such as name and business email address), organization name, and dataset metadata uploaded to our platform.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">2. How We Use Information</h2>
            <p>
              We use collected information to operate, maintain, and enhance our verification platform; execute market intelligence queries; generate divergence alerts; and communicate platform updates or security notices to authorized organizational contacts.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">3. Data Security & Storage</h2>
            <p>
              Clarify Data implements strict enterprise-grade encryption (TLS 1.3 in transit and AES-256 at rest) across all customer verification datasets. Uploaded datasets are strictly segmented and never used to train public foundational AI models without explicit enterprise consent.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">4. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your data rights, please contact our Data Protection Officer at <strong>Usman@geniusmindzone.com</strong>.
            </p>
          </section>
        </div>
      </main>

      <CtaFooter />
    </div>
  )
}
