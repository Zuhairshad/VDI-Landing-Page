'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'motion/react'
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  TrendingUp,
  FileCheck2,
  BarChart3,
  Zap,
  Sparkles,
  RefreshCw,
  BellRing,
  FileText
} from 'lucide-react'

const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const problems = [
  { title: 'AI Claims Go Unverified', desc: 'AI-generated statistics may sound convincing while being outdated or unsupported by available evidence' },
  { title: 'Data Quality Flows Into Analytics', desc: 'Data-quality problems can flow undetected through datasets into analysis and decisions' },
  { title: 'Outdated Market Information', desc: 'Outdated market information may influence decisions without anyone realizing it has changed' },
  { title: 'No Traceable Evidence', desc: 'Business reports can look sophisticated while being built on unreliable or untraceable information' }
]

export default function Benefits() {
  const [activeTab, setActiveTab] = useState<'solution' | 'problem'>('solution')
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="benefits"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full pointer-events-none blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(194, 89, 24, 0.18) 0%, rgba(10, 10, 10, 0) 70%)' }}
      />

      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
            <span>The Data Trust Gap</span>
          </span>
          <h2
            className="mb-4 text-[30px] md:text-[50px]"
            style={{ fontWeight: 600, letterSpacing: '-1.4px', lineHeight: '1.18', color: 'rgb(250,250,250)' }}
          >
            More Data Doesn&apos;t Automatically Mean Better Decisions
          </h2>
          <p
            className="max-w-[680px] mx-auto text-[15px] md:text-[18px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            Businesses increasingly depend on datasets, dashboards, market reports, analytics, and AI-generated information. The problem is that inaccurate information does not always look inaccurate.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('solution')}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'solution' ? 'shadow-lg text-white' : 'text-white/60 hover:text-white'
                }`}
                style={activeTab === 'solution' ? { background: 'rgb(84, 27, 4)', border: `1px solid ${COPPER_BORDER}` } : {}}
              >
                <CheckCircle2 className="w-4 h-4" style={{ color: COPPER_COLOR }} />
                <span>With Clarify Data</span>
              </button>
              <button
                onClick={() => setActiveTab('problem')}
                className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'problem' ? 'shadow-lg text-white' : 'text-white/60 hover:text-white'
                }`}
                style={activeTab === 'problem' ? { background: 'rgba(84, 27, 4, 0.65)', border: `1px solid ${COPPER_BORDER}` } : {}}
              >
                <AlertTriangle className="w-4 h-4" style={{ color: COPPER_COLOR }} />
                <span>Without a Verification Layer</span>
              </button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'problem' ? (
            <motion.div
              key="problem-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {problems.map((prob, i) => (
                <div
                  key={prob.title}
                  className="rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#c25918]/60"
                  style={{
                    background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.35) 0%, rgba(16, 16, 20, 0.95) 100%)',
                    border: `1px solid ${COPPER_BORDER}`
                  }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 border border-white/10" style={{ background: COPPER_BG }}>
                    <AlertTriangle className="w-5 h-5" style={{ color: COPPER_COLOR }} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase block mb-1" style={{ color: COPPER_COLOR }}>
                      Challenge 0{i + 1}
                    </span>
                    <h4 className="text-[17px] font-semibold text-white mb-2">{prob.title}</h4>
                    <p className="text-[13px] text-white/70 leading-[20px]">{prob.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-white/10 text-[11px] font-medium flex items-center gap-1.5" style={{ color: COPPER_COLOR }}>
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Unresolved verification gap</span>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="solution-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-12 gap-5"
            >
              {/* Card 1: Data Sort */}
              <div
                className="md:col-span-7 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#c25918]/60 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.35) 0%, rgba(16, 16, 20, 0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10" style={{ background: COPPER_BG }}>
                      <Database className="w-5 h-5" style={{ color: COPPER_COLOR }} />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wider" style={{ background: COPPER_BG, color: COPPER_COLOR, borderColor: COPPER_BORDER }}>
                      Module 01
                    </span>
                  </div>
                  <h3 className="text-[22px] font-semibold text-white mb-2">Data Sort</h3>
                  <p className="text-[14px] text-white/75 leading-[22px] max-w-[540px] mb-6">
                    Turn raw CSVs, Excel spreadsheets, documents, and API data into clean, mapped, and deduplicated datasets ready for analysis.
                  </p>
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between text-[11px] text-white/60">
                      <span>Raw File: raw_inventory_2026.csv</span>
                      <span className="font-medium" style={{ color: COPPER_COLOR }}>Cleaned</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] font-medium text-center">
                      <div className="p-2 rounded bg-white/5 border border-white/5 text-white/80">
                        <span className="block text-[10px] text-white/40 uppercase">Duplicates</span>
                        Removed
                      </div>
                      <div className="p-2 rounded bg-white/5 border border-white/5 text-white/80">
                        <span className="block text-[10px] text-white/40 uppercase">Mapping</span>
                        Auto-Matched
                      </div>
                      <div className="p-2 rounded border" style={{ background: COPPER_BG, borderColor: COPPER_BORDER, color: COPPER_COLOR }}>
                        <span className="block text-[10px] uppercase opacity-70">Status</span>
                        Complete
                      </div>
                    </div>
                    <p className="text-[10px] text-white/30 text-right">Illustrative example</p>
                  </div>
                </div>
              </div>

              {/* Card 2: Market Intelligence */}
              <div
                className="md:col-span-5 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#c25918]/60 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 18, 22, 0.95) 0%, rgba(12, 12, 14, 0.95) 100%)',
                  border: '1px solid rgba(250, 250, 250, 0.08)'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10" style={{ background: COPPER_BG }}>
                      <TrendingUp className="w-5 h-5" style={{ color: COPPER_COLOR }} />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wider" style={{ background: COPPER_BG, color: COPPER_COLOR, borderColor: COPPER_BORDER }}>
                      Module 02
                    </span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-white mb-2">Verified Market Intelligence</h3>
                  <p className="text-[14px] text-white/70 leading-[22px] mb-4">
                    Continuously updated market information so businesses can understand important changes in their industries.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-[12px]">
                  <span className="flex items-center gap-2 text-white/80">
                    <RefreshCw className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
                    Continuously Updated
                  </span>
                  <span className="flex items-center gap-1">
                    <BellRing className="w-3 h-3" style={{ color: COPPER_COLOR }} />
                    <FileText className="w-3 h-3" style={{ color: COPPER_COLOR }} />
                  </span>
                </div>
              </div>

              {/* Card 3: AI Claim Verification */}
              <div
                className="md:col-span-4 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#c25918]/60 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 18, 22, 0.95) 0%, rgba(12, 12, 14, 0.95) 100%)',
                  border: '1px solid rgba(250, 250, 250, 0.08)'
                }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-white/10" style={{ background: COPPER_BG }}>
                    <FileCheck2 className="w-5 h-5" style={{ color: COPPER_COLOR }} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-2">AI Claim Verification</h3>
                  <p className="text-[13px] text-white/70 leading-[20px] mb-4">
                    Evaluate claims from ChatGPT, Gemini, Claude, Grok, DeepSeek, and other AI systems against verified evidence.
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-white/60">Verified · Unsupported · Outdated</span>
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
                </div>
              </div>

              {/* Card 4: Business Intelligence */}
              <div
                className="md:col-span-4 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#c25918]/60 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(16, 16, 20, 0.95) 100%)',
                  border: `1px solid ${COPPER_BORDER}`
                }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-white/10" style={{ background: COPPER_BG }}>
                    <BarChart3 className="w-5 h-5" style={{ color: COPPER_COLOR }} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-2">Business Intelligence</h3>
                  <p className="text-[13px] text-white/70 leading-[20px] mb-4">
                    Compare internal performance metrics with market behavior, industry indicators, and verified external information.
                  </p>
                </div>
                <div className="p-2.5 rounded-lg border flex items-center justify-between text-[11px]" style={{ background: COPPER_BG, borderColor: COPPER_BORDER, color: COPPER_COLOR }}>
                  <span>Performance · Market · Benchmarks</span>
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card 5: Dynamic Reports */}
              <div
                className="md:col-span-4 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#c25918]/60 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(20, 18, 22, 0.95) 0%, rgba(12, 12, 14, 0.95) 100%)',
                  border: '1px solid rgba(250, 250, 250, 0.08)'
                }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border border-white/10" style={{ background: COPPER_BG }}>
                    <Zap className="w-5 h-5" style={{ color: COPPER_COLOR }} />
                  </div>
                  <h3 className="text-[18px] font-semibold text-white mb-2">Dynamic Reports & Alerts</h3>
                  <p className="text-[13px] text-white/70 leading-[20px] mb-4">
                    Versioned reports that identify when new verified information changes a previous conclusion, trend, or forecast.
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-white/60">What Changed Detection</span>
                  <span className="font-semibold" style={{ color: COPPER_COLOR }}>Alerts</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
