import Link from "next/link";
import { notFound } from "next/navigation";
import "../../section.css";

const experiences = {
  "private-dining": { code: "01", title: "Private Dining", kicker: "A table above the city.", description: "A considered dining experience shaped around your people, your occasion and the atmosphere you want to create.", details: ["Private setting", "Personalised occasion", "Dining arrangements by enquiry"] },
  "rooftop-evenings": { code: "02", title: "Rooftop Evenings", kicker: "Stay for golden hour.", description: "Let the city become part of the room as the evening moves from cocktails and conversation into the night.", details: ["Rooftop atmosphere", "Cocktails & music", "Evening arrangements by enquiry"] },
  "celebrations": { code: "03", title: "Celebrations", kicker: "Make the moment yours.", description: "Birthdays, milestones and private occasions with thoughtful details arranged around the people who matter.", details: ["Occasion planning", "Bespoke details", "Private arrangements by enquiry"] },
  "romantic-escapes": { code: "04", title: "Romantic Escapes", kicker: "Time, together.", description: "A quieter expression of luxury for meaningful time together, from arrival through to the final evening.", details: ["Private setting", "Romantic details", "Stay arrangements by enquiry"] },
  "entertainment": { code: "05", title: "Entertainment", kicker: "Your atmosphere.", description: "Music, cocktails and an environment shaped for a night that feels personal rather than programmed.", details: ["Music arrangements", "Private atmosphere", "Entertainment by enquiry"] },
  "luxury-concierge": { code: "06", title: "Luxury Concierge", kicker: "Tell us what you need.", description: "Thoughtful extras and bespoke requests coordinated around your stay, celebration or evening.", details: ["Chauffeur arrangements", "Flowers & details", "Bespoke requests"] },
} as const;

export function generateStaticParams() { return Object.keys(experiences).map((slug) => ({ slug })); }

export default async function ExperienceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = experiences[slug as keyof typeof experiences];
  if (!experience) notFound();

  return <main className="subPage"><header className="simpleNav"><Link className="brand" href="/">MERIDIAN <span>SKY</span></Link><Link className="navCta" href="/book">Book your experience</Link></header><section className="subHero"><p className="eyebrow">{experience.code} / MERIDIAN EXPERIENCE</p><h1>{experience.title}<br /><em>{experience.kicker}</em></h1><p>{experience.description}</p></section><section className="content"><div className="metaList">{experience.details.map((detail) => <div className="metaRow" key={detail}><span>{detail}</span><span>Available by arrangement</span></div>)}</div></section><section className="pageCta"><p className="eyebrow">PLAN YOUR EXPERIENCE</p><h2>Make it<br /><em>yours.</em></h2><p>Tell the Meridian Sky team what you have in mind and we can shape the details around your occasion.</p><Link className="textLink" href={`/book?intent=experience&experience=${slug}`}>Enquire about this experience ↗</Link></section></main>;
}
