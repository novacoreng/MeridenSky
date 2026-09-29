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

export function readMediaStore(): MediaAsset[] {
  if (typeof window === "undefined") return defaultMedia;
  try {
    const raw = window.localStorage.getItem(mediaStorageKey);
    return raw ? JSON.parse(raw) as MediaAsset[] : defaultMedia;
  } catch { return defaultMedia; }
}

export function writeMediaStore(items: MediaAsset[]) {
  if (typeof window !== "undefined") window.localStorage.setItem(mediaStorageKey, JSON.stringify(items));
}
