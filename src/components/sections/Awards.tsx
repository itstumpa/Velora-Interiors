"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const awards = [
  {
    title: "Best Interior Design Firm",
    organization: "Design Excellence Awards",
    year: 2024,
  },
  {
    title: "Gold Medal — Residential Interior",
    organization: "International Design Awards",
    year: 2024,
  },
  {
    title: "Sustainable Design Award",
    organization: "Green Building Council",
    year: 2023,
  },
  {
    title: "People's Choice — Commercial Space",
    organization: "Interior Design Society",
    year: 2023,
  },
  {
    title: "Best Hospitality Design",
    organization: "Luxury Design Awards",
    year: 2022,
  },
];

export function Awards() {
  return (
    <section id="awards" className="bg-background py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="Recognition"
          title="Awards & Accolades"
          description="Our commitment to excellence has been recognized by leading industry organizations worldwide."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mt-12 max-w-3xl md:mt-16"
        >
          {awards.map((award, index) => (
            <motion.div
              key={`${award.title}-${award.year}`}
              variants={fadeInUp}
              className="flex items-center gap-4 border-b border-border py-5 last:border-0"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                {award.year.toString().slice(-2)}
              </span>
              <div className="flex-1">
                <h3 className="font-heading text-base font-semibold text-dark">
                  {award.title}
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  {award.organization}
                </p>
              </div>
              <span className="font-body text-sm font-medium text-accent">
                {award.year}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
