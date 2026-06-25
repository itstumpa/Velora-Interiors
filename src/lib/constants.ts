// ──────────────────────────────────────────────
// Velora Interiors — Site-wide Constants
// ──────────────────────────────────────────────

export const SITE_CONFIG = {
  name: "Velora Interiors",
  tagline: "Where Vision Meets Space",
  description:
    "Premium interior design studio specializing in residential and commercial spaces. We transform environments into inspiring, functional works of art.",
  url: "https://velorainteriors.com",
  locale: "en_US",
  themeColor: "#C9B79C",
  backgroundColor: "#FAF7F2",
} as const;

export const CONTACT_INFO = {
  phone: "+1 (555) 123-4567",
  email: "hello@velorainteriors.com",
  address: "123 Design District, Suite 200, New York, NY 10001",
  social: {
    instagram: "https://instagram.com/velorainteriors",
    pinterest: "https://pinterest.com/velorainteriors",
    houzz: "https://houzz.com/pro/velorainteriors",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#projects" },
  { label: "Process", href: "/#process" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
] as const;

export const COLORS = {
  primary: "#C9B79C",
  primaryLight: "#DFD0B8",
  primaryDark: "#A89276",
  dark: "#1F1F1F",
  darkSecondary: "#2D2D2D",
  background: "#FAF7F2",
  backgroundAlt: "#F5F0E8",
  accent: "#8D6E63",
  accentLight: "#A88B7E",
  textPrimary: "#1F1F1F",
  textSecondary: "#6B6B6B",
  textLight: "#FAF7F2",
  white: "#FFFFFF",
  border: "#E8E0D5",
  error: "#D32F2F",
  success: "#2E7D32",
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
