import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PublicExperienceDetail } from "@/components/PublicExperienceContent";
import { fallbackExperiences } from "@/lib/public-content";
import "../../section.css";

export function generateStaticParams(){return fallbackExperiences.map(({slug})=>({slug}));}

export default async function ExperienceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <main className="subPage"><SiteHeader/><PublicExperienceDetail slug={slug}/><SiteFooter/></main>;
}
