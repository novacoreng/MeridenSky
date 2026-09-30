import Link from "next/link";
import { fallbackExperiences } from "@/lib/public-content";

const experienceVisuals = [
  ["Cutty Sark", "/images/experience/cutty-sark.jpg"],
  ["Greenwich Market", "/images/experience/greenwich-market.jpg"],
  ["Greenwich Park", "/images/experience/Greenwich Park.jpeg"],
  ["IFS Cloud Cable Car", "/images/experience/ifs-cloud-cable-car.jpg"],
  ["National Maritime Museum", "/images/experience/national-maritime-museum.jpg"],
  ["Old Royal Naval College", "/images/experience/old-royal-naval-college.jpg"],
  ["Outlet Shopping at The O2", "/images/experience/outlet-shopping-at-the-o2.jpg"],
  ["Peter Harrison Planetarium", "/images/experience/peter-harrison-planetarium.jpg"],
  ["Royal Observatory", "/images/experience/royal-observatory.jpg"],
  ["The O2", "/images/experience/the-o2.jpg"],
  ["Uber Boat by Thames Clippers", "/images/experience/uber-boat-by-thames-clippers.jpg"],
  ["Up at The O2", "/images/experience/up-at-the-o2.jpg"],
] as const;

export function PublicExperienceList() {
  return (
    <div className="experienceVisualGrid" aria-label="Meridian Sky experiences">
      {experienceVisuals.map(([title, src], index) => (
        <Link
          className="experienceVisualCard"
          href="/book"
          key={title}
          aria-label={`Book your Meridian Sky experience near ${title}`}
        >
          <img
            className="experienceVisualImage"
            src={src}
            alt={title}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
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
