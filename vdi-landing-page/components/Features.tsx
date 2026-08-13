'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  ArrowUpDown,
  TrendingUp,
  ShieldCheck,
  Lock,
  Zap,
  CheckCircle2,
  BellRing,
  FileText,
  Sparkles,
  Bot
} from 'lucide-react'

// Site copper color token
const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'

// --- Micro UI Previews ---

function DataSortUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[270px] mx-auto flex flex-col gap-2.5"
      style={{ background: 'rgba(12,12,14,0.95)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: COPPER_COLOR }}>
          <ArrowUpDown className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
          Raw Data Input
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium" style={{ background: COPPER_BG, color: COPPER_COLOR, border: '1px solid rgba(194,89,24,0.3)' }}>
          Auto-Detect
        </span>
      </div>

      <div className="p-2 rounded bg-white/[0.04] text-[11px] text-white/70 italic border border-white/5">
        "Which specific attributes do you want to sort?"
      </div>

      <div className="space-y-1.5 pt-0.5">
        {[
          { label: 'Category & Price Rank', status: 'Sorted', indicator: '🟢 High' },
          { label: 'Canonical Product ID', status: 'Organized', indicator: '⚡ 99.8%' }
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between text-[11px] px-2 py-1 rounded bg-white/[0.03]">
            <span className="text-white/80 font-medium">{item.label}</span>
            <span className="text-[10px] font-medium" style={{ color: COPPER_COLOR }}>{item.indicator}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketIntelUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[270px] mx-auto flex flex-col gap-2.5"
      style={{ background: 'rgba(12,12,14,0.95)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: COPPER_COLOR }}>
          <TrendingUp className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
          Live Market Intel
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium flex items-center gap-1" style={{ background: COPPER_BG, color: COPPER_COLOR, border: '1px solid rgba(194,89,24,0.3)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: COPPER_COLOR }} />
          Daily Sync
        </span>
      </div>

      <div className="flex items-center gap-2 p-2 rounded text-[11px]" style={{ background: COPPER_BG, border: '1px solid rgba(194,89,24,0.3)' }}>
        <BellRing className="w-3.5 h-3.5 shrink-0" style={{ color: COPPER_COLOR }} />
        <span className="text-white/90">Alert: Competitor promo shift detected</span>
      </div>

      <div className="flex items-center justify-between text-[10px] text-white/50 pt-1 border-t border-white/5">
        <span className="flex items-center gap-1"><FileText className="w-3 h-3" style={{ color: COPPER_COLOR }} /> Export: PDF · DOC · Email</span>
        <span className="font-medium" style={{ color: COPPER_COLOR }}>✓ Human Verified</span>
      </div>
    </div>
  )
}

function AiClaimUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[270px] mx-auto flex flex-col gap-2.5"
      style={{ background: 'rgba(12,12,14,0.95)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: COPPER_COLOR }}>
          <Bot className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
          AI Claim Score
        </span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: COPPER_BG, color: COPPER_COLOR, border: '1px solid rgba(194,89,24,0.3)' }}>
          98.4% Trust
        </span>
      </div>

      <div className="flex flex-wrap gap-1">
        {['GPT-4', 'Gemini', 'Claude', 'Grok', 'DeepSeek'].map((llm) => (
          <span key={llm} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-white/70 border border-white/10">
            {llm}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 p-2 rounded bg-white/[0.04] border border-white/5 text-[11px]">
        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: COPPER_COLOR }} />
        <span className="text-white/80">Cross-referenced with VDI dataset</span>
      </div>
    </div>
  )
}

function PrivateBiUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[270px] mx-auto flex flex-col gap-2.5"
      style={{ background: 'rgba(12,12,14,0.95)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: COPPER_COLOR }}>
          <Lock className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
          Enterprise Private BI
        </span>
        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium" style={{ background: COPPER_BG, color: COPPER_COLOR, border: '1px solid rgba(194,89,24,0.3)' }}>
          Zero DB Storage
        </span>
      </div>

      <div className="p-2 rounded text-[11px]" style={{ background: COPPER_BG, border: '1px solid rgba(194,89,24,0.3)', color: 'rgba(250,250,250,0.9)' }}>
        🔒 Sensitive data processed in memory & purged immediately.
      </div>

      <div className="flex items-center justify-between text-[11px] text-white/80 pt-1">
        <span>Business Forecast:</span>
        <span className="font-semibold" style={{ color: COPPER_COLOR }}>+24.5% Benchmark</span>
      </div>
    </div>
  )
}

function DivergenceUI() {
  return (
    <div
      className="rounded-xl p-4 w-full max-w-[270px] mx-auto flex flex-col gap-2.5"
      style={{ background: 'rgba(12,12,14,0.95)', border: '1px solid rgba(250,250,250,0.1)' }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1.5" style={{ color: COPPER_COLOR }}>
          <Zap className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
          Divergence Alert
        </span>
        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded" style={{ background: COPPER_BG, color: COPPER_COLOR, border: '1px solid rgba(194,89,24,0.3)' }}>
          Action Required
        </span>
      </div>

      <div className="p-2 rounded text-[11px]" style={{ background: COPPER_BG, border: '1px solid rgba(194,89,24,0.3)', color: 'rgba(250,250,250,0.9)' }}>
        ⚡ Market trend divergence detected. Recommended decision ready.
      </div>

      <div className="text-[10px] text-white/60 flex items-center gap-1 pt-0.5">
        <ShieldCheck className="w-3 h-3" style={{ color: COPPER_COLOR }} />
        <span>Based on 100% verified market evidence</span>
      </div>
    </div>
  )
}

// --- Features Data ---

const features = [
  {
    title: '1. Data Sort',
    subtitle: 'Intelligent Raw Data Verification & Sorting',
    desc: 'The core verification engine of Clerify Data. Upload raw datasets in any format — the system analyzes the structure, prompts for target sorting criteria, and sorts data with automated quality indicators.',
    UI: DataSortUI
  },
  {
    title: '2. Verified Market Intelligence',
    subtitle: 'Dynamic Daily Upgrades & Trigger Alerts',
    desc: 'Continuous market intelligence updated daily. Ask industry-critical queries, receive analytics reports backed by human verifier edge-case reviews, and get instant trigger alerts via email, PDF, or DOC formats.',
    UI: MarketIntelUI
  },
  {
    title: '3. AI Claim Verification',
    subtitle: 'Trust Scoring for Major LLMs',
    desc: 'Verify claims generated from ChatGPT, Gemini, Claude, Grok, or DeepSeek. Clerify Data evaluates content against real-time industry databases, providing accuracy scores backed by expert human validation.',
    UI: AiClaimUI
  },
  {
    title: '4. Enterprise Private Business Intelligence',
    subtitle: 'Zero-Persistence Private Audit & Forecasts',
    desc: 'Designed for enterprise and private businesses. Upload sensitive corporate data with a strict zero-database storage guarantee. Receive customized business audit reports and market comparison forecasts.',
    UI: PrivateBiUI
  },
  {
    title: '5. Market Divergence Alerts & Guidance',
    subtitle: 'Strategic Decision Frameworks',
    desc: 'Stay ahead with real-time market divergence detection. Built on trusted, verified data streams, the system delivers strategic guidance and immediate actionable decisions for rapid business adoption.',
    UI: DivergenceUI
  }
]

export default function Features() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="features"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      {/* Background Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(194, 89, 24, 0.25) 0%, rgba(10, 10, 10, 0) 70%)'
        }}
      />

      <div className="section-inner relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
            <span>Features & Modules</span>
          </span>
          <h2
            className="mb-4 text-[28px] md:text-[46px]"
            style={{
              fontWeight: 600,
              letterSpacing: '-1.2px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)'
            }}
          >
            Core Features & Verification Modules
          </h2>
          <p
            className="max-w-[620px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Comprehensive data sorting, AI claim verification, dynamic market intelligence, and enterprise-grade private audits.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const isEnterprise = i === 3 // Feature 4 highlighted
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07 }}
                className={`landscape-card rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[#c25918]/50 ${
                  isEnterprise ? 'lg:col-span-2' : ''
                }`}
                style={{
                  border: isEnterprise
                    ? '1px solid rgba(194, 89, 24, 0.4)'
                    : '1px solid rgba(250,250,250,0.08)'
                }}
              >
                {/* Visual Header */}
                <div className="flex-1 flex items-center justify-center p-6 min-h-[190px]">
                  <feat.UI />
                </div>

                {/* Text Content */}
                <div className="px-6 pb-6 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1" style={{ color: COPPER_COLOR }}>
                    {feat.subtitle}
                  </span>
                  <h3
                    className="mb-2 text-[20px] font-semibold tracking-tight"
                    style={{ color: 'rgb(250,250,250)' }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[22px]"
                    style={{ color: 'rgba(250,250,250,0.65)' }}
                  >
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
