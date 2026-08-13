import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import BlogJournal from '@/components/BlogJournal'
import CtaFooter from '@/components/CtaFooter'
import Nav from '@/components/Nav'
import PageHeroHeader from '@/components/PageHeroHeader'

export const metadata: Metadata = {
  title: 'Information Quality Journal | Clarify Data',
  description:
    'Practical articles on evidence trails, data provenance, human review, and repeatable market-research workflows.',
}

const COPPER = 'rgb(194, 89, 24)'

export default function BlogPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />
      <main>
        <PageHeroHeader
          eyebrow="Information Quality Journal"
          icon={<BookOpen className="w-4 h-4" style={{ color: COPPER }} />}
          title="Evidence, provenance, and responsible review"
          subtitle="Original, practical guidance for teams designing research and verification workflows that people can inspect, challenge, and repeat."
        />
        <BlogJournal />
      </main>
      <CtaFooter />
    </div>
  )
}
