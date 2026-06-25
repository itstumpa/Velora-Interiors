import { motion } from "framer-motion";
import Image from "next/image";
import type { Testimonial } from "../types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative border-l-2 border-primary/30 pl-6 transition-colors hover:border-primary md:pl-8"
    >
      {/* Large decorative quote mark */}
      <div className="pointer-events-none absolute -top-4 left-6 select-none text-[120px] font-heading leading-none text-primary/8 md:left-8 md:text-[160px]">
        &ldquo;
      </div>

      {/* Quote */}
      <blockquote className="relative font-heading text-lg font-light leading-relaxed text-dark/85 md:text-xl">
        {testimonial.content}
      </blockquote>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3">
        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-primary/10">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <cite className="block not-italic font-heading text-sm font-semibold text-dark">
            {testimonial.name}
          </cite>
          <span className="font-body text-xs text-text-secondary">
            {testimonial.role} &bull; {testimonial.projectType}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
