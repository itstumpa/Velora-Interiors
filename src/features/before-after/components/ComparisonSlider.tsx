"use client";

import { cn } from "@/lib/utils";
import type { BeforeAfterData } from "@/sanity/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface ComparisonSliderProps {
  project: BeforeAfterData;
  index: number;
}

export function ComparisonSlider({ project, index }: ComparisonSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(50);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setPosition(Math.min(Math.max(percentage, 5), 95));
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div
        ref={containerRef}
        className="relative aspect-4/3 cursor-ew-resize overflow-hidden select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        role="slider"
        aria-label={`Compare before and after for ${project.title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={position}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") setPosition((p) => Math.min(p + 5, 95));
          if (e.key === "ArrowLeft") setPosition((p) => Math.max(p - 5, 5));
        }}
      >
        {/* After image (full) */}
        {project.afterImage?.asset?.url && (
          <Image
            src={project.afterImage.asset.url}
            alt={`${project.title} - After`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          {project.beforeImage?.asset?.url && (
            <Image
              src={project.beforeImage.asset.url}
              alt={`${project.title} - Before`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>

        {/* Slider Handle */}
        <div
          className="absolute inset-y-0 flex items-center"
          style={{ left: `${position}%` }}
        >
          <div className="h-full w-0.5 bg-white shadow-lg" />
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
            <svg
              className="h-4 w-4 text-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7l-4 4 4 4M16 7l4 4-4 4"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span
          className={cn(
            "absolute bottom-3 left-3 rounded bg-dark/70 px-2.5 py-1 font-body text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm",
            position < 20 && "hidden",
          )}
        >
          Before
        </span>
        <span
          className={cn(
            "absolute bottom-3 right-3 rounded bg-dark/70 px-2.5 py-1 font-body text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm",
            position > 80 && "hidden",
          )}
        >
          After
        </span>
      </div>

      <div className="mt-4">
        <h3 className="font-heading text-xl font-semibold text-dark">
          {project.title}
        </h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
