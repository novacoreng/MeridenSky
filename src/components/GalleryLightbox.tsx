"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryItem = { src: string; label: string; category: string; alt?: string };

export default function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const closeRef = useRef<HTMLButtonElement>(null);
  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];
  const visible = items.filter((item) => filter === "All" || item.category === filter);
  const current = active === null ? null : visible[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (!visible.length) return;
      if (event.key === "ArrowRight") setActive((index) => index === null ? 0 : (index + 1) % visible.length);
      if (event.key === "ArrowLeft") setActive((index) => index === null ? 0 : (index - 1 + visible.length) % visible.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; previous?.focus(); };
  }, [active, visible.length]);

  return <>
    <div className="galleryFilters" aria-label="Gallery categories">
      {categories.map((category) => <button type="button" key={category} className={filter === category ? "active" : ""} aria-pressed={filter === category} onClick={() => { setFilter(category); setActive(null); }}>{category}</button>)}
    </div>
    {visible.length === 0 ? <div className="galleryEmpty" role="status"><p className="eyebrow">THE SKY / GALLERY</p><h2>Nothing here<br /><em>just yet.</em></h2><p>Published gallery moments will appear here.</p></div> : <div className="immersiveGallery">
      {visible.map((item, index) => <button type="button" className="immersiveItem" key={`${item.src}-${item.category}`} onClick={() => setActive(index)} aria-label={`Open ${item.label}`}>
        <Image src={item.src} alt={item.alt || item.label} fill sizes="(max-width: 700px) 100vw, 50vw" />
        <span>{item.label}<b aria-hidden="true">↗</b></span>
      </button>)}
    </div>}
    {current && <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.label} onClick={() => setActive(null)}>
      <button type="button" ref={closeRef} className="lightboxClose" onClick={() => setActive(null)} aria-label="Close gallery">×</button>
      <button type="button" className="lightboxPrev" onClick={(event) => { event.stopPropagation(); setActive((index) => index === null ? 0 : (index - 1 + visible.length) % visible.length); }} aria-label="Previous image">←</button>
      <div className="lightboxImage" onClick={(event) => event.stopPropagation()}><Image src={current.src} alt={current.alt || current.label} fill sizes="100vw" priority /></div>
      <button type="button" className="lightboxNext" onClick={(event) => { event.stopPropagation(); setActive((index) => index === null ? 0 : (index + 1) % visible.length); }} aria-label="Next image">→</button>
      <div className="lightboxCaption">{current.label}<span>{String(active + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}</span></div>
    </div>}
  </>;
}
