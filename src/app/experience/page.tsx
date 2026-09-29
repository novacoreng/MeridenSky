import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { readAdminStore } from "@/lib/admin-store";
import { fallbackExperiences } from "@/lib/public-content";
import "../section.css";

export default function ExperiencePage(){
 const saved=readAdminStore().experiences.filter(r=>r.contentType==="editorial"&&r.status==="published");
 const experiences=fallbackExperiences.map(item=>{const record=saved.find(r=>r.slug===item.slug);return record?{...item,title:String(record.title),description:String(record.description||item.description),kicker:String(record.eyebrow||item.kicker)}:item;});
 return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">THE MERIDIAN EXPERIENCE</p><h1>More than<br/><em>a stay.</em></h1><p>Choose the mood, the moment and the details. Meridian Sky is designed to move naturally from private escape to unforgettable occasion.</p></section><section className="content"><div className="contentGrid">{experiences.map((item,index)=><article className="contentCard" key={item.slug}><span className="index">{String(index+1).padStart(2,"0")}</span><h2>{item.title}</h2><p>{item.description}</p><Link className="textLink" href={`/experience/${item.slug}`}>Explore this experience ↗</Link></article>)}</div></section><section className="pageCta"><p className="eyebrow">BESPOKE BY DESIGN</p><h2>Your night.<br/><em>Your way.</em></h2><p>Share what you have in mind and the Meridian Sky team can shape the experience around your occasion.</p><Link className="textLink" href="/book?intent=experience">Start a conversation ↗</Link></section><SiteFooter/></main>
}
