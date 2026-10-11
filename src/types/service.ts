import type { Feature, PageSeo } from "./content";
import type { Faq } from "./faq";
import type { IconName } from "./icon";

export type ServiceSlug = "sitio-web-para-negocios" | "sitio-web-con-citas";

export interface ServiceFlowStep {
  title: string;
  description: string;
}

/** Recorrido paso a paso; `audience` distingue al cliente final del dueño del negocio. */
export interface ServiceFlow {
  audience: string;
  title: string;
  steps: ServiceFlowStep[];
}

export interface Service {
  slug: ServiceSlug;
  name: string;
  icon: IconName;
  summary: string;
  description: string;
  idealFor: string;
  /** Nota que aparece antes de la lista, p. ej. "Todo lo del sitio web para tu negocio, más:". */
  includesNote?: string;
  includes: Feature[];
  flows: ServiceFlow[];
  /** Slugs de `solutions.ts` para los que este servicio es ideal. */
  idealSolutions: string[];
  /** Slug de `projects.ts` que sirve de ejemplo real. */
  relatedProject?: string;
  faqs: Faq[];
  whatsappMessage: string;
  seo: PageSeo;
}

export interface ComparisonRow {
  feature: string;
  availability: Record<ServiceSlug, boolean>;
}

export interface CustomProject {
  icon: IconName;
  name: string;
  summary: string;
  description: string;
  examples: string[];
  whatsappLabel: string;
  whatsappMessage: string;
}
