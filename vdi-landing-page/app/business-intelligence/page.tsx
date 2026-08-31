import ContentPage from '@/components/ContentPage'
import { businessIntelligencePage } from '@/lib/page-content'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Business and Market Intelligence',
  description: 'Connect prepared internal metrics with traceable external evidence for reviewable analysis, benchmarks, and change-aware reports.',
  path: '/business-intelligence',
})

export default function BusinessIntelligenceRoute() {
  return <ContentPage data={businessIntelligencePage} />
}
