"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useScrollMotion } from "@/hooks/useScrollMotion";
import { setupPageEffects } from "@/lib/motion/page-effects";
import { routeScroll, scrollToY } from "@/lib/smooth-scroll";

/**
 * Deja el scroll arriba al entrar a una ruta nueva. Va ANTES del contenido para que su
 * efecto corra primero: así las escenas de la página se crean ya con el scroll en cero.
 * Con atrás/adelante o con un ancla (#seccion) no hace nada: decide el navegador.
 */
function RouteScrollReset() {
  const handled = useRef(false);

  useLayoutEffect(() => {
    // El modo estricto de React repite los efectos en desarrollo: solo cuenta la primera vez.
    if (handled.current) return;
    handled.current = true;

    const isFirstLoad = !routeScroll.hasLoadedOnce;
    const isHistoryNavigation = routeScroll.isHistoryNavigation;
    routeScroll.hasLoadedOnce = true;
    routeScroll.isHistoryNavigation = false;

    if (isFirstLoad || isHistoryNavigation || window.location.hash) return;
    scrollToY(0, { immediate: true });
  }, []);

  return null;
}

/**
 * Envuelve cada página (desde `template.tsx`, que se vuelve a montar en cada navegación):
 * reinicia el scroll, activa los efectos declarativos (`data-reveal`, `data-parallax`…) y,
 * al navegar entre rutas, muestra una cortina que descubre la pantalla nueva.
 */
export function PageMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  // `false` en la primera carga: el HTML del servidor llega visible, sin cortina.
  const [isNavigation] = useState(() => routeScroll.hasLoadedOnce);

  useScrollMotion(scope, setupPageEffects);

  return (
    <>
      <RouteScrollReset />
      {isNavigation && <div aria-hidden="true" className="route-curtain" />}
      <div ref={scope}>{children}</div>
    </>
  );
}
