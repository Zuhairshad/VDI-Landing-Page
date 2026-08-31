import BlogJournal from '@/components/BlogJournal'
import FinalCta from '@/components/FinalCta'
import PageHero from '@/components/PageHero'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Information Quality Journal',
  description: 'Practical guides to evidence trails, provenance, confidence, human review, and repeatable market research.',
  path: '/blog',
})

export default function BlogPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Resources / Journal"
        title="Better methods for information people need to trust"
        intro="Detailed, practical guidance for making research, AI output, and analytical work more traceable and reviewable."
        noteLabel="Editorial standard"
        note="Each article separates observed evidence, workflow guidance, limitations, and decisions that still require accountable human judgment."
      />
      <BlogJournal />
      <FinalCta />
    </main>
  )
}
