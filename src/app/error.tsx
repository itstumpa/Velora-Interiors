"use client";

import { useEffect } from "react";
import { Button } from "@/components/common/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Velora Interiors — Unhandled Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <span className="font-heading text-7xl font-bold text-primary md:text-8xl">
        Oops!
      </span>
      <h1 className="mt-4 font-heading text-2xl font-semibold text-dark md:text-3xl">
        Something Went Wrong
      </h1>
      <p className="mt-2 max-w-md text-center font-body text-base text-text-secondary">
        We encountered an unexpected error. Please try again, or contact us if
        the problem persists.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset}>Try Again</Button>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/")}
        >
          Go Home
        </Button>
      </div>
      {error.digest && (
        <p className="mt-6 font-body text-xs text-text-secondary">
          Error ID: {error.digest}
        </p>
      )}
    </div>
  );
}
