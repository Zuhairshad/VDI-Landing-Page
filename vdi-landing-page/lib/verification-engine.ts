import { db } from '@/lib/supabase'

export type ClaimCategory = 'statistic' | 'forecast' | 'causal' | 'definition' | 'general'
export type Verdict = 'verified' | 'partially-verified' | 'exceeds-benchmark' | 'unsupported' | 'needs-review' | 'unverifiable'

export interface Claim {
  text: string
  category: ClaimCategory
}

export interface ReferencePoint {
  id: string
  label: string
  value: string
  source: string
  notes: string | null
  verified: boolean
}

export interface ClaimResult {
  claim_index: number
  claim_text: string
  category: ClaimCategory
  verdict: Verdict
  confidence: 'high' | 'medium' | 'low'
  evidence: ReferencePoint[]
  notes: string
}

const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of','with',
  'by','from','up','about','into','through','during','our','their','its',
  'is','are','was','were','be','been','being','have','has','had','do',
  'does','did','will','would','could','should','may','might','that','this',
  'these','those','we','they','it','per','as','than','more','less','over',
  'under','shows','show','achieve','achieved','expect','expected','within',
  'across','based','compared','vs','versus','approximately','around','about',
])

function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9%$.\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 3 && !STOP_WORDS.has(w))
    .slice(0, 8)
}

function extractNumeric(text: string): number | null {
  // percent symbol
  const pctSymbol = text.match(/(\d+(?:\.\d+)?)\s*%/)
  if (pctSymbol) return parseFloat(pctSymbol[1])
  // spelled-out percent e.g. "58 percent"
  const pctWord = text.match(/(\d+(?:\.\d+)?)\s+percent/i)
  if (pctWord) return parseFloat(pctWord[1])
  // dollar amounts with magnitude words
  const dollarMatch = text.match(/\$\s*(\d+(?:\.\d+)?)\s*(billion|million|trillion|thousand)?/i)
  if (dollarMatch) {
    const n = parseFloat(dollarMatch[1])
    const multiplier: Record<string, number> = { trillion: 1e12, billion: 1e9, million: 1e6, thousand: 1e3 }
    return n * (multiplier[(dollarMatch[2] ?? '').toLowerCase()] ?? 1)
  }
  // magnitude words without dollar sign e.g. "500 billion"
  const magnitudeMatch = text.match(/(\d+(?:\.\d+)?)\s*(billion|million|trillion|thousand)/i)
  if (magnitudeMatch) {
    const n = parseFloat(magnitudeMatch[1])
    const multiplier: Record<string, number> = { trillion: 1e12, billion: 1e9, million: 1e6, thousand: 1e3 }
    return n * (multiplier[magnitudeMatch[2].toLowerCase()] ?? 1)
  }
  // last resort: first plain number (skip small ordinals like "Phase 3" by taking the largest number in the text)
  const allNums = [...text.matchAll(/\b(\d+(?:\.\d+)?)\b/g)].map(m => parseFloat(m[1]))
  if (allNums.length === 0) return null
  return allNums.reduce((a, b) => b > a ? b : a)
}

function compareValues(claimVal: number, refVal: number): { verdict: Verdict; note: string } {
  const diff = Math.abs(claimVal - refVal) / refVal
  if (diff <= 0.15) return { verdict: 'verified', note: `Claim value (${claimVal}) is within 15% of the reference benchmark (${refVal}).` }
  if (claimVal > refVal * 1.5) return { verdict: 'exceeds-benchmark', note: `Claim value (${claimVal}) is significantly above the industry benchmark (${refVal}). Primary source documentation recommended.` }
  if (diff <= 0.40) return { verdict: 'partially-verified', note: `Claim value (${claimVal}) differs from the reference benchmark (${refVal}) by ${Math.round(diff * 100)}%. Verify against a primary source.` }
  return { verdict: 'needs-review', note: `Claim value (${claimVal}) diverges substantially from the reference benchmark (${refVal}). Independent sourcing required.` }
}

export async function runVerification(
  industry: string,
  claims: Claim[]
): Promise<ClaimResult[]> {
  const { data: allRefData } = await db
    .from('industry_data')
    .select('id, label, value, source, notes, verified')
    .eq('industry', industry)
    .eq('verified', true)

  const refData: ReferencePoint[] = (allRefData ?? []) as ReferencePoint[]

  return claims.map((claim, idx) => {
    const keywords = extractKeywords(claim.text)
    const claimNumeric = extractNumeric(claim.text)

    const matched = refData.filter(ref =>
      keywords.some(kw =>
        ref.label.toLowerCase().includes(kw) ||
        ref.notes?.toLowerCase().includes(kw) ||
        ref.value.toLowerCase().includes(kw)
      )
    ).slice(0, 3)

    if (matched.length === 0) {
      return {
        claim_index: idx,
        claim_text: claim.text,
        category: claim.category,
        verdict: 'unsupported' as Verdict,
        confidence: 'low' as const,
        evidence: [],
        notes: 'No matching reference data found in the industry benchmark set for this claim. A primary source trace is required before use in a high-stakes deliverable.',
      }
    }

    if (claim.category === 'causal') {
      return {
        claim_index: idx,
        claim_text: claim.text,
        category: claim.category,
        verdict: 'needs-review' as Verdict,
        confidence: 'low' as const,
        evidence: matched,
        notes: 'Causal claims require specialist review. Related benchmark data found but cannot confirm the stated cause-effect relationship.',
      }
    }

    if (claim.category === 'forecast') {
      return {
        claim_index: idx,
        claim_text: claim.text,
        category: claim.category,
        verdict: 'partially-verified' as Verdict,
        confidence: 'medium' as const,
        evidence: matched,
        notes: 'Forecast claims cannot be fully verified against historical benchmarks. Related reference data found. Confirm methodology, publication date, and source authority.',
      }
    }

    if (claimNumeric !== null && matched.length > 0) {
      const refNumeric = extractNumeric(matched[0].value)
      if (refNumeric !== null) {
        const comparison = compareValues(claimNumeric, refNumeric)
        const confidence = comparison.verdict === 'verified' ? 'high' : comparison.verdict === 'partially-verified' ? 'medium' : 'low'
        return {
          claim_index: idx,
          claim_text: claim.text,
          category: claim.category,
          verdict: comparison.verdict,
          confidence,
          evidence: matched,
          notes: comparison.note,
        }
      }
    }

    return {
      claim_index: idx,
      claim_text: claim.text,
      category: claim.category,
      verdict: 'partially-verified' as Verdict,
      confidence: 'medium' as const,
      evidence: matched,
      notes: 'Related reference data found but numeric comparison was not possible. Review the matched benchmarks and confirm applicability to the specific claim scope, geography, and time period.',
    }
  })
}
