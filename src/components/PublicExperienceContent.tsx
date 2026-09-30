import Link from "next/link";

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
  return null;
}
