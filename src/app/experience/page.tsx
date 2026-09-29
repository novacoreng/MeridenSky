import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PublicExperienceList } from "@/components/PublicExperienceContent";
import "../section.css";

export default function ExperiencePage(){return <main className="subPage"><SiteHeader/><section className="subHero"><p className="eyebrow">THE MERIDIAN EXPERIENCE</p><h1>More than<br/><em>a stay.</em></h1><p>Choose the mood, the moment and the details. Meridian Sky is designed to move naturally from private escape to unforgettable occasion.</p></section><section className="content"><PublicExperienceList/></section><section className="pageCta"><p className="eyebrow">BESPOKE BY DESIGN</p><h2>Your night.<br/><em>Your way.</em></h2><p>Choose your preferred booking platform to continue your Meridian Sky experience.</p><Link className="textLink" href="/book?intent=experience">Book your experience</Link></section><SiteFooter/></main>}
