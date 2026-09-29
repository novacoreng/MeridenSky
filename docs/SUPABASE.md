# Meridian Sky — Supabase

The core schema lives in `supabase/migrations/0001_meridian_core.sql`.

## Project setup

1. Create or select the Meridian Sky Supabase project.
2. Apply the migration through Supabase migrations.
3. Configure Storage for `media_assets` using a private write path and controlled public delivery for published media.
4. Configure Auth for admin users.
5. Add production environment variables from `.env.example` to Vercel.

## Data model

- `properties` — property and stay information
- `media_assets` — gallery and editorial media
- `experiences` — experience catalogue
- `events` — social/event calendar
- `customers` — guest/customer records
- `enquiries` — general and booking enquiries
- `concierge_requests` — concierge workflow
- `event_rsvps` — event registrations
- `newsletter_subscribers` — marketing subscriptions
- `site_settings` — editable global settings
- `audit_logs` — administrative audit trail

## Security

RLS is enabled on every application table. Public reads are limited to published editorial records. Public writes are limited to the submission tables needed by the website. Administrative reads/writes should be added through authenticated role policies once the Supabase project reference and admin roles are configured.

Do not expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.
