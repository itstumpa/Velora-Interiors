"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/common/Button";
import { useContactForm } from "../hooks/useContactForm";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projectTypes = [
  { value: "", label: "Select project type" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "hospitality", label: "Hospitality" },
  { value: "retail", label: "Retail" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const { formData, errors, status, updateField, handleSubmit, resetStatus } =
    useContactForm();

  const inputClasses =
    "w-full border border-border bg-white px-4 py-3 font-body text-sm text-dark placeholder:text-text-secondary/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <motion.form
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-5"
      noValidate
    >
      <motion.div variants={fadeInUp}>
        <label htmlFor="name" className="mb-1 block font-body text-sm font-medium text-dark">
          Name <span className="text-error">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          className={cn(inputClasses, errors.name && "border-error")}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 font-body text-xs text-error">{errors.name}</p>
        )}
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block font-body text-sm font-medium text-dark">
            Email <span className="text-error">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={cn(inputClasses, errors.email && "border-error")}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 font-body text-xs text-error">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block font-body text-sm font-medium text-dark">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClasses}
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 font-body text-xs text-error">{errors.phone}</p>
          )}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <label htmlFor="projectType" className="mb-1 block font-body text-sm font-medium text-dark">
          Project Type
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={(e) => updateField("projectType", e.target.value)}
          className={inputClasses}
        >
          {projectTypes.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <label htmlFor="message" className="mb-1 block font-body text-sm font-medium text-dark">
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={cn(inputClasses, "resize-y", errors.message && "border-error")}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <p className="mt-1 font-body text-xs text-error">
            {errors.message}
          </p>
        )}
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Button
          type="submit"
          size="lg"
          isLoading={status === "submitting"}
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>

      {/* Success Message */}
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded bg-success/10 p-4 text-center font-body text-sm text-success"
        >
          Thank you! Your message has been sent. We&apos;ll be in touch soon.
          <button
            onClick={resetStatus}
            className="ml-2 underline transition-colors hover:text-success/80"
          >
            Send another
          </button>
        </motion.div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded bg-error/10 p-4 text-center font-body text-sm text-error"
        >
          Something went wrong. Please try again or email us directly at{" "}
          <a
            href="mailto:hello@velorainteriors.com"
            className="underline transition-colors hover:text-error/80"
          >
            hello@velorainteriors.com
          </a>
        </motion.div>
      )}
    </motion.form>
  );
}
