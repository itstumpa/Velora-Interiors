"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

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
  primary: "bg-primary text-dark hover:bg-primary-light active:bg-primary-dark",
  secondary: "bg-dark text-text-light hover:bg-dark-secondary active:bg-dark",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-dark",
  ghost: "text-text-secondary hover:text-primary hover:bg-background-alt",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-none font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...(props as HTMLMotionProps<"button">)}
    >
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
        <span className="inline-flex">{icon}</span>
      ) : null}
      {children}
      {!isLoading && icon && iconPosition === "right" ? (
        <span className="inline-flex">{icon}</span>
      ) : null}
    </motion.button>
  );
}

const Button = forwardRef(ButtonInner);
Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonSize, ButtonVariant };
