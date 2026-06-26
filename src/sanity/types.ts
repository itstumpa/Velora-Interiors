import type { PortableTextBlock } from "@portabletext/react";

// ──────────────────────────────────────────────────────────────
// Sanity Data Types
// Matches the projections from queries.ts
// ──────────────────────────────────────────────────────────────

export interface SanityImage {
  asset: {
    _id: string;
    url: string;
    metadata: {
      lqip: string;
      dimensions: {
        aspectRatio: number;
        width: number;
        height: number;
      };
    };
  };
  hotspot?: { x: number; y: number; width: number; height: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  alt?: string;
}

export interface HeroData {
  title: string | null;
  heading: string | null;
  highlightedWord: string | null;
  subtitle: string | null;
  ctaText: string | null;
  ctaLink: string | null;
  backgroundImage: SanityImage | null;
}

export interface AboutData {
  title: string | null;
  subtitle: string | null;
  heading: string | null;
  description: string | null;
  image: SanityImage | null;
  founderHeading: string | null;
  paragraphs: PortableTextBlock[] | null;
  founderName: string | null;
  founderRole: string | null;
}

export interface StatData {
  _id: string;
  label: string;
  value: number;
  suffix: string | null;
  order: number;
}

export interface ServiceData {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface ProjectData {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: SanityImage | null;
  location: string;
  year: number;
  area: string;
  tags: string[];
  order: number;
}

export interface TestimonialData {
  _id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar: SanityImage | null;
  projectType: string;
  order: number;
}

export interface BeforeAfterData {
  _id: string;
  title: string;
  description: string;
  beforeImage: SanityImage;
  afterImage: SanityImage;
  category: string;
  order: number;
}

export interface GalleryImageData {
  _id: string;
  image: SanityImage;
  altText: string | null;
  category: string;
  order: number;
}

export interface SiteSettingsData {
  title: string | null;
  ctaSubtitle: string | null;
  ctaHeading: string | null;
  ctaBackgroundImage: SanityImage | null;
  ctaPrimaryButtonText: string | null;
  ctaPrimaryButtonLink: string | null;
  ctaSecondaryButtonText: string | null;
  ctaSecondaryButtonLink: string | null;
  contactSubtitle: string | null;
  contactHeading: string | null;
  contactDescription: string | null;
}
