# Meridian Sky

Luxury lifestyle and social experience website built from the Meridian Sky PRD/TRD with the NOVA UI/UX direction.

## Current build

- Next.js App Router + TypeScript foundation
- Cinematic editorial homepage
- Responsive Stay, Experience, Gallery, Sky Social, Events and Concierge routes
- Dark obsidian / warm-white / champagne visual system
- Supabase-ready core relational schema with RLS
- Environment variable template
- Supabase setup/security documentation

## Supabase foundation

The first migration is `supabase/migrations/0001_meridian_core.sql`. It establishes properties, media, experiences, events, customers, enquiries, concierge requests, event RSVPs, newsletter subscribers, site settings and audit logs.

The migration has **not** been executed against a live Supabase project yet because the connected Supabase project reference has not been supplied/discovered for Meridian Sky. The schema is ready to apply once the correct project is connected.

## Asset handoff

The supplied image pack has been inspected and mapped to `/public/images/01.jpg` through `/public/images/06.jpg`. The connected GitHub write interface cannot commit the uploaded binary pack directly in this run, so those files still need to be placed at those paths before deployment.

## Run

```bash
npm install
npm run dev
```

## Next build phases

1. Apply Supabase migration + admin Auth/RBAC
2. Connect public pages to CMS data
3. Gallery/media management
4. Experience builder
5. Sky Social + Events + RSVP workflow
6. Concierge workflow
7. Booking + availability
8. Email / WhatsApp / Analytics
9. Security / GDPR / SEO
10. QA + Vercel production deployment
