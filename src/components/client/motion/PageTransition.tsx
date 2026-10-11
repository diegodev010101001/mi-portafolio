"use client";

import * as m from "motion/react-m";
import { useEffect, useState, type ReactNode } from "react";
import { EASE_OUT_EXPO } from "./transitions";

/**
 * `false` durante la primera carga (servidor e hidratación) para que el HTML inicial
 * llegue visible; pasa a `true` al montarse, así solo se anima al navegar entre páginas.
 */
let hasLoadedOnce = false;

export function PageTransition({ children }: { children: ReactNode }) {
  const [shouldAnimate] = useState(() => hasLoadedOnce);

  useEffect(() => {
    hasLoadedOnce = true;
  }, []);

  return (
    <m.div
      initial={shouldAnimate ? { opacity: 0, y: 14 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
    >
      {children}
    </m.div>
  );
}
