export type PublicEvent = {
  code: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  meta: string;
  description: string;
};

export const fallbackEvents: PublicEvent[] = [
  { code: "01", slug: "skyline-friday", title: "SKYLINE FRIDAY", date: "Friday", time: "8:00 PM", meta: "Music · Cocktails · City Views", description: "A late-evening social above the city, with music, cocktails and a view that carries the night." },
  { code: "02", slug: "sky-saturday", title: "SKY SATURDAY", date: "Saturday", time: "9:00 PM", meta: "Private Social", description: "An intimate Saturday gathering for guests who want the Meridian atmosphere after dark." },
  { code: "03", slug: "sunday-sky-brunch", title: "SUNDAY SKY BRUNCH", date: "Sunday", time: "12:00 PM", meta: "Food · Music · Views", description: "A slower Sunday above the city with food, music and an unhurried view." },
];
