"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { fadeInLeft, fadeInRight } from "@/lib/animations";
import type { AboutData } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  about: AboutData;
}

export function About({ about }: AboutProps) {
  return (
    <section id="about" className="bg-background-alt py-14 md:py-18">
      <Container>
        <SectionTitle
          subtitle={about.subtitle || "About Us"}
          title={about.heading || "Crafted by Passion, Defined by Precision"}
          description={
            about.description ||
            "We are a team of visionary designers and architects dedicated to creating spaces that inspire, comfort, and endure."
          }
        />

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-4/5"
          >
            <div className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary" />
            <div className="relative h-full w-full">
              {about.image?.asset?.url && (
                <Image
                  src={about.image.asset.url}
                  alt={about.image?.alt || "About Velora Interiors"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-heading text-2xl font-semibold text-dark md:text-3xl">
              {about.founderHeading || "Designing Dreams Since 2010"}
            </h3>

            {about.paragraphs && (
              <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-text-secondary">
                <PortableText value={about.paragraphs} />
              </div>
            )}

            {/* Signature */}
            <div className="mt-8 border-l-4 border-primary pl-4">
              <p className="font-heading text-lg font-semibold text-dark">
                {about.founderName || "Elena Voss"}
              </p>
              <p className="font-body text-sm text-text-secondary">
                {about.founderRole || "Founder & Principal Designer"}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
