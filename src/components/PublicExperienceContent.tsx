"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { readAdminStore } from "@/lib/admin-store";
import { fallbackExperiences, resolveExperience } from "@/lib/public-content";
import { useParams } from "next/navigation";

export function PublicExperienceList(){
 const [items,setItems]=useState(fallbackExperiences);
 useEffect(()=>{const saved=readAdminStore().experiences.filter(r=>r.contentType==="editorial"&&r.status==="published");setItems(fallbackExperiences.map(item=>{const r=saved.find(x=>x.slug===item.slug);return r?{...item,title:String(r.title),description:String(r.description||item.description),kicker:String(r.eyebrow||item.kicker)}:item;}));},[]);
 return <><div className="contentGrid">{items.map((item,index)=><article className="contentCard" key={item.slug}><span className="index">{String(index+1).padStart(2,"0")}</span><h2>{item.title}</h2><p>{item.description}</p><Link className="textLink" href={`/experience/${item.slug}`}>Explore this experience ↗</Link></article>)}</div></>;
}

export function PublicExperienceDetail(){
 const {slug}=useParams<{slug:string}>(); const [experience,setExperience]=useState(fallbackExperiences.find(x=>x.slug===slug));
 useEffect(()=>{const item=resolveExperience(readAdminStore().experiences,slug);setExperience(item);},[slug]);
 if(!experience)return null;
 return <><section className="subHero"><p className="eyebrow">{experience.code} / MERIDIAN EXPERIENCE</p><h1>{experience.title}<br/><em>{experience.kicker}</em></h1><p>{experience.description}</p></section><section className="content"><div className="metaList">{experience.details.map(detail=><div className="metaRow" key={detail}><span>{detail}</span><span>Available by arrangement</span></div>)}</div></section><section className="pageCta"><p className="eyebrow">PLAN YOUR EXPERIENCE</p><h2>Make it<br/><em>yours.</em></h2><p>Tell the Meridian Sky team what you have in mind and we can shape the details around your occasion.</p><Link className="textLink" href={`/book?intent=experience&experience=${slug}`}>Enquire about this experience ↗</Link></section></>;
}
