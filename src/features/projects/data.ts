import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "modern-elegance",
    title: "Modern Elegance",
    category: "residential",
    description:
      "A contemporary penthouse transformation blending minimalist design with warm textures and curated art pieces.",
    image: "/images/project-modern-elegance.jpg",
    location: "Manhattan, NY",
    year: 2024,
    area: "2,400 sq ft",
    tags: ["Contemporary", "Minimalist", "Luxury"],
  },
  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    category: "residential",
    description:
      "A serene beachfront villa designed to harmonize indoor and outdoor living with natural materials and soft palettes.",
    image: "/images/project-coastal-retreat.jpg",
    location: "Malibu, CA",
    year: 2024,
    area: "3,800 sq ft",
    tags: ["Coastal", "Natural", "Indoor-Outdoor"],
  },
  {
    id: "urban-workspace",
    title: "Urban Workspace",
    category: "commercial",
    description:
      "A forward-thinking office environment that fosters collaboration through flexible layouts and biophilic design.",
    image: "/images/project-urban-workspace.jpg",
    location: "San Francisco, CA",
    year: 2023,
    area: "8,500 sq ft",
    tags: ["Corporate", "Biophilic", "Flexible"],
  },
  {
    id: "heritage-hotel",
    title: "Heritage Hotel",
    category: "hospitality",
    description:
      "Restoration and reimagination of a historic boutique hotel, preserving character while introducing modern luxury.",
    image: "/images/project-heritage-hotel.jpg",
    location: "Charleston, SC",
    year: 2023,
    area: "12,000 sq ft",
    tags: ["Heritage", "Boutique", "Luxury"],
  },
  {
    id: "boutique-showroom",
    title: "Boutique Showroom",
    category: "retail",
    description:
      "An immersive brand experience combining sculptural display elements with strategic customer flow.",
    image: "/images/project-boutique-showroom.jpg",
    location: "SoHo, NY",
    year: 2024,
    area: "1,800 sq ft",
    tags: ["Retail", "Brand Experience", "Sculptural"],
  },
  {
    id: "skyline-residence",
    title: "Skyline Residence",
    category: "residential",
    description:
      "A full-floor apartment with panoramic views, featuring custom millwork and a curated art collection.",
    image: "/images/project-skyline-residence.jpg",
    location: "Chicago, IL",
    year: 2023,
    area: "3,200 sq ft",
    tags: ["Contemporary", "Custom", "Art Collection"],
  },
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "hospitality", label: "Hospitality" },
  { value: "retail", label: "Retail" },
] as const;
