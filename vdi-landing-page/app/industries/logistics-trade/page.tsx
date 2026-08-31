import { Truck } from 'lucide-react'
import IndustryPage, { type IndustryPageData } from '@/components/IndustryPage'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: 'Logistics and Trade Research Workflows', description: 'Traceable workflows for supplier, carrier, trade-lane, tariff, shipment, risk, and market-signal research with human operational review.', path: '/industries/logistics-trade' })

const COPPER = 'rgb(194, 89, 24)'

const data: IndustryPageData = {
  eyebrow: 'Logistics & trade',
  icon: <Truck className="w-4 h-4" style={{ color: COPPER }} />,
  title: 'Source-aware logistics and trade research for operational teams',
  subtitle:
    'Compare suppliers, carriers, routes, tariffs, and market signals while tracking freshness, conflicting records, exceptions, and the human decisions that turn research into action.',
  context: {
    title: 'Operational information changes quickly',
    paragraphs: [
      'Logistics and trade decisions draw on supplier statements, carrier schedules, quotations, contracts, tariff publications, port notices, market reports, and internal shipment records. These sources update at different speeds and often describe different scopes.',
      'A dated rate or route statement can be accurate when collected and wrong by the time it is used. A strong research process therefore treats freshness, effective dates, inclusions, and exceptions as part of the evidence instead of footnotes added later.',
    ],
  },
  problem: {
    title: 'Comparable labels can hide different terms',
    paragraphs: [
      'Supplier lead times may start from order, payment, production, or pickup. Freight quotes may include or exclude fuel, security, handling, demurrage, detention, insurance, or customs charges. Tariff treatment can depend on classification, origin, destination, and effective date.',
      'Collapsing these records into one “best option” before normalizing scope creates false confidence. The workflow needs to preserve original terms and route uncertainties to people who own the operational, customs, legal, or safety decision.',
    ],
  },
  challenges: [
    {
      title: 'Source freshness',
      description: 'Schedules, rates, restrictions, surcharges, and disruption notices can change faster than reports and spreadsheets are refreshed.',
    },
    {
      title: 'Conflicting supplier information',
      description: 'Web pages, quotations, emails, and contracts may contain different capacities, lead times, certifications, or commercial terms.',
    },
    {
      title: 'Trade-lane scope mismatch',
      description: 'Rates and transit estimates may use different origins, destinations, modes, service levels, currencies, and charge inclusions.',
    },
    {
      title: 'Classification and tariff ambiguity',
      description: 'Product descriptions may not be sufficient to determine a customs classification or the applicable duties and restrictions.',
    },
    {
      title: 'Risk and exception sprawl',
      description: 'Operational exceptions are often spread across inboxes, trackers, notices, and handoffs, making patterns and ownership hard to see.',
    },
    {
      title: 'Audit record gaps',
      description: 'A recommendation without the dated source, quoted terms, assumptions, and reviewer decision is difficult to defend or update.',
    },
  ],
  workflow: [
    {
      title: 'Define the movement or decision',
      description: 'Specify goods, origin, destination, mode, dates, service expectations, commercial terms, and the decision owner.',
    },
    {
      title: 'Set source and freshness rules',
      description: 'Identify authoritative notices, acceptable supplier evidence, review dates, and which fields expire quickly.',
    },
    {
      title: 'Collect with timestamps',
      description: 'Capture the original statement, quote, schedule, notice, or record together with source, access date, and effective period.',
    },
    {
      title: 'Normalize scope and units',
      description: 'Align currencies, units, route endpoints, service levels, Incoterms where relevant, and charge inclusions without overwriting originals.',
    },
    {
      title: 'Flag conflicts and exceptions',
      description: 'Record divergent terms, missing fields, expired evidence, route constraints, and events that require follow-up.',
    },
    {
      title: 'Compare options with provenance',
      description: 'Present comparable fields alongside sources, caveats, update times, and unresolved operational dependencies.',
    },
    {
      title: 'Complete operational review',
      description: 'Route customs, contractual, safety, financial, and execution decisions to the qualified owners before action.',
    },
  ],
  capabilities: [
    {
      title: 'Supplier and carrier research records',
      description: 'Designed to organize claims, quotations, service descriptions, dates, and conflicting terms for side-by-side review.',
    },
    {
      title: 'Trade-lane comparison schemas',
      description: 'Designed to compare mode, route, timing, service scope, rate components, and assumptions using explicit field definitions.',
    },
    {
      title: 'Tariff research workspaces',
      description: 'Designed to link classifications, published tariff material, effective dates, and open questions for customs review.',
    },
    {
      title: 'Shipment and signal analysis',
      description: 'Designed to structure customer-supplied shipment records and selected market signals for trend and exception investigation.',
    },
    {
      title: 'Risk and exception registers',
      description: 'Designed to connect each issue to its source, owner, status, next review date, and operational consequence.',
    },
    {
      title: 'Audit-ready source packs',
      description: 'Designed to preserve the evidence and assumptions behind a recommendation for later review or refresh.',
    },
  ],
  exampleInputs: [
    'Supplier quotations, capability statements, contracts, correspondence, and qualification notes supplied with permission',
    'Carrier or forwarder schedules, service descriptions, and rate sheets collected for a defined time window',
    'Official tariff publications, customs guidance, classification research, and effective-date notices',
    'Internal shipment histories, delay reasons, exception logs, and cost fields selected for analysis',
    'Public disruption notices, market reports, and operational assumptions with source and access dates',
  ],
  exampleOutputs: [
    'A supplier or carrier comparison with field-level sources, dates, missing information, and conflicting terms',
    'A trade-lane matrix showing normalized scope, rate components, transit assumptions, and freshness status',
    'A tariff research record that separates published evidence from classification questions requiring customs advice',
    'An exception register with issue category, evidence, owner, status, review date, and proposed next action',
    'A decision memo containing options, assumptions, unresolved risks, and required operational approvals',
  ],
  qualityConsiderations: [
    {
      title: 'Effective date over collection date',
      description: 'Record when a term or rule applies as well as when it was collected; a newly downloaded document may describe an older period.',
    },
    {
      title: 'Preserve commercial scope',
      description: 'Keep inclusions, exclusions, units, currencies, route points, and service conditions attached to every compared value.',
    },
    {
      title: 'Distinguish signals from events',
      description: 'A market indicator or public notice may suggest risk but does not prove how a specific shipment, supplier, or lane will perform.',
    },
  ],
  reviewCheckpoints: [
    {
      title: 'Source and scope review',
      description: 'An analyst or operator confirms that the compared records refer to equivalent goods, routes, services, and time periods.',
    },
    {
      title: 'Customs and compliance review',
      description: 'A qualified customs, trade, legal, or regulatory professional validates classification, duties, controls, and jurisdiction-specific obligations.',
    },
    {
      title: 'Execution review',
      description: 'The operational owner confirms current capacity, bookings, contracts, costs, safety needs, and contingency plans before acting.',
    },
  ],
  useCases: [
    {
      title: 'Supplier research',
      description: 'Compare published and supplied evidence for capacity, geography, lead time, terms, and unresolved qualification questions.',
    },
    {
      title: 'Carrier research',
      description: 'Structure service coverage, schedule statements, rate scope, and exceptions for an operator-led evaluation.',
    },
    {
      title: 'Trade-lane comparison',
      description: 'Compare route options and assumptions without presenting indicative rates or transit times as guaranteed outcomes.',
    },
    {
      title: 'Customs and tariff research',
      description: 'Gather dated source material and classification questions for review by an authorized customs professional.',
    },
    {
      title: 'Shipment exception analysis',
      description: 'Group customer-supplied delay, cost, or handoff records to identify patterns that warrant operational investigation.',
    },
    {
      title: 'Market-signal briefing',
      description: 'Summarize selected notices and reports with provenance, freshness, and a clear separation between evidence and forecast.',
    },
  ],
  limitations: [
    'Clarify Data does not claim live connections to customs, ports, carriers, suppliers, shipment systems, or trade databases unless separately established.',
    'Schedules, prices, capacity, tariff treatment, and disruption information must be rechecked with authoritative parties before use.',
    'Research outputs are not bookings, customs rulings, legal advice, safety approvals, insurance advice, or contractual commitments.',
    'Customer-supplied operational data may be incomplete or inconsistent; structured output does not make the underlying record accurate.',
  ],
  criticalNote:
    'Shipment execution, dangerous-goods handling, sanctions, customs classification, import or export controls, and contractual commitments require review by the responsible qualified professionals and authorities.',
}

export default function LogisticsIndustryPage() {
  return <IndustryPage data={data} />
}
