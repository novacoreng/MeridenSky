export type MediaStatus = "draft" | "published" | "archived";
export type MediaCategory = "spaces" | "views" | "lifestyle" | "events" | "experience";

export interface MediaAsset {
  id: string;
  src: string;
  title: string;
  alt: string;
  category: MediaCategory;
  status: MediaStatus;
  featured: boolean;
  sortOrder: number;
  width?: number;
  height?: number;
  caption?: string;
  createdAt: string;
  updatedAt: string;
}

export function createMediaAsset(input: Pick<MediaAsset, "src" | "title" | "alt" | "category">): MediaAsset {
  const now = new Date().toISOString();
  return {
    id: `media-${Date.now()}`,
    ...input,
    status: "draft",
    featured: false,
    sortOrder: 0,
    createdAt: now,
    updatedAt: now,
  };
}
