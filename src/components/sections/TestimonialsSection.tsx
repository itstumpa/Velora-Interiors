"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";
import { cn } from "@/lib/utils";
import type { TestimonialData } from "@/sanity/types";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface TestimonialsSectionProps {
  testimonials: TestimonialData[];
}

const CARDS_PER_PAGE = 3;

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const totalPages = useMemo(
    () => Math.ceil(testimonials.length / CARDS_PER_PAGE),
    [testimonials.length],
  );

  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const start = page * CARDS_PER_PAGE;
  const visible = testimonials.slice(start, start + CARDS_PER_PAGE);

  const goNext = useCallback(
    () => setPage((p) => (p + 1 >= totalPages ? 0 : p + 1)),
    [totalPages],
  );
  const goPrev = useCallback(
    () => setPage((p) => (p - 1 < 0 ? totalPages - 1 : p - 1)),
    [totalPages],
  );

  // Auto-play: slides right to left every 4s
  useEffect(() => {
    if (isPaused) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(goNext, 4000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, goNext]);

  const goToPage = useCallback((i: number) => {
    setPage(i);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-14 md:py-18"
    >
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Hear from the people we've had the privilege of designing for."
        />

        <div className="relative mt-12 md:mt-16">
          {/* Carousel container */}
          <div
            className="relative mx-auto max-w-6xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid gap-8 md:grid-cols-3 md:gap-x-10"
              >
                {visible.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial._id}
                    testimonial={testimonial}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={goPrev}
              aria-label="Previous testimonials"
              className={cn(
                "absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2.5 shadow-md ring-1 ring-primary/10 transition-all duration-300 hover:bg-primary hover:text-dark hover:shadow-lg md:flex",
              )}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonials"
              className={cn(
                "absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2.5 shadow-md ring-1 ring-primary/10 transition-all duration-300 hover:bg-primary hover:text-dark hover:shadow-lg md:flex",
              )}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-10 flex items-center justify-center gap-2.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                aria-label={`Go to testimonial set ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-400",
                  i === page
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
