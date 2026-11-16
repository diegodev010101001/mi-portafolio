import type { ReactNode } from "react";
import { SplitWords } from "@/components/scroll/SplitWords";
import { StageFrame, StagePanel, type StageTone } from "@/components/scroll/Stage";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { homeChapters } from "@/data/home";
import type { StageTransition } from "@/lib/motion/stage-shapes";
import type { Heading, NavItem } from "@/types";

const pad = (value: number) => String(value).padStart(2, "0");

/** Lo que cada capítulo recibe del escenario. */
export interface ChapterSlot {
  index: number;
  /** Ruta que resume el capítulo (etiqueta y destino del botón "Ver más"). */
  item: NavItem;
}

interface ChapterProps extends ChapterSlot {
  heading: Heading;
  tone: StageTone;
  /** Resumen visual del capítulo (tarjetas, pasos, maquetas…). */
  children: ReactNode;
  transition?: StageTransition;
  origin?: string;
  hold?: number;
}

/**
 * Pantalla de un capítulo del inicio: número y nombre de la ruta, título, resumen visual y
 * botón "Ver más". En celular va en una columna; en pantallas grandes, texto a la izquierda
 * y resumen a la derecha. Fijado mide 100svh, así que el contenido se compacta con las
 * variantes `tight:` y `low:` cuando hay poco alto. En una columna, título, resumen y botón
 * van juntos y centrados; si no caben, el resumen es lo que cede espacio (minmax(0,auto)).
 */
export function Chapter({
  index,
  item,
  heading,
  tone,
  children,
  transition,
  origin,
  hold,
}: ChapterProps) {
  const titleId = `capitulo-${item.href.replace("/", "")}`;

  return (
    <StagePanel
      index={index}
      tone={tone}
      labelledBy={titleId}
      transition={transition}
      origin={origin}
      hold={hold}
      navHref={item.href}
    >
      <span
        aria-hidden="true"
        data-stage-parallax="-8"
        className="pointer-events-none absolute right-[-0.04em] bottom-[-0.12em] -z-10 font-display text-[min(52vw,58svh)] leading-none font-bold text-outline select-none lg:right-auto lg:bottom-[-0.16em] lg:left-[1vw]"
      >
        {pad(index + 1)}
      </span>
      <StageFrame className="grid min-h-svh grid-cols-[minmax(0,1fr)] grid-rows-[auto_minmax(0,auto)_auto] gap-y-[clamp(0.875rem,2.6svh,1.75rem)] [align-content:safe_center] pt-[calc(var(--spacing-header)+1.5rem)] pb-[max(1.25rem,env(safe-area-inset-bottom))] pinned:min-h-0 pinned:max-lg:pt-[calc(var(--spacing-header)+3.25rem)] sm:gap-y-[clamp(1.25rem,3.6svh,2.75rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-14 lg:gap-y-8 lg:pt-header lg:pb-8 xl:gap-x-20">
        <header className="lg:col-start-1 lg:row-start-2">
          <p
            data-stage-fade
            className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold tracking-[0.18em] text-accent-light uppercase"
          >
            <span className="font-mono tracking-normal text-cyan">{pad(index + 1)}</span>
            <span aria-hidden="true" className="h-px w-6 bg-accent-light" />
            {item.label}
            {heading.eyebrow !== item.label && (
              <span className="text-ink-muted">· {heading.eyebrow}</span>
            )}
          </p>
          <h2
            id={titleId}
            className="mt-3 font-display text-chapter font-bold tracking-tight text-balance text-ink lg:mt-5"
          >
            <SplitWords text={heading.title} highlight={heading.highlight} marker="stage-word" />
          </h2>
          {heading.description && (
            <p
              data-stage-fade
              className="mt-3 max-w-md text-pretty text-ink-dim tight:hidden lg:mt-5 lg:text-lg"
            >
              {heading.description}
            </p>
          )}
        </header>
        {/* min-w-0: las cintas deslizables (w-max) no deben ensanchar la columna. */}
        <div className="flex min-h-0 min-w-0 flex-col justify-center lg:col-start-2 lg:row-span-4 lg:row-start-1">
          {children}
        </div>
        <div data-stage-fade className="lg:col-start-1 lg:row-start-3">
          <Button href={item.href} size="lg" className="tight:py-2.5 tight:text-sm">
            <span>
              {homeChapters.more}
              <span className="sr-only">
                {" "}
                {homeChapters.moreAbout} {item.label}
              </span>
            </span>
            <Icon name="arrow-right" className="size-4" />
          </Button>
        </div>
      </StageFrame>
    </StagePanel>
  );
}
