"use client";

import { useScroll } from "motion/react";
import * as m from "motion/react-m";
import { useRef, type ReactNode } from "react";

interface TimelineProgressProps {
  children: ReactNode;
  className?: string;
}

/** Envuelve una línea de tiempo y "dibuja" su línea vertical conforme avanza el scroll. */
export function TimelineProgress({ children, className }: TimelineProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.7", "end 0.6"] });

  return (
    <div ref={ref} className={className}>
      <div aria-hidden="true" className="absolute top-0 bottom-0 left-6 w-px -translate-x-1/2 bg-line">
        <m.div
          style={{ scaleY: scrollYProgress }}
          className="size-full origin-top bg-brand-gradient"
        />
      </div>
      {children}
    </div>
  );
}
