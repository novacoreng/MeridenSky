import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "../section.css";

const amenities = ["Private living spaces", "Rooftop city views", "Curated dining", "Dedicated concierge", "Celebration-ready setting", "Premium arrival experience"];

export default function StayPage() {
  return <main className="subPage">
    <SiteHeader />
    <section className="stayHero">
      <Image src="/images/01.jpg" alt="Meridian Sky private interior" fill priority className="stayHeroImage" sizes="100vw" />
      <div className="stayHeroShade" />
      <div className="stayHeroCopy">
        <p className="eyebrow">PRIVATE STAY</p>
        <h1>Make the night<br /><em>yours.</em></h1>
        <p>A private luxury experience above the city, designed around the way you want to stay.</p>
        <Link className="button primary" href="/book">Book your experience</Link>
      </div>
    </section>
    <section className="section stayIntro">
      <div className="stayIntroGrid">
        <h2>Above the<br /><em>ordinary.</em></h2>
        <div><p>Meridian Sky brings together private space, elevated views and thoughtful details in one distinctive city escape.</p><p>Stay for the view. Stay for the atmosphere. Stay for the moments you will remember long after the night is over.</p></div>
      </div>
    </section>
    <section className="stayFeature">
      <div className="stayFeatureImage"><Image src="/images/02.jpg" alt="Meridian Sky living space" fill sizes="(max-width: 700px) 100vw, 55vw" /></div>
      <div className="stayFeatureCopy"><p className="eyebrow">THE SPACE</p><h2>Your own<br /><em>skyline.</em></h2><p>Settle into a private environment where the city becomes part of the experience without ever taking over it.</p><Link className="textLink" href="/gallery">Explore the gallery</Link></div>
    </section>
    <section className="section amenitiesSection">
      <p className="eyebrow">THE DETAILS</p>
      <h2>Everything<br /><em>considered.</em></h2>
      <div className="amenitiesGrid">{amenities.map((item, index) => <div className="amenity" key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
    </section>
    <section className="pageCta"><p className="eyebrow">READY WHEN YOU ARE</p><h2>Come up.<br /><em>Stay awhile.</em></h2><p>Choose your preferred booking platform and continue to Meridian Sky.</p><Link className="button primary" href="/book">Book your experience</Link></section>
    <SiteFooter />
  </main>;
}
