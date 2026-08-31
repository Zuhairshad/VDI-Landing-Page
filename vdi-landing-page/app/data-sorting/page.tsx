import ContentPage from '@/components/ContentPage'
import { dataPreparationPage } from '@/lib/page-content'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Data Preparation Guide',
  description: 'A practical guide to profiling, mapping, standardizing, and deduplicating data while preserving lineage and reviewability.',
  path: '/data-sorting',
})

export default function DataPreparationRoute() {
  return <ContentPage data={dataPreparationPage} />
}
