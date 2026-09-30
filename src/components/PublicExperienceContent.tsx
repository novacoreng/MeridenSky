import Link from "next/link";
import { fallbackExperiences } from "@/lib/public-content";

const experienceVisuals = [
  ["Cutty Sark", "0%", "0%"],
  ["Greenwich Market", "50%", "0%"],
  ["Greenwich Park", "100%", "0%"],
  ["IFS Cloud Cable Car", "0%", "50%"],
  ["National Maritime Museum", "50%", "50%"],
  ["Old Royal Naval College", "100%", "50%"],
  ["Outlet Shopping at The O2", "0%", "100%"],
  ["Peter Harrison Planetarium", "50%", "100%"],
  ["Royal Observatory", "100%", "100%"],
  ["The O2", "0%", "150%"],
  ["Uber Boat by Thames Clippers", "50%", "150%"],
  ["Up at The O2", "100%", "150%"],
] as const;

export function PublicExperienceList() {
  return (
    <div className="experienceVisualGrid" aria-label="Meridian Sky experiences">
      {experienceVisuals.map(([title, x, y]) => (
        <Link
          className="experienceVisualCard"
          href="/book"
          key={title}
          aria-label={`Book your Meridian Sky experience near ${title}`}
        >
          <span
            className="experienceVisualImage"
            style={{ "--experience-x": x, "--experience-y": y } as React.CSSProperties}
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
