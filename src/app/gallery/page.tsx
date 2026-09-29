import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PublicGallery from "@/components/PublicGallery";
import "../page.css";
import "./gallery.css";

export default function GalleryPage() {
  return <main className="galleryPage"><SiteHeader/><section className="section pageHero"><p className="eyebrow">THE SKY / GALLERY</p><h1>See it<br /><em>from here.</em></h1><p className="lede">A visual journey through the spaces, views and moments that define Meridian Sky.</p></section><section className="section galleryExperience"><PublicGallery /></section><SiteFooter/></main>;
}
