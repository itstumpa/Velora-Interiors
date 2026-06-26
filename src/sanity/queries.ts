import groq from "groq";
import { defineQuery } from "next-sanity";

// ──────────────────────────────────────────────────────────────
// Image Fragment — reusable for any image field with hotspot
// ──────────────────────────────────────────────────────────────
const imageFragment = groq`
  asset->{
    _id,
    url,
    metadata {
      lqip,
      dimensions { aspectRatio, width, height }
    }
  },
  hotspot { x, y, width, height },
  crop { top, bottom, left, right },
  alt
`;

// ──────────────────────────────────────────────────────────────
// Hero (Singleton)
// ──────────────────────────────────────────────────────────────
export const HERO_QUERY = defineQuery(groq`
  *[_type == "hero"][0] {
    title,
    heading,
    highlightedWord,
    subtitle,
    ctaText,
    ctaLink,
    backgroundImage { ${imageFragment} }
  }
`);

// ──────────────────────────────────────────────────────────────
// About (Singleton)
// ──────────────────────────────────────────────────────────────
export const ABOUT_QUERY = defineQuery(groq`
  *[_type == "about"][0] {
    title,
    subtitle,
    heading,
    description,
    image { ${imageFragment} },
    founderHeading,
    paragraphs,
    founderName,
    founderRole
  }
`);

// ──────────────────────────────────────────────────────────────
// Stats
// ──────────────────────────────────────────────────────────────
export const STATS_QUERY = defineQuery(groq`
  *[_type == "stat"] | order(order asc) {
    _id,
    label,
    value,
    suffix,
    order
  }
`);

// ──────────────────────────────────────────────────────────────
// Services
// ──────────────────────────────────────────────────────────────
export const SERVICES_QUERY = defineQuery(groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`);

// ──────────────────────────────────────────────────────────────
// Projects
// ──────────────────────────────────────────────────────────────
export const PROJECTS_QUERY = defineQuery(groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    description,
    image { ${imageFragment} },
    location,
    year,
    area,
    tags,
    order
  }
`);

// ──────────────────────────────────────────────────────────────
// Testimonials
// ──────────────────────────────────────────────────────────────
export const TESTIMONIALS_QUERY = defineQuery(groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    location,
    content,
    rating,
    avatar { ${imageFragment} },
    projectType,
    order
  }
`);

// ──────────────────────────────────────────────────────────────
// Before & After
// ──────────────────────────────────────────────────────────────
export const BEFORE_AFTER_QUERY = defineQuery(groq`
  *[_type == "beforeAfter"] | order(order asc) {
    _id,
    title,
    description,
    beforeImage { ${imageFragment} },
    afterImage { ${imageFragment} },
    category,
    order
  }
`);

// ──────────────────────────────────────────────────────────────
// Process Steps (ordered by stepNumber, not order)
// ──────────────────────────────────────────────────────────────
export const PROCESS_STEPS_QUERY = defineQuery(groq`
  *[_type == "processStep"] | order(stepNumber asc) {
    _id,
    title,
    description,
    stepNumber,
    icon
  }
`);

// ──────────────────────────────────────────────────────────────
// Gallery Images
// ──────────────────────────────────────────────────────────────
export const GALLERY_QUERY = defineQuery(groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    image { ${imageFragment} },
    altText,
    category,
    order
  }
`);

// ──────────────────────────────────────────────────────────────
// Site Settings (Singleton — CTA & Contact data)
// ──────────────────────────────────────────────────────────────
export const SITE_SETTINGS_QUERY = defineQuery(groq`
  *[_type == "siteSettings"][0] {
    title,
    ctaSubtitle,
    ctaHeading,
    ctaBackgroundImage { ${imageFragment} },
    ctaPrimaryButtonText,
    ctaPrimaryButtonLink,
    ctaSecondaryButtonText,
    ctaSecondaryButtonLink,
    contactSubtitle,
    contactHeading,
    contactDescription
  }
`);
