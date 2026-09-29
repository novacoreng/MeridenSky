"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { readAdminStore } from "@/lib/admin-store";
import { fallbackEvents, resolveEvent, resolveEvents } from "@/lib/events-content";
import { EnquiryForm } from "@/components/EnquiryForm";

export function PublicEventList(){const [events,setEvents]=useState(fallbackEvents);useEffect(()=>setEvents(resolveEvents(readAdminStore().events)),[]);return <div className="metaList">{events.map((event,i)=><article className="metaRow eventCard" key={event.slug}><span><strong>{String(i+1).padStart(2,"0")}</strong> · {event.title}<small>{event.description}</small></span><span>{event.date} · {event.time}<br/>{event.meta}<br/><Link className="textLink" href={`/events/${event.slug}`}>View event ↗</Link></span></article>)}</div>}
export function PublicEventDetail(){const {slug}=useParams<{slug:string}>();const [event,setEvent]=useState(fallbackEvents.find(e=>e.slug===slug));useEffect(()=>setEvent(resolveEvent(readAdminStore().events,slug)),[slug]);if(!event)return null;return <><section className="subHero"><p className="eyebrow">SKY SOCIAL / {event.code}</p><h1>{event.title}</h1><p>{event.date} · {event.time} · {event.meta}</p></section><section className="content eventDetail"><p className="eventLead">{event.description}</p><div className="rsvpPanel"><p className="eyebrow">PRIVATE RSVP</p><h2>Reserve your<br/><em>place.</em></h2><p>Send an RSVP enquiry and the Meridian Sky team can confirm the next step.</p><EnquiryForm intent="event" /></div></section></>}
