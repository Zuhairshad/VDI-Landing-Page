import { Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const points = [
  'Conflicting or incomplete evidence',
  'Low-confidence or uncertain findings',
  'High-impact or sensitive decisions',
  'Industry-specific context requirements',
  'Unusual market behavior',
  'Rapidly changing conditions',
]

export default function HumanVerification() {
  return (
    <section
      id="human-verification"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: text */}
          <div>
            <span className="eyebrow-pill mb-4 inline-block">Human + AI</span>
            <h2
              className="mb-4 text-[28px] md:text-[40px]"
              style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
            >
              Automation for Scale.{' '}
              <span style={{ color: COPPER_COLOR }}>Human Judgment Where It Matters.</span>
            </h2>
            <p
              className="mb-6 text-[15px]"
              style={{ color: 'rgba(250,250,250,0.7)', lineHeight: '26px' }}
            >
              Automated systems handle volume. When a finding is uncertain, conflicting, or high-impact, Clarify Data routes it to an experienced analyst for additional review.
            </p>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-[14px] font-medium transition-opacity hover:opacity-80"
              style={{ color: COPPER_COLOR }}
            >
              Learn About Human Verification <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: card */}
          <div
            className="rounded-2xl p-7"
            style={{
              background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.3) 0%, rgba(16,16,20,0.95) 100%)',
              border: `1px solid ${COPPER_BORDER}`,
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
              <Users className="w-5 h-5" style={{ color: COPPER_COLOR }} />
            </div>
            <h3 className="text-[17px] font-semibold text-white mb-4">Human review is triggered when findings involve:</h3>
            <ul className="grid grid-cols-2 gap-2.5">
              {points.map(p => (
                <li key={p} className="flex items-start gap-2 text-[13px] text-white/75">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: COPPER_COLOR }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
