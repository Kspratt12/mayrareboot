import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FDFBF8",
};

export const metadata: Metadata = {
  title: {
    default: "Skin Reboot Spa Clinic | Premium Skincare in Cary, NC",
    template: "%s | Skin Reboot Spa Clinic",
  },
  description:
    "Cary's premier skin clinic offering corrective facials, body treatments, waxing, eye enhancements, and curated skincare products. Internationally trained estheticians delivering visible results in a relaxing, luxury setting.",
  keywords: [
    "esthetician Cary NC",
    "facial Cary NC",
    "professional facials Cary NC",
    "waxing Cary NC",
    "skin care Cary NC",
    "body treatments Cary NC",
    "lash lift Cary NC",
    "brow lamination Cary NC",
    "corrective skincare Cary NC",
    "holistic facial Cary NC",
    "buccal massage Cary NC",
  ],
  openGraph: {
    title: "Skin Reboot Spa Clinic | Premium Skincare in Cary, NC",
    description:
      "Corrective facials, body treatments, waxing, and eye enhancements. Internationally trained estheticians in Cary, NC.",
    url: "https://www.skinrebootbymayra.com",
    siteName: "Skin Reboot Spa Clinic",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
