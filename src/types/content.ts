import type { IconName } from "./icon";

/** Encabezado de sección: etiqueta + título con una parte en degradado + descripción. */
export interface Heading {
  eyebrow: string;
  title: string;
  /** Fragmento exacto de `title` que se pinta con el degradado. */
  highlight?: string;
  description?: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface CtaContent {
  title: string;
  highlight?: string;
  description: string;
  primary: Cta;
  whatsappLabel: string;
  whatsappMessage: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PageSeo {
  title: string;
  description: string;
}
