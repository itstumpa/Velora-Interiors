"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { ProjectFilter } from "@/features/projects/components/ProjectFilter";
import { projects } from "@/features/projects/data";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="bg-background-alt py-14 md:py-18">
      <Container>
        <SectionTitle
          subtitle="Our Portfolio"
          title="Featured Projects"
          description="Explore a selection of our finest work — each project a testament to thoughtful design and meticulous execution."
        />

        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <AnimatePresence mode="wait">
          <div
            key={activeCategory}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
