"use client";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { fadeInRight, fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-background pt-24">
      {/* Background decorative element */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-150 w-150 rounded-full border border-primary/10" />
        <div className="absolute -right-20 -top-20 h-125 w-125 rounded-full border border-primary/10" />
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-linear-to-tr from-primary/5 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
          >
            <motion.span
              variants={fadeInUp}
              className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-[0.25em] text-accent"
            >
              Premium Interior Design
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-heading text-4xl font-bold leading-tight text-dark md:text-5xl lg:text-6xl"
            >
              Where Vision <span className="text-primary">Meets Space</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
            >
              We transform residential and commercial environments into
              inspiring, functional works of art. Every detail curated, every
              space reimagined.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/#contact">
                <Button size="lg">Start Your Project</Button>
              </Link>
              <Link href="/#projects">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center gap-8 border-t border-border pt-8"
            >
              <div className="text-center">
                <span className="font-heading text-2xl font-bold text-dark">
                  15+
                </span>
                <p className="font-body text-xs text-text-secondary">
                  Years Experience
                </p>
              </div>
              <div className="text-center">
                <span className="font-heading text-2xl font-bold text-dark">
                  200+
                </span>
                <p className="font-body text-xs text-text-secondary">
                  Projects Completed
                </p>
              </div>
              <div className="text-center">
                <span className="font-heading text-2xl font-bold text-dark">
                  98%
                </span>
                <p className="font-body text-xs text-text-secondary">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative hidden aspect-4/5 lg:block"
          >
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-primary" />
            <div className="relative h-full w-full bg-background-alt" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
