import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const services = [
  ["01", "Private Dining", "A table and menu shaped around your occasion."],
  ["02", "Celebrations", "Flowers, styling, music and thoughtful details."],
  ["03", "Chauffeur", "Arrival and departure arranged around your schedule."],
  ["04", "Flowers & Gifting", "Personal details prepared before you arrive."],
  ["05", "Entertainment", "Music and atmosphere tailored to the night."],
  ["06", "Bespoke Requests", "Tell us what you need and we will explore it."],
];

export default function ConciergePage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">LUXURY CONCIERGE</p><h1>Your night.<br /><em>Our details.</em></h1><p>Tell us what would make the experience exceptional. Our concierge service is designed around thoughtful preparation, not a list of fixed packages.</p></section><section className="content"><div className="contentGrid">{services.map(([i,t,d])=><article className="contentCard" key={i}><span className="index">{i}</span><h2>{t}</h2><p>{d}</p></article>)}</div></section><section className="pageCta"><p className="eyebrow">MAKE A REQUEST</p><h2>What can we<br /><em>arrange?</em></h2><p>Send your dates, occasion and what you have in mind. The team will respond with the next steps.</p><a className="textLink" href="mailto:hello@meridiansky.co.uk?subject=Meridian%20Sky%20Concierge%20Request">Request concierge ↗</a></section><SiteFooter/></main>}
