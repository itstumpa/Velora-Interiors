"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "Our process follows five key phases: Discovery, Concept Development, Design & Detailing, Execution & Installation, and Styling & Reveal. We begin with an in-depth consultation to understand your vision, then guide you through each step with clear communication and collaboration.",
  },
  {
    question: "How much does interior design cost?",
    answer:
      "Every project is unique, so costs vary based on scope, scale, and complexity. We offer complimentary initial consultations to understand your project and provide a tailored proposal. Our pricing is transparent with no hidden fees.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes! We collaborate with clients across the country. Our virtual design process includes video consultations, digital mood boards, 3D renderings, and detailed specification packages. We ship samples and coordinate with local vendors and installers.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the project scope. A single room redesign may take 4-6 weeks, while a full home or commercial project can range from 3-12 months. We provide a detailed timeline during the proposal phase and keep you updated throughout.",
  },
  {
    question: "Do you source materials and furniture?",
    answer:
      "Absolutely. We have access to trade-only resources, custom manufacturers, and artisan workshops. We source everything from fabrics and finishes to furniture and lighting, often at preferred pricing that we pass on to our clients.",
  },
  {
    question: "Can you work within my budget?",
    answer:
      "We work with a wide range of budgets and pride ourselves on delivering maximum impact regardless of budget size. During our initial consultation, we discuss your budget openly and tailor our approach accordingly.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <Container>
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about working with Velora Interiors."
        />

        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border last:border-0"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-base font-semibold text-dark pr-8">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center"
                >
                  <svg
                    className="h-4 w-4 text-text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 font-body text-sm leading-relaxed text-text-secondary">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
