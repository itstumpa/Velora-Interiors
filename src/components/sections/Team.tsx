"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const team = [
  {
    name: "Elena Voss",
    role: "Founder & Principal Designer",
    bio: "With over 15 years of experience, Elena leads every project with a keen eye for detail and a passion for timeless design.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&auto=format",
  },
  {
    name: "Marcus Webb",
    role: "Senior Designer",
    bio: "Marcus brings architectural precision and creative flair to residential and commercial projects alike.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format",
  },
  {
    name: "Sophia Laurent",
    role: "Interior Architect",
    bio: "Sophia specializes in spatial planning and materiality, ensuring every design is as functional as it is beautiful.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80&auto=format",
  },
  {
    name: "James Okafor",
    role: "Project Manager",
    bio: "James keeps every project on track, coordinating seamlessly between clients, designers, and craftspeople.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80&auto=format",
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
              <div className="relative mx-auto mb-4 h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
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
