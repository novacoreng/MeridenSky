import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const details = [
  ["Arrival", "Private check-in experience"],
  ["Departure", "Flexible by arrangement"],
  ["Experience", "Private luxury stay"],
  ["Booking", "Enquire for availability"],
];

const amenities = ["Private setting", "City-facing atmosphere", "Concierge planning", "Celebration-ready", "Dining arrangements", "Flexible experiences"];

export default function StayPage() {
  return <main className="subPage stayPage">
    <SiteHeader />
    <section className="stayHero">
      <Image src="/images/01.jpg" alt="Meridian Sky interior" fill priority sizes="100vw" className="stayHeroImage" />
      <div className="stayHeroShade" />
      <div className="stayHeroCopy"><p className="eyebrow">STAY AT MERIDIAN SKY</p><h1>Stay above<br /><em>the ordinary.</em></h1><p>A private setting designed around the people, moments and memories that bring you here.</p><Link className="button primary" href="/book">Enquire about a stay</Link></div>
    </section>
    <section className="stayIntro content"><p className="eyebrow">THE SPACE</p><div className="stayIntroGrid"><h2>Designed for<br /><em>slow moments.</em></h2><div><p>The stay experience is intentionally intimate: considered spaces, atmospheric evenings and room to make the property feel like your own.</p><p>From the first arrival detail to the final evening, the Meridian Sky team can shape the experience around what brings you here.</p></div></div></section>
    <section className="stayFeature"><div className="stayFeatureImage"><Image src="/images/02.jpg" alt="Meridian Sky living space" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="stayFeatureCopy"><p className="eyebrow">YOUR EXPERIENCE</p><h2>Arrive.<br /><em>Settle in.</em></h2><p>Tell the team what matters to you before arrival and let the details be prepared around your stay.</p><Link className="textLink" href="/concierge">Explore concierge ↗</Link></div></section>
    <section className="content stayDetails"><div className="sectionSplit"><div><p className="eyebrow">STAY DETAILS</p><h2>Everything<br /><em>considered.</em></h2></div><div className="metaList">{details.map(([a,b])=><div className="metaRow" key={a}><span>{a}</span><span>{b}</span></div>)}</div></div></section>
    <section className="amenitiesSection"><div className="content"><p className="eyebrow">THE MERIDIAN STANDARD</p><h2>Make the space<br /><em>your own.</em></h2><div className="amenitiesGrid">{amenities.map((item,index)=><div className="amenity" key={item}><span>0{index+1}</span><strong>{item}</strong></div>)}</div></div></section>
    <section className="pageCta"><p className="eyebrow">PLAN YOUR STAY</p><h2>Make it<br /><em>yours.</em></h2><p>Availability, dates and stay arrangements are confirmed directly with the Meridian Sky team.</p><Link className="button primary" href="/book">Start your enquiry</Link></section>
    <SiteFooter />
  </main>;
}
