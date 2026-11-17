import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get('file')
  if (!file || !(file instanceof Blob)) return NextResponse.json({ error: 'No file.' }, { status: 400 })
  if (file.size > 4 * 1024 * 1024) return NextResponse.json({ error: 'File exceeds 4 MB.' }, { status: 413 })

  const buffer = Buffer.from(await file.arrayBuffer())

  try {
    const result = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'clarifydata/blogs' },
        (err, res) => { err || !res ? reject(err) : resolve({ secure_url: res.secure_url, public_id: res.public_id }) }
      )
      stream.end(buffer)
    })
    return NextResponse.json({ url: result.secure_url, public_id: result.public_id })
  } catch (err) {
    console.error('Cloudinary upload error', err)
    return NextResponse.json({ error: 'Upload failed.' }, { status: 500 })
  }
}
