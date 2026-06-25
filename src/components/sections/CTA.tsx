"use client";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative bg-dark py-20 md:py-28">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full border border-primary/10" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full border border-primary/10" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl font-bold text-text-light md:text-4xl lg:text-5xl"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg"
          >
            Let&apos;s create something extraordinary together. Book your
            complimentary consultation today and take the first step toward the
            space you&apos;ve always dreamed of.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <Link href="/#contact">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
