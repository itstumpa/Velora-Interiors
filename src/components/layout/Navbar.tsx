"use client";

import { Logo } from "@/components/common/Logo";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Section IDs to observe (skip Home which has no hash)
  const sectionIds = NAV_LINKS.filter((l) => l.href.startsWith("/#")).map((l) =>
    l.href.replace("/#", ""),
  );
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return activeId === "";
      const section = href.replace("/#", "");
      return activeId === section;
    },
    [activeId],
  );

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      } else {
        const id = href.replace("/#", "");
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
      setIsMobileOpen(false);
    },
    [],
  );

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-primary/20 transition-all duration-500",
          isScrolled
            ? "bg-dark/85 shadow-[0_1px_20px_rgba(0,0,0,0.15)] backdrop-blur-xl border-primary/30"
            : "bg-transparent border-primary/15",
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo — fade in with micro upward drift */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.06,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Logo variant="light" />
          </motion.div>

          {/* Desktop Navigation — staggered sequential reveal */}
          <ul className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + i * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "font-body text-[15px] font-light uppercase tracking-[0.28em] transition-colors duration-300",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-text-light/85 hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button — staggered with last link */}
          <motion.button
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.15 + NAV_LINKS.length * 0.06,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <motion.span
              animate={
                isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
              }
              className="block h-[1.5px] w-6 bg-text-light transition-colors"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[1.5px] w-6 bg-text-light transition-colors"
            />
            <motion.span
              animate={
                isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block h-[1.5px] w-6 bg-text-light transition-colors"
            />
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileOpen && <MobileMenu onClose={() => setIsMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
