import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Velora Interiors | Premium Interior Design Studio",
  description:
    "Premium interior design studio specializing in residential and commercial spaces. We transform environments into inspiring, functional works of art.",
  metadataBase: new URL("https://velorainteriors.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Velora Interiors",
    title: "Velora Interiors | Premium Interior Design Studio",
    description:
      "Premium interior design studio specializing in residential and commercial spaces. We transform environments into inspiring, functional works of art.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velora Interiors | Premium Interior Design Studio",
    description:
      "Premium interior design studio specializing in residential and commercial spaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body antialiased">
        {children}
      </body>
    </html>
  );
}
