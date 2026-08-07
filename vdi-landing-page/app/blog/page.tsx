import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import Link from 'next/link'
import { Sparkles, Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Insights | Clarify Data',
  description: 'Read the latest technical articles and market research on AI claim verification, market divergence alerts, and structured data processing.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const posts = [
  {
    title: 'How Multi-Agent AI Verifies Unstructured Data at Enterprise Scale',
    excerpt: 'Discover how multi-agent sorting and human review eliminate hallucinations when transforming raw web data into executive reports.',
    date: 'August 4, 2026',
    author: 'Clarify Engineering',
    category: 'AI Verification',
    slug: 'multi-agent-ai-verification',
  },
  {
    title: 'Navigating Supply Chain Divergence: Live Market Triggers for 2026',
    excerpt: 'An in-depth analysis of how continuous data upgrading identifies freight bottlenecks and pricing anomalies before competitors.',
    date: 'July 28, 2026',
    author: 'Market Intelligence Team',
    category: 'Logistics',
    slug: 'supply-chain-divergence-2026',
  },
  {
    title: 'Benchmarking Clinical & Medical Claims with Ground Truth Data',
    excerpt: 'Why healthcare organizations rely on structured data pipelines to verify treatment outcomes and compliance claims.',
    date: 'July 15, 2026',
    author: 'Medical Intelligence',
    category: 'Healthcare',
    slug: 'benchmarking-clinical-claims',
  },
]

export default function BlogPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <section className="relative pt-32 pb-16 px-5">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Clarify Insights</span>
          </span>
          <h1 className="text-[36px] md:text-[54px] font-semibold tracking-tight mb-4">
            Data Verification & Market Intelligence Articles
          </h1>
          <p className="text-[17px] text-white/70 max-w-[650px] mx-auto">
            Deep dives into data sorting architecture, market divergence algorithms, and verified industry benchmarking.
          </p>
        </div>
      </section>

      <section className="pb-24 px-5">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl p-7 flex flex-col justify-between transition-all hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(20, 20, 25, 0.9) 100%)',
                border: `1px solid ${COPPER_BORDER}`,
              }}
            >
              <div>
                <span
                  className="text-[12px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4"
                  style={{ background: 'rgba(194, 89, 24, 0.15)', color: COPPER, border: `1px solid ${COPPER_BORDER}` }}
                >
                  {post.category}
                </span>
                <h2 className="text-[20px] font-semibold mb-3 leading-[28px] text-white hover:text-amber-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-white/70 text-[14px] leading-[22px] mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[13px] text-white/50">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1 font-medium text-white/80">
                  Read article <ArrowRight className="w-3.5 h-3.5" style={{ color: COPPER }} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaFooter />
    </div>
  )
}
