import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PublicExperienceDetail } from "@/components/PublicExperienceContent";
import { fallbackExperiences } from "@/lib/public-content";
import "../../section.css";

export function generateStaticParams(){return fallbackExperiences.map(({slug})=>({slug}));}
export default function ExperienceDetail(){return <main className="subPage"><SiteHeader/><PublicExperienceDetail/><SiteFooter/></main>}
