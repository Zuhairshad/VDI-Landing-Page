import ContentPage from '@/components/ContentPage'
import { trustIndexPage } from '@/lib/page-content'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Trust Index Methodology',
  description: 'An explainable framework for communicating source authority, freshness, directness, agreement, provenance, and review state.',
  path: '/trust-index',
})

export default function TrustIndexRoute() {
  return <ContentPage data={trustIndexPage} />
}
