import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const services = [
  ["01", "Arrival", "Chauffeur coordination, thoughtful welcome details and a seamless first impression."],
  ["02", "Occasion", "Flowers, celebrations, dining and private moments arranged around your plans."],
  ["03", "City", "Curated suggestions and practical arrangements for making the most of your time."],
  ["04", "Bespoke", "Choose your preferred booking platform and continue your Meridian Sky experience."],
];

export default function ConciergePage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">MERIDIAN CONCIERGE</p><h1>Considered<br /><em>to the detail.</em></h1><p>From the moment you arrive, the little things matter. Explore the experience and choose your preferred booking platform when you are ready.</p></section><section className="content"><div className="contentGrid">{services.map(([i,t,d])=><article className="contentCard" key={i}><span className="index">{i}</span><h2>{t}</h2><p>{d}</p></article>)}</div></section><section className="pageCta"><p className="eyebrow">PRIVATE EXPERIENCE</p><h2>Make it<br /><em>yours.</em></h2><p>Choose your preferred booking platform to continue.</p><Link className="button primary" href="/book">Book your experience</Link></section><SiteFooter/></main>}
