import FaqAccordion from '@/components/FaqAccordion'

const questions = [
  {
    q: 'What is Clarify Data?',
    a: 'Clarify Data is a data verification and business intelligence platform that helps organizations clean and structure raw data, evaluate important claims, analyze current market information, and turn verified information into business intelligence. The platform combines automated data processing, market intelligence, AI claim verification, analytics, and human review for cases requiring additional judgment.',
  },
  {
    q: 'What is data verification?',
    a: 'Data verification is the process of evaluating whether information is accurate, consistent, current, and supported by appropriate evidence. Clarify Data can compare information against verified datasets, market intelligence, historical information, trusted sources, and relevant business benchmarks.',
  },
  {
    q: 'What is the difference between data validation and data verification?',
    a: 'Data validation generally checks whether data meets required rules, formats, structures, or constraints. Data verification focuses on whether the information itself is supported, accurate, current, and reliable. Clarify Data uses both concepts as part of a broader information-quality workflow.',
  },
  {
    q: 'How is Clarify Data different from asking AI to fact-check itself?',
    a: 'Clarify Data is designed to evaluate AI-generated claims against external information and evidence rather than simply asking another model to generate a second answer. The system can consider market data, historical information, verified datasets, trusted references, confidence indicators, and human review.',
  },
  {
    q: 'Which AI platforms can Clarify Data verify?',
    a: 'The verification workflow can be applied to submitted content from widely used AI systems. The relevant unit is the material claim and its evidence, not the brand of model that produced the wording.',
  },
  {
    q: 'What is the Clarify Data Trust Index?',
    a: 'The Trust Index communicates how strongly the available evidence supports a claim, dataset, or report. It can consider factors such as evidence quality, information freshness, source consistency, industry relevance, uncertainty, and human verification.',
  },
  {
    q: 'What verification states can a workflow use?',
    a: 'A scoped workflow can use plain-language states such as supported, partially supported, conflicting, outdated, missing evidence, or requiring human review. The labels and release rules should be defined for the intended decision.',
  },
  {
    q: 'How does Data Sort work?',
    a: 'Users upload data through supported formats such as CSV, Excel, documents, or APIs. Clarify Data identifies the structure, categories, missing information, duplicates, and formatting inconsistencies and helps transform the information into a cleaner and more structured dataset.',
  },
  {
    q: 'What does Clarify Data provide for business intelligence?',
    a: 'Depending on an agreed scope, business intelligence deliverables could include performance analysis, market comparisons, trends, risks, opportunities, forecast assumptions, performance gaps, verification results, supporting evidence, and review notes.',
  },
  {
    q: 'When does human verification happen?',
    a: 'Human review can be used when available evidence is conflicting or incomplete, when confidence is low, when industry context is important, or when the information could affect a high-impact decision. Users may also request additional expert review where available.',
  },
  {
    q: 'What happens to private business data?',
    a: 'Do not send confidential datasets through the public demo form. Any customer-data workflow requires an agreed service design, access boundaries, retention instructions, security review, and appropriate written terms before data is transferred.',
  },
  {
    q: 'Which industries does Clarify Data support?',
    a: 'The initial industry focus includes E-commerce and social media, Healthcare, Logistics and supply chain, and Education. Industry-specific verification allows relevant data, terminology, market conditions, and expert context to be considered.',
  },
  {
    q: 'How do I get started?',
    a: 'Book a demo and bring a real business question, AI-generated document, report, or dataset. The Clarify Data team can demonstrate how the platform processes and verifies information using a realistic workflow.',
  },
]

export default function Faq() {
  return (
    <FaqAccordion
      items={questions}
      heading="Frequently Asked Questions"
      subtext="Have more questions about integration, data security, or custom enterprise deployments? Reach out to our team."
    />
  )
}
