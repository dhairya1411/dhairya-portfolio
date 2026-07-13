# Dhairya Rastogi — Product Manager Portfolio

A single-page **Next.js** portfolio targeting **Associate Product Manager** roles.
Dark, code-accented design with hero, about, experience, two case-study deep-dives,
a product teardown, skills, builds, and contact.

## Tech
- Next.js 14 (App Router) + React 18
- Plain CSS (`src/app/globals.css`) — no UI framework
- Google Fonts: Inter + JetBrains Mono

## Structure
- `src/app/page.js` — the portfolio (all sections)
- `src/app/layout.js` — metadata + fonts
- `src/app/globals.css` — all styles / design tokens
- `public/Dhairya_Rastogi_Resume.pdf` — downloadable résumé
- `_legacy-nextjs/` — the previous Magic Portfolio template, kept as backup (safe to delete)

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy (Vercel)
This is a standard Next.js app — Vercel auto-detects it (Framework Preset = **Next.js**).
Push to your connected repo and it deploys with no extra config.
