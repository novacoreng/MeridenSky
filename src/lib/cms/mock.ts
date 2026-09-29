import type { ConciergeRequest, Enquiry, Event, Experience, Property } from "./types";

export const property: Property = {
  id: "property-meridian-sky",
  name: "Meridian Sky",
  slug: "meridian-sky",
  tagline: "Above the ordinary.",
  description: "A private luxury experience above the city.",
  status: "published",
};

export const experiences: Experience[] = [
  { id: "private-dining", title: "Private Dining", slug: "private-dining", shortDescription: "Your table. Your people. Your view.", status: "published" },
  { id: "rooftop-evenings", title: "Rooftop Evenings", slug: "rooftop-evenings", shortDescription: "Golden hour through to midnight.", status: "published" },
  { id: "celebrations", title: "Celebrations", slug: "celebrations", shortDescription: "Make the moment unforgettable.", status: "published" },
  { id: "romantic-escapes", title: "Romantic Escapes", slug: "romantic-escapes", shortDescription: "Private moments above the city.", status: "published" },
  { id: "entertainment", title: "Entertainment", slug: "entertainment", shortDescription: "Music, cocktails and your own atmosphere.", status: "published" },
  { id: "luxury-concierge", title: "Luxury Concierge", slug: "luxury-concierge", shortDescription: "Tell us what you need.", status: "published" },
];

export const events: Event[] = [
  { id: "skyline-friday", title: "Skyline Friday", slug: "skyline-friday", startsAt: "Friday • 8:00 PM", description: "Music, cocktails and city views.", status: "published" },
  { id: "sky-saturday", title: "Sky Saturday", slug: "sky-saturday", startsAt: "Saturday • 9:00 PM", description: "A private social above the city.", status: "published" },
  { id: "sunday-sky-brunch", title: "Sunday Sky Brunch", slug: "sunday-sky-brunch", startsAt: "Sunday • 12:00 PM", description: "Food, music and views.", status: "published" },
];

export const enquiries: Enquiry[] = [
  { id: "ENQ-001", name: "Guest enquiry", email: "guest@example.com", subject: "Stay enquiry", status: "new", createdAt: "2026-09-29T10:00:00Z" },
];

export const conciergeRequests: ConciergeRequest[] = [
  { id: "CON-001", name: "Guest request", service: "Private dining + chauffeur", status: "reviewing", createdAt: "2026-09-29T09:30:00Z" },
];
