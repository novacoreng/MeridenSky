import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PublicEventDetail } from "@/components/PublicEventContent";
import { fallbackEvents } from "@/lib/events-content";
import "../../section.css";

export function generateStaticParams(){return fallbackEvents.map(event=>({slug:event.slug}));}

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <main className="subPage"><SiteHeader/><PublicEventDetail slug={slug}/><SiteFooter/></main>;
}
