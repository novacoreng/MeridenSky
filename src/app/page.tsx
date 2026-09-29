import Image from "next/image";
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
  ["01", "Private Dining", "Your table. Your people. Your view."],
  ["02", "Rooftop Evenings", "Golden hour through to midnight."],
  ["03", "Celebrations", "Make the moment unforgettable."],
  ["04", "Romantic Escapes", "Private moments above the city."],
  ["05", "Entertainment", "Music, cocktails and your own atmosphere."],
  ["06", "Luxury Concierge", "Tell us what you need."],
];

const events = [
  ["SKYLINE FRIDAY", "Friday • 8:00 PM", "Music • Cocktails • City Views"],
  ["SKY SATURDAY", "Saturday • 9:00 PM", "Private Social"],
  ["SUNDAY SKY BRUNCH", "Sunday • 12:00 PM", "Food • Music • Views"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="/">MERIDIAN <span>SKY</span></a>
        <nav aria-label="Primary navigation">
          <a href="#stay">Stay</a>
          <a href="#experience">Experience</a>
          <a href="#social">Sky Social</a>
          <a href="#events">Events</a>
          <a href="#concierge">Concierge</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <a className="navCta" href="#book">Book your experience</a>
      </header>

      <section className="hero" id="stay">
        <Image src="/images/01.jpg" alt="Meridian Sky interior" fill priority sizes="100vw" className="heroImage" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow">PRIVATE LUXURY EXPERIENCE</p>
          <h1>Above<br /><em>the ordinary.</em></h1>
          <p className="heroCopy">A private luxury experience above the city.</p>
          <div className="actions">
            <a className="button primary" href="#experience">Explore Meridian Sky</a>
            <a className="button ghost" href="#book">Book your experience</a>
          </div>
        </div>
        <a className="scrollHint" href="#intro">Scroll to enter ↓</a>
      </section>

      <section className="intro section" id="intro">
        <p className="eyebrow">THE EXPERIENCE</p>
        <h2>The city is<br /><em>different from up here.</em></h2>
        <p className="lede">Step into Meridian Sky, a private luxury escape designed for unforgettable stays, intimate celebrations and nights worth remembering.</p>
        <a className="textLink" href="#gallery">Discover the experience ↗</a>
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
              <figcaption>{item.label}<span>↗</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="experience section" id="experience">
        <p className="eyebrow">MORE THAN A STAY</p>
        <h2>Make the night<br /><em>yours.</em></h2>
        <div className="experienceGrid">
          {experiences.map(([index, title, copy]) => (
            <article className="experienceCard" key={index}>
              <span className="cardIndex">{index}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#book">Explore ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="social section" id="social">
        <div>
          <p className="eyebrow">SKY SOCIAL</p>
          <h2>Meet you<br /><em>at Meridian.</em></h2>
        </div>
        <div className="eventList" id="events">
          {events.map(([name, time, meta]) => (
            <article className="eventRow" key={name}>
              <div><h3>{name}</h3><p>{time} · {meta}</p></div>
              <a href="#book">RSVP ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section concierge" id="concierge">
        <p className="eyebrow">YOUR NIGHT. OUR CONCIERGE.</p>
        <h2>Tell us what<br /><em>you need.</em></h2>
        <p className="lede">Private dining, celebrations, chauffeur, flowers, entertainment and thoughtful details built around your stay.</p>
        <a className="textLink" href="#book">Request concierge ↗</a>
      </section>

      <section className="cta section" id="book">
        <p className="eyebrow">COME UP</p>
        <h2>The night<br /><em>is waiting.</em></h2>
        <p>Tell us what brings you to Meridian Sky and we’ll shape the experience around you.</p>
        <div className="actions">
          <a className="button primary" href="mailto:hello@meridiansky.co.uk">Start a conversation</a>
          <a className="button ghost" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
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
