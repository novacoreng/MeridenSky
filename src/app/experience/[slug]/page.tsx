import Link from "next/link";
import { PublicExperienceDetail } from "@/components/PublicExperienceContent";
import { fallbackExperiences } from "@/lib/public-content";
import "../../section.css";

export function generateStaticParams(){return fallbackExperiences.map(({slug})=>({slug}));}
export default function ExperienceDetail(){return <main className="subPage"><header className="simpleNav"><Link className="brand" href="/">MERIDIAN <span>SKY</span></Link><Link className="navCta" href="/book">Book your experience</Link></header><PublicExperienceDetail/></main>}
