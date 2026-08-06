'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import {
  FileSpreadsheet,
  TrendingUp,
  Search,
  Building2,
  ShieldCheck,
  ArrowRight,
  UserCheck
} from 'lucide-react'

interface WorkflowRow {
  user: string
  roleIcon: React.ReactNode
  badgeColor: string
  primaryJob: string
  workflowSteps: string[]
}

const tableData: WorkflowRow[] = [
  {
    user: 'Operations analyst',
    roleIcon: <FileSpreadsheet className="w-4 h-4 text-amber-400" />,
    badgeColor: 'rgba(245, 158, 11, 0.15)',
    primaryJob: 'Clean and organize external or internal data quickly',
    workflowSteps: [
      'Upload/connect data',
      'map fields',
      'sort',
      'export quality-scored dataset'
    ]
  },
  {
    user: 'Brand or commerce manager',
    roleIcon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    badgeColor: 'rgba(16, 185, 129, 0.15)',
    primaryJob: 'Understand price, promotion, stock, and competitor changes',
    workflowSteps: [
      'Monitor market',
      'verify critical changes',
      'receive weekly intelligence'
    ]
  },
  {
    user: 'Consultant / researcher',
    roleIcon: <Search className="w-4 h-4 text-sky-400" />,
    badgeColor: 'rgba(56, 189, 248, 0.15)',
    primaryJob: 'Validate an AI-generated statement before presenting it',
    workflowSteps: [
      'Paste text',
      'extract claims',
      'compare with VDI evidence',
      'review verdicts'
    ]
  },
  {
    user: 'Business owner',
    roleIcon: <Building2 className="w-4 h-4 text-purple-400" />,
    badgeColor: 'rgba(192, 132, 252, 0.15)',
    primaryJob: 'Know how company performance compares with the market',
    workflowSteps: [
      'Connect business data',
      'map metrics',
      'compare with benchmark',
      'receive recommendations'
    ]
  },
  {
    user: 'VDI verifier',
    roleIcon: <ShieldCheck className="w-4 h-4 text-rose-400" />,
    badgeColor: 'rgba(251, 113, 133, 0.15)',
    primaryJob: 'Resolve uncertain evidence efficiently',
    workflowSteps: [
      'Open prioritized case',
      'inspect history/evidence',
      'decide',
      'preserve audit trail'
    ]
  }
]

export default function Workflows() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  return (
    <section
      ref={ref}
      id="workflows"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      {/* Background Subtle Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full pointer-events-none blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(145, 55, 10, 0.18) 0%, rgba(10, 10, 10, 0) 70%)'
        }}
      />

      <div className="section-inner relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <UserCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>Market & Workflows</span>
          </span>
          <h2
            className="mb-4 text-[28px] md:text-[44px]"
            style={{
              fontWeight: 600,
              letterSpacing: '-1.2px',
              lineHeight: '1.2',
              color: 'rgb(250,250,250)'
            }}
          >
            3. Initial Market and User Workflows
          </h2>
          <p
            className="max-w-[720px] mx-auto text-[15px] md:text-[17px]"
            style={{
              fontWeight: 450,
              color: 'rgba(250,250,250,0.75)',
              lineHeight: '26px'
            }}
          >
            Initial product default: one e-commerce or marketplace category with 5-10 brands and 100-300 canonical products. The architecture remains reusable, but the pilot must not mix unrelated industries.
          </p>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: 'rgba(16, 16, 20, 0.75)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,250,250,0.1)'
          }}
        >
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr
                  style={{
                    background: 'linear-gradient(90deg, rgba(20, 32, 54, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%)',
                    borderBottom: '1px solid rgba(250,250,250,0.12)'
                  }}
                >
                  <th className="py-4.5 px-6 text-[14px] font-semibold tracking-wider text-white uppercase w-[24%]">
                    User
                  </th>
                  <th className="py-4.5 px-6 text-[14px] font-semibold tracking-wider text-white uppercase w-[33%]">
                    Primary job
                  </th>
                  <th className="py-4.5 px-6 text-[14px] font-semibold tracking-wider text-white uppercase w-[43%]">
                    First workflow
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.07]">
                {tableData.map((row, idx) => (
                  <tr
                    key={row.user}
                    className="group transition-colors duration-200 hover:bg-white/[0.035]"
                  >
                    {/* User Column */}
                    <td className="py-5 px-6 align-top">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: row.badgeColor,
                            border: '1px solid rgba(255,255,255,0.1)'
                          }}
                        >
                          {row.roleIcon}
                        </div>
                        <span
                          className="text-[15px] font-semibold group-hover:text-amber-400 transition-colors duration-200"
                          style={{ color: 'rgb(250,250,250)' }}
                        >
                          {row.user}
                        </span>
                      </div>
                    </td>

                    {/* Primary Job Column */}
                    <td className="py-5 px-6 align-top">
                      <p
                        className="text-[14px] leading-[22px]"
                        style={{ color: 'rgba(250,250,250,0.85)' }}
                      >
                        {row.primaryJob}
                      </p>
                    </td>

                    {/* First Workflow Column */}
                    <td className="py-5 px-6 align-top">
                      <div className="flex flex-wrap items-center gap-2">
                        {row.workflowSteps.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2">
                            <span
                              className="inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-medium"
                              style={{
                                background: 'rgba(255, 255, 255, 0.06)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'rgba(250, 250, 250, 0.9)'
                              }}
                            >
                              {step}
                            </span>
                            {sIdx < row.workflowSteps.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-amber-500/70 shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile & Tablet Card Layout */}
          <div className="block lg:hidden divide-y divide-white/[0.08]">
            {tableData.map((row, idx) => (
              <div key={row.user} className="p-5 flex flex-col gap-3">
                {/* User Header */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: row.badgeColor,
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {row.roleIcon}
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-white/40 block">
                      User
                    </span>
                    <h4 className="text-[16px] font-semibold text-white">
                      {row.user}
                    </h4>
                  </div>
                </div>

                {/* Primary Job */}
                <div className="pl-11">
                  <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-0.5">
                    Primary Job
                  </span>
                  <p className="text-[14px] text-white/85 leading-[22px]">
                    {row.primaryJob}
                  </p>
                </div>

                {/* First Workflow */}
                <div className="pl-11 pt-1">
                  <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-1.5">
                    First Workflow
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {row.workflowSteps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5">
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-[12px] font-medium"
                          style={{
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'rgba(250, 250, 250, 0.9)'
                          }}
                        >
                          {step}
                        </span>
                        {sIdx < row.workflowSteps.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-amber-500/70 shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
