import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const details = [
  ["Arrival", "Private check-in experience"],
  ["Departure", "Flexible by arrangement"],
  ["Experience", "Private luxury stay"],
  ["Booking", "Enquire for availability"],
];

export default function StayPage() {
  return <main className="subPage"><SiteHeader /><section className="subHero"><p className="eyebrow">STAY AT MERIDIAN SKY</p><h1>Stay above<br /><em>the ordinary.</em></h1><p>A private setting designed around the people, moments and memories that bring you here.</p></section><section className="content"><div className="contentGrid"><article className="contentCard"><span className="index">01 / THE SPACE</span><h2>Designed for<br />slow moments.</h2><p>The stay experience is intentionally intimate: considered spaces, atmospheric evenings and room to make the property feel like your own.</p></article><article className="contentCard"><span className="index">02 / YOUR EXPERIENCE</span><h2>Arrive.<br />Settle in.</h2><p>Tell the Meridian Sky team what matters to you before arrival and let the details be prepared around your stay.</p></article></div><div className="metaList">{details.map(([a,b])=><div className="metaRow" key={a}><span>{a}</span><span>{b}</span></div>)}</div></section><section className="pageCta"><p className="eyebrow">PLAN YOUR STAY</p><h2>Make it<br /><em>yours.</em></h2><p>Availability, dates and stay arrangements are confirmed directly with the Meridian Sky team.</p><a className="textLink" href="mailto:hello@meridiansky.co.uk">Enquire about a stay ↗</a></section><SiteFooter /></main>;
}
