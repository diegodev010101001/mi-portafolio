import type { IconName } from "./icon";

export interface ProcessStep {
  icon: IconName;
  title: string;
  summary: string;
  description: string;
  /** Tiempo estimado. Si está vacío, no se muestra. */
  duration?: string;
}
