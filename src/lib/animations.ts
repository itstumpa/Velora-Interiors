import { type Transition, type Variants } from "framer-motion";

// ──────────────────────────────────────────────
// Shared Transition Presets
// ──────────────────────────────────────────────

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const smoothTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};

export const smoothTransitionSlow: Transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1],
};

// ──────────────────────────────────────────────
// Fade Variants
// ──────────────────────────────────────────────

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

// ──────────────────────────────────────────────
// Scale Variants
// ──────────────────────────────────────────────

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

// ──────────────────────────────────────────────
// Stagger Children
// ──────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

// ──────────────────────────────────────────────
// Slide Variants (for carousels, panels)
// ──────────────────────────────────────────────

export const slideLeft: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: smoothTransition,
  },
  exit: {
    x: "100%",
    transition: smoothTransition,
  },
};

export const slideRight: Variants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: smoothTransition,
  },
  exit: {
    x: "-100%",
    transition: smoothTransition,
  },
};

// ──────────────────────────────────────────────
// Counter / Number Variants
// ──────────────────────────────────────────────

export const countUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ──────────────────────────────────────────────
// Section Wrapper (for revealing sections on scroll)
// ──────────────────────────────────────────────

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ──────────────────────────────────────────────
// Navbar
// ──────────────────────────────────────────────

export const navVariants: Variants = {
  visible: { y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  hidden: { y: "-100%", transition: { duration: 0.3, ease: "easeIn" } },
};

// ──────────────────────────────────────────────
// Mobile Menu
// ──────────────────────────────────────────────

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const mobileLinkVariants: Variants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
  }),
};
