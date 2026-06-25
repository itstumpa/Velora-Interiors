"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { mobileMenuVariants, mobileLinkVariants } from "@/lib/animations";

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
      className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-background/98 backdrop-blur-lg lg:hidden"
    >
      <nav>
        <ul className="flex flex-col items-center gap-8">
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
                className="font-heading text-3xl font-semibold text-dark transition-colors hover:text-primary"
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
