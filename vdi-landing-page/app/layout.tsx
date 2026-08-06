import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/providers/LenisProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['200', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'ClarifyData — Human-verified fact checking for AI content',
  description:
    'ClarifyData decomposes AI-generated content into individual claims and validates each against human-verified facts — producing exportable records or flagging inaccuracies.',
  keywords: ['AI verification', 'fact checking', 'EU AI Act', 'hallucination', 'human review'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
