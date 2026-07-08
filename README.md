# Held

For women living with PMS and PMDD. Anonymous encouragement notes on a public
wall, held in moderation until approved. No subscriptions, no passwords —
Supabase magic-link auth.

Next.js (App Router, TypeScript) + Tailwind + Supabase.

## Routes

| Route        | What it is                                                         |
| ------------ | ------------------------------------------------------------------ |
| `/`          | Landing (static)                                                   |
| `/begin`     | Onboarding + magic-link email sign-in                              |
| `/today`     | Daily-letter dashboard (decorative, no persistence)                |
| `/journal`   | Journal prompt (decorative, no persistence)                        |
| `/wall`      | Real — reads approved posts from Supabase; signed-in users submit, posts land as `pending` |
| `/resources` | Crisis lines + article list (static)                               |
| `/mod`       | Admin-only moderation queue — approve / reject pending posts       |

## Setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open the SQL editor and run `supabase/schema.sql` — **first edit the two
   admin email lists** in the RLS policies near the bottom. The file also
   seeds nine pre-approved notes so the wall isn't empty; delete that block
   if you don't want them.
3. Copy `.env.example` to `.env.local` and fill in your project URL, anon
   key, and the same admin emails (`ADMIN_EMAILS`, comma-separated).
4. In Supabase → Authentication → URL Configuration, set the Site URL to
   `http://localhost:3000` (add your production URL later).
5. `npm install && npm run dev`

Sign-in is magic-link only (`/begin`, last step). The link lands on
`/auth/callback`, which exchanges the code for a session.

## Moderation

`/mod` is gated twice: the page and its server actions check the signed-in
email against `ADMIN_EMAILS`, and Postgres RLS independently only lets
allowlisted emails read pending posts or change `status`. Rejected posts keep
their row with `status = 'rejected'` (nothing is deleted).

## Out of scope for now

Journal/mood persistence, email digest, French translations, real article
content.
