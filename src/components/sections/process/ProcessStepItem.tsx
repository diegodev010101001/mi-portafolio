import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { processContent } from "@/data/process";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/types";

interface ProcessStepItemProps {
  step: ProcessStep;
  number: number;
  /** Desde tableta, los pasos alternan de lado respecto a la línea central. */
  reversed: boolean;
}

/**
 * Contenido de un paso. Su <li> (grupo `step`) lleva `data-activate`: "pending" mientras el
 * scroll no ha llegado (colores más tenues, pero con contraste suficiente para leerse) y
 * "on" cuando se activa (el nodo se enciende y el texto toma su color normal).
 */
export function ProcessStepItem({ step, number, reversed }: ProcessStepItemProps) {
  return (
    <>
      <span
        aria-hidden="true"
        className="relative z-10 col-start-1 row-start-1 flex size-12 shrink-0 items-center justify-center rounded-full border border-line-accent bg-bg-alt text-accent-light transition duration-500 ease-out-expo group-data-[activate=on]/step:scale-110 group-data-[activate=on]/step:border-transparent group-data-[activate=on]/step:bg-brand-gradient group-data-[activate=on]/step:text-on-accent group-data-[activate=on]/step:shadow-glow md:col-start-2"
      >
        <Icon name={step.icon} className="size-5" />
      </span>
      <div
        className={cn(
          "col-start-2 row-start-1 pt-1 transition duration-500 ease-out-expo group-data-[activate=pending]/step:translate-y-3 md:pt-0",
          reversed ? "md:col-start-3" : "md:col-start-1 md:text-right",
        )}
      >
        <p className="text-xs font-semibold tracking-widest text-accent-light uppercase">
          {processContent.stepLabel} {number}
        </p>
        <h2 className="mt-1 font-display text-xl font-semibold text-balance text-ink transition-colors duration-500 group-data-[activate=pending]/step:text-ink-dim sm:text-2xl">
          {step.title}
        </h2>
        <p className="mt-2 text-pretty text-ink-dim transition-colors duration-500 group-data-[activate=pending]/step:text-ink-muted">
          {step.description}
        </p>
        {/* El tiempo es opcional: solo aparece si `duration` tiene texto en los datos. */}
        {step.duration && (
          <Badge tone="accent" className="mt-3">
            <Icon name="clock" className="size-3.5" />
            {step.duration}
          </Badge>
        )}
      </div>
      {/* Número grande del lado contrario, con parallax (solo desde tableta). */}
      <span
        aria-hidden="true"
        data-parallax="20"
        data-desktop-motion
        className={cn(
          "row-start-1 hidden font-display text-[7.5rem] leading-none font-bold text-outline transition-opacity duration-500 select-none group-data-[activate=pending]/step:opacity-40 md:block",
          reversed ? "md:col-start-1 md:text-right" : "md:col-start-3",
        )}
      >
        {String(number).padStart(2, "0")}
      </span>
    </>
  );
}
