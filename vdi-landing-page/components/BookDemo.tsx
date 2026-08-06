'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Send, CheckCircle2, Building2, FileText, Sparkles } from 'lucide-react'

// Site copper color tokens
const COPPER_COLOR = 'rgb(194, 89, 24)'
const COPPER_BG = 'rgba(194, 89, 24, 0.15)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

// Only the 4 official industries
const industries = [
  'Social Media and E-commerce',
  'Medical and Healthcare',
  'Logistics and Supply Chain',
  'Education'
]

const MAX_WORDS = 400

export default function BookDemo() {
  const [industry, setIndustry] = useState(industries[0])
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8%' })

  // Calculate current word count
  const wordCount = description.trim() === '' ? 0 : description.trim().split(/\s+/).length

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    const words = text.trim().split(/\s+/).filter(Boolean)
    if (words.length <= MAX_WORDS || text.length < description.length) {
      setDescription(text)
    } else {
      // Limit to 400 words
      const limitedText = words.slice(0, MAX_WORDS).join(' ')
      setDescription(limitedText)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Construct mailto URL to send directly to zuhairshad140@gmail.com
    const subject = encodeURIComponent(`Clarify Data Demo Request: ${industry}`)
    const body = encodeURIComponent(
      `Industry: ${industry}\n\nProject / Data Description:\n${description}\n\nSubmitted via Clarify Data Demo Form.`
    )
    const mailtoUrl = `mailto:zuhairshad140@gmail.com?subject=${subject}&body=${body}`

    // Trigger mailto client
    window.location.href = mailtoUrl

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section
      ref={ref}
      id="book-demo"
      className="section-pad relative overflow-hidden"
      style={{ background: 'rgb(10,10,10)' }}
    >
      {/* Ambient Copper Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] rounded-full pointer-events-none blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(194, 89, 24, 0.22) 0%, rgba(10, 10, 10, 0) 70%)'
        }}
      />

      <div className="section-inner relative z-10 max-w-[800px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="eyebrow-pill mb-4 inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" style={{ color: COPPER_COLOR }} />
            <span>Book a Demo</span>
          </span>
          <h2
            className="mb-4 text-[30px] md:text-[46px]"
            style={{
              fontWeight: 600,
              letterSpacing: '-1.2px',
              lineHeight: '1.18',
              color: 'rgb(250,250,250)',
            }}
          >
            Schedule a Personalized Platform Demo
          </h2>
          <p
            className="max-w-[600px] mx-auto text-[15px] md:text-[17px]"
            style={{ fontWeight: 450, color: 'rgba(250,250,250,0.8)', lineHeight: '26px' }}
          >
            See how Clarify Data cleans your raw datasets, verifies AI claims, and delivers live market benchmarking.
          </p>
        </motion.div>

        {/* Demo Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl p-7 md:p-10 shadow-2xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.35) 0%, rgba(16, 16, 20, 0.95) 100%)',
            backdropFilter: 'blur(16px)',
            border: `1px solid ${COPPER_BORDER}`
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: COPPER_BG, border: `1px solid ${COPPER_BORDER}` }}>
                <CheckCircle2 className="w-8 h-8" style={{ color: COPPER_COLOR }} />
              </div>
              <h3 className="text-[24px] font-semibold text-white mb-2">
                Demo Request Submitted!
              </h3>
              <p className="text-[15px] text-white/80 max-w-[480px] leading-[24px] mb-6">
                Your request details have been dispatched. Our team will review your requirements and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-full text-[14px] font-medium text-white/80 hover:text-white border border-white/10 bg-white/5 transition-all"
              >
                Submit another request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Field 1: Industry */}
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-semibold text-white/90 flex items-center gap-2">
                  <Building2 className="w-4 h-4" style={{ color: COPPER_COLOR }} />
                  <span>1. Industry</span>
                </label>
                <div className="relative">
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border text-[15px] text-white outline-none transition-all appearance-none cursor-pointer"
                    style={{
                      borderColor: 'rgba(250, 250, 250, 0.15)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = COPPER_COLOR)}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(250, 250, 250, 0.15)')}
                  >
                    {industries.map((ind) => (
                      <option key={ind} value={ind} className="bg-neutral-900 text-white">
                        {ind}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Field 2: Description */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-[14px] font-semibold text-white/90 flex items-center gap-2">
                    <FileText className="w-4 h-4" style={{ color: COPPER_COLOR }} />
                    <span>2. Description</span>
                  </label>
                  <span className={`text-[12px] font-medium ${wordCount >= MAX_WORDS ? 'text-amber-400 font-bold' : 'text-white/40'}`}>
                    {wordCount} / {MAX_WORDS} words
                  </span>
                </div>
                <textarea
                  value={description}
                  onChange={handleDescriptionChange}
                  required
                  rows={5}
                  placeholder="Tell us about your data verification needs, datasets, or specific workflows (max 400 words)..."
                  className="w-full px-4 py-3.5 rounded-xl bg-black/50 border text-[15px] text-white placeholder-white/40 outline-none transition-all resize-none"
                  style={{
                    borderColor: 'rgba(250, 250, 250, 0.15)',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = COPPER_COLOR)}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(250, 250, 250, 0.15)')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full text-[16px] font-semibold transition-all duration-200 shadow-xl flex items-center justify-center gap-2 mt-2 cursor-pointer"
                style={{
                  background: 'rgb(84, 27, 4)',
                  color: 'rgb(250, 250, 250)',
                  border: `1px solid ${COPPER_BORDER}`
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgba(84, 27, 4, 0.85)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'rgb(84, 27, 4)')}
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Sending Request...' : 'Book a Demo'}</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
