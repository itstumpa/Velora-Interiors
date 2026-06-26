import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CTA } from "@/components/sections/CTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { InspirationGallery } from "@/components/sections/InspirationGallery";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { client } from "@/sanity/client";
import {
  ABOUT_QUERY,
  BEFORE_AFTER_QUERY,
  GALLERY_QUERY,
  HERO_QUERY,
  PROJECTS_QUERY,
  SERVICES_QUERY,
  SITE_SETTINGS_QUERY,
  STATS_QUERY,
  TESTIMONIALS_QUERY,
} from "@/sanity/queries";

export default async function Home() {
  const [
    hero,
    about,
    stats,
    services,
    projects,
    testimonials,
    beforeAfter,
    gallery,
    siteSettings,
  ] = await Promise.all([
    client.fetch(HERO_QUERY),
    client.fetch(ABOUT_QUERY),
    client.fetch(STATS_QUERY),
    client.fetch(SERVICES_QUERY),
    client.fetch(PROJECTS_QUERY),
    client.fetch(TESTIMONIALS_QUERY),
    client.fetch(BEFORE_AFTER_QUERY),
    client.fetch(GALLERY_QUERY),
    client.fetch(SITE_SETTINGS_QUERY),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <Hero hero={hero} />
        <About about={about} />
        <Stats stats={stats} />
        <Services services={services} />
        <ProjectsSection projects={projects} />
        <BeforeAfterSection beforeAfter={beforeAfter} />
        <TestimonialsSection testimonials={testimonials} />
        <InspirationGallery gallery={gallery} />
        <CTA cta={siteSettings} />
        <ContactSection contact={siteSettings} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
