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
  verification: {
    google: 'UZ-MlXAEH_7rkgL6HiRWRLiK_E_szy_ze3oTeHSROcQ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NHZRJ8JZ');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHZRJ8JZ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Nav />
        {children}
        <CtaFooter />
      </body>
    </html>
  )
}
