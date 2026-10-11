"use client";

import type { Variants } from "motion/react";
import * as m from "motion/react-m";
import type { ReactNode } from "react";
import { revealTransition, revealViewport } from "./transitions";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: revealTransition },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

/** Contenedor que revela sus <StaggerItem> uno tras otro al entrar en pantalla. */
export function Stagger({ children, className }: StaggerProps) {
  return (
    <m.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <m.div data-reveal className={className} variants={item}>
      {children}
    </m.div>
  );
}
