# Algovita Digital — landing page

Next.js (App Router) + Tailwind CSS v4 + Lucide React.

## Setup
1. `npx create-next-app@latest algovita-digital` (TypeScript, Tailwind, App Router, `@/*` alias = yes)
2. `cd algovita-digital && npm i lucide-react`
3. Copy `app/`, `components/`, `data/`, `lib/` from this folder into the project (overwrite `app/layout.tsx`, `app/page.tsx`, `app/globals.css`).
4. `npm run dev`

## Edit your content
- `data/site.ts`     — email, WhatsApp number, social links, nav
- `data/projects.ts` — portfolio cards (add/replace objects; UI maps over the array)
