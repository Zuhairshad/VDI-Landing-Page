import type { ContentPageData } from '@/components/ContentPage'

export const dataPreparationPage: ContentPageData = {
  eyebrow: 'Resource guide / Data preparation',
  title: 'Prepare messy information without erasing its history',
  intro: 'A practical guide to profiling, mapping, standardizing, and deduplicating data before it is analyzed or verified.',
  note: 'Structure comes first. Every cleanup decision should remain reviewable, reversible, and connected to the original value.',
  sections: [
    {
      eyebrow: 'Why preparation matters',
      title: 'Clean-looking data can still carry hidden errors',
      intro: 'Preparation is not cosmetic formatting. It establishes whether records mean the same thing and whether comparisons are valid.',
      variant: 'split',
      items: [
        { title: 'Identity problems', text: 'Names, identifiers, products, organizations, and locations can appear in several forms. Merging too early can join different entities; avoiding every merge leaves duplicates that distort results.' },
        { title: 'Definition problems', text: 'Columns with similar labels may use different units, time windows, populations, or business rules. A shared label does not guarantee a shared definition.' },
      ],
    },
    {
      id: 'preparation-workflow',
      eyebrow: 'Preparation workflow',
      title: 'A traceable path from source files to analysis-ready data',
      variant: 'steps',
      items: [
        { title: 'Inventory the sources', text: 'Record file, system, owner, date range, access limits, and intended use before transforming a value.' },
        { title: 'Profile structure and quality', text: 'Identify types, missingness, uniqueness, distributions, formatting patterns, and obvious anomalies.' },
        { title: 'Define a target schema', text: 'Document field meaning, accepted values, units, identifiers, and how unknown or conflicting values will be represented.' },
        { title: 'Normalize with lineage', text: 'Standardize dates, units, names, and categories while preserving original values and transformation notes.' },
        { title: 'Resolve duplicates carefully', text: 'Use explicit match rules, confidence thresholds, and a review queue for uncertain entity links.' },
        { title: 'Publish an exception report', text: 'Deliver the prepared dataset with unresolved issues, assumptions, exclusions, and quality checks.' },
      ],
    },
    {
      eyebrow: 'Review checklist',
      title: 'Questions to answer before analysis begins',
      variant: 'evidence',
      items: [
        { title: 'Are meanings explicit?', text: 'Every material field should have a definition, unit, time basis, and accountable owner.', bullets: ['Separate unknown from zero or not applicable', 'Preserve original values', 'Record derived-field formulas'] },
        { title: 'Are matches defensible?', text: 'Entity resolution needs observable evidence and a path for humans to reject uncertain merges.', bullets: ['Use stable identifiers when available', 'Show why records matched', 'Retain rejected alternatives'] },
        { title: 'Can another analyst repeat it?', text: 'The input version, rules, transformations, and exceptions should be sufficient to reproduce the output.', bullets: ['Version source files and rules', 'Record row-level exceptions', 'Define refresh ownership'] },
      ],
    },
  ],
  related: [
    { label: 'Data Validation Guide', href: '/data-validation', description: 'Test prepared data against explicit rules and expected behavior.' },
    { label: 'How It Works', href: '/how-it-works', description: 'See where preparation fits in the full evidence workflow.' },
  ],
}

