export interface ArticleSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
  takeaway?: string
}

export interface ArticleDataset {
  file: string
  label: string
}

export interface ArticleExercise {
  number: number
  title: string
  skill: string
  paragraphs: string[]
  bullets?: string[]
  dataset?: ArticleDataset
  extraDatasets?: ArticleDataset[]
  walkthrough?: string[]
}

export interface ArticleFaq {
  question: string
  answer: string
}

export interface Article {
  slug: string
  title: string
  summary: string
  lede?: string
  category: string
  published: string
  publishedIso: string
  readTime: string
  sections: ArticleSection[]
  exercises?: ArticleExercise[]
  trailingSections?: ArticleSection[]
  faqs?: ArticleFaq[]
}

export const articles: Article[] = [
  {
    slug: 'evidence-trail-ai-generated-claims',
    title: 'Building an evidence trail for AI-generated claims',
    summary: 'A practical method for turning fluent AI output into discrete claims, source records, review decisions, and an audit-ready final draft.',
    category: 'Evidence trails',
    published: 'August 8, 2026',
    publishedIso: '2026-08-08',
    readTime: '9 min read',
    sections: [
      {
        heading: 'Fluency is not evidence',
        paragraphs: [
          'Generative systems can combine accurate facts, outdated details, and plausible inventions in the same polished paragraph. Reviewing the paragraph as a whole makes it difficult to see which statements are factual, which are interpretations, and which are recommendations.',
          'An evidence trail starts by separating the output into claims that can be checked independently. A claim should be specific enough that a reviewer can identify what would confirm it, what would contradict it, and whether the source is current enough for the intended use.',
        ],
        bullets: ['Mark factual assertions, quoted language, calculations, and causal explanations separately.', 'Record the exact wording that was reviewed, not only the final edited sentence.', 'Treat value judgments and recommendations as decisions requiring context, not facts awaiting a citation.'],
      },
      {
        heading: 'Create one record per material claim',
        paragraphs: [
          'A useful claim record connects the assertion to its source, publication or effective date, relevant excerpt, and reviewer decision. It should also preserve the search scope so another person can understand what was checked and what was not.',
          'When several sources support different parts of a sentence, split the sentence or map each source to the precise fragment it supports. A long bibliography attached to an entire document is less useful than explicit claim-to-source links.',
        ],
        bullets: ['Claim text and stable internal identifier', 'Source title, publisher, URL or document reference, and access date', 'Supporting passage or data field with enough surrounding context', 'Verdict, uncertainty note, reviewer, and review date'],
      },
      {
        heading: 'Resolve conflicts without hiding them',
        paragraphs: ['Conflicting sources do not always mean one source is wrong. They may use different definitions, populations, measurement windows, versions, or geographic scopes.', 'If the conflict cannot be resolved, the responsible result is a qualified claim or an explicit open issue. A verification workflow should make uncertainty easier to communicate.'],
        takeaway: 'Require every material factual claim to have a source record and a named review state before it enters a high-impact deliverable.',
      },
    ],
  },
  {
    slug: 'provenance-confidence-scoring',
    title: 'Data provenance and confidence scoring without false precision',
    summary: 'How to document where information came from, what changed along the way, and what a confidence label can honestly communicate.',
    category: 'Provenance',
    published: 'August 1, 2026',
    publishedIso: '2026-08-01',
    readTime: '10 min read',
    sections: [
      {
        heading: 'Provenance is the history of a result',
        paragraphs: ['Provenance describes the path from an original source to a value, claim, or conclusion. That path may include collection, extraction, normalization, deduplication, calculation, summarization, and human editing.', 'A record should identify both source lineage and transformation lineage. Knowing which release, table, filter, and calculation produced a displayed number is what makes it reproducible.'],
        bullets: ['Preserve original source identifiers and version or publication dates.', 'Record transformations in order, including unit conversions and exclusions.', 'Keep raw values distinguishable from interpreted or calculated values.'],
      },
      {
        heading: 'Confidence is multidimensional',
        paragraphs: ['A single percentage can imply a level of measurement that the workflow does not support. Confidence is often better represented through source authority, freshness, directness, agreement, extraction quality, and review status.', 'A primary source may be authoritative but stale, while a current secondary source may be timely but indirect. A useful label preserves that distinction.'],
        bullets: ['Authority: Is the source responsible for or close to the information?', 'Freshness: Is it current for the decision window?', 'Directness: Does it support the exact claim?', 'Agreement: Do independent sources align after normalization?', 'Review: Has a qualified person checked the mapping and interpretation?'],
      },
      {
        heading: 'Make labels actionable',
        paragraphs: ['A confidence label should tell the next reviewer what to do. “Needs review: source date” is more useful than “72% confident” when the actual issue is expired or superseded evidence.', 'Teams can define review gates around the dimensions that matter to a workflow and its consequences.'],
        takeaway: 'Use explainable confidence dimensions and route the weakest dimension to a human reviewer instead of presenting an unsupported composite percentage.',
      },
    ],
  },
  {
    slug: 'human-review-high-impact-decisions',
    title: 'Designing human review for high-impact decisions',
    summary: 'A review model for work where a wrong source, omitted limitation, or overconfident conclusion could materially affect people or operations.',
    category: 'Human review',
    published: 'July 25, 2026',
    publishedIso: '2026-07-25',
    readTime: '11 min read',
    sections: [
      {
        heading: 'Human in the loop is not a complete control',
        paragraphs: ['Adding a person at the end of an automated workflow does not guarantee meaningful oversight. Reviewers need the right expertise, enough time, access to underlying evidence, and authority to reject or revise the output.', 'The workflow should define which decisions require review, what evidence the reviewer receives, and how disagreements are recorded.'],
        bullets: ['Route by risk and subject matter, not only queue availability.', 'Show source passages and transformation notes beside the conclusion.', 'Require a reason when a reviewer overrides an unresolved warning.'],
      },
      {
        heading: 'Place checkpoints before irreversible actions',
        paragraphs: ['Review is most effective before information is published, sent to a customer, used in a regulated submission, or applied to an operational decision.', 'A tiered model can separate routine editorial review from specialist review. High-impact uses should remain with qualified professionals who understand the applicable duties and context.'],
        bullets: ['Input review', 'Evidence review', 'Decision review', 'Release review'],
      },
      {
        heading: 'Learn from reviewer disagreement',
        paragraphs: ['Disagreement can reveal ambiguous policies, incomplete source coverage, inconsistent definitions, or review instructions that need improvement.', 'Retain the review history and final rationale. Recurring uncertainty can improve prompts, source selection, workflow guidance, and reviewer training.'],
        takeaway: 'Define review authority and escalation paths before automation is introduced, then measure whether reviewers receive enough evidence to make an independent decision.',
      },
    ],
  },
  {
    slug: 'repeatable-market-research-workflows',
    title: 'Designing repeatable market-research workflows',
    summary: 'A structured approach to questions, source selection, comparison tables, change tracking, and handoff without turning research into a black box.',
    category: 'Research workflows',
    published: 'July 18, 2026',
    publishedIso: '2026-07-18',
    readTime: '9 min read',
    sections: [
      {
        heading: 'Start with a decision-shaped question',
        paragraphs: ['Broad prompts such as “research this market” create inconsistent scope. A repeatable workflow begins with the decision, audience, geography, time window, comparison criteria, and acceptable source types.', 'The brief should identify what would change the decision. This keeps interesting but irrelevant information from dominating the work.'],
        bullets: ['Decision and intended audience', 'Entities, products, regions, and dates in scope', 'Definitions and comparison fields', 'Preferred primary sources and exclusions', 'Deadline, freshness threshold, and review owner'],
      },
      {
        heading: 'Separate collection from interpretation',
        paragraphs: ['Collection records what sources say; interpretation explains what those observations may mean. Keeping those stages distinct reduces the risk that an early hypothesis quietly shapes the evidence.', 'A comparison table should retain the source for each cell, not only each row. Fields may come from different documents and carry different confidence levels.'],
        bullets: ['Normalize currencies, units, tax treatment, and time periods explicitly.', 'Flag missing values instead of inferring them.', 'Distinguish observed facts from assumptions and recommendations.'],
      },
      {
        heading: 'Design for the next refresh',
        paragraphs: ['Store the query, source list, access dates, extraction rules, and review decisions so a later refresh can focus on what changed.', 'A change log should show additions, removals, revised values, and sources that are no longer available.'],
        takeaway: 'Treat the research method, source map, and change log as deliverables alongside the executive summary.',
      },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
