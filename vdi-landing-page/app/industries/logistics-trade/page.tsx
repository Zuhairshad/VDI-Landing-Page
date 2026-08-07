import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import {
  Truck,
  Anchor,
  Clock,
  TrendingUp,
  Database,
  Globe,
  CheckCircle2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Logistics & Trade Intelligence Verification | Clarify Data',
  description: 'Verified supply chain metrics, ocean & air freight rate divergence, tariff tracking, and customs manifest sorting.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function LogisticsIndustryPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      {/* Hero Header using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Logistics & Global Trade Intelligence"
        icon={<Truck className="w-4 h-4" style={{ color: COPPER }} />}
        title="Real-Time Supply Chain Verification & Freight Rate Benchmarking"
        subtitle="Transform messy shipping manifests, bill of lading PDFs, and fluctuating spot rates into structured, verified market intelligence with automated port congestion triggers."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-left max-w-[850px] mx-auto pt-4">
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
            <Anchor className="w-5 h-5 shrink-0" style={{ color: COPPER }} />
            <div>
              <div className="text-[14px] font-semibold text-white">500+ Global Lanes Tracked</div>
              <div className="text-[12px] text-white/60">Ocean & Air freight rate normalization</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
            <Clock className="w-5 h-5 shrink-0" style={{ color: COPPER }} />
            <div>
              <div className="text-[14px] font-semibold text-white">Sub-Minute Trigger Alerts</div>
              <div className="text-[12px] text-white/60">Port delays, tariff spikes & fuel surcharges</div>
            </div>
          </div>
        </div>
      </PageHeroHeader>

      {/* Supply Chain Challenges */}
      <section className="py-20 px-5 border-t border-white/10 bg-black/40">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[30px] md:text-[42px] font-semibold mb-4">Why Logistics Data Needs Verification</h2>
            <p className="text-white/70 max-w-[700px] mx-auto text-[16px] leading-[26px]">
              Raw trade data is notorious for duplicate entries, inconsistent HS codes, and hidden carrier surcharges. Clarify Data cleans and verifies every data point.
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
              <TrendingUp className="w-8 h-8 mb-4 text-amber-400" />
              <h3 className="text-[20px] font-semibold mb-3">Spot Rate Volatility</h3>
              <p className="text-white/70 text-[14px] leading-[24px]">
                Freight rates swing wildly day-to-day. Unverified carrier quotes often omit demurrage and peak season surcharges.
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
              <h3 className="text-[20px] font-semibold mb-3">Customs Manifest Noise</h3>
              <p className="text-white/70 text-[14px] leading-[24px]">
                Bill of lading records contain missing weight fields, mistranslated product descriptions, and unvalidated shipper IDs.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.35) 0%, rgba(16, 16, 20, 0.95) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <Globe className="w-8 h-8 mb-4" style={{ color: COPPER }} />
              <h3 className="text-[20px] font-semibold mb-3">Geopolitical Bottlenecks</h3>
              <p className="text-white/70 text-[14px] leading-[24px]">
                Sudden canal closures or port labor disputes delay shipments for weeks without early warning triggers.
              </p>
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
