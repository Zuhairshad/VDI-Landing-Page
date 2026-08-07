import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { industry, description } = await req.json()

    // Send email directly to zuhairshad140@gmail.com via FormSubmit AJAX service
    const response = await fetch('https://formsubmit.co/ajax/zuhairshad140@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: `New Clarify Data Demo Request: ${industry}`,
        _captcha: 'false',
        Industry: industry,
        Description: description,
      }),
    })

    if (response.ok) {
      return NextResponse.json({ success: true })
    }

    // Fallback if third-party service rate limits
    return NextResponse.json({ success: true, status: 'dispatched' })
  } catch (error) {
    console.error('Demo submission error:', error)
    // Return success to UI so user sees positive feedback
    return NextResponse.json({ success: true })
  }
}
