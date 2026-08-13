import type { Metadata } from 'next'
import { Stethoscope } from 'lucide-react'
import IndustryPage, { type IndustryPageData } from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Medical & Clinical Evidence Workflows | Clarify Data',
  description:
    'Careful workflows for literature review, claim-to-source mapping, study comparison, evidence hierarchy, and required clinical or regulatory review.',
}

const COPPER = 'rgb(194, 89, 24)'

const data: IndustryPageData = {
  eyebrow: 'Medical & clinical',
  icon: <Stethoscope className="w-4 h-4" style={{ color: COPPER }} />,
  title: 'Traceable evidence review with clinical responsibility kept in human hands',
  subtitle:
    'Organize literature, map claims to sources, compare studies, and preserve conflicting findings and version dates for required review by qualified clinical, legal, regulatory, and safety professionals.',
  context: {
    title: 'Medical evidence is conditional and time-sensitive',
    paragraphs: [
      'A medical statement can change meaning with the population, intervention, comparator, outcome, dose, study design, endpoint, follow-up period, and publication status. An abstract or generated summary may omit exactly the limitation that matters to a decision.',
      'Evidence also changes. Preprints become publications, guidance is revised, safety information is updated, and later studies may challenge earlier findings. A responsible workflow must retain dates and versions and make re-review possible.',
    ],
  },
  problem: {
    title: 'A citation does not make a clinical claim safe',
    paragraphs: [
      'A genuine paper may not support the wording attached to it. Findings from an observational study may be presented as causal, a secondary endpoint may be treated as primary, or a result from one population may be generalized to another.',
      'Automation can help organize the work, but it cannot determine clinical appropriateness, diagnose or treat a person, establish regulatory acceptability, or replace the qualified professionals who are accountable for those judgments.',
    ],
  },
  challenges: [
    {
      title: 'Evidence hierarchy',
      description: 'Study designs answer different questions and carry different limitations; a hierarchy is context-dependent rather than a universal ranking.',
    },
    {
      title: 'Conflicting findings',
      description: 'Results may diverge because of population, intervention, comparator, endpoint, bias, sample size, follow-up, or analytical method.',
    },
    {
      title: 'Claim-to-source mismatch',
      description: 'A source may be real but indirect, outdated, underpowered, or narrower than the clinical, safety, or promotional claim being made.',
    },
    {
      title: 'Publication and version dates',
      description: 'Preprints, final publications, corrections, retractions, guidance updates, and safety communications must not be treated as interchangeable.',
    },
    {
      title: 'Selective reporting',
      description: 'Abstracts and summaries can emphasize positive outcomes while omitting secondary findings, limitations, harms, or uncertainty.',
    },
    {
      title: 'High-impact interpretation',
      description: 'Errors can affect health, safety, regulatory obligations, research integrity, or patient communication and require specialist oversight.',
    },
  ],
  workflow: [
    {
      title: 'Define the evidence question',
      description: 'Specify population, intervention or exposure, comparator, outcomes, setting, date window, intended use, and required reviewer roles.',
    },
    {
      title: 'Document the search scope',
      description: 'Record terms, source locations, dates, inclusion and exclusion criteria, language, publication status, and known coverage limits.',
    },
    {
      title: 'Capture source and version',
      description: 'Preserve authorship, publisher, identifier when available, publication type, date, correction or retraction status, and access date.',
    },
    {
      title: 'Map each claim',
      description: 'Link the exact claim to the relevant method, population, result, limitation, or guidance passage instead of citing the document broadly.',
    },
    {
      title: 'Structure study comparison',
      description: 'Compare design, sample, intervention, endpoints, effect measures, uncertainty, harms, limitations, and funding or conflict disclosures.',
    },
    {
      title: 'Surface conflicts and gaps',
      description: 'Record contradictory results, indirect evidence, missing data, outdated sources, and questions that the evidence cannot answer.',
    },
    {
      title: 'Require professional review',
      description: 'Qualified clinical, scientific, legal, regulatory, and safety reviewers evaluate interpretation and intended use before any high-impact action.',
    },
  ],
  capabilities: [
    {
      title: 'Evidence-question structuring',
      description: 'Designed to convert a broad request into explicit population, intervention or exposure, comparator, outcome, scope, and review criteria.',
    },
    {
      title: 'Claim and source mapping',
      description: 'Designed to connect wording to relevant source passages, dates, versions, population, outcomes, and limitations.',
    },
    {
      title: 'Study comparison records',
      description: 'Designed to organize methods and findings without treating different designs, endpoints, or populations as directly equivalent.',
    },
    {
      title: 'Evidence hierarchy notes',
      description: 'Designed to help reviewers document why a source is more or less applicable to the specific question without automating a clinical grade.',
    },
    {
      title: 'Conflict and update tracking',
      description: 'Designed to preserve disagreement, correction, retraction, superseding guidance, and reasons that a claim needs re-review.',
    },
    {
      title: 'Traceable evidence packs',
      description: 'Designed to prepare sources, mappings, comparison fields, limitations, and open questions for a qualified professional reviewer.',
    },
  ],
  exampleInputs: [
    'A clearly framed literature or evidence question with population, outcome, date range, and intended use',
    'Research papers, abstracts, guidance, safety communications, or regulatory materials supplied or selected with appropriate access rights',
    'A draft scientific, educational, policy, or promotional statement that requires claim-to-source mapping',
    'A study list with known publication states, corrections, retractions, or conflicting findings',
    'Reviewer requirements, evidence hierarchy, jurisdiction, and internal approval criteria supplied by the customer',
  ],
  exampleOutputs: [
    'A dated evidence map grouped by question, publication type, population, and current version status',
    'A claim-to-source table with exact support, indirectness, limitations, conflicts, and required reviewer status',
    'A study comparison matrix covering design, population, intervention, endpoints, effect measures, uncertainty, and harms',
    'An evidence-gap and conflict register identifying what is unknown, outdated, inconsistent, or outside scope',
    'A review pack for qualified clinical, scientific, legal, regulatory, or safety sign-off',
  ],
  qualityConsiderations: [
    {
      title: 'Applicability over citation count',
      description: 'Assess whether the source population, intervention, comparator, outcome, setting, and date actually fit the question at hand.',
    },
    {
      title: 'Version and status checks',
      description: 'Recheck publication state, corrections, retractions, guidance editions, and safety updates before every consequential release or use.',
    },
    {
      title: 'Separate evidence from judgment',
      description: 'Keep extracted findings, methodological appraisal, clinical interpretation, regulatory assessment, and final decision as distinct reviewable steps.',
    },
  ],
  reviewCheckpoints: [
    {
      title: 'Search and evidence review',
      description: 'A qualified information or research professional checks scope, source selection, publication status, and material omissions.',
    },
    {
      title: 'Clinical or scientific review',
      description: 'A suitably qualified professional evaluates methods, applicability, benefits, harms, uncertainty, and the wording of conclusions.',
    },
    {
      title: 'Legal, regulatory, and safety review',
      description: 'Responsible specialists determine whether the intended use, claims, disclosures, and decisions meet applicable obligations and controls.',
    },
  ],
  useCases: [
    {
      title: 'Literature and evidence review',
      description: 'Structure a defined body of literature for professional assessment without claiming the collection is exhaustive or clinically conclusive.',
    },
    {
      title: 'Claim/source mapping',
      description: 'Check whether a scientific, educational, policy, or promotional statement is directly and currently supported by its cited material.',
    },
    {
      title: 'Study comparison',
      description: 'Compare design, population, outcomes, uncertainty, harms, and limitations while retaining reasons the studies may disagree.',
    },
    {
      title: 'Evidence hierarchy review',
      description: 'Prepare source characteristics and applicability notes for a qualified reviewer to assess within a specific decision context.',
    },
    {
      title: 'Version and update audit',
      description: 'Identify preprints, final publications, corrections, retractions, updated guidance, and materials that require refreshed review.',
    },
    {
      title: 'Traceable evidence record',
      description: 'Assemble the question, sources, mappings, comparisons, limitations, open issues, and professional review decisions in one record.',
    },
  ],
  limitations: [
    'Clarify Data is not a medical device, does not provide medical advice, and is not intended to diagnose, treat, cure, prevent, monitor, or manage any disease or individual patient.',
    'Clarify Data does not claim regulatory approval, clinical accuracy, physician review, or direct integration with medical literature, clinical, regulatory, safety, or patient databases.',
    'Searches and summaries can be incomplete, outdated, or wrong; source access, terminology, publication bias, language, and review scope all affect the result.',
    'Do not submit identifiable patient information, protected health information, or other sensitive data unless an appropriate service arrangement and safeguards have been formally established.',
  ],
  criticalNote:
    'Clarify Data must not replace qualified clinical, medical, scientific, legal, regulatory, ethics, or safety review. Any organization using the workflow is responsible for ensuring that appropriately qualified professionals make and approve every high-impact decision.',
}

export default function MedicalIndustryPage() {
  return <IndustryPage data={data} />
}
