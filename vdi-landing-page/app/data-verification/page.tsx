import ContentPage from '@/components/ContentPage'
import { verificationPage } from '@/lib/page-content'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Data and AI Claim Verification',
  description: 'Trace material claims to inspectable evidence, preserve conflicts, and route consequential uncertainty to human review.',
  path: '/data-verification',
})

export default function DataVerificationRoute() {
  return <ContentPage data={verificationPage} />
}
