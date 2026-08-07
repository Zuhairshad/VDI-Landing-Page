import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import {
  Sparkles,
  Truck,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Database,
  AlertTriangle,
  Anchor,
  Globe,
  TrendingUp,
  Clock,
  ArrowRight
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

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 px-5 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none blur-[160px]"
          style={{ background: 'radial-gradient(circle, rgba(194, 89, 24, 0.28) 0%, transparent 70%)' }}
        />

        <div className="max-w-[950px] mx-auto text-center relative z-10">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Truck className="w-4 h-4" style={{ color: COPPER }} />
            <span>Logistics & Global Trade Intelligence</span>
          </span>
          <h1 className="text-[38px] md:text-[60px] font-semibold tracking-tight leading-[1.14] mb-6">
            Real-Time Supply Chain Verification & Freight Rate Benchmarking
          </h1>
          <p className="text-[17px] md:text-[20px] text-white/80 max-w-[780px] mx-auto leading-[30px] mb-8">
            Transform messy shipping manifests, bill of lading PDFs, and fluctuating spot rates into structured, verified market intelligence with automated port congestion triggers.
          </p>

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
        </div>
      </section>

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

      {/* Specialized Logistics Verification Modules */}
      <section className="py-20 px-5 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-amber-400 mb-2 block">
              Logistics Features
            </span>
            <h2 className="text-[32px] md:text-[46px] font-semibold mb-4">
              Automated Tools for Supply Chain Directors
            </h2>
          </div>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div
              className="p-8 md:p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-start justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(20, 20, 25, 0.95) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div className="max-w-[600px]">
                <h3 className="text-[24px] font-semibold text-white mb-3">Customs Manifest Ingestion & HS Code Sorting</h3>
                <p className="text-white/75 text-[15px] leading-[26px] mb-4">
                  Upload raw CSVs, PDFs, or EDI feeds. Our data sorting engine normalizes product descriptions, maps 6-digit HS codes, and strips duplicate shipment records automatically.
                </p>
                <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>99.9% HS Code Classification Accuracy</span>
                </div>
              </div>

              <div className="w-full md:w-[320px] p-6 rounded-2xl bg-black/60 border border-white/10 text-xs text-white/70 space-y-2 shrink-0">
                <div className="font-semibold text-white border-b border-white/10 pb-2">Manifest Verification Output</div>
                <div><strong>Container:</strong> MSCU9812410 (FEU 40')</div>
                <div><strong>HS Code:</strong> 8504.40 (Static Converters)</div>
                <div className="text-emerald-400 bg-emerald-500/10 p-2 rounded">✓ Normalized & Verified</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="p-8 md:p-10 rounded-3xl flex flex-col md:flex-row gap-8 items-start justify-between"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(20, 20, 25, 0.95) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div className="max-w-[600px]">
                <h3 className="text-[24px] font-semibold text-white mb-3">Freight Rate Divergence Triggers</h3>
                <p className="text-white/75 text-[15px] leading-[26px] mb-4">
                  Set baseline threshold alerts for major trade lanes (e.g. Shanghai ➔ Rotterdam or Ningbo ➔ Los Angeles). Receive immediate notifications when spot rates deviate by more than 8%.
                </p>
                <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Configurable Webhook & Email Triggers</span>
                </div>
              </div>

              <div className="w-full md:w-[320px] p-6 rounded-2xl bg-black/60 border border-white/10 text-xs text-white/70 space-y-2 shrink-0">
                <div className="font-semibold text-white border-b border-white/10 pb-2">Rate Divergence Alert</div>
                <div><strong>Lane:</strong> Ningbo ➔ Long Beach</div>
                <div><strong>Spot Rate:</strong> $3,450 / FEU (+12.4% spike)</div>
                <div className="text-amber-400 bg-amber-500/10 p-2 rounded">⚠ Peak Season Surcharge Detected</div>
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
