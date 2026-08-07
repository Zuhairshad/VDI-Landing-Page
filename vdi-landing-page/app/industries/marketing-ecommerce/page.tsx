import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  ShoppingCart,
  ShieldCheck,
  Tag
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Social Media & E-Commerce Intelligence Verification | Clarify Data',
  description: 'Verified e-commerce pricing benchmarks, competitor SKU monitoring, influencer ad claim audits, and market sentiment tracking.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function EcommerceIndustryPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      {/* Hero Header using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Social Media & E-Commerce Intelligence"
        icon={<ShoppingCart className="w-4 h-4" style={{ color: COPPER }} />}
        title="Verified Competitor Pricing & Ad Claim Intelligence"
        subtitle="Filter out fake social engagement, track competitor price drops in real time, and audit digital ad claims against verified ground truth product specifications."
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
            <Tag className="w-8 h-8 mb-4" style={{ color: COPPER }} />
            <h3 className="text-[22px] font-semibold mb-3 text-white">Automated SKU Price Normalization</h3>
            <p className="text-white/70 text-[15px] leading-[26px]">
              Track competitor prices across Amazon, Shopify stores, and global marketplaces. Our engine removes coupon noise and shipping miscalculations to report true net consumer prices.
            </p>
          </div>

          <div
            className="p-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(20, 20, 25, 0.9) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <ShieldCheck className="w-8 h-8 mb-4" style={{ color: COPPER }} />
            <h3 className="text-[22px] font-semibold mb-3 text-white">AI Ad Claim Verification</h3>
            <p className="text-white/70 text-[15px] leading-[26px]">
              Automatically scan promotional copy and influencer video transcripts to audit ingredient claims, warranty promises, and performance metrics against lab certifications.
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
