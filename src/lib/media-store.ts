import type { MediaAsset } from "./media";
export type { MediaAsset } from "./media";

export const mediaStorageKey = "meridian-sky-media-v1";

const imageSources = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85",
];

export const defaultMedia: MediaAsset[] = [
  { id: "media-01", src: imageSources[0], title: "Interiors", alt: "Meridian Sky interior", category: "spaces", status: "published", featured: true, sortOrder: 1, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-02", src: imageSources[1], title: "Living", alt: "Meridian Sky living space", category: "spaces", status: "published", featured: false, sortOrder: 2, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-03", src: imageSources[2], title: "City", alt: "City view from Meridian Sky", category: "views", status: "published", featured: false, sortOrder: 3, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-04", src: imageSources[3], title: "Lifestyle", alt: "Meridian Sky lifestyle scene", category: "lifestyle", status: "published", featured: false, sortOrder: 4, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-05", src: imageSources[4], title: "Rooftop", alt: "Meridian Sky rooftop", category: "spaces", status: "published", featured: false, sortOrder: 5, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
  { id: "media-06", src: imageSources[5], title: "View", alt: "View from Meridian Sky", category: "views", status: "published", featured: false, sortOrder: 6, createdAt: "2026-01-01", updatedAt: "2026-01-01" },
];

const legacyImageMap: Record<string, string> = {
  "/images/01.jpg": imageSources[0],
  "/images/02.jpg": imageSources[1],
  "/images/03.jpg": imageSources[2],
  "/images/04.jpg": imageSources[3],
  "/images/05.jpg": imageSources[4],
  "/images/06.jpg": imageSources[5],
};

function isMediaAsset(value: unknown): value is MediaAsset {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<MediaAsset>;
  return typeof item.id === "string" && typeof item.src === "string" && typeof item.title === "string" && typeof item.alt === "string" && typeof item.category === "string" && typeof item.status === "string" && typeof item.sortOrder === "number";
}

function repairLegacySources(items: MediaAsset[]) {
  return items.map((item) => ({ ...item, src: legacyImageMap[item.src] ?? item.src }));
}

export function readMediaStore(): MediaAsset[] {
  if (typeof window === "undefined") return defaultMedia;
  try {
    const raw = window.localStorage.getItem(mediaStorageKey);
    if (!raw) return defaultMedia;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.every(isMediaAsset)) return defaultMedia;
    const repaired = repairLegacySources(parsed);
    if (JSON.stringify(repaired) !== JSON.stringify(parsed)) {
      try { window.localStorage.setItem(mediaStorageKey, JSON.stringify(repaired)); } catch { /* UI remains usable. */ }
    }
    return repaired;
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
