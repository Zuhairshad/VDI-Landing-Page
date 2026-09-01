import { NextResponse } from 'next/server'
import { db } from '@/lib/supabase'
import { isAuthenticated } from '@/lib/admin-check'

export async function GET() {
  if (!await isAuthenticated()) return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })

  const { data, error } = await db
    .from('verification_jobs')
    .select('id, industry, client_name, client_email, status, claims, results, error_message, created_at')
    .order('created_at', { ascending: false })
    .limit(200)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}
