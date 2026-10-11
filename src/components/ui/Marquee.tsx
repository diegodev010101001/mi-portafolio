import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
}

const groupClasses = "flex shrink-0 items-center gap-12 pr-12";

/**
 * Carrusel infinito solo con CSS: el contenido se duplica y la pista se desplaza la mitad.
 * Con `prefers-reduced-motion` se detiene y muestra la lista una sola vez.
 */
export function Marquee({ children }: MarqueeProps) {
  return (
    <div className="mask-fade-x overflow-hidden motion-reduce:[mask-image:none]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center">
        <div className={`${groupClasses} motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0`}>
          {children}
        </div>
        <div aria-hidden="true" className={`${groupClasses} motion-reduce:hidden`}>
          {children}
        </div>
      </div>
    </div>
  );
}
