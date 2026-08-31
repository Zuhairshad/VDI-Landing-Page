'use client'

import { useState } from 'react'

const industries = [
  'Marketing and E-commerce',
  'Medical and Healthcare',
  'Logistics and Supply Chain',
  'Education',
  'Other',
] as const

const MAX_WORDS = 400

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [description, setDescription] = useState('')

  const wordCount = description.trim() ? description.trim().split(/\s+/).length : 0

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError('')

    const form = new FormData(event.currentTarget)
    const payload = {
      email: String(form.get('email') ?? ''),
      company: String(form.get('company') ?? ''),
      phone: String(form.get('phone') ?? ''),
      industry: String(form.get('industry') ?? ''),
      description,
    }

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null) as { error?: string } | null
      if (!response.ok) throw new Error(result?.error || 'We could not send your request. Please try again.')
      setSubmitted(true)
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not send your request. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function handleDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value
    const words = value.trim().split(/\s+/).filter(Boolean)
    setDescription(words.length <= MAX_WORDS ? value : words.slice(0, MAX_WORDS).join(' '))
  }

  return (
    <section id="book-demo" className="section-pad demo-section" aria-labelledby="demo-heading">
      <div className="section-inner demo-layout">
        <header>
          <p className="eyebrow">Book a demo</p>
          <h2 id="demo-heading">Start with the information your team needs to trust</h2>
          <p>Tell us about the dataset, claim, report, or decision. We will use the conversation to map a responsible workflow and an appropriate scope.</p>
          <ul>
            <li>No invented trial or package promises</li>
            <li>No obligation after the discovery call</li>
            <li>Bring a real source set if you can share it safely</li>
          </ul>
        </header>

        <div className="demo-form-panel">
          {submitted ? (
            <div className="form-success" role="status">
              <p className="eyebrow">Request received</p>
              <h3>Thank you. We will review the context and follow up.</h3>
              <button type="button" className="button button-quiet" onClick={() => { setSubmitted(false); setDescription('') }}>
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-grid">
                <label>
                  <span>Work email</span>
                  <input name="email" type="email" autoComplete="email" maxLength={254} required />
                </label>
                <label>
                  <span>Company</span>
                  <input name="company" type="text" autoComplete="organization" minLength={2} maxLength={120} required />
                </label>
                <label>
                  <span>Phone number <span style={{ opacity: 0.5, fontWeight: 400 }}>(optional)</span></span>
                  <input name="phone" type="tel" autoComplete="tel" maxLength={30} />
                </label>
              </div>
              <label>
                <span>Industry</span>
                <select name="industry" defaultValue={industries[0]} required>
                  {industries.map((industry) => <option key={industry}>{industry}</option>)}
                </select>
              </label>
              <label>
                <span>What would you like to verify or analyze?</span>
                <textarea name="description" rows={6} minLength={10} maxLength={3000} value={description} onChange={handleDescription} required />
                <small>{wordCount} / {MAX_WORDS} words</small>
              </label>
              {error && <p className="form-error" role="alert">{error}</p>}
              <button type="submit" className="button button-copper" disabled={loading}>
                {loading ? 'Sending request…' : 'Request a Demo'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
