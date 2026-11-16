import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
}

const groupClasses = "flex shrink-0 items-center gap-12 pr-12";

/** Copias del contenido: con cuatro, media pista siempre es más ancha que la pantalla. */
const COPIES = 4;

/**
 * Carrusel infinito solo con CSS: el contenido se repite y la pista se desplaza la mitad.
 * Con solo dos copias, en pantallas de más de ~1600 px quedaba un hueco al final de cada
 * vuelta; con cuatro (y el doble de duración, misma velocidad) no pasa ni a 2560 px.
 * Con `prefers-reduced-motion` se detiene y muestra la lista una sola vez.
 */
export function Marquee({ children }: MarqueeProps) {
  return (
    <div className="mask-fade-x overflow-hidden motion-reduce:[mask-image:none]">
      <div className="flex w-max animate-marquee [animation-duration:72s] hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center">
        <div className={`${groupClasses} motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:pr-0`}>
          {children}
        </div>
        {Array.from({ length: COPIES - 1 }, (_, index) => (
          <div key={index} aria-hidden="true" className={`${groupClasses} motion-reduce:hidden`}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
