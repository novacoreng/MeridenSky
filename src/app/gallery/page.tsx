import Link from "next/link";
import PublicGallery from "@/components/PublicGallery";
import "../page.css";
import "./gallery.css";

export default function GalleryPage() {
  return <main className="galleryPage"><header className="simpleNav"><Link className="brand" href="/">MERIDIAN <span>SKY</span></Link><Link className="navCta" href="/book">Book your experience</Link></header><section className="section pageHero"><p className="eyebrow">THE SKY / GALLERY</p><h1>See it<br /><em>from here.</em></h1><p className="lede">A visual journey through the spaces, views and moments that define Meridian Sky.</p></section><section className="section galleryExperience"><PublicGallery /></section></main>;
}
