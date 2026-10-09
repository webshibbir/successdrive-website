import { Inter, Inter_Tight } from "next/font/google";

// Marketing-site type: Inter for text, Inter Tight for headings (the pairing
// most Framer SaaS templates use). Bangla falls back to Hind Siliguri.
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
export const landingFonts = `${inter.variable} ${interTight.variable}`;
