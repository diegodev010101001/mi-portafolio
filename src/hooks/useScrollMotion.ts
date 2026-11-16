import { useCallback, useState, type RefObject } from "react";
import { gsap, MEDIA, useGSAP, type MediaConditions } from "@/lib/gsap";

export interface MotionContext<T extends HTMLElement = HTMLElement> {
  /** Elemento raíz de la sección. */
  root: T;
  /** `querySelectorAll` limitado a la sección, devuelto como arreglo. */
  q: <E extends Element = HTMLElement>(selector: string) => E[];
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  /** Hay mouse o trackpad: se permiten efectos que siguen al cursor. */
  canHover: boolean;
  /** Revierte todo y vuelve a ejecutar `setup` (p. ej. si cambió el alto de la ventana). */
  rerun: () => void;
}

export type MotionSetup<T extends HTMLElement = HTMLElement> = (
  context: MotionContext<T>,
) => void | (() => void);

/**
 * Ciclo de vida común de las animaciones de scroll.
 *
 * - `useGSAP`: todo lo que se crea dentro (tweens, timelines, ScrollTriggers) se revierte
 *   al desmontar o al cambiar de ruta, sin fugas ni duplicados en el modo estricto de React.
 * - `gsap.matchMedia`: `setup` se vuelve a ejecutar al cruzar un corte de pantalla, y NO se
 *   ejecuta con `prefers-reduced-motion` (queda la versión estática que define el CSS).
 * - Si `setup` devuelve una función, se llama al revertir (listeners, atributos).
 *
 * `setup` debe ser una función estable (definida fuera del componente).
 */
export function useScrollMotion<T extends HTMLElement>(
  scope: RefObject<T | null>,
  setup: MotionSetup<T>,
): void {
  const [version, setVersion] = useState(0);
  const rerun = useCallback(() => setVersion((current) => current + 1), []);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add(MEDIA, (context) => {
        const { isDesktop, isTablet, isMobile, canHover, reduceMotion } =
          context.conditions as MediaConditions;
        if (reduceMotion) return;

        const q = <E extends Element = HTMLElement>(selector: string) =>
          Array.from(root.querySelectorAll<E>(selector));

        return setup({ root, q, isDesktop, isTablet, isMobile, canHover, rerun });
      });
    },
    { scope, dependencies: [version, setup, rerun], revertOnUpdate: true },
  );
}
