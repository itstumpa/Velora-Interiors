"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport.
 * Returns the id of the most visible section, or an empty string
 * (representing "Home") when no section is intersecting the active zone.
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Track the most recently intersected section to handle
    // the gap between the top of the page and the first section.
    let lastIntersected = "";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            lastIntersected = entry.target.id;
            setActiveId(entry.target.id);
          }
        }
      },
      {
        // Middle 50% of the viewport
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Listen for scroll to detect when user is at the very top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        lastIntersected = "";
        setActiveId("");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}
