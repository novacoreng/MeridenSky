# Meridian Sky

Luxury lifestyle and private stay website built with the NOVA UI/UX direction.

## Current build

- Next.js App Router + TypeScript
- Static export for Vercel/CDN hosting
- Cinematic editorial homepage
- Responsive Stay, Experience, Gallery, Events, Concierge and Booking routes
- Dark obsidian / warm-white / champagne visual system
- Local image assets under `public/images`
- Booking handoff to Booking.com and Expedia.com
- Responsive mobile navigation with no back-navigation control
- No CMS, database, API routes, authentication or server middleware

## Static architecture

All public content is compiled into the site at build time. There are no runtime database requests, enquiry APIs, admin sessions, server middleware or Supabase dependencies in the production site.

The booking page intentionally sends visitors to the selected booking platform instead of collecting a booking form.

## Assets

The Meridian Sky image pack is stored at `/public/images/01.jpg` through `/public/images/06.jpg`, with the supplied Booking.com and Expedia logos stored alongside them.

## Run

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The Next.js configuration uses a static export, producing a deployable static site without a backend runtime.
