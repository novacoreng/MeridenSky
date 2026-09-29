import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PublicExperienceList } from "@/components/PublicExperienceContent";
import "../section.css";

export default function ExperiencePage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">THE MERIDIAN EXPERIENCE</p><h1>More than<br/><em>a stay.</em></h1><p>Choose the mood, the moment and the details. Meridian Sky is designed to move naturally from private escape to unforgettable occasion.</p></section><section className="content"><PublicExperienceList/></section><section className="pageCta"><p className="eyebrow">BESPOKE BY DESIGN</p><h2>Your night.<br/><em>Your way.</em></h2><p>Share what you have in mind and the Meridian Sky team can shape the experience around your occasion.</p><Link className="textLink" href="/book?intent=experience">Start a conversation ↗</Link></section><SiteFooter/></main>}
