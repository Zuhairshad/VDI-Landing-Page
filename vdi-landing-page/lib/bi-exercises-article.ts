import type { Article } from '@/lib/articles'

const lede =
  'Business intelligence exercises are hands-on practice problems that take you from a raw file to a decision you can defend. This set has 14 of them, built on three free practice datasets with known answers, so you can check your work instead of guessing. They follow the order real BI work happens in: profile, clean, model, analyze, present, and verify.'

export const biExercisesArticle: Article = {
  slug: 'business-intelligence-exercises',
  title: '14 Business Intelligence Exercises With Free Practice Datasets',
  metaTitle: '14 Business Intelligence Exercises With Free Datasets',
  metaDescription:
    'Free business intelligence exercises with practice datasets. 14 hands-on drills for Excel, SQL or Power BI, each with worked answers you can check yourself.',
  summary:
    'Fourteen business intelligence exercises on three free practice datasets, with worked answers for profiling, cleaning, modeling, KPIs, cohorts, RFM, variance, forecasting, dashboards and AI claim checks.',
  lede,
  category: 'Practice',
  published: 'September 1, 2026',
  publishedIso: '2026-09-01',
  updated: 'November 4, 2026',
  updatedIso: '2026-11-04',
  readTime: '30 min read',
  sections: [
    {
      heading: 'How to use these business intelligence exercises',
      paragraphs: [
        'Most BI practice material stops at "build a sales dashboard in Power BI." That skips the part that breaks in real jobs. The data was wrong. The metric had three definitions. Nobody could say where the number came from. These exercises are ordered to train that part first.',
        'Work through them in order. Exercises 1 to 4 deal with data quality before any analysis. Exercises 5 and 6 cover structure and metric definitions. Exercises 7 to 11 are the analysis itself. Exercises 12 to 14 are about what you do with the result.',
        'Each exercise lists the skill, the tools that fit, and a time estimate. Most include a "Check yourself" answer computed from the actual file, so you know when you got it right.',
      ],
    },
    {
      heading: 'Download the BI practice datasets',
      paragraphs: [
        'All 14 exercises use three CSV files. They are synthetic, but the problems in them are the ones you meet in real exports. The [[data preparation guide|/data-sorting]] and the [[data validation guide|/data-validation]] are the method references for the first four exercises.',
      ],
      bullets: [
        'messy_customers.csv: 199 customer records from five countries with inconsistent spellings, mixed date formats, blank fields, and duplicates. Used in Exercises 1 to 4.',
        'retail_orders.csv: 1,340 order lines across 881 orders and 420 customers of an outdoor gear retailer, January 2024 to June 2026. Used in Exercises 5, 7, 8, 9, 11, 12 and 13.',
        'budget_vs_actual.csv: budgeted and actual quantity and price for 8 SKUs across January to June 2026. Used in Exercise 10.',
      ],
      datasets: [
        { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
        { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
        { file: 'budget_vs_actual.csv', label: 'Download budget_vs_actual.csv' },
      ],
    },
    {
      heading: 'Tools and a practice log',
      paragraphs: [
        'Every exercise works in Excel or Google Sheets. Where SQL, Python, Power BI, or Tableau make it faster, the exercise says so. Pick one tool per exercise and stay with it. Switching tools halfway is usually a way to avoid the hard part.',
        'Keep a log with one page per exercise: the question you answered, what you did, what you found, and what you still cannot prove. That log is the real skill. The dashboard is just one output of it.',
      ],
    },
  ],
  exercises: [
    {
      number: 1,
      title: 'Profile the dataset before you touch it',
      skill: 'Data profiling · Excel, SQL, or pandas · 30 min',
      paragraphs: [
        'Open messy_customers.csv and do not clean anything yet. Your only job is to describe what is there.',
        'For each of the nine columns, record the row count, the number and share of blanks, the number of distinct values, and the data type you expect versus the type actually stored. For numeric columns add min, max, and mean. For text columns with fewer than 20 distinct values, list them all.',
      ],
      dataset: { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
      walkthrough: [
        'Deliverable: a one-page profile table and a short list of everything that looks wrong.',
        'Check yourself: the file has 199 rows and 194 distinct customer IDs. A complete profile finds 13 spellings of country for 5 real countries, 8 spellings of segment for 3 real segments, 8 spellings of status for 4 real statuses, 8 blank emails, 10 blank revenue values, 8 negative revenue values, 9 rows where seats is zero or negative, and 6 signup dates stored as 0000-00-00. If you found fewer than half of these, your profile was not systematic enough.',
        'Common mistake: profiling by scrolling. Distinct counts and blank rates catch in seconds what scrolling misses.',
      ],
    },
    {
      number: 2,
      title: 'Clean and standardize without losing information',
      skill: 'Data cleaning · Excel or Power Query, SQL, or pandas · 45 min',
      paragraphs: [
        'Produce a clean version of messy_customers.csv. One rule: never overwrite a source column. Add the cleaned value in a new column beside it. When someone asks why a number changed, you need the original.',
      ],
      bullets: [
        'Names are trimmed and stored in one format. Decide how "Nair, Maya" and "Maya Nair" should look and apply it to every row.',
        'Country maps to five values: Belgium, France, Germany, Netherlands, United Kingdom. Keep the raw value in country_raw.',
        'Segment maps to three values: SMB, Mid-Market, Enterprise. "Small Business", "smb", "MM", and "ENT" all need a rule.',
        'Status maps to four values: Active, Churned, Trial, Paused.',
        'signup_date becomes a real date. The file mixes YYYY-MM-DD, DD/MM/YYYY, and "Mon DD, YYYY". A value like 09/02/2025 is ambiguous, so write down which convention you assumed and why.',
        'monthly_revenue becomes a number. Handle "EUR 383.01", "122.45 EUR", "EUR 1,318.71" (comma as thousands separator), and "113,58" (comma as decimal separator).',
      ],
      dataset: { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
      walkthrough: [
        'Deliverable: a cleaned file and a mapping table that shows every raw value and what it became.',
        'Check yourself: your mapping table for country should have 13 rows that collapse to 5. If a raw value appears in the data but not in your mapping, it was silently dropped or left unmapped.',
        'Common mistake: deleting rows you cannot parse. Flag them instead. A parse_status column with ok, ambiguous, or failed keeps the row count honest.',
      ],
    },
    {
      number: 3,
      title: 'Deduplicate without deleting real customers',
      skill: 'Entity resolution · Excel, SQL, or Python · 45 min',
      paragraphs: [
        'The file has two different duplicate problems that people often treat as one.',
        'First, exact duplicates: the same customer_id appearing more than once. Then, near duplicates: the same person entered twice under different IDs. Their name is recased or reordered ("Ines Okafor" against "Okafor, Ines"), and their email is uppercased or has a dot swapped for an underscore.',
        'Build a match key from the lowercased email with dots, underscores, and spaces removed from the local part. Compare it with a normalized name. Then write your survivorship rules before you merge anything. When two records merge, whose revenue, signup date, and status wins? The earliest signup? The highest revenue? The most recent status? Decide first, then run it.',
      ],
      dataset: { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
      walkthrough: [
        'Deliverable: a deduplicated file, a canonical_customer_id column that links merged records to their originals, and your survivorship rules in plain English.',
        'Check yourself: there are 5 exact duplicate IDs (C1048, C1070, C1105, C1114, C1180) and 17 near-duplicate pairs under different IDs. Customers dropped from 199 rows to 177 is the right neighborhood.',
        'The trap: there are two different people called Ines Okafor. One works at kestrel-logistics.nl (C1030 and C1147), the other at bluefin.de (C1073 and C1111). A name-only match merges all four into one customer. Matching on email keeps them as two people with two records each. Over-merging is worse than under-merging, because you cannot easily unmerge a customer.',
      ],
    },
    {
      number: 4,
      title: 'Write validation rules, and see where validation stops',
      skill: 'Data validation · any tool · 30 min',
      paragraphs: [
        'Write ten rules your cleaned customer file must pass. Make each one testable and give it an action when it fails. For example: monthly_revenue must be zero or more, otherwise quarantine the row and flag it for review. Cover completeness (required fields), format (email shape, valid dates), range (seats greater than zero), allowed values (status is one of four), and internal consistency (a Churned customer with positive current revenue is a contradiction).',
        'Run them and count what fails. Then do the important half. Take a row that passes all ten rules and ask what it still does not prove. The email is valid but belongs to someone who left the company. The revenue is real but from last year\'s contract. The segment is spelled correctly but was assigned wrongly by a sales rep.',
        '[[Data validation|/data-validation]] asks whether data fits its expected structure and rules. Verification asks whether it matches reality, checked against outside evidence. The [[Trust Index methodology|/trust-index]] is built on that difference. Passing validation is necessary but not enough. Mixing the two up produces dashboards that are internally consistent and externally wrong.',
      ],
      dataset: { file: 'messy_customers.csv', label: 'Download messy_customers.csv' },
      walkthrough: [
        'Deliverable: ten written rules, a count of failing rows per rule, and three sentences on what passing rows still do not prove.',
        'Check yourself: before cleaning, at least 8 rows fail the revenue range rule, 9 fail the seats rule, 8 fail email completeness, and 6 fail date validity. If your counts are lower after cleaning, check that cleaning did not hide the problem instead of fixing it.',
      ],
    },
    {
      number: 5,
      title: 'Turn a flat file into a star schema',
      skill: 'Dimensional modeling · Power BI, SQL, or a spreadsheet · 60 min',
      paragraphs: [
        'retail_orders.csv is a flat file of 1,340 rows, one per order line. Customer, product, channel, and region attributes repeat on every row. Restructure it into a star schema.',
        'Write the grain in one sentence first: "one row per order line." Everything else follows from it. Get the grain wrong and every measure built on top is wrong too.',
      ],
      bullets: [
        'Build fact_sales with keys and measures only: order_id, order_line, date_key, customer_key, product_key, channel_key, region_key, quantity, unit_price, discount_rate, line_revenue.',
        'Build the dimensions: dim_date (date, month, quarter, year, month name, weekday), dim_product (sku, product name, category, list price), dim_customer, dim_channel, dim_region.',
        'Decide where region belongs. 193 of the 420 customers appear in more than one region, so region describes the order, not the customer. Put it on dim_customer and your regional totals will be wrong.',
        'Reconcile: total line_revenue must equal EUR 149,334.96 and the distinct order count must equal 881. If either number moves after you join, your joins are duplicating rows.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: the model and a diagram of the relationships with their cardinality.',
        'Extension: unit_price for the same SKU varies across rows (SKU-101 sells at 89.00, 89.67, and 90.56). Keep the list price in dim_product and the charged price on the fact. Then sketch how a Type 2 slowly changing dimension would track list price changes with valid_from and valid_to dates, and what breaks if you overwrite the price instead.',
      ],
    },
    {
      number: 6,
      title: 'Write a KPI definition that survives an audit',
      skill: 'Metric definition · a document · 40 min',
      paragraphs: [
        'Most BI disputes are not about analysis. They are about definitions, discovered too late.',
        'Write a full specification for three metrics from the orders data: Average Order Value, Repeat Purchase Rate, and Discount Rate. Each spec states the exact name used everywhere, the business question it answers, the formula with a clear numerator and denominator, the grain, the exclusions (returns, test accounts, internal orders, zero-value lines), the time basis (order date or ship date, calendar or fiscal), the threshold that triggers action, the owner who approves changes, and the known limits.',
        'Here is the test. For Average Order Value, is the denominator distinct orders (881) or order lines (1,340)? Both can be computed. They give different answers. Your spec has to choose, or two teams will report two AOVs and both will think they are right.',
      ],
      walkthrough: [
        'Deliverable: three one-page specs. Then compute each metric two defensible ways and show how far apart the answers land.',
        'Check yourself: AOV is EUR 169.51 per order and EUR 111.44 per line. Repeat Purchase Rate is 51.9% (218 of 420 customers ordered more than once). Discount Rate is 4.2% of gross revenue, or 26.1% of order lines carry a discount. Same data, very different headlines.',
      ],
    },
    {
      number: 7,
      title: 'Separate a real trend from a one-off spike',
      skill: 'Time-series analysis · Excel, SQL window functions, or pandas · 45 min',
      paragraphs: [
        'Aggregate retail_orders.csv to monthly revenue. Then build four views of the same series: raw monthly revenue, month-over-month change in percent, year-over-year change for the same month (possible from January 2025), and a 3-month moving average.',
        'December 2024 is the trap. Revenue was 2.6 times November. It is tempting to call that holiday seasonality and plan for it again. But a pattern seen once is not seasonality. Check December 2025 before you claim it.',
        'Then answer the real question: is the business growing? Look at revenue, order count, and new customers per quarter side by side. A drop in revenue can come from fewer orders, smaller orders, or fewer new customers. Each points to a different fix.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: one chart with all four views and a paragraph that answers "is the business growing?" with numbers.',
        'Check yourself: full-year revenue rose about 8%, from EUR 63,213 in 2024 to EUR 68,364 in 2025. December 2025 came in below November 2025, so the 2024 spike did not repeat. January to June 2026 revenue was EUR 17,758, down 54% on the same months of 2025. The cause is visible in the customer data: new customer acquisition stopped after Q3 2025. Only one new customer arrived in Q4 2025 and none in 2026.',
        'Rule to remember: month-over-month change alone hides this kind of decline. Year-over-year comparison and a moving average show it, and a split by new and returning customers explains it.',
      ],
    },
    {
      number: 8,
      title: 'Build a cohort retention analysis',
      skill: 'Cohort analysis · SQL or pandas · 60 min',
      paragraphs: [
        'Assign each customer to a cohort by the month of their first order. For each cohort, calculate the share who ordered again in month 1, month 2, month 3, and so on after their first order. Lay it out as a triangle: cohorts down the rows, months since first order across the columns. In SQL this is a CTE for first order date, a join back to orders, and a DATEDIFF bucket.',
        'This exercise has a trap. Most customers here order once or twice, with long gaps. Monthly cohorts look almost empty, and a beginner concludes retention is a disaster. It is not. The measurement window does not match the purchase cycle. Rebuild it with quarterly cohorts and quarterly periods and compare.',
        'The lesson carries over to any business: cohort periods must match the natural repurchase interval. A coffee subscription is measured weekly. Hiking packs are not.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: both retention triangles and three sentences on what they show.',
        'Check yourself: only 18 of 420 customers ordered again in the month right after their first order. In the following quarter it is 88, and within four quarters it is 207, about half. Also note that the last cohort with meaningful size is Q3 2025. Retention numbers for later cohorts are based on almost no customers.',
      ],
    },
    {
      number: 9,
      title: 'Segment customers with RFM analysis',
      skill: 'Customer segmentation · SQL, Excel, or pandas · 45 min',
      paragraphs: [
        'Use 30 June 2026 as your "as of" date. For each customer, calculate Recency (days since last order), Frequency (number of distinct orders), and Monetary value (total revenue). Score each from 1 to 5 by quintile, where 5 is best and fewer days is better for recency. Combine them into an RFM code and group the codes into named segments: Champions, Loyal, At Risk, Hibernating, and New.',
        'Frequency will not split into clean quintiles. Decide what to do about it and document the choice: fewer buckets, or ranking with ties broken by monetary value.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: a segment table with customer count and total revenue per segment, plus one concrete action per segment.',
        'Check yourself: 202 of the 420 customers (48%) have exactly one order. That is more than the bottom two quintiles, so several quintile cutoffs land on the same value. That is the shape of the data and not a bug. Because no new customers arrived after Q3 2025, your "New" segment should be close to empty. If it is large, check your as-of date.',
        'Common mistake: reporting the segments and stopping there. A segmentation without an action attached is a table, not an analysis.',
      ],
    },
    {
      number: 10,
      title: 'Explain a budget variance with a price, volume, and mix bridge',
      skill: 'Variance analysis · Excel · 60 min',
      paragraphs: [
        'Use budget_vs_actual.csv: 8 SKUs in four categories across six months of 2026, with budgeted and actual quantity and unit price.',
        'For each SKU and month, compute budget revenue (budget quantity times budget price) and actual revenue. Then split the gap into two parts. For a single product, they add up exactly to the total variance. Check that they do. If they do not, you have a formula error, not a rounding issue.',
        '"We came in on budget" is not information. "Volume beat plan by EUR 69k, but lower prices gave EUR 53k of it back, mostly in Packs" is something a manager can act on.',
      ],
      bullets: [
        'Volume effect = (actual quantity minus budget quantity) times budget price.',
        'Price effect = (actual price minus budget price) times actual quantity.',
        'At portfolio level, split the volume effect into pure volume (total units at the average budget price) and mix (the shift between cheaper and pricier SKUs). All three add up to the total variance.',
      ],
      dataset: { file: 'budget_vs_actual.csv', label: 'Download budget_vs_actual.csv' },
      walkthrough: [
        'Deliverable: a waterfall chart from budget revenue to actual revenue with each bar labeled, and three bullets a CFO could read in thirty seconds.',
        'Check yourself: budget revenue is EUR 2,443,680.00 and actual revenue is EUR 2,459,456.51, a favorable variance of EUR 15,776.51 (0.65%). The volume effect is +EUR 68,819.00 and the price effect is minus EUR 53,042.49. Packs is the only category below budget, down EUR 55,405, with both lower volume and lower prices. The headline "on budget" hides two large effects that cancel out.',
      ],
    },
    {
      number: 11,
      title: 'Forecast revenue against a baseline you have to beat',
      skill: 'Forecasting and evaluation · Excel, statsmodels, or Prophet · 60 min',
      paragraphs: [
        'Hold out the last six months of retail_orders.csv (January to June 2026). Train only on data up to December 2025. Make three monthly revenue forecasts for the holdout period and score them.',
        'Score each one with MAE (mean absolute error) and MAPE (mean absolute percentage error). MAPE gets distorted when actual values are small, so always report MAE next to it.',
      ],
      bullets: [
        'Naive: every holdout month equals the last known month (December 2025).',
        'Seasonal naive: each month equals the same month one year earlier.',
        'Your model: a moving average, a linear trend with seasonal factors, exponential smoothing, or anything you can explain.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: a comparison table of the three methods and one sentence: did your model beat the best baseline?',
        'Check yourself: seasonal naive does very badly here, with an MAE around EUR 3,500 and a MAPE above 150%. It assumes 2026 will look like 2025, and it did not. Plain naive does much better, with an MAE around EUR 900. That is the real lesson. No forecasting method can predict a business change it has never seen. Here, new customers stopped arriving. Say so in your write-up instead of tuning the model until it fits.',
        'Common mistake: fitting on all the data and reporting how well it fits. That measures memory, not forecasting.',
      ],
    },
    {
      number: 12,
      title: 'Design a one-screen executive dashboard',
      skill: 'Dashboard design · Power BI, Tableau, Looker Studio, or Excel · 90 min',
      paragraphs: [
        'Build one screen, with no scrolling and no tabs, for a managing director who has ninety seconds.',
        'Then show it to someone who does not know the data. Give them ninety seconds, take it away, and ask what the business should do this week. If they cannot answer, the design failed, no matter how it looks. With this dataset, a good dashboard makes the drop in new customers impossible to miss.',
      ],
      bullets: [
        'Seven metrics at most. Choosing what to leave out is the exercise.',
        'Every number has a comparison: against the prior period, the target, or a benchmark. A bare number cannot be read.',
        'The most important metric goes top left, where the eye lands first.',
        'Sort bar charts by value, not alphabetically. Label bars directly instead of using a legend where you can.',
        'No dual axes. No pie chart with more than three slices. Every active filter is visible on screen.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: the dashboard and a short note listing what you left out and why.',
      ],
    },
    {
      number: 13,
      title: 'Turn a chart into a recommendation',
      skill: 'Analytical writing · a document · 30 min',
      paragraphs: [
        'Take your strongest finding from Exercises 7 to 11 and write it up in the structure below, in under 250 words.',
        'Delete every sentence that does not survive "so what?" If the confidence and limits part is empty, you have not finished thinking. Every real analysis has a boundary, and stating it is what makes the rest credible.',
      ],
      bullets: [
        'Situation: the context everyone already agrees on.',
        'Complication: what changed, with the number.',
        'Question: the decision now on the table.',
        'Recommendation: what to do, who owns it, and by when.',
        'Confidence and limits: how sure you are and what would change your mind.',
      ],
      dataset: { file: 'retail_orders.csv', label: 'Download retail_orders.csv' },
      walkthrough: [
        'Deliverable: the finding in the five-part structure, under 250 words.',
        'Example complication: "Revenue for January to June 2026 is down 54% on last year. No new customers have been acquired since Q3 2025, while repeat customers keep ordering."',
      ],
    },
    {
      number: 14,
      title: 'Verify an AI-generated market claim',
      skill: 'Evidence verification · a browser and a document · 60 min',
      paragraphs: [
        'This exercise is missing from most BI practice lists, yet it is now part of the job. Analysts paste AI-generated market context into slide decks, and that text reads well whether or not it is true.',
        'Ask any AI assistant for a paragraph of market context on an industry you know. Pick three claims from it: a market size, a growth rate, and a stated cause. Then check each one.',
        'You will often find that market size figures lead back to one or two paywalled reports that everyone quotes. Growth rates are often a year or more out of date. Causal claims often have no source at all, because the model wrote a plausible link between two facts. Learning to spot this quickly may be the most valuable habit in this list. The [[AI claim verification|/data-verification#ai-claim-verification]] workflow runs this check on live briefs.',
      ],
      bullets: [
        'Classify each claim as a statistic, forecast, causal claim, or definition. Each type needs different evidence.',
        'Trace each claim to a primary source. A blog citing a press release citing the same blog does not count. If the chain loops without reaching an original dataset or report, that is a finding.',
        'Check four kinds of fit: does the source match the claim\'s definition, geography, time period, and method? A real figure applied to the wrong scope is still wrong.',
        'Give a verdict: Verified, Partially verified, Unsupported, Outdated, or Unverifiable. Record the source URL, the publication date, and your confidence.',
        'Rewrite the paragraph with only what you could support, and leave the gaps visible.',
      ],
      walkthrough: [
        'Deliverable: a verification table and a rewritten paragraph that contains only supported claims.',
        'What you will learn: a plausible number is not evidence. Treat each statistic as its own record, the same way the [[Trust Index methodology|/trust-index]] treats live AI output.',
      ],
    },
  ],
  trailingSections: [
    {
      heading: 'Where to find more BI practice datasets',
      paragraphs: [
        'When you finish these, do not just download another clean dataset. Make or find messy ones.',
      ],
      bullets: [
        'Take any clean dataset and break it on purpose. Add 5% blanks, three date formats, near-duplicate names, and a few impossible values. Come back to it a week later.',
        'Public sources worth using: Eurostat, CBS StatLine, World Bank Open Data, and your own exported bank or e-commerce data. Real data has real problems.',
        'Best of all, ask someone in finance or operations at your company for last quarter\'s actual export. It will be messier than anything here.',
      ],
    },
    {
      heading: 'A four-week BI practice plan',
      paragraphs: [
        'Plan about two hours per exercise and three or four exercises a week. The log matters more than speed.',
      ],
      bullets: [
        'Week 1, Exercises 1 to 4: profile an unfamiliar file and say what is wrong with it in under an hour.',
        'Week 2, Exercises 5 and 6: model a flat file correctly and write a metric definition two teams would both accept.',
        'Week 3, Exercises 7 to 11: run trend, cohort, segmentation, variance, and forecast analysis, and know which one a question needs.',
        'Week 4, Exercises 12 to 14: present a finding as a decision and verify the evidence behind it.',
      ],
    },
    {
      heading: 'From practice to a real business decision',
      paragraphs: [
        'These exercises follow the same sequence as real [[business intelligence|/business-intelligence]] work: prepare the data, validate its structure, verify the claims that matter, then analyze and communicate.',
        'When the dataset belongs to your company and the decision has money attached, those steps stop being practice. Clarify Data works on that chain: [[data preparation|/data-sorting]], [[data validation|/data-validation]], [[data verification|/data-verification]], and business intelligence, with human review where the evidence is thin or the stakes are high.',
        '[[Book a discovery call|/#book-demo]] and we will walk through a live example.',
      ],
    },
  ],
  faqs: [
    {
      question: 'What are business intelligence exercises?',
      answer:
        'They are practice problems that take you through the full BI workflow on real-looking data: profiling, cleaning, modeling, analysis, visualization, and writing a recommendation. Unlike tool tutorials, the goal is a decision you can defend, not just a finished chart.',
    },
    {
      question: 'Where can I get free datasets to practice business intelligence?',
      answer:
        'This page includes three free CSV files: a messy customer list, 30 months of retail orders, and a budget versus actual file. Each exercise has answers computed from them. For more, use public sources such as Eurostat, World Bank Open Data, or an export from your own company.',
    },
    {
      question: 'Do I need Power BI or Tableau?',
      answer:
        'No. Every exercise can be done in Excel or Google Sheets. SQL makes Exercises 7 to 9 much faster and is worth learning for that alone. Power BI or Tableau helps most with Exercises 5 and 12. A lack of analytical judgment is a more common gap than a lack of tool skills.',
    },
    {
      question: 'Can I use these as SQL practice exercises?',
      answer:
        'Yes. Load the CSV files into any SQL database, such as SQLite, PostgreSQL, or DuckDB. Exercises 1, 3, 5, 7, 8, and 9 work well in SQL and practice GROUP BY, joins, window functions, and common table expressions.',
    },
    {
      question: 'Which exercise should a complete beginner start with?',
      answer:
        'Exercise 1. It needs nothing beyond counting, and it builds the habit that separates reliable analysts from fast ones: describe the data before you trust it.',
    },
    {
      question: 'How long do all 14 exercises take?',
      answer:
        'About 12 to 14 hours of focused work. Spread over four weeks, that is a realistic evening commitment.',
    },
    {
      question: 'Are these useful for BI analyst interview preparation?',
      answer:
        'Yes. Exercises 5, 6, 10, and 13 are close to common take-home tasks and case interviews. Interviewers rarely ask for something pretty. They ask you to define a metric precisely, explain a variance, or defend an assumption.',
    },
    {
      question: 'How is this different from a BI course?',
      answer:
        'There is a short walkthrough video, but no lessons and no certificate. You get problems with data attached and answers to check your work against. It works best alongside a course, or after one.',
    },
  ],
}
