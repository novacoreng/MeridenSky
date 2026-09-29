import Link from "next/link";
import GalleryLightbox from "@/components/GalleryLightbox";
import "../page.css";
import "./gallery.css";

const items = [
  { src: "/images/01.jpg", label: "Interiors", category: "Spaces" },
  { src: "/images/02.jpg", label: "Living", category: "Spaces" },
  { src: "/images/03.jpg", label: "City", category: "Views" },
  { src: "/images/04.jpg", label: "Lifestyle", category: "Lifestyle" },
  { src: "/images/05.jpg", label: "Rooftop", category: "Spaces" },
  { src: "/images/06.jpg", label: "View", category: "Views" },
];

export default function GalleryPage() {
  return <main className="galleryPage"><header className="simpleNav"><Link className="brand" href="/">MERIDIAN <span>SKY</span></Link><Link className="navCta" href="/book">Book your experience</Link></header><section className="section pageHero"><p className="eyebrow">THE SKY / GALLERY</p><h1>See it<br /><em>from here.</em></h1><p className="lede">A visual journey through the spaces, views and moments that define Meridian Sky.</p></section><section className="section galleryExperience"><GalleryLightbox items={items} /></section></main>;
}
