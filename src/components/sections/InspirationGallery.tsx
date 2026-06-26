"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { GalleryImageData } from "@/sanity/types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Gallery categories (static UI constants matching schema dropdown)
const categories = [
  { value: "all", label: "All" },
  { value: "living", label: "Living" },
  { value: "bedroom", label: "Bedroom" },
  { value: "kitchen", label: "Kitchen" },
  { value: "bathroom", label: "Bathroom" },
];

interface InspirationGalleryProps {
  gallery: GalleryImageData[];
}

export function InspirationGallery({ gallery }: InspirationGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? gallery
      : gallery.filter((img) => img.category === activeCategory);

  const selectedImageData = selectedImage
    ? gallery.find((img) => img._id === selectedImage)
    : null;

  return (
    <section id="gallery" className="bg-background-alt py-14 md:py-18">
      <Container>
        <SectionTitle
          subtitle="Inspiration"
          title="Design Gallery"
          description="Browse our collection of interior designs for inspiration. Curated spaces that showcase our range and versatility."
        />

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`rounded-full px-6 py-2.5 font-body text-sm font-medium uppercase tracking-wider shadow-sm transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-dark text-text-light shadow-dark/15"
                  : "bg-white text-text-secondary shadow-none hover:bg-primary/15 hover:text-dark"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(img._id)}
              >
                {img.image?.asset?.url && (
                  <Image
                    src={img.image.asset.url}
                    alt={img.altText || "Gallery image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-dark/0 transition-colors duration-300 group-hover:bg-dark/40">
                  <span className="translate-y-4 font-body text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[80vh] max-w-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-4/3 w-full">
                {selectedImageData.image?.asset?.url && (
                  <Image
                    src={selectedImageData.image.asset.url}
                    alt={selectedImageData.altText || "Gallery image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                )}
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-dark/50 text-white transition-colors hover:bg-dark/80"
                aria-label="Close"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
