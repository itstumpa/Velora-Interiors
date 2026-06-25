"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/common/Container";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const statsData = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Design Awards" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function StatCard({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp({ end: value, duration: 2000, enabled: isInView });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center"
    >
      <span className="font-heading text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
        {count}
        {suffix}
      </span>
      <p className="mt-2 font-body text-sm font-medium uppercase tracking-wider text-text-secondary">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="bg-dark py-16 md:py-20">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8"
        >
          {statsData.map((stat, index) => (
            <StatCard key={stat.label} {...stat} index={index} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
