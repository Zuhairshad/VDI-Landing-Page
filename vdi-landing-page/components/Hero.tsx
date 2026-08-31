import { Sparkles, ShieldCheck } from 'lucide-react'
import ShaderHero from './ShaderHero'

// Site copper color token
const COPPER_COLOR = 'rgb(194, 89, 24)'

export default function Hero() {
  return (
    <ShaderHero id="overview">
        <div
          className="mb-8"
        >
          <span className="eyebrow-pill flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
            <span>Verified Data Intelligence</span>
          </span>
        </div>

        <h1
          className="mb-6 text-[32px] md:text-[58px]"
          style={{ fontWeight: 600, letterSpacing: '-1.8px', lineHeight: '1.18', color: 'rgb(250,250,250)' }}
        >
          Turn Uncertain Data and AI Content Into Verified Business Intelligence
        </h1>

        <p
          className="mb-10 max-w-[680px] text-[16px] md:text-[19px]"
          style={{ fontWeight: 450, lineHeight: '28px', color: 'rgba(250,250,250,0.85)' }}
        >
          Clarify Data helps businesses sort, validate, analyze, and verify information before it reaches an important decision. Bring raw business data or AI-generated content. Clarify Data is designed to structure the information, check claims against available evidence, communicate confidence, and route uncertain findings to human review when needed.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-3.5 mb-6"
        >
          <a
            href="#book-demo"
            className="px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-medium transition-opacity duration-200 shadow-lg hover:opacity-90"
            style={{ background: 'rgb(250,250,250)', color: 'rgb(10,10,10)' }}
          >
            Book a Demo
          </a>
          <a
            href="/how-it-works"
            className="px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-medium transition-colors duration-200 hover:bg-white/20"
            style={{ background: 'rgba(250,250,250,0.12)', color: 'rgb(250,250,250)', border: '1px solid rgba(250,250,250,0.2)' }}
          >
            See How Verification Works
          </a>
        </div>

        <p
          className="text-[13px] text-white/40 mb-3"
        >
          Data Verification · AI Claim Verification · Business Intelligence · Market Intelligence · Human Review
        </p>

        <p
          className="flex items-center gap-2 text-[13px] text-white/40"
        >
          <ShieldCheck className="w-4 h-4" style={{ color: COPPER_COLOR }} />
          <span>Built for: E-commerce · Healthcare · Logistics · Education</span>
        </p>
    </ShaderHero>
  )
}
