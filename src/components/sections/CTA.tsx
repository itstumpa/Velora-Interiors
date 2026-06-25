"use client";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={sectionRef}
      className="relative h-78.25 w-full overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        <div className="relative h-[140%] w-full">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85&auto=format"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </motion.div>

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-dark/80 via-dark/50 to-dark/70" />
      <div className="absolute inset-0 bg-dark/10" />

      {/* Decorative accent line */}
      <div className="absolute left-0 top-0 z-10 h-full w-0.75 bg-primary/40" />

      {/* Content */}
      <Container className="relative z-10 flex h-full items-center">
        <div className="flex w-full items-center justify-between gap-12">
          {/* Left — Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl"
          >
            <span className="mb-2 inline-block font-body text-[10px] font-light uppercase tracking-[0.35em] text-primary">
              Let&apos;s Create Together
            </span>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight text-text-light md:text-4xl lg:text-5xl">
              Ready to Transform
              <br />
              <span className="text-primary">Your Space?</span>
            </h2>
          </motion.div>

          {/* Right — CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex shrink-0 flex-col gap-3 sm:flex-row"
          >
            <Link href="/#contact">
              <Button size="md" className="uppercase tracking-[0.25em]">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/#projects">
              <Button
                variant="outline"
                size="md"
                className="border-text-light/20 uppercase tracking-[0.25em] text-text-light/80 hover:border-text-light/40 hover:bg-transparent hover:text-text-light"
              >
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
