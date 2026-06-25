import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Velora Interiors",
};

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-dark px-4">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[2%]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #C9B79C 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Decorative top-right accent */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full border border-primary/10" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-60 w-60 rounded-full border border-primary/8" />

      {/* Left accent line */}
      <div className="absolute left-0 top-0 h-full w-0.75 bg-primary/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Large 404 */}
        <span className="font-heading text-[140px] font-bold leading-none tracking-tight text-primary md:text-[200px]">
          404
        </span>

        {/* Divider */}
        <div className="mb-6 mt-2 h-px w-16 bg-primary/40" />

        {/* Heading */}
        <h1 className="font-heading text-2xl font-semibold text-text-light md:text-3xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-md font-body text-base leading-relaxed text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to beautiful spaces.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3 font-body text-sm font-medium tracking-wide text-dark shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30"
        >
          Back to Home
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
        </Link>
      </div>
    </div>
  );
}
