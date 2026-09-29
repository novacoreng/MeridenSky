import Link from "next/link";
import { fallbackExperiences } from "@/lib/public-content";

export function PublicExperienceList(){
  return <div className="contentGrid">{fallbackExperiences.map((item,index)=><article className="contentCard" key={item.slug}><span className="index">{String(index+1).padStart(2,"0")}</span><h2>{item.title}</h2><p>{item.description}</p><Link className="textLink" href={`/experience/${item.slug}`}>Explore this experience</Link></article>)}</div>;
}

export function PublicExperienceDetail({ slug }: { slug: string }){
  const experience = fallbackExperiences.find(item => item.slug === slug);
  if(!experience)return null;
  return <><section className="subHero"><p className="eyebrow">{experience.code} / MERIDIAN EXPERIENCE</p><h1>{experience.title}<br/><em>{experience.kicker}</em></h1><p>{experience.description}</p></section><section className="content"><div className="metaList">{experience.details.map(detail=><div className="metaRow" key={detail}><span>{detail}</span><span>Available by arrangement</span></div>)}</div></section><section className="pageCta"><p className="eyebrow">PLAN YOUR EXPERIENCE</p><h2>Make it<br/><em>yours.</em></h2><p>Choose your preferred booking platform to continue.</p><Link className="button primary" href="/book">Book your experience</Link></section></>;
}
