import type { Article } from '@/lib/articles'

const lede =
  'Business intelligence exercises are hands-on practice problems that take you from a raw file to a defensible decision. Each one covers a specific step of real BI work - profiling, cleaning, modeling, analysis, and communication - using a dataset you can open right now. Work through them in order and you build the full chain, not just the dashboard at the end.'

export const biExercisesArticle: Article = {
  slug: 'business-intelligence-exercises',
  title: '14 Business Intelligence Exercises (With Practice Datasets and Worked Checks)',
  summary:
    'Fourteen BI practice drills using three real messy CSVs, with worked checks covering profiling, cleaning, deduplication, validation, star-schema modeling, time-series, cohort analysis, segmentation, variance bridges, forecasting, dashboard design, analytical writing, and AI claim verification.',
  lede,
  category: 'Practice',
  published: 'September 1, 2026',
  publishedIso: '2026-09-01',
  readTime: '28 min read',
  sections: [
    {
      heading: 'How to use this set',
      paragraphs: [
        'Most BI practice material stops at "build a sales dashboard in Power BI." That skips the part that actually breaks in real jobs: the data was wrong, the metric was defined three different ways, and nobody could say where the number came from. These exercises are ordered to fix that.',
        'Work through them in order. The first four exercises cover the data before any analysis happens. Exercises 5 and 6 cover structure and definition. Exercises 7 through 11 cover the analysis itself. Exercises 12 through 14 cover what you do with results.',
      ],
    },
    {
      heading: 'Before you start',
      paragraphs: [
        'Download the three practice files below. Everything in this article uses them. The [[data preparation guide|/data-sorting]] and [[data validation guide|/data-validation]] are the method references for the first four exercises.',
        'Tools: every exercise works in Excel or Google Sheets. Where SQL, Python, Power BI, or Tableau make it faster, that is noted. Do not switch tools mid-exercise to avoid the hard part.',
        'Keep a log. One page per exercise: the question you were answering, what you did, what you found, and what you still cannot prove. That log is the actual skill. The dashboard is just an output.',
      ],
      bullets: [
        'messy_customers.csv - 199 customer records with realistic quality problems. Used in Exercises 1-4.',
        'retail_orders.csv - 1,340 order lines, 881 orders, 420 customers, January 2024 to June 2026. Used in Exercises 5, 7-9, 11-13.',
        'budget_vs_actual.csv - six months of budget vs actual by SKU. Used in Exercise 10.',
      ],
    },
  ],
  exercises: [
    {
      number: 1,
      title: 'Profile the dataset before you touch it',
      skill: 'Data profiling - Excel, SQL, or pandas - 30 min',
      paragraphs: [
        'Open messy_customers.csv and resist the urge to clean anything. Your only job is to describe what is there.',
        'For each of the nine columns, record: row count, count and percentage of blanks, number of distinct values, and the data type you expect versus what is actually stored. For numeric columns add min, max, and mean. For text columns list distinct values if there are fewer than 20.',
      ],
      dataset: { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
      walkthrough: [
        'Deliverable: A one-page profile table, plus a short list of anything that looks wrong.',
        'Check yourself: The file has 199 rows. Your profile should surface 13 distinct spellings of country (there are only 5 real countries), 8 spellings of segment, 8 spellings of status, 8 blank emails, 10 blank revenue values, 8 negative revenue values, 9 rows where seats is zero or negative, and 6 dates stored as 0000-00-00. If you found fewer than half of these, your profile was not systematic enough.',
        'Common mistake: profiling by scrolling. Distinct-value counts and null rates catch in seconds what eyeballing misses entirely.',
      ],
    },
    {
      number: 2,
      title: 'Clean and standardize without losing information',
      skill: 'Data normalization - Excel/Power Query, SQL, or pandas - 45 min',
      paragraphs: [
        'Produce a clean version of messy_customers.csv. Rule: never overwrite a source column. Add a cleaned column beside it. When someone asks why a number changed, you need the before.',
      ],
      bullets: [
        'Names trimmed of leading/trailing whitespace and stored consistently. Decide how you handle "Novak, Liam" versus "Liam Novak" and apply it to every row.',
        'Country collapses to five canonical values. Keep the original in a country_raw column.',
        'Segment collapses to three: SMB, Mid-Market, Enterprise.',
        'Status collapses to four: Active, Churned, Trial, Paused.',
        'signup_date is a real date type. Three input formats exist: YYYY-MM-DD, DD/MM/YYYY, and Mon DD, YYYY. Note that 09/02/2025 is ambiguous - write down which convention you assumed and why.',
        'monthly_revenue is numeric, with currency prefixes, suffixes, and comma decimal separators handled.',
      ],
      dataset: { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
      walkthrough: [
        'Deliverable: A cleaned file plus a mapping table showing every raw value and what it became.',
        'Common mistake: silently deleting rows you cannot parse. Flag them instead - a parse_status column of ok / ambiguous / failed keeps the row count honest.',
      ],
    },
    {
      number: 3,
      title: 'Deduplicate without deleting real customers',
      skill: 'Entity resolution - Excel, SQL, or recordlinkage - 45 min',
      paragraphs: [
        'The file has two different problems that people usually lump together.',
        'First find exact duplicates: identical customer_id appearing more than once. There are 5. Then find near duplicates - the same person entered twice under different IDs, with the name re-cased and the email altered (uppercased, or a dot swapped for an underscore). There are roughly a dozen.',
        'Build a match key: lowercase the name, strip punctuation and whitespace, take the email local part with separators removed, and compare. Then write survivorship rules before you run it. When two records merge, which one\'s revenue, signup date, and status wins? Earliest signup? Highest revenue? Most recent status? Write the rule down before you run it.',
      ],
      dataset: { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
      walkthrough: [
        'Deliverable: A deduplicated file, a canonical_customer_id column linking merged records back to their originals, and your survivorship rules in plain English.',
        'Check yourself: did your match key accidentally merge two different people who share a common surname? Print every merge and read them. Over-merging is worse than under-merging - you cannot unmerge a customer you deleted.',
        'Common mistake: fuzzy matching on name alone. Two real people named Bruno Costa will be collapsed into one, and your customer count will be quietly wrong forever.',
      ],
    },
    {
      number: 4,
      title: 'Write validation rules, and find where validation stops',
      skill: 'Data validation and its limits - any tool - 30 min',
      paragraphs: [
        'Write ten explicit rules your cleaned customer file must pass, each as a testable statement with an action when it fails. For example: monthly_revenue must be >= 0 - quarantine the row and flag for review. Cover completeness (required fields), format (email shape, date parseability), range (seats > 0), referential integrity (every status is in the allowed list), and internal consistency (a Churned customer with positive current revenue is contradictory).',
        'Run them. Count what fails. Then the important half: take a row that passes all ten rules. A record can be perfectly well-formed and still be false. The email is valid but belongs to someone who left the company. The revenue figure is real but from last year\'s contract. The segment is correctly spelled but was misassigned by a sales rep.',
        '[[Data validation|/data-validation]] asks whether data conforms to its expected structure and rules. Verification asks whether it corresponds to reality, checked against external evidence. The [[Trust Index methodology|/trust-index]] is built on that distinction. Passing validation is necessary and not sufficient - confusing the two produces dashboards that are internally consistent and externally wrong.',
      ],
      dataset: { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
      walkthrough: [
        'Deliverable: ten written rules, a count of failing rows, and three sentences on what passing rows still do not prove.',
      ],
    },
    {
      number: 5,
      title: 'Turn a flat file into a star schema',
      skill: 'Dimensional modeling - Power BI, SQL, or a spreadsheet - 60 min',
      paragraphs: [
        'retail_orders.csv is a flat file: 1,340 rows, one per order line, with customer, product, channel, and region attributes repeated on every row. Restructure it into a star schema.',
        'State the grain in one sentence first: "One order line." Everything else follows from that. Get it wrong and every measure downstream is wrong.',
        'Extension: product list prices change over time. Sketch how you would handle that as a slowly changing dimension - Type 2 means adding a new row with valid-from/valid-to dates rather than overwriting - and what breaks if you just overwrite the price.',
      ],
      bullets: [
        'Build fact_sales holding only keys and measures: order_id, order_line, date_key, customer_key, product_key, channel_key, region_key, quantity, unit_price, discount_rate, line_revenue.',
        'Build dimensions: dim_date (date, month, quarter, year, month name, day of week), dim_product (sku, product name, category, list price), dim_customer, dim_channel, dim_region.',
        'Verify: total line_revenue must equal EUR 149,334.96 and distinct order count must equal 881. If either moved, your joins are duplicating rows.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: the model plus a diagram of the relationships and their cardinality.',
      ],
    },
    {
      number: 6,
      title: 'Write a KPI definition that survives an audit',
      skill: 'Metric definition - a document - 40 min',
      paragraphs: [
        'Most BI disputes are not analysis disputes. They are definition disputes discovered late.',
        'Pick three metrics from the orders data - Average Order Value, Repeat Purchase Rate, and Discount Rate - and write a full specification for each. Every spec must state: the exact name used everywhere, the business question it informs, the formula with explicit numerator and denominator, the grain (per order or per customer or per line), exclusions (returns, test accounts, internal orders, zero-value lines), the time basis (order date or ship date, calendar or fiscal), the target that triggers action, the owner who decides when the definition changes, and the known limitations of the metric.',
        'The test: Average Order Value - is the denominator distinct orders (881) or order lines (1,340)? Both are computable. They give different answers. Your spec has to say which, or two teams will report two AOVs and both will be "right."',
      ],
      walkthrough: [
        'Deliverable: three one-page specs. Then compute each metric two defensible ways and show how far apart the answers land.',
      ],
    },
    {
      number: 7,
      title: 'Separate real trend from seasonality',
      skill: 'Time-series reading - Excel, SQL window functions, or pandas - 45 min',
      paragraphs: [
        'Aggregate retail_orders.csv to monthly revenue. Then produce four views of the same series: raw monthly revenue, month-over-month change as a percentage, year-over-year change for the same month (only possible from January 2025 onward), and a 3-month centered moving average.',
        'This dataset has deliberate seasonal lift in November-December and a smaller one in April-May. Your month-over-month view will show a dramatic January drop that is entirely seasonal and means nothing. If your written interpretation treats it as a decline, you have made the most common error in monthly business reporting.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: one chart with all four views, and a paragraph answering: is the business growing, or does it just have a good November?',
        'Rule to internalize: for seasonal businesses, month-over-month is close to useless on its own. Year-over-year and moving averages exist because of this.',
      ],
    },
    {
      number: 8,
      title: 'Build a cohort retention view',
      skill: 'Cohort analysis - SQL or pandas - 60 min',
      paragraphs: [
        'Assign each customer to a cohort based on the month of their first order. For each cohort, calculate the percentage who placed at least one order in month 1, month 2, month 3, and so on after acquisition. Lay it out as a triangle: cohorts down the rows, months-since-first-order across the columns.',
        'This one has a trap. Most customers in this dataset order once or twice, with long gaps between purchases. Monthly cohorts will look almost empty, and a beginner concludes retention is catastrophic. It is not - the measurement window is wrong for the purchase cycle. Rebuild it with quarterly cohorts and quarterly periods and compare.',
        'The transferable lesson: cohort granularity must match the natural repurchase interval. A coffee subscription is measured weekly. Hiking packs are not.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: the retention triangle plus three sentences on what it shows.',
      ],
    },
    {
      number: 9,
      title: 'Segment customers with RFM',
      skill: 'Customer segmentation - SQL, Excel, or pandas - 45 min',
      paragraphs: [
        'Using 30 June 2026 as your "as of" date, calculate per customer: Recency (days since last order), Frequency (number of distinct orders), and Monetary (total revenue). Score each dimension 1-5 by quintile - 5 is best, and for recency fewer days is better. Concatenate into an RFM code and group into named segments: Champions (555, 554...), Loyal, At Risk, Hibernating, New.',
        'Frequency will not split into clean quintiles. A large share of these customers have exactly one order, so multiple quintile boundaries land on the same value. That is not a bug in your code - it is the shape of the data. Decide explicitly: fewer buckets, or rank with ties broken by monetary value? Document the choice.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: a segment table with customer counts and total revenue per segment, plus one concrete recommended action per segment.',
        'Common mistake: reporting the segments and stopping. A segmentation with no attached action is a table, not analysis.',
      ],
    },
    {
      number: 10,
      title: 'Explain a revenue miss with a price/volume/mix bridge',
      skill: 'Variance analysis - Excel - 60 min',
      paragraphs: [
        'Use budget_vs_actual.csv: 8 SKUs across six months of 2026, with budgeted and actual quantities and unit prices.',
        'For each SKU-month, compute budget revenue (budget_quantity x budget_unit_price) and actual revenue. Then decompose the gap. Volume effect: (actual qty - budget qty) x budget price. Price effect: (actual price - budget price) x actual qty. These two sum exactly to the total revenue variance for a single product. Verify that they do - if they do not, you have a formula error, not a rounding issue.',
        '"We missed by 8%" is not information. "We missed by 8%: volume was ahead, but discounting cost us 11 points and the mix shifted toward accessories" is a decision.',
      ],
      bullets: [
        'Volume effect = (actual qty - budget qty) x budget price.',
        'Price effect = (actual price - budget price) x actual qty.',
        'At portfolio level, split volume further into pure volume and mix effect. All three sum to the total variance.',
      ],
      dataset: { file: 'budget_vs_actual.csv', label: 'Download budget_vs_actual.csv' },
      walkthrough: [
        'Deliverable: a waterfall chart from budget revenue to actual revenue, with each bar labeled, and a three-bullet explanation a CFO could read in thirty seconds.',
      ],
    },
    {
      number: 11,
      title: 'Forecast with a baseline you have to beat',
      skill: 'Forecasting and evaluation - Excel, statsmodels, or Prophet - 60 min',
      paragraphs: [
        'Hold out the last six months of retail_orders.csv (January-June 2026). Train only on data through December 2025. Produce three forecasts for the holdout period, then score them.',
        'Score all three on the holdout using MAE (mean absolute error) and MAPE (mean absolute percentage error). MAPE distorts badly when actuals approach zero, so report MAE alongside it.',
        'Often a model will not beat seasonal naive. A model that loses to a one-line baseline should not go into production, and knowing that before you present is the difference between an analyst and someone with a forecasting library installed.',
      ],
      bullets: [
        'Naive: next month equals last month.',
        'Seasonal naive: next month equals the same month one year earlier. This is your benchmark.',
        'Your model: moving average, linear trend with seasonal factors, exponential smoothing, or your choice.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: a comparison table of the three methods, plus one sentence: did your model beat seasonal naive?',
        'Common mistake: fitting on all the data and reporting how well it fits. That measures memory, not forecasting.',
      ],
    },
    {
      number: 12,
      title: 'Design a one-screen executive dashboard',
      skill: 'Dashboard design - Power BI, Tableau, Looker Studio, or Excel - 90 min',
      paragraphs: [
        'Build one screen - no scrolling, no tabs - for a managing director who has ninety seconds.',
        'Show it to someone who does not know the data. Give them ninety seconds, take it away, and ask what the business should do this week. If they cannot answer, the design failed regardless of how it looks.',
      ],
      bullets: [
        'Maximum seven metrics. Choosing what to leave out is the exercise.',
        'Every number carries a comparison: versus prior period, versus target, or versus a benchmark. A bare number is uninterpretable.',
        'Most important metric top-left, where the eye lands first.',
        'Sort bar charts by value, not alphabetically. Label directly instead of using a legend where you can.',
        'No dual axes. No pie chart with more than three slices. Every filter that is applied is visible on the screen.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: the dashboard, plus a written note listing what you excluded and why.',
      ],
    },
    {
      number: 13,
      title: 'Turn a chart into a recommendation',
      skill: 'Analytical writing - a document - 30 min',
      paragraphs: [
        'Take your strongest finding from Exercises 7-11 and write it up in exactly this structure, under 250 words.',
        'Delete every sentence that does not survive "so what?" If the confidence and limits section is empty, you have not finished thinking. Every real analysis has a boundary, and stating it is what makes the rest credible.',
      ],
      bullets: [
        'Situation: the stable context everyone already agrees on.',
        'Complication: what changed, with the number.',
        'Question: the decision now on the table.',
        'Recommendation: what to do, who owns it, by when.',
        'Confidence and limits: how sure you are and what would change your mind.',
      ],
      walkthrough: [
        'Deliverable: the written-up finding in the five-part structure, under 250 words.',
      ],
    },
    {
      number: 14,
      title: 'Verify an AI-generated market claim',
      skill: 'Evidence verification - a browser and a document - 60 min',
      paragraphs: [
        'This exercise does not appear in most BI practice lists, and it is now part of the job. Analysts increasingly paste AI-generated market context into decks, and that content is fluent whether or not it is true.',
        'Ask any AI assistant for a paragraph of market context on an industry you know. Pick three claims from that paragraph - a market size, a growth rate, and an implied cause - and check each one.',
        'Typically the market-size figures resolve to one or two paywalled reports everyone re-quotes, the growth rates are stale by a year or more, and the causal claims have no source at all because the model generated a plausible connective. Learning to see this quickly is the highest-leverage habit in this list. The [[AI claim verification|/data-verification#ai-claim-verification]] workflow runs this check at scale on live briefs.',
      ],
      bullets: [
        'Classify each claim: statistic, forecast, causal claim, or definition. They need different evidence.',
        'Trace each to a primary source - not a blog citing a press release citing the blog. If the chain loops without reaching an original dataset or report, that is a finding.',
        'Check four dimensions of fit: does the source definition match the claim? Its geography? Its time period? Its methodology? A real figure applied to the wrong scope is still a wrong figure.',
        'Assign a verdict: Verified, Partially verified, Unsupported, Outdated, or Unverifiable. Record the source URL, publication date, and your confidence.',
        'Rewrite the paragraph containing only what you could support, with gaps left visible rather than smoothed over.',
      ],
      walkthrough: [
        'Deliverable: a verification table and a rewritten paragraph containing only supported claims.',
        'What you will find: plausible numbers are not evidence. Treat each statistic as a separate record, the same way the [[Trust Index methodology|/trust-index]] treats live AI output.',
      ],
    },
  ],
  trailingSections: [
    {
      heading: 'Build your own practice datasets',
      paragraphs: [
        'When you have exhausted these, generate your own rather than downloading another clean Kaggle file.',
      ],
      bullets: [
        'Take any clean dataset and deliberately break it - inject 5% nulls, three date formats, near-duplicate names, and a handful of impossible values. Hand it to yourself a week later.',
        'Public sources worth using: Eurostat, CBS StatLine, World Bank Open Data, and your own exported bank or e-commerce data. Real data has real problems.',
        'Best of all: ask someone in finance or operations at your own company for last quarter\'s actual export. It will be messier than anything in this article.',
      ],
    },
    {
      heading: 'A four-week practice plan',
      paragraphs: [
        'Two hours per exercise, four exercises a week. The log matters more than the speed.',
      ],
      bullets: [
        'Week 1 - Exercises 1-4: profile an unfamiliar file and state what is wrong with it in under an hour.',
        'Week 2 - Exercises 5-6: model a flat file correctly and write a metric definition two teams would both accept.',
        'Week 3 - Exercises 7-11: run trend, cohort, segmentation, variance, and forecast analysis, and know which one the question needs.',
        'Week 4 - Exercises 12-14: present a finding as a decision and verify the evidence underneath it.',
      ],
    },
    {
      heading: 'From exercises to a real decision',
      paragraphs: [
        'These exercises are built around the same sequence real [[business intelligence|/business-intelligence]] work follows: prepare the data, validate its structure, verify the claims that matter, then analyze and communicate.',
        'When the dataset is your company\'s and the decision has money attached, the last two steps stop being an exercise. Clarify Data works on that chain - [[data preparation|/data-sorting]], [[data validation|/data-validation]], [[data verification|/data-verification]], and business intelligence with human review where the evidence is thin or the stakes are high.',
        '[[Book a discovery call|/#book-demo]] and we will walk through a live example.',
      ],
    },
  ],
  faqs: [
    {
      question: 'What are business intelligence exercises?',
      answer:
        'Structured practice problems that take you through the full BI workflow on real data - profiling, cleaning, modeling, analysis, visualization, and communicating a recommendation. They differ from tool tutorials in that the goal is a defensible decision, not a finished chart.',
    },
    {
      question: 'Do I need Power BI or Tableau?',
      answer:
        'No. Every exercise here is completable in Excel or Google Sheets. SQL makes Exercises 7-9 considerably faster and is worth learning for that reason alone. Tool proficiency without analytical judgment is the more common gap, not the reverse.',
    },
    {
      question: 'Which exercise should a complete beginner start with?',
      answer:
        'Exercise 1. It requires no formulas beyond counting and it establishes the habit that separates reliable analysts from fast ones: describe the data before you trust it.',
    },
    {
      question: 'How long does this take?',
      answer:
        'Roughly 12-14 hours of focused work across all fourteen. Spread over four weeks, it is a realistic evening commitment.',
    },
    {
      question: 'Are these useful for BI interview preparation?',
      answer:
        'Exercises 5, 6, 10, and 13 map closely to common take-home tasks and case rounds. Interviewers rarely ask you to build something pretty; they ask you to define a metric precisely, explain a variance, or defend an assumption.',
    },
    {
      question: 'How is this different from a BI course?',
      answer:
        'There is no video and no certificate. What you get is a set of problems with data attached and a way to check whether you were right.',
    },
  ],
}
