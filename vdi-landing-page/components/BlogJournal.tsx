'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, BookOpen, Calendar, Search, X } from 'lucide-react'

const COPPER = 'rgb(194, 89, 24)'
const COPPER_BORDER = 'rgba(194, 89, 24, 0.35)'

interface ArticleSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
  takeaway?: string
}

interface Article {
  slug: string
  title: string
  summary: string
  category: string
  published: string
  readTime: string
  sections: ArticleSection[]
}

const articles: Article[] = [
  {
    slug: 'evidence-trail-ai-generated-claims',
    title: 'Building an evidence trail for AI-generated claims',
    summary:
      'A practical method for turning fluent AI output into discrete claims, source records, review decisions, and an audit-ready final draft.',
    category: 'Evidence trails',
    published: 'August 8, 2026',
    readTime: '9 min read',
    sections: [
      {
        heading: 'Fluency is not evidence',
        paragraphs: [
          'Generative systems can combine accurate facts, outdated details, and plausible inventions in the same polished paragraph. Reviewing the paragraph as a whole makes it difficult to see which statements are factual, which are interpretations, and which are recommendations.',
          'An evidence trail starts by separating the output into claims that can be checked independently. A claim should be specific enough that a reviewer can identify what would confirm it, what would contradict it, and whether the source is current enough for the intended use.',
        ],
        bullets: [
          'Mark factual assertions, quoted language, calculations, and causal explanations separately.',
          'Record the exact wording that was reviewed rather than only the final edited sentence.',
          'Treat value judgments and recommendations as decisions requiring context, not facts awaiting a citation.',
        ],
      },
      {
        heading: 'Create one record per material claim',
        paragraphs: [
          'A useful claim record connects the assertion to its source, publication or effective date, relevant excerpt, and reviewer decision. It should also preserve the search scope so another person can understand what was checked and what was not.',
          'When several sources support different parts of a sentence, split the sentence or map each source to the precise fragment it supports. A long bibliography attached to an entire document is less useful than explicit claim-to-source links.',
        ],
        bullets: [
          'Claim text and stable internal identifier',
          'Source title, publisher, URL or document reference, and access date',
          'Supporting passage or data field, with enough surrounding context to interpret it',
          'Verdict, uncertainty note, reviewer, and review date',
        ],
      },
      {
        heading: 'Resolve conflicts without hiding them',
        paragraphs: [
          'Conflicting sources do not always mean one source is wrong. They may use different definitions, populations, measurement windows, versions, or geographic scopes. The evidence trail should capture those differences before a reviewer chooses language for the final output.',
          'If the conflict cannot be resolved, the responsible result is a qualified claim or an explicit open issue. A verification workflow should make uncertainty easier to communicate, not force every question into a binary pass or fail.',
        ],
        takeaway:
          'Practical takeaway: require every material factual claim to have a source record and a named review state before it enters a high-impact deliverable.',
      },
    ],
  },
  {
    slug: 'provenance-confidence-scoring',
    title: 'Data provenance and confidence scoring without false precision',
    summary:
      'How to document where information came from, what changed along the way, and what a confidence label can honestly communicate.',
    category: 'Provenance',
    published: 'August 1, 2026',
    readTime: '10 min read',
    sections: [
      {
        heading: 'Provenance is the history of a result',
        paragraphs: [
          'Provenance describes the path from an original source to a value, claim, or conclusion. That path may include collection, extraction, normalization, deduplication, calculation, summarization, and human editing. Each transformation can add useful structure while also introducing error.',
          'A provenance record should therefore identify both source lineage and transformation lineage. Knowing that a number came from a regulator is helpful; knowing which release, table, filter, and calculation produced the displayed number is what makes it reproducible.',
        ],
        bullets: [
          'Preserve original source identifiers and version or publication dates.',
          'Record transformations in order, including unit conversions and exclusions.',
          'Keep raw values distinguishable from interpreted or calculated values.',
        ],
      },
      {
        heading: 'Confidence is multidimensional',
        paragraphs: [
          'A single percentage can imply a level of measurement that the workflow does not support. Confidence is often better represented as a small set of explainable dimensions: source authority, freshness, directness, agreement, extraction quality, and review status.',
          'For example, a primary source may be authoritative but stale, while a current secondary source may be timely but indirect. A useful label preserves that distinction instead of averaging both into an opaque score.',
        ],
        bullets: [
          'Authority: Is the source responsible for or close to the underlying information?',
          'Freshness: Is the information current for the decision window?',
          'Directness: Does the source support the exact claim or only a related inference?',
          'Agreement: Do independent sources align after definitions and dates are normalized?',
          'Review: Has a qualified person checked the source mapping and interpretation?',
        ],
      },
      {
        heading: 'Make labels actionable',
        paragraphs: [
          'A confidence label should tell the next reviewer what to do. “Needs review: source date” is more useful than “72% confident” when the actual issue is an expired tariff schedule or superseded policy document.',
          'Teams can define review gates around the dimensions that matter to a workflow. The threshold for an internal research lead may differ from the threshold for a clinical, legal, safety, or public-facing statement.',
        ],
        takeaway:
          'Practical takeaway: use explainable confidence dimensions and route the weakest dimension to a human reviewer instead of presenting an unsupported composite percentage.',
      },
    ],
  },
  {
    slug: 'human-review-high-impact-decisions',
    title: 'Designing human review for high-impact decisions',
    summary:
      'A review model for work where a wrong source, omitted limitation, or overconfident conclusion could materially affect people or operations.',
    category: 'Human review',
    published: 'July 25, 2026',
    readTime: '11 min read',
    sections: [
      {
        heading: 'Human-in-the-loop is not a complete control',
        paragraphs: [
          'Adding a person at the end of an automated workflow does not guarantee meaningful oversight. Reviewers need the right expertise, enough time, access to underlying evidence, and authority to reject or revise the output.',
          'The workflow should define which decisions require review, what evidence the reviewer receives, and how disagreements are recorded. Otherwise, the review step can become a procedural click rather than a substantive check.',
        ],
        bullets: [
          'Route by risk and subject matter, not only by queue availability.',
          'Show source passages and transformation notes beside the generated conclusion.',
          'Require a reason when a reviewer overrides a warning or unresolved conflict.',
        ],
      },
      {
        heading: 'Place checkpoints before irreversible actions',
        paragraphs: [
          'Review is most effective before information is published, sent to a customer, used in a regulated submission, or applied to an operational decision. Earlier checkpoints can also prevent low-quality inputs from contaminating later analysis.',
          'A tiered model can separate routine editorial review from specialist review. Medical, legal, regulatory, employment, credit, safety, and similar high-impact uses should remain with qualified professionals who understand the applicable duties and context.',
        ],
        bullets: [
          'Input review: confirm scope, authority to use the material, and sensitive-data handling.',
          'Evidence review: test source relevance, currency, and conflicts.',
          'Decision review: assess the conclusion, limitations, and downstream consequences.',
          'Release review: confirm approved wording, audience, and traceable record.',
        ],
      },
      {
        heading: 'Learn from reviewer disagreement',
        paragraphs: [
          'Disagreement is valuable quality information. It can reveal ambiguous policies, incomplete source coverage, inconsistent definitions, or review instructions that need improvement.',
          'Instead of erasing the initial decision, retain the review history and final rationale. Periodic analysis of reversals and recurring uncertainty can improve prompts, source selection, workflow guidance, and reviewer training.',
        ],
        takeaway:
          'Practical takeaway: define review authority and escalation paths before automation is introduced, then measure whether reviewers receive enough evidence to make an independent decision.',
      },
    ],
  },
  {
    slug: 'repeatable-market-research-workflows',
    title: 'Designing repeatable market-research workflows',
    summary:
      'A structured approach to questions, source selection, comparison tables, change tracking, and handoff without turning research into a black box.',
    category: 'Research workflows',
    published: 'July 18, 2026',
    readTime: '9 min read',
    sections: [
      {
        heading: 'Start with a decision-shaped question',
        paragraphs: [
          'Broad prompts such as “research this market” create inconsistent scope. A repeatable workflow begins with the decision, audience, geography, time window, comparison criteria, and acceptable source types.',
          'The brief should also identify what would change the decision. This prevents the research process from collecting large volumes of interesting information that never becomes relevant evidence.',
        ],
        bullets: [
          'Decision and intended audience',
          'Entities, products, regions, and dates in scope',
          'Definitions and comparison fields',
          'Preferred primary sources and exclusions',
          'Deadline, freshness threshold, and review owner',
        ],
      },
      {
        heading: 'Separate collection from interpretation',
        paragraphs: [
          'Collection records what sources say; interpretation explains what those observations may mean. Keeping those stages distinct reduces the risk that an early hypothesis quietly shapes which evidence is captured.',
          'A comparison table should retain the source for each cell, not only each row. Price, date, specification, and policy fields may come from different documents and may have different confidence levels.',
        ],
        bullets: [
          'Normalize currencies, units, tax treatment, and time periods explicitly.',
          'Flag missing values instead of inferring them from a neighboring record.',
          'Distinguish observed facts from analyst assumptions and recommendations.',
        ],
      },
      {
        heading: 'Design for the next refresh',
        paragraphs: [
          'Repeatability matters because markets change. Store the query, source list, access dates, extraction rules, and review decisions so a later refresh can focus on what changed rather than rebuilding the study from memory.',
          'A change log should show additions, removals, revised values, and sources that are no longer available. This makes the deliverable more useful to the next analyst and more defensible to the decision-maker.',
        ],
        takeaway:
          'Practical takeaway: treat the research method, source map, and change log as deliverables alongside the executive summary.',
      },
    ],
  },
]

