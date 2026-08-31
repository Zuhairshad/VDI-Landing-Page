import { Database, CheckCircle2, Shield, TrendingUp, BarChart3, Star, Users, Bell } from 'lucide-react'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const reasons = [
  { icon: Database, title: 'Clean the Data', desc: 'Turn raw information into structured datasets.' },
  { icon: CheckCircle2, title: 'Validate the Structure', desc: 'Identify quality and consistency issues.' },
  { icon: Shield, title: 'Verify the Information', desc: 'Evaluate claims against available evidence.' },
  { icon: TrendingUp, title: 'Understand the Market', desc: 'Use dated, source-aware market intelligence.' },
  { icon: BarChart3, title: 'Analyze the Business', desc: 'Turn information into business analytics and BI reports.' },
  { icon: Star, title: 'Measure Confidence', desc: 'Use verification verdicts and the Trust Index.' },
  { icon: Users, title: 'Add Human Judgment', desc: 'Escalate uncertain findings when additional expertise is required.' },
  { icon: Bell, title: 'Monitor Change', desc: 'Update reports and alerts when market information changes.' },
]

export default function WhySection() {
  return (
    <section
      id="why-clarify"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        <div
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-block">Why Clarify Data</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            Data Intelligence Should Show Its Work
          </h2>
          <p
            className="max-w-[620px] mx-auto text-[15px] md:text-[17px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Clarify Data is designed to combine several capabilities that are often separated across different workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="rounded-2xl p-7 flex flex-col h-full"
              style={{
                background: i % 3 === 0
                  ? 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(16,16,20,0.95) 100%)'
                  : 'rgba(16,16,20,0.95)',
                border: i % 3 === 0
                  ? `1px solid ${COPPER_BORDER}`
                  : '1px solid rgba(250,250,250,0.07)',
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
                <reason.icon className="w-5 h-5" style={{ color: COPPER_COLOR }} />
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">{reason.title}</h3>
              <p className="text-[14px] text-white/60 leading-[22px]">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
