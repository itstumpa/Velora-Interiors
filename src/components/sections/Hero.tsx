"use client";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { heroChild, heroContainer } from "@/lib/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.6]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY, scale: imageScale }}
      >
        <div className="relative h-[120%] w-full">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85&auto=format"
            alt="Luxury interior design masterpiece"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </motion.div>

      {/* Dark Cinematic Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-dark/75 via-dark/45 to-dark/60" />
      <motion.div
        className="absolute inset-0 bg-dark/20"
        style={{ opacity: overlayOpacity }}
      />

      {/* Decorative accent line */}
      <div className="absolute left-0 top-0 z-10 h-full w-0.75 origin-top scale-y-0 animate-[scaleY_1.2s_0.3s_ease-out_forwards] bg-primary/60" />
      <style jsx>{`
        @keyframes scaleY {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
      `}</style>

      {/* Content */}
      <Container className="relative z-10 flex h-full items-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Editorial Headline */}
          <motion.h1
            variants={heroChild}
            className="font-heading text-6xl font-bold leading-[1.05] tracking-tight text-text-light md:text-7xl lg:text-8xl"
          >
            DESIGNING
            <br />
            <span className="text-primary">LUXURY</span>
            <br />
            SPACES
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroChild}
            className="mt-8 max-w-lg text-base font-light leading-relaxed text-text-light/70 md:text-lg"
          >
            We craft bespoke residential and commercial environments that
            redefine elegance — every texture, every shadow, every detail
            meticulously considered.
          </motion.p>

          {/* CTA */}
          <motion.div variants={heroChild} className="mt-10">
            <Link href="/#contact">
              <Button
                variant="outline"
                size="lg"
                className="uppercase tracking-[0.25em] text-text-light backdrop-blur-sm hover:bg-primary hover:text-dark"
              >
                Begin Your Journey
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-text-light/40">
            Explore
          </span>
          <div className="h-10 w-px bg-linear-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
