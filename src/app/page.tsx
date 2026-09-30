import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import "./page.css";

const gallery = [
  { src: "/images/01.jpg", label: "Interiors" },
  { src: "/images/02.jpg", label: "Living" },
  { src: "/images/03.jpg", label: "City" },
  { src: "/images/04.jpg", label: "Lifestyle" },
  { src: "/images/05.jpg", label: "Rooftop" },
  { src: "/images/06.jpg", label: "View" },
];

const experiences = [
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

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="stay">
        <Image src="/images/01.jpg" alt="Meridian Sky interior" fill priority sizes="100vw" className="heroImage" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">PRIVATE LUXURY EXPERIENCE</p>
          <h1>Above<br /><em>the ordinary.</em></h1>
          <p className="heroCopy">A private luxury experience above the city.</p>
          <div className="actions">
            <a className="button primary" href="/experience">Explore Meridian Sky</a>
            <a className="button ghost" href="/book">Book your experience</a>
          </div>
        </div>
        <a className="scrollHint" href="#intro">Scroll to enter</a>
      </section>

      <section className="intro section" id="intro">
        <p className="eyebrow">THE EXPERIENCE</p>
        <h2>The city is<br /><em>different from up here.</em></h2>
        <p className="lede">Step into Meridian Sky, a private luxury escape designed for unforgettable stays, intimate celebrations and nights worth remembering.</p>
        <a className="textLink" href="/experience">Discover the experience</a>
      </section>

      <section className="gallerySection section" id="gallery">
        <div className="sectionHeader">
          <div><p className="eyebrow">THE SKY</p><h2>Your sky,<br /><em>to experience.</em></h2></div>
          <p className="sectionNote">Photography leads the story. Every image is an invitation to stay longer.</p>
        </div>
        <div className="galleryGrid">
          {gallery.map((item, index) => (
            <figure className={index === 0 ? "galleryItem featured" : "galleryItem"} key={item.src}>
              <Image src={item.src} alt={item.label} fill sizes={index === 0 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 50vw, 30vw"} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
        <a className="textLink" href="/gallery">Enter the full gallery</a>
      </section>

      <section className="experience section" id="experience">
        <p className="eyebrow">THE EXPERIENCE</p>
        <div className="experienceGrid">
          {experiences.map(([title, src]) => (
            <a className="experienceCard" href="/book" key={title} aria-label={`Book ${title}`}>
              <Image src={src} alt={title} fill sizes="(max-width: 700px) 100vw, 33vw" />
              <span>{title}</span>
            </a>
          ))}
        </div>
        <a className="textLink" href="/experience">Explore all experiences</a>
      </section>

      <section className="section concierge" id="concierge">
        <p className="eyebrow">YOUR NIGHT. OUR CONCIERGE.</p>
        <h2>Tell us what<br /><em>you need.</em></h2>
        <p className="lede">Private dining, celebrations, chauffeur, flowers, entertainment and thoughtful details built around your stay.</p>
        <a className="textLink" href="/concierge">Request concierge</a>
      </section>

      <section className="cta section" id="book">
        <p className="eyebrow">COME UP</p>
        <h2>The night<br /><em>is waiting.</em></h2>
        <p>Choose your preferred booking platform and continue directly to Meridian Sky on Booking.com or Expedia.com.</p>
        <div className="actions">
          <a className="button primary" href="/book">Book your experience</a>
        </div>
      </section>

      <footer>
        <div className="footerTop">
          <a className="brand large" href="/">MERIDIAN <span>SKY</span></a>
          <p>Above the ordinary.<br />The city is different from up here.</p>
        </div>
        <div className="footerBottom"><span>© {new Date().getFullYear()} Meridian Sky</span><span>Privacy · Terms · Cookies</span></div>
      </footer>
    </main>
  );
}
