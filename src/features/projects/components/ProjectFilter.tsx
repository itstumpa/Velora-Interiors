"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
            "rounded-full px-6 py-2.5 font-body text-sm font-medium uppercase tracking-wider shadow-sm transition-all duration-300",
            activeCategory === category.value
              ? "bg-dark text-text-light shadow-dark/15"
              : "bg-white text-text-secondary shadow-none hover:bg-primary/15 hover:text-dark",
          )}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
}
