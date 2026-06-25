"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { TestimonialCard } from "@/features/testimonials/components/TestimonialCard";
import { testimonials } from "@/features/testimonials/data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Hear from the people we've had the privilege of designing for."
        />

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