export const dataValidationPage: ContentPageData = {
  eyebrow: 'Resource guide / Data validation',
  title: 'Turn data-quality expectations into explicit tests',
  intro: 'Validation checks whether information is complete, plausible, consistent, and fit for a defined use. It does not prove that every value is true.',
  note: 'A passing rule means the record met a stated condition. It is not a substitute for source verification or domain judgment.',
  sections: [
    {
      eyebrow: 'Scope',
      title: 'Validation and verification answer different questions',
      variant: 'split',
      items: [
        { title: 'Validation asks whether data behaves as expected', text: 'It checks schema, required fields, ranges, relationships, uniqueness, formats, and business rules.' },
        { title: 'Verification asks whether a claim is supported', text: 'It connects the value or assertion to credible evidence, current sources, and an appropriate review decision.' },
      ],
    },
    {
      eyebrow: 'Validation workflow',
      title: 'Build checks around the decision the data will support',
      variant: 'steps',
      items: [
        { title: 'Define the use and tolerance', text: 'Identify who will use the result, what could go wrong, and which failures should block release.' },
        { title: 'Write observable rules', text: 'Express expectations as testable conditions with clear pass, warning, and fail states.' },
        { title: 'Test across levels', text: 'Check fields, records, relationships, files, time series, and cross-source consistency.' },
        { title: 'Triage exceptions', text: 'Separate actual defects from legitimate edge cases, then assign an owner and resolution state.' },
        { title: 'Retest and record', text: 'Run the same checks after correction and preserve the rule version, result, and reviewer decision.' },
      ],
    },
    {
      eyebrow: 'Rule families',
      title: 'Use a compact set of explainable checks',
      variant: 'grid',
      items: [
        { title: 'Completeness', text: 'Required fields, expected coverage, missing values, and gaps across time or entities.' },
        { title: 'Conformance', text: 'Types, formats, allowed values, units, and schema compatibility.' },
        { title: 'Consistency', text: 'Cross-field logic, related-table integrity, stable definitions, and agreement across sources.' },
        { title: 'Plausibility', text: 'Ranges, distributions, changes, and domain constraints that surface suspicious values.' },
        { title: 'Uniqueness', text: 'Duplicate identifiers, repeated events, and records that may represent the same entity.' },
        { title: 'Freshness', text: 'Observation dates, update cadence, expired records, and time-sensitive source requirements.' },
      ],
    },
  ],
  related: [
    { label: 'Data Preparation Guide', href: '/data-sorting', description: 'Prepare and normalize information before defining quality gates.' },
    { label: 'Data Verification', href: '/data-verification', description: 'Move from rule compliance to evidence and source support.' },
  ],
}

export const verificationPage: ContentPageData = {
  eyebrow: 'Platform capability / Data verification',
  title: 'Verify material claims with evidence people can inspect',
  intro: 'Clarify Data is designed to separate consequential statements, trace them to sources, surface conflicts, and route uncertainty to human review.',
  note: 'Verification supports judgment. It does not guarantee truth, replace qualified professional review, or make high-impact decisions automatically.',
  sections: [
    {
      eyebrow: 'The verification model',
      title: 'A citation alone is not enough',
      variant: 'grid',
      items: [
        { title: 'Source quality', text: 'Identify the publisher, authority, publication state, date, version, and proximity to the underlying information.' },
        { title: 'Direct support', text: 'Connect the exact claim to the relevant passage, table, record, or calculation rather than a broad bibliography.' },
        { title: 'Context and scope', text: 'Check definitions, geography, population, time window, methodology, and intended use.' },
        { title: 'Conflict handling', text: 'Preserve disagreements and explain whether they arise from different methods, dates, or source quality.' },
        { title: 'Freshness', text: 'Record when the evidence was checked and define when changing information must be reviewed again.' },
        { title: 'Review state', text: 'Show who reviewed the result, what remains uncertain, and whether the claim is ready for its intended use.' },
      ],
    },
    {
      id: 'ai-claim-verification',
      eyebrow: 'AI claim verification',
      title: 'Break fluent output into claims that can be checked',
      intro: 'AI-generated content can mix accurate, outdated, indirect, and invented statements in one convincing paragraph.',
      variant: 'steps',
      items: [
        { title: 'Capture the original output', text: 'Keep the model output, prompt context, date, and version available for review.' },
        { title: 'Extract material claims', text: 'Separate factual assertions, calculations, quotations, interpretations, and recommendations.' },
        { title: 'Search and map evidence', text: 'Connect each material claim to available primary or authoritative evidence and record the search scope.' },
        { title: 'Evaluate support', text: 'Label direct support, partial support, contradiction, missing evidence, staleness, and unresolved ambiguity.' },
        { title: 'Route consequential uncertainty', text: 'Send low-confidence or high-impact claims to a qualified reviewer before release or action.' },
      ],
    },
    {
      eyebrow: 'Deliverables',
      title: 'Outputs designed for review, not black-box scoring',
      variant: 'evidence',
      items: [
        { title: 'Claim register', text: 'A structured list of material assertions, source mappings, dates, and current review states.' },
        { title: 'Evidence pack', text: 'Relevant passages, data fields, definitions, conflicts, and provenance assembled for inspection.' },
        { title: 'Decision notes', text: 'A concise explanation of what is supported, what changed, what remains unknown, and what needs specialist review.' },
      ],
    },
  ],
  related: [
    { label: 'Trust Index Methodology', href: '/trust-index', description: 'See how source, freshness, agreement, and review dimensions are communicated.' },
    { label: 'Evidence Trail Journal Guide', href: '/blog/evidence-trail-ai-generated-claims', description: 'Apply the method to AI-generated documents.' },
  ],
}

