'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import { Sparkles, Calendar, User, ArrowRight, Search, X, BookOpen } from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

const categories = ['All', 'AI Verification', 'Logistics', 'Healthcare', 'E-Commerce']

const posts = [
  {
    title: 'How Multi-Agent AI Verifies Unstructured Data at Enterprise Scale',
    excerpt: 'Discover how multi-agent sorting, cross-referencing ground truth databases, and human-in-the-loop review eliminate hallucinations when transforming raw web data into executive reports.',
    fullContent: `
      In enterprise environments, relying on generative AI to summarize raw web data presents significant hallucination risks. When an executive report depends on accurate financial percentages, medical trial outcomes, or supply chain lead times, even a 2% error rate can result in millions of dollars in misallocated capital.

      ### The Multi-Agent Verification Architecture
      Clarify Data approaches unstructured data processing through a multi-tier agent pipeline:

      1. **Ingestion & Data Sorting Agent**: Normalizes raw CSVs, unstructured text, and PDFs into canonical schemas.
      2. **Ground Truth Cross-Matching Agent**: Connects via API to verified primary databases (PubMed, OpenFDA, customs manifests, and stock exchange filings).
      3. **Statistical Auditing Agent**: Validates internal math consistency, p-values, and historical divergence metrics.
      4. **Human Expert Escalation**: Flags edge cases where ambiguity exceeds 1.5% threshold for domain specialist sign-off.

      ### Results Across 10M Data Points
      By implementing continuous multi-agent verification, enterprise clients report a 99.4% reduction in data error rates compared to standard LLM pipeline outputs.
    `,
    date: 'August 4, 2026',
    author: 'Clarify Engineering Team',
    category: 'AI Verification',
    slug: 'multi-agent-ai-verification',
    readTime: '6 min read',
  },
  {
    title: 'Navigating Supply Chain Divergence: Live Market Triggers for 2026',
    excerpt: 'An in-depth analysis of how continuous data upgrading identifies freight bottlenecks, spot rate surges, and pricing anomalies before competitors.',
    fullContent: `
      Global supply chains operate in perpetual volatility. Geopolitical shifts, canal congestion, and fuel surcharges cause spot freight rates to fluctuate drastically across trade lanes.

      ### Identifying Early Divergence Signals
      Rather than relying on weekly freight indices that lag behind market realities, Clarify Data monitors bill of lading filings, carrier capacity webhooks, and port vessel queues in sub-minute intervals.

      ### Key Indicators Tracked:
      - **Spot Rate Volatility Spikes**: Automatic trigger alerts when Shanghai-Rotterdam rates diverge by >8%.
      - **Container Dwell Time Index**: Tracking port dwell duration anomalies across West Coast US ports.
      - **Customs Manifest HS Code Validation**: Sorting 6-digit Harmonized Tariff codes to ensure compliance.
    `,
    date: 'July 28, 2026',
    author: 'Market Intelligence Team',
    category: 'Logistics',
    slug: 'supply-chain-divergence-2026',
    readTime: '8 min read',
  },
  {
    title: 'Benchmarking Clinical & Medical Claims with Ground Truth Data',
    excerpt: 'Why healthcare organizations and pharmaceutical brands rely on structured data pipelines to verify treatment outcomes and compliance claims.',
    fullContent: `
      In clinical research and pharmaceutical marketing, unverified claims carry extreme regulatory penalties from the FDA, EMA, and FTC.

      ### Verifying Medical Literature at Scale
      Clarify Data integrates directly with PubMed, Europe PMC, and ClinicalTrials.gov to verify every cited study:
      - **Citation Validation**: Checking that cited DOIs actually exist and match the claim text.
      - **Sample Size Verification**: Ensuring reported statistical significance is backed by adequate cohort sizes (N >= 500).
      - **Adverse Event Auditing**: Extracting side-effect profiles directly from clinical trial registries.
    `,
    date: 'July 15, 2026',
    author: 'Medical Research Group',
    category: 'Healthcare',
    slug: 'benchmarking-clinical-claims',
    readTime: '7 min read',
  },
  {
    title: 'E-Commerce Competitor Price Tracking Without Scraper Noise',
    excerpt: 'How true net consumer price benchmarking filters out temporary coupon codes and shipping fee distortions.',
    fullContent: `
      Standard web scrapers often misreport e-commerce pricing by picking up crossed-out MSRP prices or failing to calculate dynamic checkout discounts.

      ### True Net Consumer Price Normalization
      Clarify Data normalizes SKU pricing across Amazon, Walmart Marketplace, and direct-to-consumer Shopify storefronts. By parsing baseline shipping thresholds and active promotional campaigns, brands get an accurate view of real market pricing.
    `,
    date: 'July 02, 2026',
    author: 'E-Commerce Analytics Team',
    category: 'E-Commerce',
    slug: 'ecommerce-price-tracking',
    readTime: '5 min read',
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null)

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-5 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] rounded-full pointer-events-none blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(194, 89, 24, 0.25) 0%, transparent 70%)' }}
        />

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Clarify Engineering & Research Hub</span>
          </span>
          <h1 className="text-[36px] md:text-[56px] font-semibold tracking-tight mb-4">
            Verified Data Intelligence Blog
          </h1>
          <p className="text-[17px] text-white/70 max-w-[650px] mx-auto leading-[26px]">
            In-depth engineering insights, market divergence analysis, and technical guides on multi-agent data verification pipelines.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="pb-10 px-5 max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer"
              style={{
                background: activeCategory === cat ? 'rgb(84, 27, 4)' : 'rgba(255, 255, 255, 0.05)',
                color: activeCategory === cat ? 'white' : 'rgba(255, 255, 255, 0.7)',
                border: activeCategory === cat ? `1px solid ${COPPER_BORDER}` : '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-[280px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-9 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-[14px] text-white placeholder-white/40 outline-none focus:border-amber-500/50"
          />
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 px-5 max-w-[1100px] mx-auto">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 text-white/50">
            No articles found matching your criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => setSelectedPost(post)}
                className="rounded-3xl p-8 flex flex-col justify-between transition-all hover:-translate-y-1 cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(20, 20, 25, 0.9) 100%)',
                  border: `1px solid ${COPPER_BORDER}`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[12px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ background: 'rgba(194, 89, 24, 0.15)', color: COPPER, border: `1px solid ${COPPER_BORDER}` }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[12px] text-white/50">{post.readTime}</span>
                  </div>
                  <h2 className="text-[22px] font-semibold mb-3 leading-[30px] text-white group-hover:text-amber-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/70 text-[15px] leading-[24px] mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[13px] text-white/50">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-white/90 group-hover:text-amber-400">
                    Read article <ArrowRight className="w-3.5 h-3.5" style={{ color: COPPER }} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Article Detail Modal / Overlay */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className="bg-[#121216] border border-amber-500/30 rounded-3xl max-w-[800px] w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[12px] font-semibold uppercase tracking-wider text-amber-400 mb-2 block">
              {selectedPost.category} · {selectedPost.readTime}
            </span>

            <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-4 leading-[1.2]">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-4 text-[13px] text-white/50 mb-8 pb-4 border-b border-white/10">
              <span>By {selectedPost.author}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
            </div>

            <div className="prose prose-invert max-w-none text-white/80 text-[16px] leading-[28px] space-y-4">
              {selectedPost.fullContent.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-6 py-2.5 rounded-full bg-amber-600/20 text-amber-300 font-semibold border border-amber-500/30 hover:bg-amber-600/30 transition-all cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      <CtaFooter />
    </div>
  )
}
