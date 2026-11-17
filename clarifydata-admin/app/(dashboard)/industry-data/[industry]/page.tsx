import type { Metadata } from 'next'
import { createAdminClient } from '@/lib/supabase/server'
import IndustryDataManager from './IndustryDataManager'

const INDUSTRY_LABELS: Record<string, string> = {
  'medical': 'Medical & Clinical',
  'ecommerce': 'E-commerce & Marketing',
  'education': 'Education',
  'logistics': 'Logistics & Trade',
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params
  return { title: INDUSTRY_LABELS[industry] ?? industry }
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params
  const label = INDUSTRY_LABELS[industry] ?? industry

  const db = createAdminClient()
  const { data } = await db.from('industry_data').select('*').eq('industry', industry).order('label')

  return <IndustryDataManager industry={industry} label={label} initialData={data ?? []} />
}