export const businessIntelligencePage: ContentPageData = {
  eyebrow: 'Platform capability / Business intelligence',
  title: 'Connect internal performance to verified external context',
  intro: 'Clarify Data is designed to turn prepared internal metrics and traceable market evidence into reviewable analysis, comparisons, and change-aware reports.',
  note: 'These are directional platform capabilities. Specific data connections, update frequency, and deliverables depend on an agreed implementation scope.',
  sections: [
    {
      id: 'analytics-foundation',
      eyebrow: 'Analytics foundation',
      title: 'Reliable intelligence starts before a dashboard',
      variant: 'grid',
      items: [
        { title: 'Comparable metrics', text: 'Align definitions, currencies, units, entities, and time windows before interpreting differences.' },
        { title: 'Traceable calculations', text: 'Keep formulas, exclusions, transformations, and source versions attached to derived metrics.' },
        { title: 'Known limitations', text: 'Make gaps, stale records, sampling limits, and uncertain mappings visible beside the conclusion.' },
      ],
    },
    {
      id: 'market-intelligence',
      eyebrow: 'Market intelligence',
      title: 'Understand what changed outside the business',
      intro: 'External context is useful only when the observed source, date, market, and definition stay attached.',
      variant: 'split',
      items: [
        { title: 'Structured market observations', text: 'Organize competitor, pricing, policy, supply, demand, and category signals into comparable records with provenance.' },
        { title: 'Change-aware reporting', text: 'Compare the latest verified evidence with prior versions and explain which assumptions or conclusions may need review.' },
      ],
    },
    {
      id: 'analysis-workflow',
      eyebrow: 'Analysis workflow',
      title: 'Move from question to decision with the evidence chain intact',
      variant: 'steps',
      items: [
        { title: 'Frame the decision', text: 'Define the audience, material metrics, comparison set, time horizon, and what action the work could inform.' },
        { title: 'Prepare the internal data', text: 'Resolve quality issues, metric definitions, entity mappings, and appropriate access boundaries.' },
        { title: 'Assemble external context', text: 'Collect relevant, dated market evidence and document source selection and known coverage limits.' },
        { title: 'Analyze differences', text: 'Separate observation, calculation, interpretation, assumption, and recommendation.' },
        { title: 'Review and release', text: 'Route sensitive or consequential conclusions to accountable reviewers and publish with limitations.' },
      ],
    },
    {
      eyebrow: 'Dynamic reports and alerts',
      title: 'Treat a report as a versioned decision record',
      variant: 'evidence',
      items: [
        { title: 'What changed', text: 'Show added, removed, revised, and expired evidence since the prior version.' },
        { title: 'Why it matters', text: 'Identify which metrics, interpretations, assumptions, or recommendations may be affected.' },
        { title: 'Who should review', text: 'Route the change according to impact, uncertainty, domain, and the organization’s approval process.' },
      ],
    },
  ],
  related: [
    { label: 'Data Preparation Guide', href: '/data-sorting', description: 'Build a defensible internal analytics foundation.' },
    { label: 'Market Research Journal Guide', href: '/blog/repeatable-market-research-workflows', description: 'Design external research that can be refreshed.' },
  ],
}

