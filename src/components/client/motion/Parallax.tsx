"use client";

import { useReducedMotion, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";

const SCROLL_RANGE = 600;

interface ParallaxProps {
  children: ReactNode;
  /** Píxeles que se desplaza el elemento mientras se recorre el primer tramo de la página. */
  distance: number;
  className?: string;
}

/** Desplazamiento suave ligado al scroll. Sin JavaScript el contenido se ve igual, solo quieto. */
export function Parallax({ children, distance, className }: ParallaxProps) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, SCROLL_RANGE], [0, reduceMotion ? 0 : distance]);

  return (
    <m.div style={{ y }} className={className}>
      {children}
    </m.div>
  );
}
