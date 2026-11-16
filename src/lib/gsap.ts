import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registro único de plugins: importa siempre GSAP desde este archivo.
gsap.registerPlugin(useGSAP, ScrollTrigger);

if (typeof window !== "undefined") {
  // En celulares la barra del navegador cambia el alto de la ventana al hacer scroll. Las
  // escenas se miden en svh/lvh (que no cambian), así que no hace falta recalcular ahí.
  ScrollTrigger.config({ ignoreMobileResize: true });

  // Solo en desarrollo: permite revisar desde la consola que no se acumulen instancias al
  // navegar (ScrollTrigger.getAll().length). En producción este bloque se elimina.
  if (process.env.NODE_ENV === "development") {
    Object.assign(window, { ScrollTrigger });
  }
}

/**
 * Condiciones compartidas por todas las animaciones (gsap.matchMedia). Cuando alguna
 * cambia (p. ej. al girar el teléfono o cruzar un corte de ancho), cada sección revierte
 * sus animaciones y las vuelve a crear con la configuración que corresponde.
 */
export const MEDIA = {
  isDesktop: "(min-width: 1024px)",
  isTablet: "(min-width: 640px) and (max-width: 1023.98px)",
  isMobile: "(max-width: 639.98px)",
  canHover: "(hover: hover) and (pointer: fine)",
  reduceMotion: "(prefers-reduced-motion: reduce)",
} as const;

export type MediaConditions = Record<keyof typeof MEDIA, boolean>;

export { gsap, ScrollTrigger, useGSAP };