export const trustIndexPage: ContentPageData = {
  eyebrow: 'Methodology / Trust Index',
  title: 'Communicate confidence without false precision',
  intro: 'The Clarify Data Trust Index is a proposed, explainable review framework for describing evidence quality. It is not a universal truth score.',
  note: 'A useful confidence label identifies the weakest evidence dimension and the next review action. It should never hide uncertainty behind an opaque percentage.',
  sections: [
    {
      eyebrow: 'Core dimensions',
      title: 'Evaluate the parts of confidence separately',
      variant: 'grid',
      items: [
        { title: 'Authority', text: 'How close is the source to the underlying event, record, or responsibility?' },
        { title: 'Freshness', text: 'Is the source current enough for the decision window and change rate?' },
        { title: 'Directness', text: 'Does the evidence support the exact claim or only a related inference?' },
        { title: 'Agreement', text: 'Do independent sources align after definitions, dates, and scopes are normalized?' },
        { title: 'Provenance', text: 'Can a reviewer trace the result through source versions and transformations?' },
        { title: 'Review status', text: 'Has an accountable person assessed applicability, conflicts, and intended use?' },
      ],
    },
    {
      eyebrow: 'Method',
      title: 'From evidence record to review label',
      variant: 'steps',
      items: [
        { title: 'Define the claim and use', text: 'The same evidence can be sufficient for an internal lead and insufficient for a consequential public claim.' },
        { title: 'Assess each dimension', text: 'Record the supporting evidence and reason for each dimension rather than a bare score.' },
        { title: 'Surface the weakest point', text: 'A stale primary source and a current indirect source have different remediation paths.' },
        { title: 'Assign a review state', text: 'Use clear language such as ready for editorial use, needs source-date review, or requires specialist review.' },
        { title: 'Reassess on change', text: 'Expire or reopen the result when sources, claims, contexts, or decision requirements change.' },
      ],
    },
    {
      eyebrow: 'Responsible interpretation',
      title: 'What the methodology does not claim',
      variant: 'evidence',
      items: [
        { title: 'Not a probability of truth', text: 'A composite number should not imply statistically calibrated certainty unless that calibration has been demonstrated for the specific use.' },
        { title: 'Not a replacement for expertise', text: 'Clinical, legal, regulatory, financial, safety, and other high-impact interpretation remains with qualified professionals.' },
        { title: 'Not permanent', text: 'Confidence can change when evidence is corrected, superseded, contradicted, or applied to a different context.' },
      ],
    },
  ],
  related: [
    { label: 'Data Verification', href: '/data-verification', description: 'See how claims and sources enter the review workflow.' },
    { label: 'Provenance Journal Guide', href: '/blog/provenance-confidence-scoring', description: 'Read the practical case against false precision.' },
  ],
}

export const howItWorksPage: ContentPageData = {
  eyebrow: 'How Clarify Data works',
  title: 'A connected workflow from raw information to reviewable decisions',
  intro: 'Clarify Data is designed to preserve source context through preparation, validation, verification, analysis, and accountable human review.',
  note: 'The exact workflow is configured around the customer’s data, decision, risk level, evidence standard, and review responsibilities.',
  sections: [
    {
      eyebrow: 'The workflow',
      title: 'Nine stages, one evidence chain',
      variant: 'steps',
      items: [
        { title: 'Frame the question', text: 'Define the decision, audience, scope, evidence standard, and accountable reviewers.' },
        { title: 'Collect approved inputs', text: 'Inventory supplied files, documents, public sources, and permitted system data.' },
        { title: 'Prepare and map', text: 'Profile structure, normalize fields, resolve identities, and retain transformation lineage.' },
        { title: 'Validate quality', text: 'Apply explicit completeness, consistency, plausibility, uniqueness, and freshness rules.' },
        { title: 'Extract material claims', text: 'Separate factual assertions, calculations, interpretations, and recommendations.' },
        { title: 'Map evidence', text: 'Connect claims and metrics to current source passages, fields, definitions, and versions.' },
        { title: 'Analyze context', text: 'Compare internal performance, market observations, and previous report versions.' },
        { title: 'Route human review', text: 'Escalate uncertainty and high-impact conclusions to accountable domain reviewers.' },
        { title: 'Deliver and refresh', text: 'Publish traceable outputs with limitations, review state, and change triggers.' },
      ],
    },
    {
      eyebrow: 'What stays attached',
      title: 'Evidence is part of the deliverable',
      variant: 'grid',
      items: [
        { title: 'Source lineage', text: 'Origin, publisher, access date, version, relevant passage, and usage constraints.' },
        { title: 'Transformation lineage', text: 'Mappings, calculations, exclusions, unit changes, merges, and rule versions.' },
        { title: 'Uncertainty', text: 'Conflicts, gaps, indirect evidence, stale values, and assumptions that need attention.' },
        { title: 'Review history', text: 'Reviewer, decision, rationale, overrides, open questions, and release state.' },
      ],
    },
    {
      eyebrow: 'Expected outputs',
      title: 'Choose deliverables that match the decision',
      variant: 'split',
      items: [
        { title: 'Structured evidence', text: 'Prepared datasets, validation reports, claim registers, source maps, comparison tables, and exception queues.' },
        { title: 'Decision support', text: 'Executive briefs, market analyses, benchmark reports, change summaries, and review-ready recommendations.' },
      ],
    },
  ],
  related: [
    { label: 'Data Preparation Guide', href: '/data-sorting', description: 'Start with structure, definitions, and lineage.' },
    { label: 'Data Verification', href: '/data-verification', description: 'Inspect the claim-to-evidence workflow.' },
    { label: 'Trust Index Methodology', href: '/trust-index', description: 'Understand explainable confidence dimensions.' },
  ],
}
