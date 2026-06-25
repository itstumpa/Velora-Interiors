import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    stepNumber: 1,
    title: "Discovery",
    description:
      "We begin by understanding your vision, lifestyle, and requirements. Through in-depth consultations, we learn how you use your space and what inspires you.",
    icon: "search",
  },
  {
    id: "concept",
    stepNumber: 2,
    title: "Concept Development",
    description:
      "Our design team creates mood boards, spatial layouts, and material palettes that bring your vision to life. We present multiple directions for your feedback.",
    icon: "lightbulb",
  },
  {
    id: "design",
    stepNumber: 3,
    title: "Design & Detailing",
    description:
      "We refine the chosen concept into detailed plans, including custom furniture designs, lighting layouts, fabric selections, and architectural drawings.",
    icon: "pencil",
  },
  {
    id: "execution",
    stepNumber: 4,
    title: "Execution & Installation",
    description:
      "Our trusted network of artisans and craftspeople brings the design to life. We manage every aspect of procurement, construction, and installation.",
    icon: "tool",
  },
  {
    id: "styling",
    stepNumber: 5,
    title: "Styling & Reveal",
    description:
      "The final layer — art curation, accessories, and styling. We walk through the completed space with you, ensuring every detail exceeds expectations.",
    icon: "star",
  },
];
