import type { Metadata } from 'next'

export const site = {
  name: 'Clarify Data',
  url: 'https://www.clerifydata.com',
  description:
    'Clarify Data helps teams prepare information, verify consequential claims, and turn evidence into reviewable business intelligence.',
} as const

/** Preview, staging, and local builds must not compete with the production index. */
export const isProductionDeployment = process.env.VERCEL_ENV === 'production'

export function robotsForPage(noIndex = false) {
  if (!isProductionDeployment) return { index: false, follow: false }
  if (noIndex) return { index: false, follow: true }
  return undefined
}

export const headerNavigation = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Industries', href: '/industries' },
  { label: 'Journal', href: '/blog' },
  { label: 'BI Exercises', href: '/business-intelligence-exercises' },
  { label: 'Pricing', href: '/#pricing' },
] as const

export const footerNavigation = [
  {
    heading: 'Platform',
    links: [
      { label: 'Data Preparation', href: '/#data-preparation' },
      { label: 'Data Verification', href: '/data-verification' },
      { label: 'Market Intelligence', href: '/business-intelligence#market-intelligence' },
      { label: 'AI Claim Verification', href: '/data-verification#ai-claim-verification' },
      { label: 'Business Intelligence', href: '/business-intelligence' },
      { label: 'Dynamic Reports & Alerts', href: '/#dynamic-reports' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Data Preparation Guide', href: '/data-sorting' },
      { label: 'Data Validation Guide', href: '/data-validation' },
      { label: 'Trust Index Methodology', href: '/trust-index' },
      { label: 'Business Intelligence Exercises', href: '/business-intelligence-exercises' },
      { label: 'Information Quality Journal', href: '/blog' },
      { label: 'AI Data Updates', href: '/ai-updates' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'All Industries', href: '/industries' },
      { label: 'Marketing & E-commerce', href: '/industries/marketing-ecommerce' },
      { label: 'Medical & Clinical', href: '/industries/medical-clinical' },
      { label: 'Logistics & Trade', href: '/industries/logistics-trade' },
      { label: 'Education', href: '/industries/education' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/#pricing' },
    ],
  },
] as const

export const legalNavigation = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-of-use' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'DPA', href: '/dpa' },
] as const

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string
  description: string
  path: string
  noIndex?: boolean
}): Metadata {
  const canonical = new URL(path, site.url).toString()

  return {
    title,
    description,
    alternates: { canonical },
    robots: robotsForPage(noIndex),
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: canonical,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}
