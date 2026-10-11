import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { PageSeo } from "@/types";

interface PageMetadataInput extends PageSeo {
  /** Ruta de la página, p. ej. "/servicios". */
  path: string;
  /** Usa el título tal cual, sin el sufijo con la marca (para el inicio). */
  absoluteTitle?: boolean;
}

/** Imagen generada por src/app/opengraph-image.tsx; se declara aquí para que todas las páginas la hereden. */
const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: ${siteConfig.tagline}`,
};

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
      images: [socialImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [socialImage] },
  };
}
