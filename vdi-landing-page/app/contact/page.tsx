import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import BookDemo from '@/components/BookDemo'
import { Sparkles, Mail, MapPin, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Clarify Data',
  description: 'Get in touch with the Clarify Data team for enterprise verification queries, partnerships, or platform demos.',
}

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function ContactPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Nav />

      <section className="relative pt-32 pb-12 px-5">
        <div className="max-w-[850px] mx-auto text-center">
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER }} />
            <span>Get In Touch</span>
          </span>
          <h1 className="text-[36px] md:text-[54px] font-semibold tracking-tight mb-4">
            We are Here to Support Your Data Verification
          </h1>
          <p className="text-[17px] text-white/70 max-w-[650px] mx-auto">
            Have questions about custom verification pipelines, API access, or enterprise SLA support? Contact our team.
          </p>
        </div>
      </section>

      {/* Embed BookDemo Form component */}
      <BookDemo />

      <CtaFooter />
    </div>
  )
}
