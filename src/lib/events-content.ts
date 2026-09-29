import type { AdminRecord } from "@/lib/admin-store";

export type PublicEvent = { code:string; slug:string; title:string; date:string; time:string; meta:string; description:string };

export const fallbackEvents: PublicEvent[] = [
 {code:"01",slug:"skyline-friday",title:"SKYLINE FRIDAY",date:"Friday",time:"8:00 PM",meta:"Music · Cocktails · City Views",description:"A late-evening social above the city, with music, cocktails and a view that carries the night."},
 {code:"02",slug:"sky-saturday",title:"SKY SATURDAY",date:"Saturday",time:"9:00 PM",meta:"Private Social",description:"An intimate Saturday gathering for guests who want the Meridian atmosphere after dark."},
 {code:"03",slug:"sunday-sky-brunch",title:"SUNDAY SKY BRUNCH",date:"Sunday",time:"12:00 PM",meta:"Food · Music · Views",description:"A slower Sunday above the city with food, music and an unhurried view."},
];
export function resolveEvent(records: AdminRecord[], slug:string){const fallback=fallbackEvents.find(e=>e.slug===slug);if(!fallback)return undefined;const saved=records.find(r=>r.contentType==="event"&&r.slug===slug&&r.status==="published");if(!saved)return fallback;return {...fallback,title:String(saved.title),date:String(saved.date||fallback.date),time:String(saved.time||fallback.time),meta:String(saved.meta||fallback.meta),description:String(saved.description||fallback.description)}}
export function resolveEvents(records: AdminRecord[]){return fallbackEvents.map(e=>resolveEvent(records,e.slug)).filter(Boolean) as PublicEvent[]}
