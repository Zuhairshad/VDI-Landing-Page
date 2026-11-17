# Clarify Data

This repository holds two separate Next.js apps.

## 📁 Projects

1. **[`/vdi-landing-page`](./vdi-landing-page)**
   - The public site at www.clerifydata.com, including its built-in `/admin` area.
   - Vercel project `clarifydata`, Root Directory `vdi-landing-page`. Deploys automatically on push to `main`.

2. **[`/clarifydata-admin`](./clarifydata-admin)**
   - The standalone admin dashboard at admin.clerifydata.com (Supabase auth).
   - Vercel project `clarifydata-admin`. Not connected to Git: deploy it from this folder with `vercel --prod`.

---

## Local development

Run each app from its own folder with `npm install` and `npm run dev`. Each needs its own `.env.local`.

Keep the checkout in a path without spaces. Turbopack fails to resolve `next/font/google` when the project path contains spaces.
