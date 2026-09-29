export type SkyEvent = { code:string; slug:string; title:string; date:string; time:string; meta:string; description:string; status:"draft"|"published"|"archived" };

export const fallbackEvents: SkyEvent[] = [
 {code:"01",slug:"skyline-friday",title:"SKYLINE FRIDAY",date:"Friday",time:"8:00 PM",meta:"Music · Cocktails · City Views",description:"A late-evening social above the city, with music, cocktails and a view that carries the night.",status:"published"},
 {code:"02",slug:"sky-saturday",title:"SKY SATURDAY",date:"Saturday",time:"9:00 PM",meta:"Private Social",description:"An intimate Saturday gathering for guests who want the Meridian atmosphere after dark.",status:"published"},
 {code:"03",slug:"sunday-sky-brunch",title:"SUNDAY SKY BRUNCH",date:"Sunday",time:"12:00 PM",meta:"Food · Music · Views",description:"A slower Sunday above the city with food, music and an unhurried view.",status:"published"},
];

export function resolveEvents(records: Record<string,unknown>[]): SkyEvent[] {
 const saved = records.filter((r:any)=>r.contentType==="event" && r.status==="published");
 return fallbackEvents.map(item=>{const r:any=saved.find(x=>x.slug===item.slug);return r?{...item,title:String(r.title||item.title),date:String(r.date||item.date),time:String(r.time||item.time),meta:String(r.meta||item.meta),description:String(r.description||item.description)}:item;});
}

export function resolveEvent(records: Record<string,unknown>[], slug:string){return resolveEvents(records).find(event=>event.slug===slug);}
