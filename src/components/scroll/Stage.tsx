import type { ReactNode } from "react";
import { StageScroller } from "@/components/client/scroll/StageScroller";
import type { StageTransition } from "@/lib/motion/stage-shapes";
import { cn } from "@/lib/utils";

/** Paleta del fondo de un panel; ver `[data-tone]` en globals.css. */
export type StageTone = "blue" | "violet" | "cyan" | "indigo" | "aurora";

interface StageProps {
  children: ReactNode;
  /** Nombre de la sección para lectores de pantalla. */
  label: string;
  id?: string;
  /** El primer panel llega como una tarjeta que crece hasta llenar la pantalla. */
  intro?: "frame";
  /** Alto mínimo de pantalla (px) para fijar los paneles; con menos, se apilan. */
  minHeight?: number;
  /** Para definir `--stage-unit`: cuánto scroll dura cada panel. */
  className?: string;
}

/**
 * Escenario de "pantallas": una sección que se queda fija mientras sus paneles cambian
 * con el scroll. Por defecto (sin JavaScript, con prefers-reduced-motion o en ventanas
 * bajitas) los paneles son secciones normales, una debajo de otra; el modo fijado lo
 * activa src/lib/motion/stage.ts y se estila con la variante `pinned:`.
 */
export function Stage({ children, label, id, intro, minHeight, className }: StageProps) {
  return (
    <StageScroller
      id={id}
      aria-label={label}
      data-stage-intro={intro}
      data-stage-min-height={minHeight}
      className={cn(
        "relative bg-bg [--stage-unit:85svh] lg:[--stage-unit:100svh] pinned:h-[calc(100lvh+var(--stage-units,1)*var(--stage-unit))]",
        className,
      )}
    >
      {/* Fijo con 100lvh: el fondo cubre también cuando el celular oculta sus barras. */}
      <div
        data-stage-pin
        className="relative pinned:sticky pinned:top-0 pinned:h-lvh pinned:overflow-clip"
      >
        {children}
      </div>
    </StageScroller>
  );
}

interface StagePanelProps {
  children: ReactNode;
  index: number;
  tone: StageTone;
  /** `id` del título del panel, para nombrarlo ante lectores de pantalla. */
  labelledBy: string;
  id?: string;
  /** Forma con la que este panel entra sobre el anterior. */
  transition?: StageTransition;
  /** Punto "x y" (en %) desde donde crece la forma. */
  origin?: string;
  /** Cuánto dura el panel, en unidades de scroll (1 por defecto). */
  hold?: number;
  /** Agrupa paneles bajo un mismo botón de la navegación (categorías). */
  group?: string;
  /** Ruta que este panel resume: la barra de navegación la resalta mientras se ve. */
  navHref?: string;
  /** Borde en degradado que va por delante de la transición. */
  wipe?: boolean;
  className?: string;
}

/** Una pantalla del escenario, con su fondo. */
export function StagePanel({
  children,
  index,
  tone,
  labelledBy,
  id,
  transition,
  origin,
  hold,
  group,
  navHref,
  wipe = true,
  className,
}: StagePanelProps) {
  return (
    <>
      {wipe && index > 0 && (
        <div
          aria-hidden="true"
          data-stage-wipe={index}
          className="absolute inset-0 hidden bg-brand-gradient pinned:block"
        />
      )}
      <article
        id={id}
        aria-labelledby={labelledBy}
        data-stage-panel
        data-stage-transition={transition}
        data-stage-origin={origin}
        data-stage-hold={hold}
        data-stage-group={group}
        data-nav-href={navHref}
        data-tone={tone}
        className={cn("relative isolate overflow-clip pinned:absolute pinned:inset-0", className)}
      >
        <div aria-hidden="true" data-stage-bg className="absolute inset-0 -z-10">
          <div data-stage-zoom className="panel-bg absolute inset-0" />
          <div className="absolute inset-0 bg-grid" />
        </div>
        {children}
      </article>
    </>
  );
}

interface StageFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Área de contenido de un panel: al fijarse mide exactamente 100svh (lo que siempre se ve)
 * y es el contenedor "chapter" que usan las variantes `tight:` y `low:` para compactar.
 */
export function StageFrame({ children, className }: StageFrameProps) {
  return (
    // El contenedor no lleva relleno: así las variantes miden la pantalla completa.
    <div className="[container-name:chapter] pinned:h-svh pinned:[container-type:size]">
      <div className={cn("mx-auto h-full w-full max-w-site px-gutter", className)}>{children}</div>
    </div>
  );
}
