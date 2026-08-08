import type { ReactNode } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import CtaFooter from '@/components/CtaFooter'
import Nav from '@/components/Nav'
import PageHeroHeader from '@/components/PageHeroHeader'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

interface LegalPageProps {
  eyebrow: string
  icon: ReactNode
  title: string
  summary: string
  lastUpdated: string
  notice: string
  children: ReactNode
}

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="scroll-mt-24">
      <h2 className="text-[22px] md:text-[26px] font-semibold text-white mb-4 tracking-tight">
        {title}
      </h2>
      <div className="space-y-4 text-white/70 text-[15px] leading-[26px]">{children}</div>
    </section>
  )
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="space-y-3">{children}</ul>
}

export function LegalListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="w-4 h-4 mt-1.5 shrink-0" style={{ color: COPPER }} />
      <span>{children}</span>
    </li>
  )
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-medium underline underline-offset-4 transition-colors hover:text-white"
      style={{ color: 'rgb(224, 133, 76)' }}
    >
      {children}
    </a>
  )
}

export default function LegalPage({
  eyebrow,
  icon,
  title,
  summary,
  lastUpdated,
  notice,
  children,
}: LegalPageProps) {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <main>
        <PageHeroHeader
          eyebrow={eyebrow}
          icon={icon}
          title={title}
          subtitle={`Last updated: ${lastUpdated}`}
        />

        <div className="max-w-[900px] mx-auto py-14 md:py-20 px-5">
          <p className="text-[17px] md:text-[19px] leading-[30px] text-white/80 mb-8">
            {summary}
          </p>

          <aside
            className="rounded-2xl p-5 md:p-6 mb-12 flex items-start gap-4"
            style={{ background: 'rgba(194, 89, 24, 0.1)', border: `1px solid ${COPPER_BORDER}` }}
            aria-label="Draft status"
          >
            <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: COPPER }} />
            <div>
              <p className="font-semibold text-white mb-1">Professional working draft</p>
              <p className="text-[14px] leading-[23px] text-white/68">{notice}</p>
            </div>
          </aside>

          <div className="space-y-11">{children}</div>
        </div>
      </main>

      <CtaFooter showCta={false} />
    </div>
  )
}
