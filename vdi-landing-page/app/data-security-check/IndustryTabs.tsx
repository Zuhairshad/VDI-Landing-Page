'use client'

import { useState } from 'react'
import Link from 'next/link'

const AMBER = 'rgb(224,133,76)'
const MUTED = 'rgba(250,250,250,0.62)'

const industries = [
  {
    tab: 'E-commerce',
    title: 'E-commerce & social media',
    risk: 'Customer accounts, payment flows, order history',
    body: 'Checkout pages carry the highest concentration of sensitive data and the most third-party scripts. Card skimming through a compromised tag is a persistent risk.',
    items: ['Script integrity on checkout and account pages', 'Order files exposed on public paths', 'Consent before marketing pixels fire', 'Account takeover resistance'],
    href: '/industries/marketing-ecommerce',
  },
  {
    tab: 'Healthcare',
    title: 'Healthcare & clinical',
    risk: 'Patient records, appointment data, research, referrals',
    body: 'Health information carries the strictest handling requirements and the highest resale value. Booking portals and patient forms are frequently built quickly and reviewed rarely.',
    items: ['Patient portal access control', 'Intake forms over insecure connections', 'Document stores reachable without login', 'Ad tools on pages with health context'],
    href: '/industries/medical-clinical',
  },
  {
    tab: 'Logistics',
    title: 'Logistics & supply chain',
    risk: 'Shipment data, contracts, pricing, partner integrations',
    body: 'Logistics runs on integrations, and integrations run on credentials. Tracking portals and partner APIs are often the least-reviewed systems while holding commercially sensitive data.',
    items: ['Tracking endpoints without authentication', 'API keys in client-side code', 'Partner portals with stale accounts', 'Spoofing protection against invoice fraud'],
    href: '/industries/logistics-trade',
  },
  {
    tab: 'Education',
    title: 'Education',
    risk: 'Student records, assessment data, guardian contacts',
    body: "Education institutions accumulate systems over decades and rarely decommission them. Minors' data raises the stakes on every finding.",
    items: ['Legacy sites and old subdomains', 'Student records on the public internet', 'Assessment files in indexed directories', 'Data handling for under-18 records'],
    href: '/industries/education',
  },
]

export default function IndustryTabs() {
  const [active, setActive] = useState(0)
  const ind = industries[active]

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {industries.map((item, i) => (
          <button
            key={item.tab}
            onClick={() => setActive(i)}
            style={{
              padding: '9px 22px',
              borderRadius: '999px',
              border: `1px solid ${i === active ? 'rgba(224,133,76,0.5)' : 'rgba(250,250,250,0.12)'}`,
              background: i === active ? 'rgba(224,133,76,0.1)' : 'transparent',
              color: i === active ? AMBER : 'rgba(250,250,250,0.5)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              letterSpacing: '0.01em',
            }}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{
          gap: '32px 48px',
          padding: '40px 44px',
          background: 'var(--surface-card-shader)',
          border: '1px solid rgba(224,133,76,0.22)',
          borderRadius: '20px',
          alignItems: 'start',
        }}
      >
        <div>
          <span style={{ display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: AMBER, marginBottom: 14 }}>
            {ind.risk}
          </span>
          <h3 style={{ margin: '0 0 16px', fontSize: 'clamp(1.25rem,2.2vw,1.6rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'rgb(250,250,250)' }}>
            {ind.title}
          </h3>
          <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.75, margin: 0 }}>
            {ind.body}
          </p>
          <Link href={ind.href} style={{ display: 'inline-block', marginTop: '24px', color: AMBER, fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
            Explore industry →
          </Link>
        </div>

        <div>
          <p style={{ margin: '0 0 18px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(250,250,250,0.3)' }}>
            What we focus on
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {ind.items.map((item) => (
              <li key={item} style={{ display: 'grid', gridTemplateColumns: '22px 1fr', gap: 12, alignItems: 'start' }}>
                <span style={{
                  marginTop: 2,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: 'rgba(224,133,76,0.1)',
                  border: '1px solid rgba(224,133,76,0.28)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="8" height="7" viewBox="0 0 8 7" fill="none" aria-hidden>
                    <path d="M1 3.5l2 2 4-4" stroke="rgb(224,133,76)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span style={{ color: 'rgba(250,250,250,0.72)', fontSize: '14px', lineHeight: 1.6 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
