import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
}

/**
 * Entrada con CSS (sin JavaScript) para contenido que se ve en la primera pantalla.
 * Bajo el pliegue se usa <Reveal>, que anima al hacer scroll.
 */
export function FadeUp({ children, className }: FadeUpProps) {
  return <div className={cn("animate-fade-up [animation-delay:120ms]", className)}>{children}</div>;
}
