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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <ProjectsSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <InspirationGallery />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
