import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const bangla = Hind_Siliguri({ subsets: ["bengali"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-bangla" });

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon-v2-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-v2-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-v2-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon-v2.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bangla.variable}>
      <body>{children}</body>
    </html>
  );
}
