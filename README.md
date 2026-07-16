# Rabiya Zaheer — Portfolio

A premium, production-ready personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, shadcn-style UI primitives, Framer Motion, and next-themes.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Project structure

- `src/app` — routes (App Router): home, about, portfolio (+ dynamic `[slug]` case studies), experience, skills, education, certificates, contact, plus `robots.ts`, `sitemap.ts`, `api/contact/route.ts`.
- `src/components/ui` — reusable primitives (Button, Badge, Card, Input, Textarea, Container, Toast).
- `src/components/layout` — Navbar, Footer, ThemeProvider/Toggle, nav config.
- `src/components/sections` — home page sections (Hero, previews, CTA).
- `src/components/portfolio` — project card, filter/search bar, portfolio grid, certificate card, contact form.
- `src/components/animations` — Reveal, RotatingText, AnimatedCounter.
- `src/components/common` — SectionHeading, Timeline, ScrollProgress, BackToTop.
- `src/data` — single source of truth for all content (`projects.ts`, `skills.ts`, `experience.ts`, `education.ts`, `certificates.ts`, `socials.ts`). The UI never hardcodes content — edit these files to update the site.
- `src/types` — shared TypeScript interfaces for all data shapes.

## Phase 2 readiness

- The contact form already POSTs to `/api/contact`; only the handler needs real email/DB logic — no UI changes required.
- Data files are plain TypeScript modules today; swapping them for a CMS or database fetch later means changing the data layer only, not the components.
- Auth, an admin dashboard, and a blog/CMS can be added under `src/app` without touching existing routes.

## Notes

- All images are lightweight placeholder SVGs (`/public/projects`, `/public/certificates`, `/public/og-image.svg`, `/public/favicon.svg`). Swap them for real assets any time — file names are referenced from `src/data`.
- `public/resume.pdf` is a placeholder resume; replace it with the real file (same filename, or update `resumeUrl` in `src/data/socials.ts`).
