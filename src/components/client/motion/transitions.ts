import type { Transition } from "motion/react";

/** Misma curva que el token `--ease-out-expo` de globals.css. */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const revealTransition: Transition = { duration: 0.7, ease: EASE_OUT_EXPO };

export const revealViewport = { once: true, margin: "-60px" } as const;
