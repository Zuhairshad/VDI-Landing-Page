import { ShoppingCart } from 'lucide-react'
import IndustryPage, { type IndustryPageData } from '@/components/IndustryPage'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({ title: 'Marketing and E-commerce Research Workflows', description: 'Traceable workflows for competitor, product, price, campaign, catalogue, review, sentiment, and market-positioning research.', path: '/industries/marketing-ecommerce' })

const COPPER = 'rgb(194, 89, 24)'

const data: IndustryPageData = {
  eyebrow: 'Marketing & e-commerce',
  icon: <ShoppingCart className="w-4 h-4" style={{ color: COPPER }} />,
  title: 'Comparable market research without losing product and promotion context',
  subtitle:
    'Structure competitor, catalogue, price, campaign, and review research while keeping SKU identity, time windows, shipping context, sources, and human brand judgment attached.',
  context: {
    title: 'Commercial context changes the meaning of a value',
    paragraphs: [
      'A displayed price may depend on variant, membership, region, tax treatment, coupon, subscription, shipping threshold, stock status, or observation time. A product claim may refer to a different model or evidence standard than a competing claim that sounds similar.',
      'Marketing and merchandising teams need fast comparisons, but speed without identity and source discipline can produce the wrong SKU match, an unfair competitor comparison, or copy that repeats an unsupported claim.',
    ],
  },
  problem: {
    title: 'Market snapshots are easy to overgeneralize',
    paragraphs: [
      'Product pages, advertisements, catalogues, reviews, social posts, and marketplace listings are dynamic and selective. They can disappear, change by user or region, or mix seller-generated content with platform and customer content.',
      'A responsible workflow records what was observed, where, when, for which product and audience, and under which commercial conditions. It should distinguish source statements from analyst interpretation and brand decisions.',
    ],
  },
  challenges: [
    {
      title: 'SKU and variant mismatch',
      description: 'Similar names can hide differences in size, pack count, generation, region, bundle, warranty, or seller that invalidate a comparison.',
    },
    {
      title: 'Promotion and shipping context',
      description: 'Coupons, membership pricing, subscriptions, thresholds, delivery fees, and tax presentation can change the effective customer cost.',
    },
    {
      title: 'Campaign claim support',
      description: 'Creative copy may amplify a source beyond its scope or inherit a product claim that has not been checked for the current market.',
    },
    {
      title: 'Catalogue inconsistency',
      description: 'Titles, attributes, units, category labels, and identifiers vary across sources and can create duplicate or incorrectly merged records.',
    },
    {
      title: 'Review and sentiment bias',
      description: 'Review samples may be incomplete, manipulated, unrepresentative, or shaped by platform moderation and collection windows.',
    },
    {
      title: 'Rapid content change',
      description: 'Prices, availability, promotions, specifications, and positioning can change after collection, requiring time-stamped evidence and refresh rules.',
    },
  ],
  workflow: [
    {
      title: 'Define the comparison question',
      description: 'Specify product set, market, audience, channel, date window, commercial context, and the decision the research will support.',
    },
    {
      title: 'Establish identity rules',
      description: 'Choose matching fields for brand, model, variant, size, pack, region, seller, and other attributes needed to avoid false SKU matches.',
    },
    {
      title: 'Capture source snapshots',
      description: 'Record the observed content, page or document, seller or publisher, region, access time, availability, and promotion conditions.',
    },
    {
      title: 'Normalize comparable fields',
      description: 'Align units, pack sizes, currencies, tax and shipping treatment, while preserving original displayed values and terms.',
    },
    {
      title: 'Map claims and sentiment',
      description: 'Connect product or campaign claims to evidence and label review themes as sampled observations rather than population facts.',
    },
    {
      title: 'Surface mismatches and gaps',
      description: 'Flag uncertain SKU links, unavailable terms, stale records, conflicting specifications, and evidence that does not support the claim.',
    },
    {
      title: 'Complete brand and legal review',
      description: 'Have merchandising, brand, legal, regulatory, and market owners validate the comparison and proposed use before publication.',
    },
  ],
  capabilities: [
    {
      title: 'Competitor research records',
      description: 'Designed to organize source observations, dates, product identity, positioning, claims, and context for human comparison.',
    },
    {
      title: 'Product and price comparison',
      description: 'Designed to normalize units and commercial conditions while keeping displayed values, shipping, promotions, and uncertainty visible.',
    },
    {
      title: 'Campaign claim mapping',
      description: 'Designed to connect proposed copy to source material, qualifiers, applicable product variants, and required review status.',
    },
    {
      title: 'Catalogue normalization',
      description: 'Designed to align customer-supplied titles, units, categories, and attributes without hiding uncertain matches or missing identifiers.',
    },
    {
      title: 'Review research summaries',
      description: 'Designed to group recurring themes with source, date window, sample limitations, and examples for human interpretation.',
    },
    {
      title: 'Positioning evidence packs',
      description: 'Designed to combine comparison fields, source links, claims, caveats, and open questions for brand and merchandising review.',
    },
  ],
  exampleInputs: [
    'A competitor or product list with market, channel, date window, and comparison purpose',
    'Customer-supplied catalogue exports with identifiers, titles, attributes, variants, units, and category fields',
    'Product pages, price observations, promotion terms, shipping information, and availability captured for a defined context',
    'Campaign drafts, product specifications, substantiation material, and required qualifiers',
    'A defined sample of reviews or public commentary with collection method, source, and observation period',
  ],
  exampleOutputs: [
    'A competitor comparison with source, observation time, product identity, positioning, and unresolved differences',
    'A normalized product and price table that separates item price, promotion, shipping, tax context, and effective unit value',
    'A catalogue exception report covering suspected duplicates, missing attributes, unit conflicts, and uncertain SKU matches',
    'A campaign claim matrix linking copy to source evidence, product scope, qualifiers, and reviewer status',
    'A review-theme brief with sampling limits, representative examples, conflicting signals, and questions for brand review',
  ],
  qualityConsiderations: [
    {
      title: 'Identity before comparison',
      description: 'Do not calculate a difference until brand, model, variant, pack, region, seller, and material commercial terms are sufficiently aligned.',
    },
    {
      title: 'Time and audience context',
      description: 'Record when, where, and under what eligibility conditions content was observed; dynamic pages may not show the same result to everyone.',
    },
    {
      title: 'Source role and incentives',
      description: 'Distinguish manufacturer, seller, platform, advertiser, reviewer, and customer statements because each has different knowledge and incentives.',
    },
  ],
  reviewCheckpoints: [
    {
      title: 'Merchandising review',
      description: 'A product owner validates identity, assortment, attributes, price context, and whether the compared offers are commercially equivalent.',
    },
    {
      title: 'Brand and research review',
      description: 'A qualified reviewer checks source selection, sampling, interpretation, tone, and whether conclusions overstate a market snapshot.',
    },
    {
      title: 'Legal and regulatory review',
      description: 'Responsible professionals review comparative advertising, substantiation, disclosures, intellectual property, endorsements, and market-specific rules.',
    },
  ],
  useCases: [
    {
      title: 'Competitor research',
      description: 'Build a dated comparison of public positioning, product scope, claims, and observed commercial context.',
    },
    {
      title: 'Product and price comparison',
      description: 'Compare matched variants and unit economics while showing promotions, shipping, availability, and observation limits.',
    },
    {
      title: 'Campaign claim checking',
      description: 'Trace factual copy to substantiation and flag missing qualifiers or evidence before brand and legal approval.',
    },
    {
      title: 'Catalogue normalization',
      description: 'Identify likely duplicates, unit inconsistencies, missing attributes, and category mapping questions in supplied catalogues.',
    },
    {
      title: 'Review and sentiment research',
      description: 'Organize a defined review sample into themes without treating it as representative of every customer or channel.',
    },
    {
      title: 'Market-positioning research',
      description: 'Compare language, audience, features, evidence, and commercial context to inform a positioning decision without automating it.',
    },
  ],
  limitations: [
    'Clarify Data does not claim live integrations with Amazon, Walmart, Shopify, advertising platforms, pricing systems, social networks, or marketplaces unless separately established.',
    'Observed prices, promotions, shipping costs, availability, reviews, and claims are time- and context-specific and require refresh before use.',
    'Automated matching and sentiment grouping can be wrong; uncertain SKU links, sarcasm, language, sample bias, and platform effects require human review.',
    'Research output is not legal approval, advertising substantiation, marketplace authorization, or a guarantee of campaign or commercial performance.',
  ],
  criticalNote:
    'Health, safety, financial, environmental, comparative, endorsement, and regulated product claims require qualified legal or regulatory review before publication in each intended market.',
}

export default function EcommerceIndustryPage() {
  return <IndustryPage data={data} />
}
