import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import Link from 'next/link'
import { Sparkles, Briefcase, MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers | Clarify Data',
  description: 'Join Clarify Data and help build the future of verified market intelligence and AI data verification.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const roles = [
  {
    title: 'Senior AI Verification Systems Engineer',
    department: 'Engineering',
    location: 'Remote (US / Europe / Asia)',
    type: 'Full-time',
  },
  {
    title: 'Market Intelligence Lead (Supply Chain & E-Commerce)',
    department: 'Research',
    location: 'Remote / Hybrid',
    type: 'Full-time',
  },
  {
    title: 'Full-Stack Next.js / TypeScript Engineer',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Clinical Data Domain Specialist',
    department: 'Medical Operations',
    location: 'Remote',
    type: 'Full-time / Advisory',
  },
]

export default function CareersPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <section className="relative pt-32 pb-16 px-5">
        <div className="max-w-[850px] mx-auto text-center">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Join Our Team</span>
          </span>
          <h1 className="text-[36px] md:text-[54px] font-semibold tracking-tight mb-4">
            Build the Future of Verified Intelligence
          </h1>
          <p className="text-[17px] text-white/70 max-w-[650px] mx-auto">
            We are looking for engineers, data scientists, and industry experts passionate about solving data verification and market uncertainty.
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="pb-24 px-5">
        <div className="max-w-[900px] mx-auto flex flex-col gap-4">
          <h2 className="text-[24px] font-semibold mb-2">Open Positions</h2>

          {roles.map((role) => (
            <div
              key={role.title}
              className="p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:border-amber-500/50"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(20, 20, 25, 0.9) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div>
                <span className="text-[12px] font-semibold text-amber-400 uppercase tracking-wider mb-1 block">
                  {role.department}
                </span>
                <h3 className="text-[19px] font-semibold text-white mb-2">{role.title}</h3>
                <div className="flex items-center gap-4 text-[13px] text-white/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {role.location}
                  </span>
                  <span>•</span>
                  <span>{role.type}</span>
                </div>
              </div>

              <Link
                href="/#book-demo"
                className="px-5 py-2.5 rounded-full text-[14px] font-semibold inline-flex items-center justify-center gap-1.5 shrink-0 transition-all"
                style={{ background: 'rgb(84, 27, 4)', color: 'white', border: `1px solid ${COPPER_BORDER}` }}
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CtaFooter />
    </div>
  )
}
