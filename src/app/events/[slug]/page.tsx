import Link from "next/link";
import { PublicEventDetail } from "@/components/PublicEventContent";
import { fallbackEvents } from "@/lib/events-content";
import "../../section.css";

export function generateStaticParams(){return fallbackEvents.map(event=>({slug:event.slug}));}

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <main className="subPage"><header className="simpleNav"><Link className="brand" href="/">MERIDIAN <span>SKY</span></Link><Link className="navCta" href="/events">All events</Link></header><PublicEventDetail slug={slug}/></main>;
}
