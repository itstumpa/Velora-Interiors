"use client";

import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {subtitle && (
        <motion.span
          variants={fadeInUp}
          className="mb-3 inline-block font-body text-sm font-medium uppercase tracking-[0.2em] text-accent"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        variants={fadeInUp}
        className="font-heading text-3xl font-bold text-dark md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
