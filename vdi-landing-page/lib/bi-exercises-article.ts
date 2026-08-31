import type { Article } from '@/lib/articles'

const definition =
  'Business intelligence exercises are structured practice tasks that train analysts to collect, clean, model, and interpret data for decisions. They include messy datasets, a defined question, and a walkthrough of the expected analysis. Students, job seekers, and working analysts use them to build dashboard, SQL, forecasting, and verification skills.'

export const biExercisesArticle: Article = {
  slug: 'business-intelligence-exercises',
  title: '15 Business Intelligence Exercises (With Free Practice Datasets)',
  summary:
    'Fifteen BI practice drills with messy CSVs and answer walkthroughs, including data cleaning, validation versus verification, and an AI claim-checking exercise built on the Trust Index method.',
  lede: definition,
  category: 'Practice',
  published: 'September 1, 2026',
  publishedIso: '2026-09-01',
  readTime: '22 min read',
  sections: [
    {
      heading: 'How to use this set',
      paragraphs: [
        'Treat each drill as a closed brief: one question, one messy file, one written answer. Do the work before you open the walkthrough. The files are intentionally dirty because that is how operational data arrives.',
        'These exercises are for learning. They are not a substitute for a commercial [[data verification|/data-verification]] workflow, and they are not a service page. If you want the same method applied to live claims, [[book a demo|/#book-demo]].',
      ],
    },
  ],
  exercises: [
    {
      number: 1,
      title: 'Clean a messy sales export',
      skill: 'Data cleaning',
      paragraphs: [
        'This maps to Module 01. Profile the file, list every quality issue, then produce a tidy table with one row per true order. Keep a lineage note for every column you change. The [[data preparation guide|/data-sorting]] is the method reference.',
      ],
      bullets: [
        'Find duplicate orders, split dates, mixed currencies, negative quantity, and broken emails.',
        'Do not delete rows silently. Record exclusions in a reject log.',
        'Separate raw values from standardized values.',
      ],
      dataset: { file: '01-messy-sales.csv', label: 'Download messy sales CSV' },
      walkthrough: [
        'Expected issues include a duplicated 1001, a duplicated 1004/1005 across USD and GBP, an invalid month in 1008, unit_price 1999 that is almost certainly cents, and the same customer email in different case.',
        'A correct tidy table has a single currency column after conversion, ISO dates, trimmed SKUs, and a reject log that still contains the invalid date and the missing-price row.',
      ],
    },
    {
      number: 2,
      title: 'Tell validation apart from verification',
      skill: 'Validation vs verification',
      paragraphs: [
        'This maps to Module 03. Each row looks well-formed. Your job is to label whether the next check is validation (does the value fit the rule) or verification (does a source support the claim). Use the [[data validation guide|/data-validation]] and the [[Trust Index methodology|/trust-index]].',
      ],
      bullets: [
        'Validation catches format, range, completeness, and referential errors.',
        'Verification checks origin, freshness, and whether the source actually supports the claim.',
        'A percentage can pass validation and still be unverified.',
      ],
      dataset: { file: '02-validation-vs-verification.csv', label: 'Download mixed-check CSV' },
      walkthrough: [
        'V-01, V-03, V-05, and V-07 are validation. V-02, V-04, V-06, and V-08 are verification: the values fit the schema, but the sources are stale, unnamed, or generative.',
        'If you only test types, every row passes. That is the trap this drill is built to create.',
      ],
    },
    {
      number: 3,
      title: 'Choose dashboard KPIs from a noisy week',
      skill: 'Dashboards and KPIs',
      paragraphs: [
        'A founder asks for "a dashboard that shows if growth is healthy." Using the weekly table, pick no more than six KPIs, write a one-line definition for each, and name the two metrics you will not put on the default board.',
      ],
      dataset: { file: '03-dashboard-kpis.csv', label: 'Download weekly KPI CSV' },
      walkthrough: [
        'A defensible default set is sessions, add-to-cart rate, checkout conversion, orders, net revenue (revenue minus refunds), and ticket rate per order.',
        'NPS from 40 responses in a down week is too thin for a primary tile. Raw refunds without a rate hide the 10 February shock. Call out that week in a note rather than averaging it away.',
      ],
    },
    {
      number: 4,
      title: 'Rebuild a funnel with missing steps',
      skill: 'Funnel analysis',
      paragraphs: [
        'Event tracking is incomplete. Some users purchase with no page view. Some events are duplicated. Reconstruct the funnel, list coverage gaps, and say which conversion rates you refuse to publish.',
      ],
      dataset: { file: '04-incomplete-funnel.csv', label: 'Download incomplete funnel CSV' },
      walkthrough: [
        'Do not compute page_view to purchase as if the event stream is complete. u-55 purchases with no prior events. u-31 purchases with no checkout_start. e8/e9 are duplicates.',
        'Publish only rates whose denominator is an event you actually observe for that user. Everything else is a coverage warning, not a KPI.',
      ],
    },
    {
      number: 5,
      title: 'Answer four SQL questions without guessing nulls',
      skill: 'SQL-style aggregation',
      paragraphs: [
        'Using the order grain, compute (1) revenue by category, (2) new versus returning revenue in February, (3) average order value by customer, and (4) whether the Furniture refund should sit in February revenue. Write the grouping grain beside each answer.',
      ],
      dataset: { file: '05-sql-aggregations.csv', label: 'Download orders CSV' },
      walkthrough: [
        'Keep the Furniture refund as a negative line in February. Hiding it inflates category revenue. New-customer revenue is not the same as first-order revenue if you later add a second order in the same month.',
        'Average order value belongs at the order grain, not the customer grain, unless the brief asked for average customer spend.',
      ],
    },
    {
      number: 6,
      title: 'Forecast a series that includes promotions and stockouts',
      skill: 'Forecasting',
      paragraphs: [
        'Fit a naive baseline (last 4 clean weeks) and a second view that flags promo and stockout weeks as excluded from the baseline. State the week of 26 January as a scenario, not as organic demand.',
      ],
      dataset: { file: '06-noisy-weekly-forecast.csv', label: 'Download weekly units CSV' },
      walkthrough: [
        'A clean baseline sits near 120-130 units. 17 November, 22 December, and 19 January are promo spikes. 24 November and 26 January are constrained by stockouts.',
        'If you include those weeks in a seasonal average, you will over-forecast organic demand and under-forecast promo peaks. Label both as scenarios.',
      ],
    },
    {
      number: 7,
      title: 'Build a canonical product list from duplicate listings',
      skill: 'Entity resolution',
      paragraphs: [
        'Cluster listings into canonical products. Decide what makes two rows the same product, and record residual uncertainty when GTIN, size, or color disagree.',
      ],
      dataset: { file: '07-duplicate-products.csv', label: 'Download duplicate listings CSV' },
      walkthrough: [
        'L1, L2, L5, and L6 are the same black size-42 Acme Runner 2, even with GTIN truncation and EUR formatting. L3 is the same model but a US size that needs a size map before you merge it. L4 is a different colorway. L7 and L8 are one Northpeak product.',
        'Do not collapse colorways. Canonicalize brand strings and keep a match-confidence note when GTIN is missing.',
      ],
    },
    {
      number: 8,
      title: 'Normalize mixed currencies, weights, and dimensions',
      skill: 'Standardization',
      paragraphs: [
        'Convert every row to kg, cm, and USD. Record the FX and conversion assumptions in a separate sheet so a reviewer can replay the math.',
      ],
      dataset: { file: '08-mixed-units.csv', label: 'Download mixed-units CSV' },
      walkthrough: [
        'W1 and W7 should match after trimming unit case. W6 price 1999 in JPY is plausible as yen, not a missing decimal. Convert using an explicit rate table with an access date.',
        'Never overwrite the source columns. Reviewers need the original 2.6 lb next to 1.18 kg.',
      ],
    },
    {
      number: 9,
      title: 'Explain three anomalies without overfitting',
      skill: 'Anomaly review',
      paragraphs: [
        'Find the unusual days, propose a cause that is consistent with the other columns, and mark anything that is still unexplained.',
      ],
      dataset: { file: '09-timeseries-anomalies.csv', label: 'Download API metrics CSV' },
      walkthrough: [
        '5 June is volume spike with normal errors, so treat it as traffic, not failure. 7 June is an outage pattern: volume collapse, error spike, latency spike. 12 June is a high error rate with normal volume and latency, which often means a bad client or a mislabeled error class rather than a full outage.',
        'The 6 June deploy is a candidate cause for 7 June only if you have a change log. Do not assert it from this file alone.',
      ],
    },
    {
      number: 10,
      title: 'Build a competitor table that does not invent cells',
      skill: 'Market intelligence',
      paragraphs: [
        'Create one row per competitor and one column per metric. Every cell needs a source. Conflicting values stay visible. Empty cells stay empty.',
      ],
      dataset: { file: '10-competitor-table.csv', label: 'Download competitor fragments CSV' },
      walkthrough: [
        'Northline employees 420 vs 380 is a dated conflict, not a number to average. Harbor ARR is missing. The AI brief for 32 million is weaker than the interview, and still not a primary filing.',
        'The finished table should have footnotes, not blended "best guess" figures. That is the same discipline as [[market intelligence|/business-intelligence#market-intelligence]] work on a live brief.',
      ],
    },
    {
      number: 11,
      title: 'Score confidence without a fake percentage',
      skill: 'Provenance',
      paragraphs: [
        'For each claim, rate authority, freshness, directness, and review state in words. Do not output a composite 0-100 score. The [[Trust Index methodology|/trust-index]] is the scoring pattern.',
      ],
      dataset: { file: '11-source-confidence.csv', label: 'Download claim-source CSV' },
      walkthrough: [
        'C1 can be high authority and high directness. C2 is weaker because it is indirect. C3 is a forecast from a vendor webinar. C5 is almost certainly "insufficient evidence." C6 fails because churn is undefined.',
        'A useful label looks like "needs review: definition" rather than "61% confident."',
      ],
    },
    {
      number: 12,
      title: 'Reject stale numbers against a decision window',
      skill: 'Freshness',
      paragraphs: [
        'The decision is needed by 1 May 2026. Using max_age_days, mark each item current, stale, or unknown. Write the replacement source you would seek for every stale item.',
      ],
      dataset: { file: '12-freshness-window.csv', label: 'Download freshness CSV' },
      walkthrough: [
        'VAT 19% may still be true, but the sheet is older than the allowed age, so it is stale until re-confirmed. The 2018 clinical citation is stale for this window. App rank and FX are current. Headcount from 31 December may be stale depending on hiring through April.',
        'Truth and freshness are different questions. A correct but overdue source still fails the window.',
      ],
    },
    {
      number: 13,
      title: 'Turn vague stakeholder language into metric definitions',
      skill: 'Requirements',
      paragraphs: [
        'Rewrite each quote as a metric with a numerator, denominator, time window, and population. List the definition you would refuse to implement without a follow-up question.',
      ],
      dataset: { file: '13-metric-definitions.csv', label: 'Download ambiguous brief CSV' },
      walkthrough: [
        '"Marketing is working" is not a metric. Force a choice: qualified demo requests over paid sessions, or first purchases over new visitors, in a named window.',
        'If two stakeholders mean different things by retention, ship two metrics or delay the dashboard. Do not hide the conflict in a single tile.',
      ],
    },
    {
      number: 14,
      title: 'Produce a refreshable report change log',
      skill: 'Repeatable research',
      paragraphs: [
        'Write the change log a second analyst could use next quarter. Every addition, removal, and revision needs a source pair. Unchanged fields still need a confirmation note.',
      ],
      dataset: { file: '14-report-changelog.csv', label: 'Download change-log CSV' },
      walkthrough: [
        'Mobile share should be an explicit removal: source withdrawn. Average price unchanged still needs "re-checked against public pricing." New entrant Pebble is an addition with a launch source, not a rumor.',
        'A research refresh without a change log forces the next person to start from slides instead of evidence.',
      ],
    },
    {
      number: 15,
      title: 'Verify an AI-generated market claim against evidence',
      skill: 'AI claim verification',
      paragraphs: [
        'This is the exercise most BI practice lists skip. Download the ChatGPT-style paragraph and the blank worksheet. Split the paragraph into individual claims. For each claim, find a source, record the date, and mark it verified, unsupported, or outdated.',
        'Plausible numbers are not evidence. Treat each statistic as a separate record, the same way the Trust Index method treats live AI output. When you want this run as an operational workflow rather than a drill, [[book a demo|/#book-demo]] or read [[AI claim verification|/data-verification#ai-claim-verification]].',
      ],
      bullets: [
        'Copy the exact wording. Do not paraphrase before you check it.',
        'One source per claim. If a sentence contains two numbers, split it.',
        'Verdicts: verified, unsupported, outdated, or needs specialist review.',
        'Causal language ("which analysts say will push") is a claim about interpretation, not a fact.',
      ],
      dataset: { file: '15-ai-generated-market-claim.txt', label: 'Download the AI paragraph' },
      extraDatasets: [{ file: '15-ai-claim-worksheet.csv', label: 'Download the claim worksheet' }],
      walkthrough: [
        'The paragraph mixes market size, CAGR, a regional mix figure, a unit cost, a causal "cut failures by half," and a surcharge rumor. Those are at least six claims.',
        'You should not be able to verify all of them from a single blog post. "Quietly raised surcharges" and "cut those failures by half" are the rows most likely to land as unsupported unless you find a named study or carrier notice.',
        'The point is not to finish with a green dashboard. The point is a reviewable trail: claim, source, date, verdict. That trail is what a demo of Clarify Data is for.',
      ],
    },
  ],
  faqs: [
    {
      question: 'What are business intelligence exercises?',
      answer: definition,
    },
    {
      question: 'Who should use these BI practice datasets?',
      answer:
        'Analysts practicing dashboards, students, and job seekers. They are top-of-funnel learning material, not a buying guide for a data verification service.',
    },
    {
      question: 'What is the difference between data validation and data verification?',
      answer:
        'Validation checks whether a value fits agreed rules such as type, range, and completeness. Verification checks whether a source actually supports the claim, is current enough, and is close enough to the original record. A field can pass validation and still be unverified.',
    },
    {
      question: 'Why include an AI claim-checking exercise?',
      answer:
        'Fluent model output often mixes accurate facts, stale figures, and invented statistics in one paragraph. Breaking the paragraph into claims and sourcing each one is the Trust Index method taught as a drill.',
    },
    {
      question: 'Can I use the CSVs in a class or portfolio?',
      answer:
        'Yes. The files are synthetic practice data. Cite this article if you republish a walkthrough, and do not present the figures as real market statistics.',
    },
  ],
}
