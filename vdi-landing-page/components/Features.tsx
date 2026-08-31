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
        &ldquo;Which specific attributes do you want to sort?&rdquo;
      </div>

      <div className="space-y-1.5 pt-0.5">
        {[
          { label: 'Category & Price Rank', status: 'Sorted', indicator: '🟢 High' },
          { label: 'Canonical Product ID', status: 'Organized', indicator: 'Review ready' }
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
          Market Research
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium flex items-center gap-1" style={{ background: COPPER_BG, color: COPPER_COLOR, border: '1px solid rgba(194,89,24,0.3)' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: COPPER_COLOR }} />
          Versioned
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
          Module 03
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
        <span className="text-white/80">Cross-referenced with verified datasets</span>
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
          Business Intelligence
        </span>
        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium" style={{ background: COPPER_BG, color: COPPER_COLOR, border: '1px solid rgba(194,89,24,0.3)' }}>
          Module 04
        </span>
      </div>

      <div className="p-2 rounded text-[11px]" style={{ background: COPPER_BG, border: '1px solid rgba(194,89,24,0.3)', color: 'rgba(250,250,250,0.9)' }}>
        Internal metrics compared with market behavior and industry indicators.
      </div>

      <div className="flex items-center justify-between text-[11px] text-white/80 pt-1">
        <span>Performance vs Market</span>
        <span className="font-semibold" style={{ color: COPPER_COLOR }}>Analysis Ready</span>
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
        <span>Evidence and review notes attached</span>
      </div>
    </div>
  )
}

// --- Features Data ---

const features = [
  {
    id: 'data-sort',
    title: 'Data Preparation',
    subtitle: 'Module 01',
    desc: 'Upload raw data from CSV files, Excel spreadsheets, documents, APIs, or other supported sources. Clarify Data analyzes the structure and helps clean, map, standardize, organize, and deduplicate the information.',
    UI: DataSortUI
  },
  {
    id: 'verified-market-intelligence',
    title: 'Verified Market Intelligence',
    subtitle: 'Module 02',
    desc: 'Clarify Data is designed to organize relevant market information so businesses can review important changes in their industries. Ask business and market questions and receive answers supported by available evidence.',
    UI: MarketIntelUI
  },
  {
    id: 'ai-claim-verification-overview',
    title: 'AI Claim Verification',
    subtitle: 'Module 03',
    desc: 'Clarify Data is designed to break AI-generated content into individual claims and evaluate those claims against available evidence, verified datasets, market intelligence, and relevant benchmarks. The workflow can be applied to output from widely used AI systems.',
    UI: AiClaimUI
  },
  {
    id: 'business-intelligence-overview',
    title: 'Business Intelligence & Benchmarking',
    subtitle: 'Module 04',
    desc: 'Organizations can compare relevant internal performance metrics with market behavior, industry indicators, and verified external information. Internal business data tells you what happened inside your company. Market intelligence tells you what happened outside it.',
    UI: PrivateBiUI
  },
  {
    id: 'dynamic-reports',
    title: 'Dynamic Reports & Market Divergence Alerts',
    subtitle: 'Module 05',
    desc: 'A traditional report represents one point in time. Markets continue moving after the report is delivered. Clarify Data can maintain versioned reports and identify when new verified information changes a previous conclusion, trend, indicator, or forecast.',
    UI: DivergenceUI
  }
]

export default function Features() {
  return (
    <section
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
        <div
          className="text-center mb-12 md:mb-16"
        >
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
            <span>Platform</span>
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
            Five Core Modules. One Verified Data Layer.
          </h2>
          <p
            className="max-w-[620px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Reliable business intelligence begins before the dashboard. Clarify Data covers the journey from preparing raw information to verifying claims, understanding markets, and comparing business performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => {
            const isEnterprise = i === 3 // Feature 4 highlighted
            return (
              <div
                key={feat.title}
                id={feat.id}
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
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
