@AGENTS.md
# Project context
 Name: Held                                                                                     │
│ - Goal: A moderated wall where women with PMS/PMDD post anonymous words of encouragement to each other, with magic-link login. First working prototype for Felicia — not a finished product, ship the smallest real thing first.                                                              │
│ - Audience: Felicia and a small circle of women she invites. Not built for scale.                │
│ - Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS, Supabase (Postgres + magic-link auth via @supabase/ssr)                                                                               │
│ - Constraints: No subscription tiers, no passwords, ever. Design reference lives in ./design/ (Claude Design output) — colors/type/copy only, never copy its markup directly.                  │
│ - What to avoid: subscriptions/paywalls, password-based auth, building beyond the current milestone's scope without asking first.
# Commands
│ - Install: `npm install`                                                                         │
│ - Dev: `npm run dev`                                                                             │
│ - Build: `npm run build`                                                                         │
│ - Lint: `npm run lint`                                                                           │
│ - Test: none configured yet                                                                      │
│

# Architecture notes
 - Wall posts use a `status` column (pending/approved) on the `posts` table as the moderation queue — no separate queue service.                                                               │
│ - Brand tokens (from `design/brand.html`) belong in `tailwind.config.ts` as theme extensions, not inline styles.                                                                               │
│ - Supabase client/server helpers live in `lib/supabase/`.                                        │
│ - Admin/moderation access is a simple email allowlist (env var), not a roles system.             │
│                                                                                                  │
│ # Gotchas                                                                                        │
│ - `AGENTS.md` flags this Next.js version (16.2.10) has breaking changes from training data — check `node_modules/next/dist/docs/` before writing Next.js-specific code.                       │
│                                                                                                  │
│ # Do not touch                                                                                   │
│ - `design/landing.html`, `design/brand.html` — read-only design reference, not app code.         │
│ - `node_modules/`, `package-lock.json`                                                           │
│                                                                                                  │
│ # Approach preferences for this project                                                          │
│ - Before any significant task in this repo, show me 2-3 ways you could approach it. Wait for me to choose before coding.                                                                         │
│ - Ask, don't assume — if intent, architecture, or requirements are unclear, ask first.