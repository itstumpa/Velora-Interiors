"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  href?: string;
}

export function Logo({ variant = "dark", className, href = "/" }: LogoProps) {
  return (
    <Link href={href} className={cn("group inline-block", className)}>
      <motion.span
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={cn(
          "font-heading text-4xl font-bold tracking-tight md:text-5xl",
          variant === "dark" ? "text-dark" : "text-text-light",
        )}
      >
        <span className="text-primary">V</span>elora
        <span className="ml-1 font-body text-xs font-light tracking-[0.3em] text-primary">
          INTERIORS
        </span>
      </motion.span>
    </Link>
  );
}
