import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import PageHeroHeader from '@/components/PageHeroHeader'
import { Sparkles, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Clarify Data',
  description: 'Get in touch with the Clarify Data team for enterprise verification queries, partnerships, or platform demos.',
}

const COPPER = 'rgb(194, 89, 24)'

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      {/* Hero Header using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Get In Touch"
        icon={<MessageSquare className="w-3.5 h-3.5" style={{ color: COPPER }} />}
        title="We are Here to Support Your Data Verification"
        subtitle="Have questions about custom verification pipelines, API access, or enterprise SLA support? Contact our team."
      />

      {/* Embed BookDemo Form component */}
      <BookDemo />

      <CtaFooter />
    </div>
  )
}
