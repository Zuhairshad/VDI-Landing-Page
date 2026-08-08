import type { Metadata } from 'next'
import { GraduationCap } from 'lucide-react'
import IndustryPage, { type IndustryPageData } from '@/components/IndustryPage'

export const metadata: Metadata = {
  title: 'Education & Research Information Quality | ClarifyData',
  description:
    'Workflows for literature discovery, citation checking, research comparison, institutional benchmarking, and responsible academic review.',
}

const COPPER = 'rgb(194, 89, 24)'

const data: IndustryPageData = {
  eyebrow: 'Education & research',
  icon: <GraduationCap className="w-4 h-4" style={{ color: COPPER }} />,
  title: 'Traceable research workflows for education and academic teams',
  subtitle:
    'Organize literature discovery, citation checks, institutional comparisons, and policy research while keeping publication dates, source versions, conflicts, and human academic judgment visible.',
  context: {
    title: 'Research rarely arrives as one clean answer',
    paragraphs: [
      'Researchers, educators, policy teams, and institutional leaders work across journal articles, preprints, reports, curricula, university publications, and public datasets. Each source may use different definitions, populations, periods, and methods.',
      'A useful workflow must preserve those differences. It should help a reviewer understand what was searched, which version was used, how a comparison was constructed, and where the available evidence does not support a simple conclusion.',
    ],
  },
  problem: {
    title: 'Citation volume can conceal weak support',
    paragraphs: [
      'A long reference list does not prove that every claim is supported. Citations can be fabricated, misquoted, retracted, superseded, or attached to a sentence that overstates the source findings.',
      'Institutional comparisons create another risk: rankings, completion rates, tuition, research output, and employment measures may cover different cohorts or reporting years. Normalization choices need to be documented before results are interpreted.',
    ],
  },
  challenges: [
    {
      title: 'Fragmented literature discovery',
      description: 'Relevant material may sit across publisher pages, repositories, bibliographies, and institutional sites, with uneven metadata and access.',
    },
    {
      title: 'Conflicting academic sources',
      description: 'Studies can disagree because of population, design, measurement, statistical power, or publication date, rather than simply because one is incorrect.',
    },
    {
      title: 'Publication and version drift',
      description: 'A preprint, accepted manuscript, final article, correction, and retraction notice may all represent different states of the same work.',
    },
    {
      title: 'Fabricated or mismatched citations',
      description: 'Generated references may not exist, and genuine papers may be cited for conclusions they do not actually support.',
    },
    {
      title: 'Inconsistent institutional measures',
      description: 'Benchmark fields often use different definitions, academic years, inclusion rules, currencies, or student populations.',
    },
    {
      title: 'Academic integrity boundaries',
      description: 'Research assistance must not obscure authorship, bypass attribution, or substitute generated text for required original academic work.',
    },
  ],
  workflow: [
    {
      title: 'Frame the research question',
      description: 'Define the population, concept, time window, geography, source types, exclusions, and the decision the research will inform.',
    },
    {
      title: 'Record the discovery method',
      description: 'Preserve search terms, repositories or sites consulted, date searched, and screening criteria so the search can be revisited.',
    },
    {
      title: 'Capture source identity',
      description: 'Store title, authorship, publisher, persistent identifier when available, publication state, version, and access date.',
    },
    {
      title: 'Map claims to evidence',
      description: 'Connect each material assertion to the exact passage, table, method, or result that supports or limits it.',
    },
    {
      title: 'Compare like with like',
      description: 'Normalize definitions and periods before comparing studies, institutions, curricula, or policies; retain the original values.',
    },
    {
      title: 'Surface conflicts and gaps',
      description: 'Group disagreements by method, sample, date, and terminology, and leave unsupported questions visibly unresolved.',
    },
    {
      title: 'Complete academic review',
      description: 'Have a qualified researcher, educator, librarian, or policy owner validate interpretation, attribution, and appropriate use.',
    },
  ],
  capabilities: [
    {
      title: 'Research brief structuring',
      description: 'Designed to turn a broad request into explicit concepts, comparison fields, source preferences, and review criteria.',
    },
    {
      title: 'Citation and source records',
      description: 'Designed to associate claims with bibliographic details, relevant excerpts, dates, versions, and reviewer notes.',
    },
    {
      title: 'Study comparison tables',
      description: 'Designed to organize population, intervention or topic, method, outcome, limitations, and publication state without flattening differences.',
    },
    {
      title: 'Institutional benchmark schemas',
      description: 'Designed to make field definitions, reporting periods, currencies, cohorts, and missing values explicit before comparison.',
    },
    {
      title: 'Conflict and gap tracking',
      description: 'Designed to preserve contradictory findings, unavailable sources, weak support, and questions that require further investigation.',
    },
    {
      title: 'Review-ready evidence packs',
      description: 'Designed to prepare a source map, comparison record, limitations, and open issues for a responsible academic reviewer.',
    },
  ],
  exampleInputs: [
    'A defined research question, inclusion criteria, date range, and preferred source types',
    'Article titles, abstracts, full text supplied with permission, bibliographies, or research notes',
    'Institutional reports, curriculum documents, public policy papers, and published benchmark tables',
    'A draft manuscript or briefing with claims and citations that require source checking',
    'Known terminology variants, disputed definitions, and sources that must be included or excluded',
  ],
  exampleOutputs: [
    'A literature map grouped by theme, method, publication state, and date',
    'A claim-to-source table with supporting passages, limitations, and unresolved citation issues',
    'A study comparison matrix that keeps sample, method, outcome, and confidence considerations separate',
    'An institutional benchmark table with field definitions, periods, missing values, and source links',
    'A review memo listing conflicts, superseded versions, gaps, and questions for academic sign-off',
  ],
  qualityConsiderations: [
    {
      title: 'Version and correction status',
      description: 'Record whether a source is a preprint, final publication, corrected version, retraction, or later policy edition, and recheck before release.',
    },
    {
      title: 'Method before headline',
      description: 'Compare design, sample, definitions, uncertainty, and limitations before treating reported findings as equivalent evidence.',
    },
    {
      title: 'Field-level provenance',
      description: 'Attach a source to each material benchmark value or claim instead of assuming one citation supports an entire row or paragraph.',
    },
  ],
  reviewCheckpoints: [
    {
      title: 'Discovery and inclusion review',
      description: 'A researcher or information specialist checks whether the search scope and exclusions create a misleading evidence set.',
    },
    {
      title: 'Interpretation review',
      description: 'A subject-matter reviewer confirms that claims reflect the method, population, uncertainty, and publication status of the sources.',
    },
    {
      title: 'Academic integrity review',
      description: 'The author or institution confirms attribution, quotation, authorship, plagiarism rules, and permitted use before submission or publication.',
    },
  ],
  useCases: [
    {
      title: 'Literature discovery map',
      description: 'Build a transparent starting set of sources and search notes for a defined topic without claiming that the search is exhaustive.',
    },
    {
      title: 'Citation and source checking',
      description: 'Identify missing, invalid, mismatched, superseded, or weakly supporting references in a draft.',
    },
    {
      title: 'Research comparison',
      description: 'Compare studies across method, cohort, time, findings, and limitations while keeping conflicting evidence visible.',
    },
    {
      title: 'Institutional benchmarking',
      description: 'Structure published institutional measures with explicit definitions and reporting periods for human interpretation.',
    },
    {
      title: 'Curriculum and policy research',
      description: 'Track requirements, versions, jurisdictions, effective dates, and source authority across education policies or curricula.',
    },
    {
      title: 'Research update monitoring plan',
      description: 'Define which sources and publication states should be revisited during the next evidence refresh.',
    },
  ],
  limitations: [
    'ClarifyData does not claim direct access to or integration with academic databases, publishers, or institutional systems unless separately established.',
    'Search coverage depends on the sources, access rights, language, date range, and criteria supplied or available for the workflow.',
    'The workflow cannot guarantee that a citation is substantively correct without reading and interpreting the relevant source in context.',
    'Generated summaries and comparison tables require human academic review and must not be used to fabricate citations, conceal authorship, or bypass plagiarism and attribution rules.',
  ],
  criticalNote:
    'Admissions, grading, academic discipline, research ethics, funding, and policy decisions require review under the institution’s own rules and applicable professional or legal obligations.',
}

export default function EducationIndustryPage() {
  return <IndustryPage data={data} />
}
