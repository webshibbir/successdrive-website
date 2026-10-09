import type { NextConfig } from "next";

// Plain static website (HTML/CSS/JS in out/) for shared hosting like GreenGeeks.
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default config;
