"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";
import { testimonials } from "@/features/testimonials/data";

export function TestimonialsSection() {
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
          <div className="grid gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-14">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
