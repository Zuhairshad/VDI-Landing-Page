'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import PageHeroHeader from '@/components/PageHeroHeader'
import { Sparkles, Mail, CheckCircle2, Loader2 } from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

export default function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          industry: 'Newsletter Subscriber',
          description: `Newsletter subscription request for ${email}`,
        }),
      })
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
      setSubmitted(true)
    }
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white flex flex-col justify-between">
      <Nav />

      {/* Hero Header using Home Shader Background */}
      <PageHeroHeader
        eyebrow="Market Intelligence Digest"
        icon={<Mail className="w-3.5 h-3.5" style={{ color: COPPER }} />}
        title="Subscribe to Verified Market Alerts"
        subtitle="Get weekly executive briefings on market divergence trends, AI verification benchmarks, and data sorting algorithms."
      >
        <div
          className="p-8 rounded-3xl max-w-[600px] w-full text-left mt-4"
          style={{
            background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.35) 0%, rgba(16, 16, 20, 0.95) 100%)',
            backdropFilter: 'blur(16px)',
            border: `1px solid ${COPPER_BORDER}`,
          }}
        >
          {submitted ? (
            <div className="py-6 flex flex-col items-center text-center">
              <CheckCircle2 className="w-12 h-12 mb-3" style={{ color: COPPER }} />
              <h3 className="text-[20px] font-semibold mb-2">You are subscribed!</h3>
              <p className="text-[14px] text-white/70">
                We have added <strong>{email}</strong> to our weekly intelligence briefing.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your business email address..."
                className="w-full px-5 py-3.5 rounded-xl bg-black/60 border text-[15px] text-white placeholder-white/40 outline-none transition-all"
                style={{ borderColor: 'rgba(250,250,250,0.15)' }}
                onFocus={(e) => (e.target.style.borderColor = COPPER)}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(250,250,250,0.15)')}
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full text-[15px] font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ background: 'rgb(84, 27, 4)', color: 'white', border: `1px solid ${COPPER_BORDER}` }}
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Subscribe Free</span>}
              </button>
            </form>
          )}
        </div>
      </PageHeroHeader>

      <CtaFooter />
    </div>
  )
}
