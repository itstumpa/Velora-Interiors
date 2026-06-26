"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ComparisonSlider } from "@/features/before-after/components/ComparisonSlider";
import type { BeforeAfterData } from "@/sanity/types";

interface BeforeAfterSectionProps {
  beforeAfter: BeforeAfterData[];
}

export function BeforeAfterSection({ beforeAfter }: BeforeAfterSectionProps) {
  return (
    <section id="before-after" className="bg-background py-14 md:py-18">
      <Container>
        <SectionTitle
          subtitle="Transformations"
          title="Before & After"
          description="See the dramatic transformations we've achieved. Drag the slider to compare original spaces with our redesigned interiors."
        />

        <div className="mt-12 grid gap-12 md:mt-16 lg:grid-cols-2 lg:gap-16 xl:grid-cols-3">
          {beforeAfter.map((project, index) => (
            <ComparisonSlider
              key={project._id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
