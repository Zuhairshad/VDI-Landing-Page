import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import { Sparkles, ShoppingCart, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Social Media & E-Commerce Intelligence | Clarify Data',
  description: 'Verified pricing benchmarks, consumer trend claims verification, and e-commerce analytics.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function EcommerceIndustryPage() {
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
            <ShoppingCart className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Social Media & E-Commerce</span>
          </span>
          <h1 className="text-[36px] md:text-[54px] font-semibold tracking-tight leading-[1.15] mb-4">
            E-Commerce Trend & Pricing Intelligence
          </h1>
          <p className="text-[17px] text-white/70 max-w-[700px] mx-auto">
            Verify product claims, benchmark competitor pricing, and filter out fake social metrics across global marketplaces.
          </p>
        </div>
      </section>

      <section className="py-16 px-5 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <h3 className="text-[22px] font-semibold mb-4 text-white">Competitor Price Verification</h3>
            <p className="text-white/70 text-[15px] leading-[24px] mb-4">
              Continuously track e-commerce SKU prices across Amazon, Shopify stores, and regional marketplaces with zero scraped noise.
            </p>
          </div>

          <div
            className="p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <h3 className="text-[22px] font-semibold mb-4 text-white">Ad & Influencer Claim Audit</h3>
            <p className="text-white/70 text-[15px] leading-[24px] mb-4">
              AI verification pipeline checks ingredient, performance, and ROI claims in digital advertising campaigns.
            </p>
          </div>
        </div>
      </section>

      <BookDemo />
      <CtaFooter />
    </div>
  )
}
