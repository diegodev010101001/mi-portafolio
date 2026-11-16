import type Lenis from "lenis";

/**
 * Acceso a la instancia única de Lenis (la crea <SmoothScroll> en el layout). Con
 * `prefers-reduced-motion` no existe, y todo cae al scroll nativo del navegador.
 */
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null): void {
  lenis = instance;
}

interface ScrollToOptions {
  /** Salta sin animación (cambios de ruta, foco con teclado). */
  immediate?: boolean;
}

/** Lleva la página a una posición vertical, en píxeles. */
export function scrollToY(top: number, { immediate = false }: ScrollToOptions = {}): void {
  if (lenis) {
    lenis.scrollTo(top, { immediate, force: true });
    return;
  }
  window.scrollTo({ top, behavior: "instant" });
}

/** Detiene el scroll de la página (menú móvil abierto). */
export function lockScroll(): void {
  lenis?.stop();
}

export function unlockScroll(): void {
  lenis?.start();
}

/**
 * Estado de la navegación entre rutas. Al ir a una ruta nueva la página empieza arriba;
 * con atrás/adelante se respeta la posición que restaura el navegador.
 */
export const routeScroll = {
  /** `false` en la primera carga: el navegador decide la posición (p. ej. al recargar). */
  hasLoadedOnce: false,
  isHistoryNavigation: false,
};
