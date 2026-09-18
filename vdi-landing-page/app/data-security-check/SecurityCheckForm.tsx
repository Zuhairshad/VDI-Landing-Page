'use client'

import { useState } from 'react'

export default function SecurityCheckForm({
  id,
  showConcern = false,
}: {
  id: string
  showConcern?: boolean
}) {
  const [submitted, setSubmitted] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [serverError, setServerError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!e.currentTarget.reportValidity()) return

    setDisabled(true)
    setServerError('')

    const form = e.currentTarget
    const data = {
      email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      url: (form.elements.namedItem('url') as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem('company') as HTMLInputElement).value.trim(),
      concern: showConcern
        ? (form.elements.namedItem('concern') as HTMLTextAreaElement).value.trim()
        : '',
    }

    try {
      const res = await fetch('/api/security-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json() as { error?: string }
        setServerError(json.error ?? 'Something went wrong. Please try again.')
        setDisabled(false)
        return
      }

      setSubmitted(true)
    } catch {
      setServerError('Network error. Please check your connection and try again.')
      setDisabled(false)
    }
  }

  if (submitted) {
    return (
      <div
        className="mt-4 p-4 rounded-lg text-sm"
        role="status"
        aria-live="polite"
        style={{
          background: 'rgba(224,133,76,0.1)',
          border: '1px solid rgba(224,133,76,0.3)',
          color: 'rgba(250,250,250,0.85)',
        }}
      >
        <strong style={{ color: 'rgb(224,133,76)' }}>Request received.</strong>{' '}
        We will confirm domain ownership and email your report to the address you gave us.
      </div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label htmlFor={`${id}-email`}>
        Work email
        <input
          type="email"
          id={`${id}-email`}
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
        />
      </label>

      <label htmlFor={`${id}-url`}>
        Website or portal address
        <input
          type="url"
          id={`${id}-url`}
          name="url"
          required
          inputMode="url"
          placeholder="https://yourcompany.com"
        />
      </label>

      <label htmlFor={`${id}-company`}>
        Company
        <input
          type="text"
          id={`${id}-company`}
          name="company"
          autoComplete="organization"
          placeholder="Company name"
        />
      </label>

      {showConcern && (
        <label htmlFor={`${id}-concern`}>
          What worries you most? (optional)
          <textarea
            id={`${id}-concern`}
            name="concern"
            rows={3}
            placeholder="Customer records in a portal, an old admin panel, a recent phishing attempt, an upcoming client security review..."
          />
        </label>
      )}

      <label style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: '10px', alignItems: 'start', cursor: 'pointer' }}>
        <input
          type="checkbox"
          name="authorised"
          required
          style={{ marginTop: '3px', accentColor: 'rgb(224,133,76)' }}
        />
        <span style={{ fontWeight: 400, color: 'rgba(250,250,250,0.6)' }}>
          I own this domain or I am authorised by the owner to request a security check, and I agree to be contacted about the results.
        </span>
      </label>

      {serverError && (
        <p style={{ color: '#f87171', fontSize: '13px', margin: '4px 0 0' }}>{serverError}</p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="button button-copper"
        style={{ width: '100%', borderRadius: '6px', marginTop: '4px' }}
      >
        {disabled ? 'Sending...' : 'Send my free report'}
      </button>

      <small>
        Reports are normally emailed within three business days. See our{' '}
        <a href="/privacy-policy" style={{ color: 'rgba(224,133,76,0.8)', textDecoration: 'underline' }}>
          Privacy Policy
        </a>.
      </small>
    </form>
  )
}
