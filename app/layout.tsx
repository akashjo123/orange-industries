import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Orange Industries — Integrated GCC Manufacturing & Architectural Fabrication",
  description:
    "Orange Industries engineers, manufactures and installs branded environments, architectural fabrication, signage and custom project solutions across Bahrain, Saudi Arabia, and the GCC region.",
  keywords: [
    "Orange Industries Bahrain",
    "Architectural Fabrication GCC",
    "Metal Fabrication Bahrain",
    "Wayfinding Signage Saudi Arabia",
    "Branded Environments",
    "CNC Laser Cutting Bahrain",
    "VIP Event Pavilions GCC",
  ],
  openGraph: {
    title: "Orange Industries — Manufacturing environments. Delivering experiences.",
    description:
      "One accountable partner for engineered fabrication, branded environments, landmark signage, and custom project manufacturing across Bahrain & Saudi Arabia.",
    url: "https://orangeindustries.me",
    siteName: "Orange Industries Bahrain",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#FAF7F2] text-stone-800 antialiased selection:bg-brand-orange selection:text-white font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
