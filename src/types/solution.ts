import type { IconName } from "./icon";
import type { ServiceSlug } from "./service";

export type SolutionCategoryId =
  | "alimentos"
  | "salud"
  | "belleza"
  | "comercio"
  | "profesionales"
  | "educacion";

export interface SolutionCategory {
  id: SolutionCategoryId;
  label: string;
}

export interface Solution {
  slug: string;
  name: string;
  category: SolutionCategoryId;
  icon: IconName;
  problem: string;
  features: string[];
  recommendedService: ServiceSlug;
  whatsappMessage: string;
}
