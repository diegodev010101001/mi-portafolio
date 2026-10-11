import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Mismo valor que el token --color-bg de globals.css (el manifest no lee variables CSS).
const BACKGROUND_COLOR = "#06060f";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.owner,
    description: siteConfig.description,
    lang: siteConfig.locale,
    start_url: "/",
    display: "standalone",
    background_color: BACKGROUND_COLOR,
    theme_color: BACKGROUND_COLOR,
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
