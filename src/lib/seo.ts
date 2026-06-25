import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

// ──────────────────────────────────────────────
// Default Metadata
// ──────────────────────────────────────────────

export const defaultMetadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// ──────────────────────────────────────────────
// JSON-LD Structured Data Generators
// ──────────────────────────────────────────────

export interface LocalBusinessLD {
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  image?: string;
}

/**
 * Generates JSON-LD structured data for the business.
 */
export function businessStructuredData(info: LocalBusinessLD) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: info.name,
    description: info.description,
    url: info.url,
    telephone: info.telephone,
    email: info.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: info.address.streetAddress,
      addressLocality: info.address.addressLocality,
      addressRegion: info.address.addressRegion,
      postalCode: info.address.postalCode,
      addressCountry: info.address.addressCountry,
    },
    image: info.image,
    priceRange: "$$$",
    openingHours: "Mo-Fr 09:00-18:00",
  };
}

/**
 * Generates JSON-LD breadcrumb list.
 */
export function breadcrumbStructuredData(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
