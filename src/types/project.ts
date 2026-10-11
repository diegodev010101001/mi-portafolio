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
  url?: string;
  relatedService: ServiceSlug;
  featured: boolean;
}
