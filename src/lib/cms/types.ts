export type ContentStatus = "draft" | "published" | "archived";

export interface Property {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: ContentStatus;
  maxGuests?: number;
  bedrooms?: number;
  bathrooms?: number;
  city?: string;
}

export interface Experience {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  status: ContentStatus;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  startsAt: string;
  description: string;
  status: ContentStatus;
  capacity?: number;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: "new" | "reviewing" | "resolved" | "archived";
  createdAt: string;
}

export interface ConciergeRequest {
  id: string;
  name: string;
  service: string;
  status: "new" | "reviewing" | "quoted" | "approved" | "in_progress" | "completed" | "cancelled";
  createdAt: string;
}
