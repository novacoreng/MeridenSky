"use client";

import Link from "next/link";
import { useState } from "react";
import AdminEditPanel, { type EditableContent } from "@/components/AdminEditPanel";
import "../admin.css";

const initialItems: EditableContent[] = [
  { title: "Private Dining", slug: "private-dining", eyebrow: "MERIDIAN EXPERIENCE", description: "A considered dining experience shaped around your people, your occasion and the atmosphere you want to create.", status: "published" },
  { title: "Rooftop Evenings", slug: "rooftop-evenings", eyebrow: "MERIDIAN EXPERIENCE", description: "Let the city become part of the room as the evening moves from cocktails and conversation into the night.", status: "published" },
  { title: "Skyline Friday", slug: "skyline-friday", eyebrow: "SKY SOCIAL", description: "A late-evening social above the city, with music, cocktails and a view that carries the night.", status: "published" },
];

export default function ContentAdmin() {
  const [items, setItems] = useState(initialItems);
  const [selected, setSelected] = useState(0);
  const [saved, setSaved] = useState(false);
  function save(value: EditableContent) { setItems((current) => current.map((item, index) => index === selected ? value : item)); setSaved(true); window.setTimeout(() => setSaved(false), 1800); }
  return <main className="adminShell"><aside className="adminSide"><Link className="adminBrand" href="/admin">MERIDIAN <span>SKY</span></Link><p className="adminLabel">CONTENT STUDIO</p><Link href="/admin" className="backLink">← Control room</Link></aside><section className="adminMain"><header className="adminHeader"><div><p className="adminLabel">EDITORIAL CMS</p><h1>Content Studio</h1></div>{saved && <span className="saveNotice">Saved</span>}</header><div className="contentStudio"><div className="contentList">{items.map((item, index) => <button key={item.slug} className={selected === index ? "selected" : ""} onClick={() => setSelected(index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.title}</strong><small>{item.status}</small></button>)}</div><AdminEditPanel key={items[selected].slug} initial={items[selected]} onSave={save} /></div></section></main>;
}
