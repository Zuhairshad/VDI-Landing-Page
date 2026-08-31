import ContentPage from '@/components/ContentPage'
import { dataValidationPage } from '@/lib/page-content'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Data Validation Guide',
  description: 'Learn how to define data-quality rules, test exceptions, and distinguish validation from source verification.',
  path: '/data-validation',
})

export default function DataValidationRoute() {
  return <ContentPage data={dataValidationPage} />
}
