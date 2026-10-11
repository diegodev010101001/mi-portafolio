"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { revealTransition, revealViewport } from "./transitions";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/** Aparece (fade + desplazamiento) al entrar en pantalla. Solo para contenido bajo el pliegue. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <m.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </m.div>
  );
}
