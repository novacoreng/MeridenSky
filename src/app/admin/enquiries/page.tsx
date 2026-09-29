"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { readAdminStore, writeAdminStore } from "@/lib/admin-store";
import type { Enquiry, EnquiryStatus, EnquiryType } from "@/lib/enquiries";
import "../admin.css";

const statuses: EnquiryStatus[] = ["new", "reviewing", "contacted", "confirmed", "closed"];
const enquiryTypes: EnquiryType[] = ["booking", "concierge", "event", "experience"];

function isEnquiry(value: unknown): value is Enquiry {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return item.contentType === "enquiry" && typeof item.id === "string" && typeof item.title === "string" && typeof item.updatedAt === "string" && typeof item.name === "string" && typeof item.email === "string" && typeof item.message === "string" && typeof item.reference === "string" && enquiryTypes.includes(item.enquiryType as EnquiryType) && statuses.includes(item.status as EnquiryStatus);
}

export default function EnquiriesAdmin() {
  const [store, setStore] = useState(readAdminStore);
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<EnquiryStatus | "all">("all");
  const [query, setQuery] = useState("");

  const enquiries = useMemo(() => store.enquiries.filter(isEnquiry).filter((e) => (filter === "all" || e.status === filter) && `${e.name} ${e.email} ${e.reference} ${e.message}`.toLowerCase().includes(query.toLowerCase())).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)), [store.enquiries, filter, query]);
  const current = enquiries.find((e) => e.id === selected);

  function update(id: string, status: EnquiryStatus) {
    const next = { ...store, enquiries: store.enquiries.map((record) => record.id === id ? { ...record, status, updatedAt: new Date().toISOString() } : record) };
    setStore(next);
    writeAdminStore(next);
  }

  return <main className="adminShell">
    <aside className="adminSide"><Link className="adminBrand" href="/admin">MERIDIAN <span>SKY</span></Link><p className="adminLabel">ENQUIRY INBOX</p><nav aria-label="Enquiry status filters">{statuses.map((status) => <button type="button" key={status} onClick={() => setFilter(status)} className={filter === status ? "selected" : ""} aria-pressed={filter === status}>{status}<span>{store.enquiries.filter((record) => isEnquiry(record) && record.status === status).length}</span></button>)}</nav><Link href="/admin" className="backLink">← Control room</Link></aside>
    <section className="adminMain"><header className="adminHeader"><div><p className="adminLabel">GUEST RELATIONS</p><h1>Enquiries</h1></div><span className="inboxCount">{enquiries.length} visible</span></header>
      <div className="adminToolbar"><label className="srOnly" htmlFor="enquiry-search">Search enquiries</label><input id="enquiry-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, email or reference…"/><select value={filter} onChange={(e) => setFilter(e.target.value as EnquiryStatus | "all")} aria-label="Filter enquiries"><option value="all">All enquiries</option>{statuses.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
      <div className="inboxLayout"><div className="inboxList">{enquiries.length ? enquiries.map((e) => <button type="button" key={e.id} className={selected === e.id ? "selected" : ""} onClick={() => setSelected(e.id)}><span>{e.enquiryType}</span><strong>{e.name}</strong><small>{e.reference} · {new Date(e.updatedAt).toLocaleString("en-GB")}</small><i>{e.status}</i></button>) : <div className="adminEmpty"><span>00</span><h2>No enquiries.</h2><p>New booking and concierge requests will appear here.</p></div>}</div>
        {current && <article className="inboxDetail"><div className="editHeader"><div><span>{current.enquiryType.toUpperCase()}</span><h2>{current.name}</h2></div><span className="reference">{current.reference}</span></div><dl><div><dt>Email</dt><dd>{current.email}</dd></div>{current.phone && <div><dt>Phone</dt><dd>{current.phone}</dd></div>}{current.preferredDate && <div><dt>Preferred date</dt><dd>{current.preferredDate}</dd></div>}{current.guests !== undefined && <div><dt>Guests</dt><dd>{current.guests}</dd></div>}</dl><div className="messageBox"><span>MESSAGE</span><p>{current.message}</p></div><label>Status<select value={current.status} onChange={(e) => update(current.id, e.target.value as EnquiryStatus)}>{statuses.map((s) => <option key={s} value={s}>{s}</option>)}</select></label></article>}
      </div></section>
  </main>;
}
