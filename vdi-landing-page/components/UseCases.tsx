import { ShoppingBag, Stethoscope, Truck, GraduationCap, Check } from 'lucide-react'

// Site copper color token
const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'

const industries = [
  {
    icon: <ShoppingBag className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: '1. Social Media and E-commerce',
    desc: 'Support social media platforms, online retailers, digital agencies, marketplaces, content creators, and e-commerce brands in organizing data and responding to changing customer behavior.',
    useCases: [
      'Social media trend & marketing claim verification',
      'Product demand & category forecasting',
      'Campaign performance & conversion rate benchmarking',
      'Customer acquisition & sentiment analysis'
    ]
  },
  {
    icon: <Stethoscope className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: '2. Medical and Healthcare',
    desc: 'Empower healthcare providers, clinical research teams, health tech platforms, and clinics with verified insights while maintaining strict boundaries between informational verification and clinical advice.',
    useCases: [
      'Medical data organization & research claim verification',
      'AI-generated healthcare claim verification & human review',
      'Healthcare market intelligence & service demand analytics',
      'Evidence-based healthcare risk and trend alerts'
    ]
  },
  {
    icon: <Truck className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: '3. Logistics and Supply Chain',
    desc: 'Help logistics operators, manufacturers, distributors, warehouses, and supply chain teams monitor operational performance and adapt quickly to market volatility.',
    useCases: [
      'Supply chain data cleaning & route performance reports',
      'Delivery performance & cost trend benchmarking',
      'Inventory movement & supplier performance verification',
      'Forecast divergence detection & supply chain risk alerts'
    ]
  },
  {
    icon: <GraduationCap className="w-5 h-5" style={{ color: COPPER_COLOR }} />,
    title: '4. Education',
    desc: 'Assist schools, universities, ed-tech startups, researchers, and training providers with verified educational content, institutional benchmarks, and market intelligence.',
    useCases: [
      'Student & institutional data organization',
      'AI-generated educational content & research claim verification',
      'Student performance & course demand benchmarking',
      'Institutional BI & dynamic learning trend alerts'
    ]
  }
]

export default function UseCases() {
  return (
    <section
      id="usecases"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div className="section-inner relative z-10">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-block">Industries</span>
          <h2
            className="mb-4 text-[28px] md:text-[46px]"
            style={{
              fontWeight: 600,
              letterSpacing: '-1.2px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)',
            }}
          >
            Verification Requires Industry Context
          </h2>
          <p
            className="max-w-[680px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            The evidence needed to evaluate an e-commerce demand forecast is different from the evidence required to evaluate a healthcare research claim. Clarify Data is designed around industry-specific information and context.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="landscape-card rounded-2xl p-6 md:p-8 flex flex-col justify-between"
              style={{
                border: '1px solid rgba(250,250,250,0.08)',
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: COPPER_BG,
                      border: '1px solid rgba(194,89,24,0.3)',
                    }}
                  >
                    {ind.icon}
                  </div>
                  <h3
                    className="text-[20px] font-semibold tracking-tight"
                    style={{ color: 'rgb(250,250,250)' }}
                  >
                    {ind.title}
                  </h3>
                </div>

                <p
                  className="text-[14px] leading-[22px] mb-5"
                  style={{ color: 'rgba(250,250,250,0.7)' }}
                >
                  {ind.desc}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/[0.07]">
                <span className="text-[11px] uppercase tracking-wider font-semibold block mb-2" style={{ color: COPPER_COLOR }}>
                  Key Use Cases
                </span>
                {ind.useCases.map((uc) => (
                  <div key={uc} className="flex items-start gap-2 text-[13px] text-white/85">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: COPPER_COLOR }} />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
