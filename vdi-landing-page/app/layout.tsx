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
  title: 'Data Verification & Business Intelligence Platform | Clarify Data',
  description:
    'Clarify Data verifies AI-generated claims, cleans and validates data, delivers market intelligence, and turns trusted information into actionable business intelligence.',
  keywords: ['data verification', 'business intelligence', 'AI claim verification', 'data intelligence', 'market intelligence', 'data validation', 'data sorting', 'business analytics'],
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
