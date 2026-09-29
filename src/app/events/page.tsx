import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PublicEventList } from "@/components/PublicEventContent";
import "../section.css";
import "./events.css";

export default function EventsPage() {
  return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">EVENTS</p><h1>Moments<br/><em>at Meridian.</em></h1><p>Private social moments, curated evenings and experiences that turn a place to stay into a place to be.</p></section><section className="content"><PublicEventList/></section><section className="pageCta"><p className="eyebrow">PRIVATE EVENTS</p><h2>Your people.<br/><em>Your night.</em></h2><p>For private celebrations, choose your preferred booking platform and continue your visit.</p><Link className="textLink" href="/book">Book your experience</Link></section><SiteFooter/></main>;
}
