"use client";

import type { ProjectData } from "@/sanity/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-background-alt"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        {project.image?.asset?.url && (
          <Image
            src={project.image.asset.url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-dark/70 via-dark/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="p-6">
            <span className="mb-2 inline-block rounded bg-primary/90 px-3 py-1 font-body text-xs font-medium uppercase tracking-wider text-dark">
              {project.category}
            </span>
            <p className="text-sm leading-relaxed text-text-light">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-1 flex items-center gap-2">
          <span className="font-body text-xs font-medium uppercase tracking-wider text-accent">
            {project.category}
          </span>
          <span className="text-text-secondary">·</span>
          <span className="font-body text-xs text-text-secondary">
            {project.location}
          </span>
        </div>
        <h3 className="font-heading text-xl font-semibold text-dark transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags?.slice(0, 3).map((tag: string) => (
            <span key={tag} className="font-body text-xs text-text-secondary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden bg-background-alt">
      <div className="aspect-4/3 bg-gray-200" />
      <div className="space-y-3 p-5">
        <div className="h-3 w-24 rounded bg-gray-200" />
        <div className="h-5 w-3/4 rounded bg-gray-200" />
        <div className="h-3 w-1/2 rounded bg-gray-200" />
      </div>
    </div>
  );
}
