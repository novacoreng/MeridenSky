import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PublicExperienceList } from "@/components/PublicExperienceContent";
import "./experience.css";

export default function ExperiencePage() {
  return (
    <main className="experiencePage">
      <SiteHeader />
      <section className="experienceGallery" aria-label="Meridian Sky experiences">
        <PublicExperienceList />
      </section>
      <SiteFooter />
    </main>
  );
}
