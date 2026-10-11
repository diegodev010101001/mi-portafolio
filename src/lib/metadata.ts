import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { PageSeo } from "@/types";

interface PageMetadataInput extends PageSeo {
  /** Ruta de la página, p. ej. "/servicios". */
  path: string;
  /** Usa el título tal cual, sin el sufijo con la marca (para el inicio). */
  absoluteTitle?: boolean;
}

/** Metadata única por página: título, descripción, canonical, Open Graph y Twitter. */
export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.ogLocale,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
