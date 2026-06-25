"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef, useRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-dark hover:bg-primary-light active:bg-primary-dark shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30",
  secondary:
    "bg-dark text-text-light hover:bg-dark-secondary active:bg-dark shadow-md shadow-dark/20 hover:shadow-lg hover:shadow-dark/30",
  outline:
    "border border-primary/30 text-primary hover:bg-primary hover:text-dark hover:border-primary shadow-sm shadow-primary/10 hover:shadow-md hover:shadow-primary/20",
  ghost:
    "text-text-secondary hover:text-primary hover:bg-primary/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-6 py-2 text-xs",
  md: "px-8 py-3 text-sm",
  lg: "px-10 py-3.5 text-base",
};

function ButtonInner(
  {
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    icon,
    iconPosition = "left",
    disabled,
    children,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  const spanRef = useRef<HTMLSpanElement>(null);

  return (
    <motion.button
      ref={ref}
      whileHover={{
        scale: disabled || isLoading ? 1 : 1.03,
        y: disabled || isLoading ? 0 : -1,
      }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      disabled={disabled || isLoading}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...(props as HTMLMotionProps<"button">)}
    >
      {/* Shine overlay on hover */}
      {!disabled && !isLoading && (
        <motion.span
          className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent"
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
      )}

      {isLoading ? (
        <svg
          className="h-5 w-5 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : icon && iconPosition === "left" ? (
        <span ref={spanRef} className="inline-flex">
          {icon}
        </span>
      ) : null}

      <span className="relative">{children}</span>

      {!isLoading && !icon && iconPosition !== "left" && (
        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-0.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      )}

      {!isLoading && icon && iconPosition === "right" ? (
        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </motion.button>
  );
}

const Button = forwardRef(ButtonInner);
Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonSize, ButtonVariant };
