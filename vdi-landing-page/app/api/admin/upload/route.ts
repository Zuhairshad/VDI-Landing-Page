import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const MAX_SIZE = 4 * 1024 * 1024 // 4 MB

export async function POST(request: Request) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (
    !cloudName ||
    cloudName === 'PLACEHOLDER_YOUR_CLOUD_NAME' ||
    !apiKey ||
    apiKey === 'PLACEHOLDER_YOUR_API_KEY' ||
    !apiSecret ||
    apiSecret === 'PLACEHOLDER_YOUR_API_SECRET'
  ) {
    return NextResponse.json(
      { error: 'Cloudinary is not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET in .env.local.' },
      { status: 503 }
    )
  }

  let formData: FormData
  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 })
  }

  const file = formData.get('file')
  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: 'No file provided.' }, { status: 400 })
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: 'File exceeds 4 MB limit.' }, { status: 413 })
  }

  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  try {
    const result = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'clarifydata/blogs' },
        (error, result) => {
          if (error || !result) {
            reject(error ?? new Error('Upload failed'))
          } else {
            resolve({ secure_url: result.secure_url, public_id: result.public_id })
          }
        }
      )
      uploadStream.end(buffer)
    })

    return NextResponse.json({ url: result.secure_url, public_id: result.public_id })
  } catch (err) {
    console.error('Cloudinary upload error', err)
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 })
  }
}
