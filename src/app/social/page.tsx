import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const moments = ["Music", "Cocktails", "City Views", "Private Social", "Sunday Brunch", "Celebrations"];

export default function SocialPage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">SKY SOCIAL</p><h1>A place<br /><em>to be.</em></h1><p>Meridian Sky is a social destination as much as a private escape — built around atmosphere, conversation and memorable nights.</p></section><section className="content"><div className="contentGrid">{moments.map((m,i)=><article className="contentCard" key={m}><span className="index">0{i+1}</span><h2>{m}</h2><p>Social programming and editorial content slot ready for the approved event calendar.</p></article>)}</div></section><section className="pageCta"><p className="eyebrow">NEXT UP</p><h2>Meet you<br /><em>at Meridian.</em></h2><p>See the current event calendar or contact us for a private social enquiry.</p><a className="textLink" href="/events">View events ↗</a></section><SiteFooter/></main>}
