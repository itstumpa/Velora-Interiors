"use client";

import { Container } from "@/components/common/Container";
import { SectionTitle } from "@/components/common/SectionTitle";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Gallery categories
const categories = [
  { value: "all", label: "All" },
  { value: "living", label: "Living" },
  { value: "bedroom", label: "Bedroom" },
  { value: "kitchen", label: "Kitchen" },
  { value: "bathroom", label: "Bathroom" },
];

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format",
    alt: "Elegant living room with neutral tones",
    category: "living",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80&auto=format",
    alt: "Luxury bedroom with soft lighting",
    category: "bedroom",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?w=600&q=80&auto=format",
    alt: "Modern kitchen with marble surfaces",
    category: "kitchen",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80&auto=format",
    alt: "Spa-inspired bathroom design",
    category: "bathroom",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format",
    alt: "Open concept living space",
    category: "living",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80&auto=format",
    alt: "Master bedroom with elegant decor",
    category: "bedroom",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80&auto=format",
    alt: "Contemporary kitchen design",
    category: "kitchen",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&auto=format",
    alt: "Luxury bathroom with marble finishes",
    category: "bathroom",
  },
];

export function InspirationGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="bg-background-alt py-20 md:py-28">
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
              className={`rounded-none px-5 py-2.5 font-body text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                activeCategory === cat.value
                  ? "bg-dark text-text-light"
                  : "bg-white text-text-secondary hover:bg-primary/20 hover:text-dark"
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
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(img.id)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
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
        {selectedImage !== null && (
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
                {selectedImage !== null &&
                  (() => {
                    const img = galleryImages.find(
                      (g) => g.id === selectedImage,
                    );
                    return img ? (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    ) : null;
                  })()}
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
