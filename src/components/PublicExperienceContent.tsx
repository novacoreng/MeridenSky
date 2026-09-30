import Link from "next/link";
import { fallbackExperiences } from "@/lib/public-content";

const experienceVisuals = [
  ["Cutty Sark", "/images/01.jpg"],
  ["Greenwich Market", "/images/02.jpg"],
  ["Greenwich Park", "/images/03.jpg"],
  ["IFS Cloud Cable Car", "/images/04.jpg"],
  ["National Maritime Museum", "/images/05.jpg"],
  ["Old Royal Naval College", "/images/06.jpg"],
  ["Outlet Shopping at The O2", "/images/01.jpg"],
  ["Peter Harrison Planetarium", "/images/02.jpg"],
  ["Royal Observatory", "/images/03.jpg"],
  ["The O2", "/images/04.jpg"],
  ["Uber Boat by Thames Clippers", "/images/05.jpg"],
  ["Up at The O2", "/images/06.jpg"],
] as const;

export function PublicExperienceList() {
  return (
    <div className="experienceVisualGrid" aria-label="Meridian Sky experiences">
      {experienceVisuals.map(([title, src]) => (
        <Link
          className="experienceVisualCard"
          href="/book"
          key={title}
          aria-label={`Book your Meridian Sky experience near ${title}`}
        >
          <img className="experienceVisualImage" src={src} alt={title} loading="lazy" />
          <span className="experienceVisualLabel">{title}</span>
        </Link>
      ))}
    </div>
  );
}

export function PublicExperienceDetail({ slug }: { slug: string }) {
  const experience = fallbackExperiences.find(item => item.slug === slug);
  if (!experience) return null;
  return (
    <>
      <section className="subHero">
        <p className="eyebrow">{experience.code} / MERIDIAN EXPERIENCE</p>
        <h1>{experience.title}<br /><em>{experience.kicker}</em></h1>
        <p>{experience.description}</p>
      </section>
      <section className="content">
        <div className="metaList">
          {experience.details.map(detail => (
            <div className="metaRow" key={detail}>
              <span>{detail}</span><span>Available by arrangement</span>
            </div>
          ))}
        </div>
      </section>
      <section className="pageCta">
        <p className="eyebrow">PLAN YOUR EXPERIENCE</p>
        <h2>Make it<br /><em>yours.</em></h2>
        <p>Choose your preferred booking platform to continue.</p>
        <Link className="button primary" href="/book">Book your experience</Link>
      </section>
    </>
  );
}
