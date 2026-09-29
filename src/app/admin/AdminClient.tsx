"use client";

import "./admin.css";
import { useMemo, useState } from "react";
import { makeAdminRecord, readAdminStore, writeAdminStore, type AdminCollection, type AdminRecord } from "@/lib/admin-store";

const collections: { key: AdminCollection; label: string }[] = [{key:"properties",label:"Properties"},{key:"gallery",label:"Gallery"},{key:"experiences",label:"Experiences"},{key:"events",label:"Events"},{key:"concierge",label:"Concierge"},{key:"enquiries",label:"Enquiries"}];

export default function AdminClient(){
 const [store,setStore]=useState(readAdminStore); const [active,setActive]=useState<AdminCollection>("properties"); const [query,setQuery]=useState("");
 const records=useMemo(()=>store[active].filter(r=>r.title.toLowerCase().includes(query.toLowerCase())),[store,active,query]);
 const add=()=>{const title=window.prompt(`New ${active.slice(0,-1)} title`);if(!title?.trim())return;const next={...store,[active]:[...store[active],makeAdminRecord(title.trim())]};setStore(next);writeAdminStore(next)};
 const status=(record:AdminRecord,value:AdminRecord["status"])=>{const next={...store,[active]:store[active].map(r=>r.id===record.id?{...r,status:value,updatedAt:new Date().toISOString()}:r)};setStore(next);writeAdminStore(next)};
 const logout=async()=>{await fetch("/api/admin/session",{method:"DELETE"});window.location.href="/admin/login"};
 return <main className="adminShell"><aside className="adminRail"><a href="/" className="adminBrand">MERIDIAN <span>SKY</span></a><p className="adminEyebrow">CONTROL ROOM</p><nav>{collections.map(c=><button key={c.key} className={active===c.key?"active":""} onClick={()=>setActive(c.key)}>{c.label}<span>{store[c.key].length}</span></button>)}</nav><div className="adminRailFooter">LOCAL CMS<br/>V1 · SUPABASE READY</div></aside><section className="adminMain"><header className="adminHeader"><div><p className="adminEyebrow">CONTENT OPERATIONS</p><h1>{collections.find(c=>c.key===active)?.label}</h1></div><div className="adminHeaderActions"><button className="adminPrimary" onClick={add}>+ New</button><button className="adminSecondary" onClick={logout}>Sign out</button></div></header><div className="adminToolbar"><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={`Search ${active}…`} aria-label={`Search ${active}`}/><span>{records.length} records</span></div><div className="adminRows">{records.length?records.map(record=><article className="adminRow" key={record.id}><div><strong>{record.title}</strong><small>{record.id}</small></div><select value={record.status} onChange={e=>status(record,e.target.value as AdminRecord["status"])} aria-label={`Status for ${record.title}`}><option value="draft">Draft</option><option value="published">Published</option><option value="pending">Pending</option><option value="archived">Archived</option></select><time>{new Date(record.updatedAt).toLocaleDateString("en-GB")}</time></article>):<div className="adminEmpty"><span>00</span><h2>No records yet.</h2><p>Create the first record in this collection.</p><button className="adminPrimary" onClick={add}>Create record</button></div>}</div></section></main>;
}
