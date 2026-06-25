"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { mobileLinkVariants, mobileMenuVariants } from "@/lib/animations";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback } from "react";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const sectionIds = NAV_LINKS.filter((l) => l.href.startsWith("/#")).map((l) =>
    l.href.replace("/#", ""),
  );
  const activeId = useActiveSection(sectionIds);

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return activeId === "";
      const section = href.replace("/#", "");
      return activeId === section;
    },
    [activeId],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      onClose();
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
    },
    [onClose],
  );

  return (
    <motion.div
      variants={mobileMenuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-dark/98 backdrop-blur-xl lg:hidden"
    >
      <nav>
        <ul className="flex flex-col items-center gap-10">
          {NAV_LINKS.map((link, index) => (
            <motion.li
              key={link.href}
              variants={mobileLinkVariants}
              custom={index}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <Link
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  "font-heading text-4xl font-light tracking-wide transition-colors duration-300 hover:text-primary",
                  isActive(link.href) ? "text-primary" : "text-text-light/90",
                )}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}
