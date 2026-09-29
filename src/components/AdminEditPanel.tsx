"use client";

import { useState } from "react";

export type EditableContent = { title: string; slug: string; eyebrow: string; description: string; status: "draft" | "published" | "archived" };

export default function AdminEditPanel({ initial, onSave }: { initial: EditableContent; onSave: (value: EditableContent) => void }) {
  const [value, setValue] = useState(initial);
  const [preview, setPreview] = useState(false);
  const patch = (key: keyof EditableContent, next: string) => setValue((current) => ({ ...current, [key]: next } as EditableContent));
  if (preview) return <section className="editPanel previewPanel"><div className="previewToolbar"><span>LIVE PREVIEW</span><button type="button" onClick={() => setPreview(false)}>Back to editor</button></div><p className="eyebrow">{value.eyebrow}</p><h2>{value.title}</h2><p className="previewSlug">/{value.slug}</p><p>{value.description}</p><div className="previewStatus">{value.status}</div><button className="adminPrimary" type="button" onClick={() => onSave(value)}>Save & publish</button></section>;
  return <section className="editPanel"><div className="editHeader"><div><span>CONTENT EDITOR</span><h2>Edit content</h2></div><button type="button" onClick={() => setPreview(true)}>Preview</button></div><label>Title<input value={value.title} onChange={(e) => patch("title", e.target.value)} /></label><label>Slug<input value={value.slug} onChange={(e) => patch("slug", e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))} /></label><label>Eyebrow<input value={value.eyebrow} onChange={(e) => patch("eyebrow", e.target.value)} /></label><label>Description<textarea rows={6} value={value.description} onChange={(e) => patch("description", e.target.value)} /></label><label>Status<select value={value.status} onChange={(e) => patch("status", e.target.value)}><option value="draft">Draft</option><option value="published">Published</option><option value="archived">Archived</option></select></label><button className="adminPrimary" type="button" onClick={() => onSave(value)}>Save changes</button></section>;
}
