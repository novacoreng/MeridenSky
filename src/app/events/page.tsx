import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const events = [
  { slug:"skyline-friday", name:"SKYLINE FRIDAY", time:"Friday · 8:00 PM", meta:"Music · Cocktails · City Views", copy:"A late-evening social above the city, with music, cocktails and a view that carries the night." },
  { slug:"sky-saturday", name:"SKY SATURDAY", time:"Saturday · 9:00 PM", meta:"Private Social", copy:"An intimate Saturday gathering for guests who want the Meridian atmosphere after dark." },
  { slug:"sunday-sky-brunch", name:"SUNDAY SKY BRUNCH", time:"Sunday · 12:00 PM", meta:"Food · Music · Views", copy:"A slower Sunday above the city with food, music and an unhurried view." },
];

export default function EventsPage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">SKY SOCIAL / EVENTS</p><h1>Meet you<br /><em>at Meridian.</em></h1><p>Private social moments, curated evenings and experiences that turn a place to stay into a place to be.</p></section><section className="content"><div className="metaList">{events.map((event,i)=><article className="metaRow eventCard" key={event.slug}><span><strong>0{i+1}</strong> · {event.name}<small>{event.copy}</small></span><span>{event.time}<br/>{event.meta}<br/><Link className="textLink" href={`/events/${event.slug}`}>View event ↗</Link></span></article>)}</div></section><section className="pageCta"><p className="eyebrow">PRIVATE EVENTS</p><h2>Your people.<br /><em>Your night.</em></h2><p>For private celebrations and event enquiries, speak directly with the Meridian Sky team.</p><Link className="textLink" href="/book">Make an enquiry ↗</Link></section><SiteFooter/></main>}
