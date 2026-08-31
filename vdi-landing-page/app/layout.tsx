import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import CtaFooter from '@/components/CtaFooter'
import { robotsForPage, site } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Clarify Data | Evidence-Led Data Intelligence',
    template: '%s | Clarify Data',
  },
  description: site.description,
  alternates: { canonical: '/' },
  robots: robotsForPage(),
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'Clarify Data | Evidence-Led Data Intelligence',
    description: site.description,
    url: '/',
  },
  twitter: {
    card: 'summary',
    title: 'Clarify Data | Evidence-Led Data Intelligence',
    description: site.description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        {children}
        <CtaFooter />
      </body>
    </html>
  )
}
