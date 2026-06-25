import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Velora Interiors",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <span className="font-heading text-8xl font-bold text-primary md:text-9xl">
        404
      </span>
      <h1 className="mt-4 font-heading text-2xl font-semibold text-dark md:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-2 max-w-md text-center font-body text-base text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-dark px-8 py-3 font-body text-sm font-medium uppercase tracking-wider text-text-light transition-colors hover:bg-dark-secondary"
      >
        Back to Home
      </Link>
    </div>
  );
}
