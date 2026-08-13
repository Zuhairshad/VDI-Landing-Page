import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import HowItWorksPage from '@/components/HowItWorksPage'
import CtaFooter from '@/components/CtaFooter'

export const metadata: Metadata = {
  title: 'How Clarify Data Works | Clarify Data',
  description:
    'Learn how Clarify Data combines AI model integration, current market data collection, automated comparison, and human verification to deliver trusted business intelligence.',
  keywords: [
    'data verification',
    'business intelligence',
    'AI verification',
    'trust index',
    'verified data index',
    'human verification',
    'market data',
  ],
}

export default function HowItWorksRoute() {
  return (
    <>
      <Nav />
      <main>
        <HowItWorksPage />
      </main>
      <CtaFooter />
    </>
  )
}
