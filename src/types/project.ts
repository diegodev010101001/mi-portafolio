import type { ImageAsset } from "./content";
import type { ServiceSlug } from "./service";

export interface Project {
  slug: string;
  name: string;
  businessType: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string[];
  technologies: string[];
  image: ImageAsset;
  /** Captura en celular. Si no existe, no se muestra la maqueta de teléfono. */
  mobileImage?: ImageAsset;
  domain?: string;
  /** Dirección del sitio. Sin ella, el botón aparece deshabilitado con `pendingLabel`. */
  url?: string;
  /** Texto del botón que abre el sitio; por defecto, "Visitar el sitio". */
  visitLabel?: string;
  /** Texto del botón deshabilitado mientras el sitio no tiene `url` (p. ej. "Próximamente"). */
  pendingLabel?: string;
  relatedService?: ServiceSlug;
  featured: boolean;
}
