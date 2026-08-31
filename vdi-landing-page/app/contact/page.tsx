import BookDemo from '@/components/BookDemo'
import PageHero from '@/components/PageHero'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact Clarify Data about a data preparation, verification, market research, or business intelligence workflow.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Contact"
        title="Start with the decision and the evidence you have"
        intro="A useful first conversation covers the question, source set, intended audience, risk level, and the review responsibilities your team already has."
        noteLabel="Before you send"
        note="Do not include credentials, patient data, payment details, government identifiers, or confidential datasets in the public form."
      />
      <BookDemo />
    </main>
  )
}
