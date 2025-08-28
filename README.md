
# Hello Mum — Next.js Site

This is a ready-to-deploy Next.js (App Router) site for **Hello Mum**.

## Quick Launch on Vercel (Free Plan)

1. **Download the ZIP** and unzip.
2. Create a **new GitHub repo** and push these files, or skip GitHub and use **Vercel's drag-and-drop**.
3. Go to **vercel.com → New Project → Import** the repo (or **Deploy** and drag the folder).
4. **Framework Preset:** Next.js (detected automatically).
5. **Environment Variables:** (optional for MVP)

   - `NEXT_PUBLIC_BRAND_NAME=Hello Mum`

6. Click **Deploy**. Vercel will build and give you a live URL.

7. **Custom Domain:** In Vercel → Project → Settings → Domains → add your domain

   - Example: `hellomum.sg` or `hellomum.oldagedhome.com`

8. **Home Website Link:** Ask each care home to add a link to your microsite from their site (e.g. `/hellomum`).

## Local Dev
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Notes
- Payments and accounts are **placeholders**. Integrate Stripe/HitPay and auth (e.g. Firebase/Supabase) next.
- Product images are placeholders. Replace files in `/public/images` as your branded assets are ready.
