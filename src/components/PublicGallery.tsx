"use client";

import { useEffect, useState } from "react";
import GalleryLightbox from "@/components/GalleryLightbox";
import { readMediaStore, type MediaAsset } from "@/lib/media-store";

export default function PublicGallery() {
  const [items, setItems] = useState<MediaAsset[]>([]);
  useEffect(() => { setItems(readMediaStore().filter((item) => item.status === "published").sort((a, b) => a.sortOrder - b.sortOrder)); }, []);
  const galleryItems = items.map((item) => ({ src: item.src, label: item.title, category: item.category.charAt(0).toUpperCase() + item.category.slice(1), alt: item.alt }));
  return <GalleryLightbox items={galleryItems} />;
}
