import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import { Cookie } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | Clarify Data',
  description: 'Cookie Policy for Clarify Data.',
}

const COPPER = 'rgb(194, 89, 24)'

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <main className="max-w-[850px] mx-auto pt-32 pb-24 px-5">
        <div className="mb-10 text-center">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Cookie className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Privacy & Preferences</span>
          </span>
          <h1 className="text-[36px] md:text-[48px] font-semibold mb-3">Cookie Policy</h1>
          <p className="text-white/60 text-[14px]">Last updated: August 6, 2026</p>
        </div>

        <div className="space-y-8 text-white/80 text-[15px] leading-[26px]">
          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">1. Essential Cookies</h2>
            <p>
              We use essential session cookies to maintain secure authentication and preserve active workspace settings across session updates.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-white mb-3">2. Performance & Analytics Cookies</h2>
            <p>
              Analytical cookies enable us to measure aggregate page view traffic and optimize loading latency across global regions.
            </p>
          </section>
        </div>
      </main>

      <CtaFooter />
    </div>
  )
}
