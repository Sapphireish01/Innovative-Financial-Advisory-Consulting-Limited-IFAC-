import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.innovativefinancialadvisory.com.ng"),
  title: {
    default: "IFAC - Innovative Financial Advisory",
    template: "%s | IFAC",
  },
  description:
    "IFAC provides financial advisory, investment, and strategic consulting services in Lagos, Nigeria.",
  keywords: [
    "financial advisory",
    "investment",
    "consulting",
    "Lagos",
    "Nigeria",
    "IFAC",
    "wealth management",
    "strategic finance",
    "business consulting",
    "financial planning",
    "corporate finance",
    "risk management",
    "asset management",
    "financial analysis",
    "investment strategies",
    "market research",
    "financial solutions",
    "client advisory",
    "financial growth",
    "economic consulting",
    "financial services Nigeria",
    "Loan advisory",
    "Debt restructuring",
  ],
  openGraph: {
    title: "IFAC - Innovative Financial Advisory",
    description: "Your trusted financial advisory partner.",
    url: "https://www.innovativefinancialadvisory.com.ng/",
    siteName: "IFAC",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "IFAC Financial Advisory",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "IFAC - Innovative Financial Advisory",
    description: "Your trusted financial advisory partner.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16" },
      { url: "/icons/favicon.ico" },
    ],
    apple: { url: "/icons/apple-touch-icon.png" },
    shortcut: { url: "/icons/favicon-32x32.png" },
    other: [
      { rel: "android-chrome-192x192", url: "/icons/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/icons/android-chrome-512x512.png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.innovativefinancialadvisory.com.ng",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="raleway.className">
      <body className="antialiased">{children}</body>
    </html>
  );
}
