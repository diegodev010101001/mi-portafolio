import type { ReactNode } from "react";

/** Cómo entra el elemento; ver `revealFrom` en src/lib/motion/page-effects.ts. */
type RevealKind = "up" | "left" | "right" | "scale" | "fade" | "clip";

interface RevealProps {
  children: ReactNode;
  kind?: RevealKind;
  className?: string;
}

/**
 * Aparece al entrar en pantalla. Solo marca el HTML: la animación la activa <PageMotion>,
 * así que sin JavaScript (o con prefers-reduced-motion) el contenido se ve tal cual.
 */
export function Reveal({ children, kind = "up", className }: RevealProps) {
  return (
    <div data-reveal={kind} className={className}>
      {children}
    </div>
  );
}

/** Contenedor cuyos hijos directos aparecen uno tras otro al entrar en pantalla. */
export function Stagger({ children, kind = "up", className }: RevealProps) {
  return (
    <div data-stagger={kind} className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className }: Omit<RevealProps, "kind">) {
  return <div className={className}>{children}</div>;
}
