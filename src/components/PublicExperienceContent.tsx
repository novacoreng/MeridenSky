import Link from "next/link";
import { fallbackExperiences } from "@/lib/public-content";

const experienceVisuals = [
  ["Cutty Sark", "cutty-sark"],
  ["Greenwich Market", "greenwich-market"],
  ["Greenwich Park", "greenwich-park"],
  ["IFS Cloud Cable Car", "ifs-cloud-cable-car"],
  ["National Maritime Museum", "national-maritime-museum"],
  ["Old Royal Naval College", "old-royal-naval-college"],
  ["Outlet Shopping at The O2", "outlet-shopping-at-the-o2"],
  ["Peter Harrison Planetarium", "peter-harrison-planetarium"],
  ["Royal Observatory", "royal-observatory"],
  ["The O2", "the-o2"],
  ["Uber Boat by Thames Clippers", "uber-boat-by-thames-clippers"],
  ["Up at The O2", "up-at-the-o2"],
] as const;

export function PublicExperienceList() {
  return (
    <div className="experienceVisualGrid" aria-label="Meridian Sky experiences">
      {experienceVisuals.map(([title, key], index) => (
        <Link
          className="experienceVisualCard"
          href="/book"
          key={key}
          aria-label={`Book your Meridian Sky experience near ${title}`}
        >
          <span
            className="experienceVisualImage"
            style={{ "--experience-position": `${index * 100}%` } as React.CSSProperties}
            role="img"
            aria-label={title}
          />
          <span className="experienceVisualLabel">{title}</span>
        </Link>
      ))}
    </div>
  );
}

export function PublicExperienceDetail({ slug }: { slug: string }) {
  const experience = fallbackExperiences.find(item => item.slug === slug);
  if (!experience) return null;
  return <><section className="subHero"><p className="eyebrow">{experience.code} / MERIDIAN EXPERIENCE</p><h1>{experience.title}<br/><em>{experience.kicker}</em></h1><p>{experience.description}</p></section><section className="content"><div className="metaList">{experience.details.map(detail => <div className="metaRow" key={detail}><span>{detail}</span><span>Available by arrangement</span></div>)}</div></section><section className="pageCta"><p className="eyebrow">PLAN YOUR EXPERIENCE</p><h2>Make it<br/><em>yours.</em></h2><p>Choose your preferred booking platform to continue.</p><Link className="button primary" href="/book">Book your experience</Link></section></>;
}
