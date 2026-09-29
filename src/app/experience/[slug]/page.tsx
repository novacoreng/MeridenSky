import Link from "next/link";
import { notFound } from "next/navigation";
import { readAdminStore } from "@/lib/admin-store";
import { fallbackExperiences, resolveExperience } from "@/lib/public-content";
import "../../section.css";

export function generateStaticParams() { return fallbackExperiences.map(({ slug }) => ({ slug })); }

export default async function ExperienceDetail({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const experience = resolveExperience(readAdminStore().experiences, slug);
 if (!experience) notFound();
 return <main className="subPage"><header className="simpleNav"><Link className="brand" href="/">MERIDIAN <span>SKY</span></Link><Link className="navCta" href="/book">Book your experience</Link></header><section className="subHero"><p className="eyebrow">{experience.code} / MERIDIAN EXPERIENCE</p><h1>{experience.title}<br/><em>{experience.kicker}</em></h1><p>{experience.description}</p></section><section className="content"><div className="metaList">{experience.details.map(detail=><div className="metaRow" key={detail}><span>{detail}</span><span>Available by arrangement</span></div>)}</div></section><section className="pageCta"><p className="eyebrow">PLAN YOUR EXPERIENCE</p><h2>Make it<br/><em>yours.</em></h2><p>Tell the Meridian Sky team what you have in mind and we can shape the details around your occasion.</p><Link className="textLink" href={`/book?intent=experience&experience=${slug}`}>Enquire about this experience ↗</Link></section></main>;
}
