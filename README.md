# Clarify Data

This repository holds the Clarify Data Next.js app.

## 📁 Projects

1. **[`/vdi-landing-page`](./vdi-landing-page)**
   - The public site at www.clerifydata.com, including its built-in `/admin` area.
   - Vercel project `clarifydata`, Root Directory `vdi-landing-page`. Deploys automatically on push to `main`.

---

## Local development

Run it from `vdi-landing-page` with `npm install` and `npm run dev`. It needs a `.env.local`.

Keep the checkout in a path without spaces. Turbopack fails to resolve `next/font/google` when the project path contains spaces.
