"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="bg-background-alt py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="About Us"
          title="Crafted by Passion, Defined by Precision"
          description="We are a team of visionary designers and architects dedicated to creating spaces that inspire, comfort, and endure."
        />

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-background-alt"
          >
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary" />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-heading text-2xl font-semibold text-dark md:text-3xl">
              Designing Dreams Since 2010
            </h3>

            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-text-secondary">
              <p>
                Velora Interiors was founded on a simple belief: great design
                transforms how we live, work, and feel. Over the past decade and
                a half, we&apos;ve grown from a small studio into a celebrated
                interior design firm with projects spanning residential,
                commercial, hospitality, and retail sectors.
              </p>
              <p>
                Our approach is deeply collaborative. We listen intently,
                observe carefully, and design thoughtfully. Every project is a
                partnership — we blend our expertise with your vision to create
                spaces that are both beautiful and deeply personal.
              </p>
              <p>
                From a intimate home renovation to a large-scale corporate
                headquarters, we bring the same dedication to quality,
                craftsmanship, and detail.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 border-l-4 border-primary pl-4">
              <p className="font-heading text-lg font-semibold text-dark">
                Elena Voss
              </p>
              <p className="font-body text-sm text-text-secondary">
                Founder & Principal Designer
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
