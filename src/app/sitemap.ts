import type { MetadataRoute } from "next";
import { mainNav, privacyLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...mainNav.map((item) => item.href),
    ...services.map((service) => `/servicios/${service.slug}`),
    "/contacto",
    privacyLink.href,
  ];

  return paths.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
