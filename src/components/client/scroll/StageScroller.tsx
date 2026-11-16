"use client";

import { useRef, type ComponentProps } from "react";
import { useScrollMotion } from "@/hooks/useScrollMotion";
import { setupStage } from "@/lib/motion/stage";

/**
 * Parte cliente de un escenario: solo conecta la sección con su timeline. El contenido
 * (los paneles) llega como `children` ya renderizado en el servidor, así no viaja en el
 * JavaScript del navegador.
 */
export function StageScroller({ children, ...props }: ComponentProps<"section">) {
  const scope = useRef<HTMLElement>(null);
  useScrollMotion(scope, setupStage);

  return (
    <section ref={scope} {...props}>
      {children}
    </section>
  );
}
