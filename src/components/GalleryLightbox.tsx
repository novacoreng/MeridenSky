"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryItem = { src: string; label: string; category: string };

export default function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const visible = items.filter((item) => filter === "All" || item.category === filter);
  const current = active === null ? null : visible[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => index === null ? 0 : (index + 1) % visible.length);
      if (event.key === "ArrowLeft") setActive((index) => index === null ? 0 : (index - 1 + visible.length) % visible.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active, visible.length]);

  return <>
    <div className="galleryFilters" aria-label="Gallery categories">
      {categories.map((category) => <button key={category} className={filter === category ? "active" : ""} onClick={() => { setFilter(category); setActive(null); }}>{category}</button>)}
    </div>
    <div className="immersiveGallery">
      {visible.map((item, index) => <button className="immersiveItem" key={`${item.src}-${item.category}`} onClick={() => setActive(index)} aria-label={`Open ${item.label}`}>
        <Image src={item.src} alt={item.label} fill sizes="(max-width: 700px) 100vw, 50vw" />
        <span>{item.label}<b>↗</b></span>
      </button>)}
    </div>
    {current && <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.label} onClick={() => setActive(null)}>
      <button className="lightboxClose" onClick={() => setActive(null)} aria-label="Close gallery">×</button>
      <button className="lightboxPrev" onClick={(event) => { event.stopPropagation(); setActive((index) => index === null ? 0 : (index - 1 + visible.length) % visible.length); }} aria-label="Previous image">←</button>
      <div className="lightboxImage" onClick={(event) => event.stopPropagation()}><Image src={current.src} alt={current.label} fill sizes="100vw" /></div>
      <button className="lightboxNext" onClick={(event) => { event.stopPropagation(); setActive((index) => index === null ? 0 : (index + 1) % visible.length); }} aria-label="Next image">→</button>
      <div className="lightboxCaption">{current.label}<span>{String(active + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}</span></div>
    </div>}
  </>;
}
