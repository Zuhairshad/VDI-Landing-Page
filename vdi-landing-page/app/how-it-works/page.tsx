import ContentPage from '@/components/ContentPage'
import { howItWorksPage } from '@/lib/page-content'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'How It Works',
  description: 'Follow the Clarify Data workflow from scoped questions and prepared inputs to traceable evidence, analysis, and human review.',
  path: '/how-it-works',
})

export default function HowItWorksRoute() {
  return <ContentPage data={howItWorksPage} />
}
