export type AdminCollection = "properties" | "experiences" | "events" | "gallery" | "enquiries" | "concierge";

export type AdminStatus = "draft" | "published" | "pending" | "archived" | "new" | "reviewing" | "contacted" | "confirmed" | "closed";

export type AdminRecord = {
  id: string;
  title: string;
  status: AdminStatus;
  updatedAt: string;
  [key: string]: unknown;
};

const seed: Record<AdminCollection, AdminRecord[]> = {
  properties: [{ id: "property-001", title: "Meridian Sky", status: "published", updatedAt: new Date().toISOString() }],
  experiences: [{ id: "experience-001", title: "Private Dining", status: "published", updatedAt: new Date().toISOString() }],
  events: [{ id: "event-001", title: "Skyline Friday", status: "published", updatedAt: new Date().toISOString() }],
  gallery: [],
  enquiries: [],
  concierge: [],
};

const storageKey = "meridian-sky-admin-store-v1";

export function readAdminStore(): Record<AdminCollection, AdminRecord[]> {
  if (typeof window === "undefined") return seed;
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : seed;
  } catch {
    return seed;
  }
}

export function writeAdminStore(store: Record<AdminCollection, AdminRecord[]>) {
  if (typeof window !== "undefined") window.localStorage.setItem(storageKey, JSON.stringify(store));
}

export function makeAdminRecord(title: string): AdminRecord {
  return { id: `record-${Date.now()}`, title, status: "draft", updatedAt: new Date().toISOString() };
}
