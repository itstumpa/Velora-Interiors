"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const team = [
  {
    name: "Elena Voss",
    role: "Founder & Principal Designer",
    bio: "With over 15 years of experience, Elena leads every project with a keen eye for detail and a passion for timeless design.",
    image: "/images/team-elena.jpg",
  },
  {
    name: "Marcus Webb",
    role: "Senior Designer",
    bio: "Marcus brings architectural precision and creative flair to residential and commercial projects alike.",
    image: "/images/team-marcus.jpg",
  },
  {
    name: "Sophia Laurent",
    role: "Interior Architect",
    bio: "Sophia specializes in spatial planning and materiality, ensuring every design is as functional as it is beautiful.",
    image: "/images/team-sophia.jpg",
  },
  {
    name: "James Okafor",
    role: "Project Manager",
    bio: "James keeps every project on track, coordinating seamlessly between clients, designers, and craftspeople.",
    image: "/images/team-james.jpg",
  },
];

export function Team() {
  return (
    <section id="team" className="bg-background-alt py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="Our Team"
          title="Meet the Experts"
          description="A passionate team of designers, architects, and project managers dedicated to bringing your vision to life."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              className="group text-center"
            >
              <div className="relative mx-auto mb-4 h-64 w-full overflow-hidden bg-background-alt">
                <div className="h-full w-full bg-background-alt" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark">
                {member.name}
              </h3>
              <p className="font-body text-sm font-medium text-accent">
                {member.role}
              </p>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
