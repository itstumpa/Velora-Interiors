"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { projectCategories } from "../data";

interface ProjectFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {projectCategories.map((category) => (
        <motion.button
          key={category.value}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategoryChange(category.value)}
          className={cn(
            "rounded-none px-5 py-2.5 font-body text-sm font-medium uppercase tracking-wider transition-colors duration-300",
            activeCategory === category.value
              ? "bg-dark text-text-light"
              : "bg-background-alt text-text-secondary hover:bg-primary/20 hover:text-dark",
          )}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
}
