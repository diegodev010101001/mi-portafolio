import type { ReactNode } from "react";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { hero } from "@/data/home";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const [mainProject, frontProject, backProject] = projects.filter((project) => project.featured);

interface LayerProps {
  children: ReactNode;
  /** Píxeles que sube la capa mientras el hero sale de pantalla: más = más cerca. */
  drift: number;
  /** Píxeles que la capa sigue al cursor (solo con mouse). */
  depth: number;
  /** Capa de fondo: en celular se queda quieta para mover menos elementos. */
  desktopOnly?: boolean;
  className: string;
}

/** Una capa de profundidad: por fuera la mueve el scroll y por dentro, el cursor. */
function Layer({ children, drift, depth, desktopOnly = false, className }: LayerProps) {
  return (
    <div
      data-drift={drift}
      data-desktop-motion={desktopOnly ? "" : undefined}
      className={cn("absolute", className)}
    >
      <div data-depth={depth}>{children}</div>
    </div>
  );
}

/**
 * Maquetas con capturas reales de proyectos en tres capas de profundidad: cada una se mueve
 * a distinta velocidad con el scroll (y con el cursor en computadoras). Sin JavaScript se
 * ven igual, solo quietas.
 *
 * El bloque mide 3:2 y su ancho se limita según el alto disponible, para que siempre quede
 * completo en la primera pantalla:
 * - hero-split (dos columnas): alto de pantalla menos header y márgenes.
 * - hero-tall (tableta vertical alta, va bajo el texto): 43rem es lo que ocupan el header,
 *   el texto y los márgenes.
 */
export function HeroVisual() {
  return (
    <div
      role="group"
      aria-label={hero.visualLabel}
      data-pointer-scene
      className="mx-auto mt-6 mb-8 w-full max-w-xl animate-fade-up [animation-delay:200ms] hero-tall:mt-10 hero-tall:mb-10 hero-tall:max-w-[min(36rem,calc((100svh-43rem)*1.5))] hero-split:my-0 hero-split:max-w-[calc((100svh-var(--spacing-header)-7rem)*1.5)]"
    >
      <div className="relative aspect-[3/2]">
        {backProject && (
          <Layer drift={-36} depth={10} desktopOnly className="top-0 right-0 w-[60%] opacity-75">
            <BrowserFrame
              image={backProject.image}
              domain={backProject.domain}
              sizes="(min-width: 1024px) 360px, 60vw"
              loading="eager"
            />
          </Layer>
        )}
        <Layer drift={-90} depth={18} className="top-[13%] left-0 w-[80%]">
          <BrowserFrame
            image={mainProject.image}
            domain={mainProject.domain}
            sizes="(min-width: 1024px) 480px, 80vw"
            preload
            className="animate-float"
          />
        </Layer>
        {frontProject && (
          <Layer drift={-150} depth={30} className="right-[3%] bottom-0 w-[50%]">
            <BrowserFrame
              image={frontProject.image}
              domain={frontProject.domain}
              sizes="(min-width: 1024px) 300px, 50vw"
              loading="eager"
              className="animate-float [animation-delay:-3s]"
            />
          </Layer>
        )}
      </div>
    </div>
  );
}
