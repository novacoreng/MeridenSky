import Link from "next/link";
import { notFound } from "next/navigation";
import { readAdminStore } from "@/lib/admin-store";
import { resolveEvent, fallbackEvents } from "@/lib/events";
import { EnquiryForm } from "@/components/EnquiryForm";
import "../../section.css";

export function generateStaticParams(){return fallbackEvents.map(event=>({slug:event.slug}));}

export default async function EventDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const event=resolveEvent(readAdminStore().events as Record<string,unknown>[],slug);if(!event)notFound();return <main className="subPage"><header className="simpleNav"><Link className="brand" href="/">MERIDIAN <span>SKY</span></Link><Link className="navCta" href="/events">All events</Link></header><section className="subHero"><p className="eyebrow">SKY SOCIAL / {event.code}</p><h1>{event.title}</h1><p>{event.date} · {event.time} · {event.meta}</p></section><section className="content eventDetail"><p className="eventLead">{event.description}</p><div className="rsvpPanel"><p className="eyebrow">PRIVATE RSVP</p><h2>Reserve your<br/><em>place.</em></h2><p>Send an RSVP enquiry and the Meridian Sky team can confirm the next step.</p><EnquiryForm intent="event" /></div></section></main>}
