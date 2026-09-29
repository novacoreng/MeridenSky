import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { readAdminStore } from "@/lib/admin-store";
import { resolveEvents } from "@/lib/events";
import "../section.css";
import "./events.css";

export default function EventsPage(){const events=resolveEvents(readAdminStore().events as Record<string,unknown>[]);return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">SKY SOCIAL / EVENTS</p><h1>Meet you<br/><em>at Meridian.</em></h1><p>Private social moments, curated evenings and experiences that turn a place to stay into a place to be.</p></section><section className="content"><div className="metaList">{events.map((event,i)=><article className="metaRow eventCard" key={event.slug}><span><strong>{String(i+1).padStart(2,"0")}</strong> · {event.title}<small>{event.description}</small></span><span>{event.date} · {event.time}<br/>{event.meta}<br/><Link className="textLink" href={`/events/${event.slug}`}>View event ↗</Link></span></article>)}</div></section><section className="pageCta"><p className="eyebrow">PRIVATE EVENTS</p><h2>Your people.<br/><em>Your night.</em></h2><p>For private celebrations and event enquiries, speak directly with the Meridian Sky team.</p><Link className="textLink" href="/book">Make an enquiry ↗</Link></section><SiteFooter/></main>}
