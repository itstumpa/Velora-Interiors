import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CTA } from "@/components/sections/CTA";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { InspirationGallery } from "@/components/sections/InspirationGallery";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Team } from "@/components/sections/Team";
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
        <ProcessSection />
        <TestimonialsSection />
        <Team />
        <Awards />
        <InspirationGallery />
        <FAQSection />
        <CTA />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
