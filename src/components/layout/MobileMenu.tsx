"use client";

import { mobileLinkVariants, mobileMenuVariants } from "@/lib/animations";
import { NAV_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
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
                onClick={onClose}
                className="font-heading text-4xl font-light tracking-wide text-text-light/90 transition-colors duration-300 hover:text-primary"
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
