"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/** Barra superior que se llena con el avance del scroll de toda la página. */
export function ScrollProgressBar() {
  const bar = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!bar.current) return;
    const setScale = gsap.quickSetter(bar.current, "scaleX");
    const sync = (self: ScrollTrigger) => setScale(self.progress);

    ScrollTrigger.create({ start: 0, end: "max", onUpdate: sync, onRefresh: sync });
  });

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      {/* La escala inicial va en `transform` (no en la utilidad scale-x-0) porque GSAP anima `transform`. */}
      <div
        ref={bar}
        className="h-full origin-left bg-brand-gradient"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
