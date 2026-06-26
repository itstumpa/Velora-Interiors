# Velora Interiors — Frontend

A premium luxury interior design studio website built with **Next.js 16** (App Router), **Tailwind CSS v4**, **Framer Motion**, and **Sanity CMS** as the headless content backend. All content is managed via Sanity Studio and fetched at build time.

**Live Studio:** [https://velora-interiors-cms.sanity.studio/](https://velora-interiors-cms.sanity.studio/)

## Tech Stack

| Technology                | Purpose                                                 |
| ------------------------- | ------------------------------------------------------- |
| **Next.js 16.2.9**        | React framework with App Router & Turbopack             |
| **Tailwind CSS v4**       | Utility-first styling via `@theme inline` design tokens |
| **Framer Motion 12.42**   | Animations, scroll-driven parallax, staggered reveals   |
| **TypeScript**            | Type safety across the entire codebase                  |
| **Sanity CMS**            | Headless content management (schemas, GROQ queries)     |
| **next-sanity**           | Sanity client + toolkit for Next.js                     |
| **@portabletext/react**   | Render rich text (Portable Text) content                |
| **clsx + tailwind-merge** | Conditional class composition (`cn()` utility)          |

**Fonts:** Playfair Display (headings) · Inter (body) — loaded via `next/font/google`.

## Design System

### Brand Colors

| Token            | Hex                        |
| ---------------- | -------------------------- |
| `primary`        | `#C9B79C` — warm beige     |
| `primary-light`  | `#DFD0B8`                  |
| `primary-dark`   | `#A89276`                  |
| `dark`           | `#1F1F1F` — charcoal       |
| `dark-secondary` | `#2D2D2D`                  |
| `background`     | `#FAF7F2` — warm off-white |
| `background-alt` | `#F5F0E8`                  |
| `text-light`     | `#FAF7F2`                  |
| `text-secondary` | `#6B6B6B`                  |

### Key Components

- **Button** — Pill-shaped (`rounded-full`), variants: primary / secondary / outline / ghost, sizes: sm / md / lg, shine-on-hover overlay, animated arrow icon.
- **Logo** — Split-color "V" + "elora INTERIORS", responsive sizing.
- **ScrollToTop** — Circular floating button, appears on scroll.
- **Navbar** — Fixed top, transparent → `bg-dark/85 backdrop-blur-xl` on scroll, active section highlighting via IntersectionObserver.
- **SectionTitle** — Consistent section heading with decorative underline.

## Sections (15 total, top-to-bottom)

1. **Hero** — Fullscreen cinematic parallax, editorial headline, scroll indicator.
2. **About** — Studio philosophy and story.
3. **Stats** — Animated counter statistics.
4. **Services** — Service offerings grid.
5. **ProjectsSection** — Filterable portfolio with pill-shaped filter toggles and project cards.
6. **BeforeAfterSection** — Interactive before/after comparison slider.
7. **ProcessSection** — Timeline of the design process.
8. **TestimonialsSection** — Editorial pull-quote grid layout with decorative quote marks.
9. **Team** — Team member profiles.
10. **Awards** — Award and recognition badges.
11. **InspirationGallery** — Gallery with category filtering and lightbox.
12. **FAQ** — Accordion-style frequently asked questions.
13. **CTA** — Dual-button call-to-action (dark background).
14. **ContactSection** — Contact form with validation and social links.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, SEO)
│   ├── page.tsx            # Home page (async, fetches all Sanity data)
│   ├── not-found.tsx       # Custom 404 page
│   ├── globals.css         # Tailwind v4 @theme design tokens
│   ├── loading.tsx         # Suspense fallback
│   └── error.tsx           # Error boundary
│
├── sanity/                 # Sanity CMS integration
│   ├── client.ts           # Sanity client config
│   ├── queries.ts          # GROQ queries with defineQuery
│   ├── types.ts            # TypeScript interfaces for all documents
│   └── image.ts            # urlFor() image URL builder
│
├── components/
│   ├── common/             # Reusable UI: Button, Container, Logo, etc.
│   ├── layout/             # Navbar, MobileMenu, Footer
│   └── sections/           # Section components receiving Sanity data as props
│
├── features/               # Domain-driven feature modules
│   ├── projects/           # ProjectCard, ProjectFilter
│   ├── testimonials/       # TestimonialCard
│   ├── contact/            # ContactForm, validation, useContactForm
│   └── before-after/       # ComparisonSlider
│
├── hooks/                  # Shared hooks
│   ├── useActiveSection.ts # IntersectionObserver nav highlighting
│   ├── useCountUp.ts       # Animated number counter
│   ├── useMediaQuery.ts    # Responsive breakpoint detection
│   └── useScroll.ts        # Scroll position tracking
│
├── lib/                    # Utilities and configuration
│   ├── constants.ts        # Site config, contact info, nav links
│   ├── animations.ts       # Centralized Framer Motion variants
│   ├── utils.ts            # cn() class merge utility
│   └── seo.ts              # SEO helper functions
│
└── assets/                 # Static assets (icons, images, logos)
```

## Getting Started

### Prerequisites

- Node.js 20+
- A `.env.local` file with your Sanity credentials (copy from `.env.example` if available):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Commands

```bash
# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Architecture Notes

- **Sanity CMS headless backend** — All content (hero, about, stats, services, projects, testimonials, before/after, gallery, process steps, site settings) is managed in Sanity and fetched via GROQ queries at build time. The home page (`page.tsx`) is an async server component that fetches all 10 document types in parallel.
- **Domain-driven features** — Each feature module (projects, testimonials, contact, etc.) is self-contained with its own components and hooks under `src/features/`. Static data files were migrated to Sanity and removed.
- **Section components are thin orchestrators** — They live in `src/components/sections/`, receive typed Sanity data as props, and compose feature components with layout and animation wrappers.
- **Centralized animations** — All Framer Motion variants are defined in `src/lib/animations.ts` to maintain consistent motion design.
- **Design tokens in Tailwind v4** — The `@theme inline` directive in `globals.css` defines custom colors, fonts, and spacing, accessible via Tailwind utility classes.
- **Active navigation** — The `useActiveSection` hook uses IntersectionObserver with a middle-of-viewport threshold to highlight the current section in the navbar.
- **Image optimization** — Sanity images are served via `@sanity/image-url` with automatic CDN delivery, LQIP placeholders, and responsive dimensions.
- **Content management** — Editors can update all site content through [Sanity Studio](https://velora-interiors-cms.sanity.studio/) without code changes.
