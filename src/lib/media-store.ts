import type { MediaAsset } from "./media";

export const mediaStorageKey = "meridian-sky-media-v1";

export const defaultMedia: MediaAsset[] = [
  { id: "media-01", src: "/images/01.jpg", title: "Interiors", alt: "Meridian Sky interior", category: "spaces", status: "published", featured: true, sortOrder: 1, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-02", src: "/images/02.jpg", title: "Living", alt: "Meridian Sky living space", category: "spaces", status: "published", featured: false, sortOrder: 2, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-03", src: "/images/03.jpg", title: "City", alt: "City view from Meridian Sky", category: "views", status: "published", featured: false, sortOrder: 3, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-04", src: "/images/04.jpg", title: "Lifestyle", alt: "Meridian Sky lifestyle scene", category: "lifestyle", status: "published", featured: false, sortOrder: 4, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-05", src: "/images/05.jpg", title: "Rooftop", alt: "Meridian Sky rooftop", category: "spaces", status: "published", featured: false, sortOrder: 5, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-06", src: "/images/06.jpg", title: "View", alt: "View from Meridian Sky", category: "views", status: "published", featured: false, sortOrder: 6, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
];

function isMediaAsset(value: unknown): value is MediaAsset {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<MediaAsset>;
  return typeof item.id === "string" && typeof item.src === "string" && typeof item.title === "string" && typeof item.alt === "string" && typeof item.category === "string" && typeof item.status === "string" && typeof item.sortOrder === "number";
}

export function readMediaStore(): MediaAsset[] {
  if (typeof window === "undefined") return defaultMedia;
  try {
    const raw = window.localStorage.getItem(mediaStorageKey);
    if (!raw) return defaultMedia;
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.every(isMediaAsset) ? parsed : defaultMedia;
  } catch {
    return defaultMedia;
  }
}

export function writeMediaStore(items: MediaAsset[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(mediaStorageKey, JSON.stringify(items));
  } catch {
    // Keep the in-memory UI usable if browser storage is unavailable or full.
  }
}
