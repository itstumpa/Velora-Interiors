"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProcessTimeline } from "@/features/process/components/ProcessTimeline";

export function ProcessSection() {
  return (
    <section id="process" className="bg-background-alt py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="How We Work"
          title="Our Design Process"
          description="A proven methodology that ensures every project is delivered with precision, creativity, and care."
        />

        <div className="mt-12 md:mt-16">
          <ProcessTimeline />
        </div>
      </Container>
    </section>
  );
}
