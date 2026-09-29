import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const gallery = ["Interiors", "Living", "City", "Lifestyle", "Rooftop", "View"];

export default function GalleryPage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">THE SKY / GALLERY</p><h1>See it<br /><em>for yourself.</em></h1><p>Photography leads the Meridian Sky story. The final gallery is structured to let the property, people and atmosphere take centre stage.</p></section><section className="content"><div className="contentGrid">{gallery.map((item,i)=><article className="contentCard" key={item}><span className="index">0{i+1}</span><h2>{item}</h2><p>Editorial image slot ready for the approved Meridian Sky photography pack.</p></article>)}</div></section><section className="pageCta"><p className="eyebrow">THE FULL STORY</p><h2>Come<br /><em>up.</em></h2><p>Explore the stay, experiences and social calendar, then contact the team to begin planning.</p><a className="textLink" href="/stay">Explore the stay ↗</a></section><SiteFooter/></main>}
