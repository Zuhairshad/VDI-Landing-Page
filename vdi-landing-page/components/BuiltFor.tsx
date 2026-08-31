import { LineChart, Database, BarChart3, FileSearch, Briefcase } from 'lucide-react'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const personas = [
  {
    icon: LineChart,
    title: 'Business Analysts',
    desc: 'Use verified information for business analysis, market research, performance analysis, business planning, risk analysis, opportunity assessment, and strategic recommendations.',
  },
  {
    icon: Database,
    title: 'Data Analysts',
    desc: 'Work with cleaner and more structured information for data analytics, reporting, visualization, trend analysis, performance measurement, and data-quality analysis.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence Analysts',
    desc: 'Combine business and market information for BI reporting, KPI analysis, benchmarking, market comparison, dashboard insights, forecasting, and decision support.',
  },
  {
    icon: FileSearch,
    title: 'Consultants & Researchers',
    desc: 'Verify AI-generated research, statistics, market claims, industry reports, recommendations, forecasts, and client-facing findings before presenting them.',
  },
  {
    icon: Briefcase,
    title: 'Business Owners & Executives',
    desc: 'Understand business performance, market position, risks, opportunities, performance gaps, forecast changes, and important decisions requiring attention.',
  },
]

export default function BuiltFor() {
  return (
    <section
      id="built-for"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        <div
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-block">Built For</span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{ fontWeight: 600, letterSpacing: '-1.2px', lineHeight: '1.2', color: 'rgb(250,250,250)' }}
          >
            Better Information for the People Making Important Decisions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((persona) => (
            <div
              key={persona.title}
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(16,16,20,0.95)',
                border: '1px solid rgba(250,250,250,0.08)',
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
                <persona.icon className="w-5 h-5" style={{ color: COPPER_COLOR }} />
              </div>
              <h3 className="text-[18px] font-semibold text-white mb-2">{persona.title}</h3>
              <p className="text-[13px] text-white/65 leading-[20px]">{persona.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
