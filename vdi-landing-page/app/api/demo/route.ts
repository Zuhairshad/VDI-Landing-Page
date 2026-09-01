import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { db } from '@/lib/supabase'

const allowedIndustries = new Set([
  'Marketing and E-commerce',
  'Medical and Healthcare',
  'Logistics and Supply Chain',
  'Education',
  'Other',
])

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'The request body must be valid JSON.' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'The submitted form is invalid.' }, { status: 400 })
  }

  const values = body as Record<string, unknown>
  const email = typeof values.email === 'string' ? values.email.trim() : ''
  const company = typeof values.company === 'string' ? values.company.trim() : ''
  const phone = typeof values.phone === 'string' ? values.phone.trim() : ''
  const industry = typeof values.industry === 'string' ? values.industry.trim() : ''
  const description = typeof values.description === 'string' ? values.description.trim() : ''

  if (!isEmail(email) || email.length > 254) {
    return NextResponse.json({ error: 'Enter a valid work email.' }, { status: 400 })
  }
  if (company.length < 2 || company.length > 120) {
    return NextResponse.json({ error: 'Company must be between 2 and 120 characters.' }, { status: 400 })
  }
  if (!allowedIndustries.has(industry)) {
    return NextResponse.json({ error: 'Select a valid industry.' }, { status: 400 })
  }
  if (description.length < 10 || description.length > 3000 || description.split(/\s+/).length > 400) {
    return NextResponse.json({ error: 'Description must be between 10 and 3,000 characters and no more than 400 words.' }, { status: 400 })
  }

  // Always save to DB first so no submission is lost even if email fails
  const { error: dbError } = await db.from('demo_requests').insert({
    email,
    company,
    phone: phone || null,
    industry,
    description,
    read: false,
  })

  if (dbError) {
    console.error('Demo request Supabase insert failed', dbError.message)
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from: 'Clarify Data <noreply@clerifydata.com>',
      to: 'grow@clerifydata.com',
      subject: `New Demo Request: ${industry}, ${company}`,
      text: `Email: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company}\nIndustry: ${industry}\n\n${description}`,
    })

    if (error) {
      console.error('Demo request email delivery failed', error.message)
    }
  } catch (error) {
    console.error('Demo request email delivery failed', error instanceof Error ? error.name : 'Unknown error')
  }

  return NextResponse.json({ success: true })
}
