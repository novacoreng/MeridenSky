import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import { EnquiryForm } from "@/components/EnquiryForm";
import "../section.css";

const services = [
  ["01", "Arrival", "Chauffeur coordination, thoughtful welcome details and a seamless first impression."],
  ["02", "Occasion", "Flowers, celebrations, dining and private moments arranged around your plans."],
  ["03", "City", "Curated suggestions and practical arrangements for making the most of your time."],
  ["04", "Bespoke", "Tell us what you need. We will explore what can be arranged around your stay."],
];

export default function ConciergePage(){return <main className="subPage"><header className="simpleNav"><Link className="brand" href="/">MERIDIAN <span>SKY</span></Link><Link className="navCta" href="/stay">Explore the stay</Link></header><section className="subHero"><p className="eyebrow">MERIDIAN CONCIERGE</p><h1>Considered<br /><em>to the detail.</em></h1><p>From the moment you arrive, the little things matter. Share what you have in mind and we can explore the arrangements around your stay.</p></section><section className="content"><div className="contentGrid">{services.map(([i,t,d])=><article className="contentCard" key={i}><span className="index">{i}</span><h2>{t}</h2><p>{d}</p></article>)}</div></section><section className="content conciergeRequest"><p className="eyebrow">PRIVATE REQUEST</p><h2>Start a<br /><em>conversation.</em></h2><p>Give us the essentials. You can keep the request as simple or as detailed as you like.</p><EnquiryForm intent="concierge" /></section><SiteFooter/></main>}
