"use client";

import { useState, useEffect } from "react";

interface ScrollState {
  scrollY: number;
  scrollDirection: "up" | "down";
  isScrolled: boolean;
}

/**
 * Tracks scroll position, direction, and whether the page has been scrolled.
 */
export function useScroll(threshold = 50): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: "up",
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setState({
        scrollY: currentScrollY,
        scrollDirection:
          currentScrollY > lastScrollY && currentScrollY > threshold
            ? "down"
            : "up",
        isScrolled: currentScrollY > threshold,
      });
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return state;
}
