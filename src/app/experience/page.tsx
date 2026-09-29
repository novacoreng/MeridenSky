import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const experiences = [
  ["01", "Private Dining", "A considered table, your people and an atmosphere shaped around the occasion.", "private-dining"],
  ["02", "Rooftop Evenings", "Golden hour, cocktails and the city becoming part of the room.", "rooftop-evenings"],
  ["03", "Celebrations", "Birthdays, milestones and private moments with the details handled.", "celebrations"],
  ["04", "Romantic Escapes", "A quieter kind of luxury for time spent together.", "romantic-escapes"],
  ["05", "Entertainment", "Music, cocktails and a private atmosphere built for your night.", "entertainment"],
  ["06", "Luxury Concierge", "Thoughtful extras, from flowers and chauffeurs to bespoke requests.", "luxury-concierge"],
] as const;

export default function ExperiencePage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">THE MERIDIAN EXPERIENCE</p><h1>More than<br /><em>a stay.</em></h1><p>Choose the mood, the moment and the details. Meridian Sky is designed to move naturally from private escape to unforgettable occasion.</p></section><section className="content"><div className="contentGrid">{experiences.map(([i,t,d,slug])=><article className="contentCard" key={i}><span className="index">{i}</span><h2>{t}</h2><p>{d}</p><Link className="textLink" href={`/experience/${slug}`}>Explore this experience ↗</Link></article>)}</div></section><section className="pageCta"><p className="eyebrow">BESPOKE BY DESIGN</p><h2>Your night.<br /><em>Your way.</em></h2><p>Share what you have in mind and the Meridian Sky team can shape the experience around your occasion.</p><Link className="textLink" href="/book?intent=experience">Start a conversation ↗</Link></section><SiteFooter/></main>}
