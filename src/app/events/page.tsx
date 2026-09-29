import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const events = [
  ["SKYLINE FRIDAY", "Friday · 8:00 PM", "Music · Cocktails · City Views"],
  ["SKY SATURDAY", "Saturday · 9:00 PM", "Private Social"],
  ["SUNDAY SKY BRUNCH", "Sunday · 12:00 PM", "Food · Music · Views"],
];

export default function EventsPage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">SKY SOCIAL / EVENTS</p><h1>Meet you<br /><em>at Meridian.</em></h1><p>Private social moments, curated evenings and experiences that turn a place to stay into a place to be.</p></section><section className="content"><div className="metaList">{events.map(([name,time,meta],i)=><article className="metaRow" key={name}><span><strong>0{i+1}</strong> · {name}</span><span>{time}<br/>{meta}<br/><a className="textLink" href="mailto:hello@meridiansky.co.uk?subject=RSVP%20Enquiry">RSVP ↗</a></span></article>)}</div></section><section className="pageCta"><p className="eyebrow">PRIVATE EVENTS</p><h2>Your people.<br /><em>Your night.</em></h2><p>For private celebrations and event enquiries, speak directly with the Meridian Sky team.</p><a className="textLink" href="mailto:hello@meridiansky.co.uk">Make an enquiry ↗</a></section><SiteFooter/></main>}
