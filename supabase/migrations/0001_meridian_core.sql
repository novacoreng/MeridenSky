create extension if not exists pgcrypto;

create type public.content_status as enum ('draft','published','archived');
create type public.event_status as enum ('draft','published','cancelled','completed');
create type public.enquiry_status as enum ('new','reviewing','responded','closed','spam');
create type public.concierge_status as enum ('new','reviewing','quoted','approved','paid','in_progress','completed','cancelled');

create table public.properties (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  tagline text,
  description text,
  address text,
  city text,
  country text,
  latitude numeric(10,7),
  longitude numeric(10,7),
  bedrooms integer,
  bathrooms numeric(4,1),
  max_guests integer,
  check_in_time time,
  check_out_time time,
  minimum_nights integer,
  house_rules text,
  booking_mode text not null default 'enquiry',
  booking_url text,
  currency char(3),
  base_price numeric(12,2),
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete cascade,
  storage_path text not null,
  public_url text,
  media_type text not null default 'image',
  alt_text text,
  caption text,
  focal_x numeric(5,4),
  focal_y numeric(5,4),
  sort_order integer not null default 0,
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now()
);

create table public.experiences (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  description text,
  image_id uuid references public.media_assets(id) on delete set null,
  sort_order integer not null default 0,
  status public.content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  description text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  location text,
  capacity integer,
  price numeric(12,2),
  currency char(3),
  image_id uuid references public.media_assets(id) on delete set null,
  status public.event_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  country text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index customers_email_idx on public.customers(lower(email));

create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete set null,
  enquiry_type text not null default 'general',
  subject text,
  message text not null,
  status public.enquiry_status not null default 'new',
  source text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.concierge_requests (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete set null,
  service_type text,
  requested_for timestamptz,
  occasion text,
  budget numeric(12,2),
  currency char(3),
  message text not null,
  status public.concierge_status not null default 'new',
  admin_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.event_rsvps (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  customer_id uuid references public.customers(id) on delete set null,
  guest_count integer not null default 1 check (guest_count > 0),
  status text not null default 'requested',
  ticket_reference text unique,
  created_at timestamptz not null default now()
);

create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  first_name text,
  status text not null default 'subscribed',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

create trigger properties_updated_at before update on public.properties for each row execute function public.set_updated_at();
create trigger experiences_updated_at before update on public.experiences for each row execute function public.set_updated_at();
create trigger events_updated_at before update on public.events for each row execute function public.set_updated_at();
create trigger customers_updated_at before update on public.customers for each row execute function public.set_updated_at();
create trigger enquiries_updated_at before update on public.enquiries for each row execute function public.set_updated_at();
create trigger concierge_updated_at before update on public.concierge_requests for each row execute function public.set_updated_at();
create trigger newsletter_updated_at before update on public.newsletter_subscribers for each row execute function public.set_updated_at();
create trigger site_settings_updated_at before update on public.site_settings for each row execute function public.set_updated_at();

alter table public.properties enable row level security;
alter table public.media_assets enable row level security;
alter table public.experiences enable row level security;
alter table public.events enable row level security;
alter table public.customers enable row level security;
alter table public.enquiries enable row level security;
alter table public.concierge_requests enable row level security;
alter table public.event_rsvps enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.site_settings enable row level security;
alter table public.audit_logs enable row level security;

create policy "published properties are public" on public.properties for select using (status = 'published');
create policy "published media are public" on public.media_assets for select using (status = 'published');
create policy "published experiences are public" on public.experiences for select using (status = 'published');
create policy "published events are public" on public.events for select using (status = 'published');

create policy "public can submit enquiries" on public.enquiries for insert with check (true);
create policy "public can submit concierge requests" on public.concierge_requests for insert with check (true);
create policy "public can submit event rsvps" on public.event_rsvps for insert with check (true);
create policy "public can subscribe" on public.newsletter_subscribers for insert with check (true);

create index media_property_sort_idx on public.media_assets(property_id, sort_order);
create index experiences_status_sort_idx on public.experiences(status, sort_order);
create index events_status_start_idx on public.events(status, starts_at);
create index enquiries_status_created_idx on public.enquiries(status, created_at desc);
create index concierge_status_created_idx on public.concierge_requests(status, created_at desc);
create index event_rsvps_event_idx on public.event_rsvps(event_id);
