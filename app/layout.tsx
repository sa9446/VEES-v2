import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vees-v2.vercel.app"),
  title: "VEES — Energy, Evolved",
  description:
    "The ₹10 Daily Caffeine Chew. Fast-acting, pocket-sized energy for gym-goers, students, and night-shift workers.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "VEES",
    title: "VEES — Energy, Evolved",
    description:
      "The ₹10 Daily Caffeine Chew. Fast-acting, pocket-sized energy for gym-goers, students, and night-shift workers.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VEES — Energy, Evolved. The ₹10 daily caffeine chew.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEES — Energy, Evolved",
    description:
      "The ₹10 Daily Caffeine Chew. Fast-acting, pocket-sized energy for gym-goers, students, and night-shift workers.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${display.variable} ${body.variable} font-sans bg-brand-dark text-white overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
