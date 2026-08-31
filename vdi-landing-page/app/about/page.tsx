import ContentPage, { type ContentPageData } from '@/components/ContentPage'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  title: 'About',
  description: 'Clarify Data is developing evidence-led workflows for data preparation, claim verification, market research, and business intelligence.',
  path: '/about',
})

const data: ContentPageData = {
  eyebrow: 'About Clarify Data',
  title: 'Information should remain traceable when the stakes rise',
  intro: 'Clarify Data is developing a connected way to prepare information, verify material claims, add market context, and keep human responsibility visible.',
  note: 'Capabilities described on this site are product direction and workflow design unless a specific implementation is demonstrated and agreed.',
  sections: [
    {
      eyebrow: 'Why we exist',
      title: 'Polished outputs can hide weak foundations',
      variant: 'split',
      items: [
        { title: 'The problem', text: 'Teams work across spreadsheets, generated content, purchased data, public sources, and one-off reports. Definitions drift, source links disappear, and uncertainty is compressed into confident conclusions.' },
        { title: 'The response', text: 'We design workflows that keep original inputs, transformations, evidence, conflicts, and review decisions connected to the result.' },
      ],
    },
    {
      eyebrow: 'Principles',
      title: 'What guides the product direction',
      variant: 'grid',
      items: [
        { title: 'Evidence over fluency', text: 'Clear writing is valuable, but inspectable support is what makes a material claim defensible.' },
        { title: 'Context over generic scores', text: 'Source authority, freshness, definitions, and intended use matter more than an unexplained confidence number.' },
        { title: 'Human responsibility', text: 'Automation should improve review quality and focus attention, not obscure who is accountable for consequential judgment.' },
        { title: 'Boundaries stated plainly', text: 'Limitations, directional capabilities, and unresolved decisions should be visible in both product and marketing language.' },
        { title: 'Repeatable work', text: 'Queries, source choices, rules, and review history should help the next analyst refresh the result.' },
        { title: 'Useful deliverables', text: 'Evidence records and exception notes are part of the output, alongside summaries and recommendations.' },
      ],
    },
  ],
  related: [
    { label: 'How It Works', href: '/how-it-works', description: 'See the end-to-end workflow and its review points.' },
    { label: 'Information Quality Journal', href: '/blog', description: 'Read practical methods behind the product direction.' },
  ],
}

export default function AboutPage() {
  return <ContentPage data={data} />
}