const categories = ['All', ...Array.from(new Set(articles.map((article) => article.category)))]

function getSearchText(article: Article) {
  return [
    article.title,
    article.summary,
    article.category,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets ?? []),
      section.takeaway ?? '',
    ]),
  ].join(' ').toLowerCase()
}

export default function BlogJournal() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const articleTriggerRef = useRef<HTMLButtonElement | null>(null)

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory
      const matchesSearch = !normalizedQuery || getSearchText(article).includes(normalizedQuery)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  useEffect(() => {
    if (!selectedArticle) return

    const rootElement = document.documentElement
    const previousBodyOverflow = document.body.style.overflow
    const previousRootOverflow = rootElement.style.overflow
    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())
    document.body.style.overflow = 'hidden'
    rootElement.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setSelectedArticle(null)
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )

      if (focusable.length === 0) {
        event.preventDefault()
        dialogRef.current.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.cancelAnimationFrame(focusFrame)
      document.body.style.overflow = previousBodyOverflow
      rootElement.style.overflow = previousRootOverflow
      document.removeEventListener('keydown', handleKeyDown)
      window.requestAnimationFrame(() => articleTriggerRef.current?.focus())
    }
  }, [selectedArticle])

  const openArticle = (article: Article, trigger: HTMLButtonElement) => {
    articleTriggerRef.current = trigger
    setSelectedArticle(article)
  }

  const clearFilters = () => {
    setActiveCategory('All')
    setSearchQuery('')
  }

  return (
    <>
      <section className="section-pad border-t border-white/10" aria-labelledby="journal-heading">
        <div className="section-inner">
          <div className="max-w-[760px] mb-10">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: COPPER }}>
              Educational journal
            </p>
            <h2 id="journal-heading" className="text-[28px] md:text-[42px] font-semibold tracking-tight mb-4">
              Methods for more reviewable research
            </h2>
            <p className="text-[15px] md:text-[17px] leading-[27px] text-white/65">
              Search practical guides on evidence, provenance, human oversight, and repeatable information-quality workflows.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Article categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className="px-4 py-2 rounded-full text-[13px] font-medium transition-colors cursor-pointer"
                  style={{
                    color: activeCategory === category ? 'white' : 'rgba(255,255,255,0.68)',
                    background: activeCategory === category ? 'rgb(84, 27, 4)' : 'rgba(255,255,255,0.045)',
                    border: activeCategory === category ? `1px solid ${COPPER_BORDER}` : '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-[330px]">
              <label htmlFor="article-search" className="sr-only">Search journal articles</label>
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-white/40" aria-hidden="true" />
              <input
                id="article-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search title, topic, or article text"
                className="w-full rounded-full border border-white/10 bg-white/[0.045] py-3 pl-11 pr-4 text-[14px] text-white outline-none placeholder:text-white/35 focus:border-orange-500/50"
              />
            </div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-3xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(84, 27, 4, 0.25) 0%, rgba(20, 20, 25, 0.94) 100%)',
                    border: `1px solid ${COPPER_BORDER}`,
                  }}
                >
                  <button
                    type="button"
                    onClick={(event) => openArticle(article, event.currentTarget)}
                    className="w-full h-full p-7 md:p-8 text-left flex flex-col cursor-pointer group"
                    aria-label={`Read ${article.title}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                      <span
                        className="text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                        style={{ color: 'rgb(224, 133, 76)', background: 'rgba(194, 89, 24, 0.12)', border: `1px solid ${COPPER_BORDER}` }}
                      >
                        {article.category}
                      </span>
                      <span className="text-[12px] text-white/45">{article.readTime}</span>
                    </div>
                    <h3 className="text-[22px] md:text-[25px] leading-[1.3] font-semibold mb-4 group-hover:text-orange-300 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[15px] leading-[25px] text-white/65 mb-7 flex-1">{article.summary}</p>
                    <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[13px]">
                      <span className="flex items-center gap-2 text-white/45">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        {article.published}
                      </span>
                      <span className="flex items-center gap-2 font-semibold text-white/85">
                        Read article <ArrowRight className="w-4 h-4" style={{ color: COPPER }} aria-hidden="true" />
                      </span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-16 text-center">
              <BookOpen className="w-9 h-9 mx-auto mb-4" style={{ color: COPPER }} aria-hidden="true" />
              <h3 className="text-[21px] font-semibold mb-2">No articles match this search</h3>
              <p className="text-[14px] text-white/55 mb-6">Try a broader phrase or clear the current category.</p>
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full px-5 py-2.5 text-[14px] font-semibold cursor-pointer"
                style={{ background: 'rgb(84, 27, 4)', border: `1px solid ${COPPER_BORDER}` }}
              >
                Clear search and filters
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedArticle && (
        <div
          className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-md p-3 md:p-6 flex items-center justify-center overscroll-contain"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedArticle(null)
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-dialog-title"
            aria-describedby="article-dialog-summary"
            tabIndex={-1}
            className="relative w-full max-w-[860px] max-h-[calc(100dvh-1.5rem)] md:max-h-[calc(100dvh-3rem)] flex flex-col overflow-hidden rounded-3xl border border-orange-500/30 bg-[#121214] shadow-2xl"
          >
            <div className="z-10 flex justify-end p-4 pb-0 shrink-0 pointer-events-none">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="pointer-events-auto w-10 h-10 rounded-full bg-black/80 border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <article
              data-lenis-prevent
              className="min-h-0 overflow-y-auto overscroll-contain px-6 md:px-12 pt-1 pb-10 md:pb-14"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: 'rgb(224, 133, 76)' }}>
                {selectedArticle.category} · {selectedArticle.readTime}
              </p>
              <h2 id="article-dialog-title" className="text-[30px] md:text-[44px] leading-[1.15] font-semibold tracking-tight mb-5 pr-8">
                {selectedArticle.title}
              </h2>
              <p id="article-dialog-summary" className="text-[16px] md:text-[18px] leading-[29px] text-white/68 mb-6">
                {selectedArticle.summary}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/45 pb-8 mb-9 border-b border-white/10">
                <span>Clarify Data Editorial</span>
                <span aria-hidden="true">•</span>
                <span>{selectedArticle.published}</span>
              </div>

              <div className="space-y-10">
                {selectedArticle.sections.map((section) => (
                  <section key={section.heading}>
                    <h3 className="text-[23px] md:text-[28px] font-semibold tracking-tight mb-4">{section.heading}</h3>
                    <div className="space-y-4 text-[15px] md:text-[16px] leading-[28px] text-white/72">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      {section.bullets && (
                        <ul className="space-y-3 pl-1">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full mt-3 shrink-0" style={{ background: COPPER }} aria-hidden="true" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.takeaway && (
                        <p
                          className="rounded-2xl p-5 text-white/82"
                          style={{ background: 'rgba(194, 89, 24, 0.1)', border: `1px solid ${COPPER_BORDER}` }}
                        >
                          <strong className="text-white">{section.takeaway.split(':')[0]}:</strong>
                          {section.takeaway.slice(section.takeaway.indexOf(':') + 1)}
                        </p>
                      )}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 pt-7 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="rounded-full px-6 py-3 text-[14px] font-semibold cursor-pointer"
                  style={{ background: 'rgb(84, 27, 4)', border: `1px solid ${COPPER_BORDER}` }}
                >
                  Close article
                </button>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  )
}
