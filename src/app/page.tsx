import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Team } from "@/components/sections/Team";
import { Awards } from "@/components/sections/Awards";
import { InspirationGallery } from "@/components/sections/InspirationGallery";
import { FAQSection } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ContactSection } from "@/components/sections/ContactSection";

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

