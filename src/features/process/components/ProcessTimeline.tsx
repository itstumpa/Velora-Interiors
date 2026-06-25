"use client";

import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { processSteps } from "../data";

const stepIcons: Record<string, React.ReactNode> = {
  search: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  ),
  lightbulb: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  ),
  pencil: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  ),
  tool: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17l-5.322 5.32a2.12 2.12 0 01-3.0-3.0l5.322-5.322m3.434 5.59l5.322-5.322m0 0l3.434-3.434a2.12 2.12 0 00-3.0-3.0l-5.322 5.322M3.0 3.0l18 18"
      />
    </svg>
  ),
  star: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  ),
};

export function ProcessTimeline() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative"
    >
      {/* Vertical Line (desktop) */}
      <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:block lg:left-1/2 lg:-translate-x-px" />

      <div className="space-y-12 md:space-y-16">
        {processSteps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={step.id}
              variants={isEven ? fadeInLeft : fadeInRight}
              className="relative flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-16"
            >
              {/* Step Number & Icon */}
              <div className="z-10 mb-4 flex items-center gap-4 md:mb-0 md:w-1/2 md:justify-end">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-dark shadow-md">
                  {stepIcons[step.icon]}
                </div>
                <div className="md:hidden">
                  <span className="font-heading text-lg font-bold text-primary">
                    Step {step.stepNumber}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-dark">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Connector Dot (desktop) */}
              <div className="absolute left-6 top-5 z-10 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block lg:left-1/2 lg:-translate-x-1/2" />

              {/* Content */}
              <div className="md:w-1/2 md:pt-1">
                <div className="hidden md:block">
                  <span className="font-heading text-lg font-bold text-primary">
                    Step {step.stepNumber}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-dark">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
