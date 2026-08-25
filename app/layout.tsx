import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import { FlavorProvider } from "@/contexts/FlavorContext";

const display = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vees-v2.vercel.app"),
  title: "VEES — The Gods Ran On This",
  description:
    "Pocket-sized caffeine chews that kick in 5 minutes. Only ₹10. Three amazing flavors. No sloshy stomach, no ₹120 price tag.",
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
    title: "VEES — The Gods Ran On This",
    description:
      "Pocket-sized caffeine chews that kick in 5 minutes. Only ₹10. Three amazing flavors.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VEES Energy Chews — Mint Lime, Green Apple, Bold Cola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEES — The Gods Ran On This",
    description:
      "Pocket-sized caffeine chews that kick in 5 minutes. Only ₹10. Three amazing flavors.",
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
        className={`${display.variable} ${body.variable} font-sans overflow-x-hidden antialiased`}
      >
        <FlavorProvider>{children}</FlavorProvider>
      </body>
    </html>
  );
}
