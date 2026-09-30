# Machine Native — machinenative.co

Marketing site for Machine Native, a small senior studio in Kampala.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · React Context · Supabase · GSAP

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase keys
npm run dev
```

## Structure

```
src/
  app/                  one route per page: / work services process about pricing faq contact
    contact/actions.ts  server action — validates (zod) and inserts into Supabase `enquiries`
  components/
    ui/                 shadcn/ui primitives (button, input, textarea, label, accordion)
    site/               header, footer, CTA band, WebGL background, animations, cards…
  context/
    site-context.tsx    SiteProvider: accent colour, motion level, grain, currency (persisted), mobile menu
  content/
    site.ts             all copy: services, projects, process, values, FAQs, contact lines
    pricing.ts          pricing tiers in UGX/USD — edit prices here
supabase/migrations/    SQL for the `enquiries` table + insert-only RLS policy
```

## Supabase

1. Create a project and run `supabase/migrations/*.sql` (SQL editor or `supabase db push`).
2. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (optionally `SUPABASE_SERVICE_ROLE_KEY`) locally and in Vercel.
3. Enquiries land in the `enquiries` table. If Supabase isn't configured, the form shows an error pointing people to the email address.

## Theming & motion

- Brand accent is the `--accent` CSS variable, driven by `accent` in `SiteProvider` (alternates: `#FF5A1F`, `#5B8CFF`, `#E8E3D6`).
- `motion` (`restrained` | `balanced` | `showy`) scales animation distance/stagger; `prefers-reduced-motion` disables animations and freezes the shader.
- Breakpoints: `nav:` = 1060px (desktop nav vs burger), `sm:` = 640px (mobile layout).

## Open content items

Placeholder testimonial, project URLs for Trax/Baluti/COMAFRO, team size, final client list, contact email, and pricing tiers still need confirming — see the design handoff.
