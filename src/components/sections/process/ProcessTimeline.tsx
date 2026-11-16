import { Section } from "@/components/ui/Section";
import { processSteps } from "@/data/process";
import { ProcessStepItem } from "./ProcessStepItem";

/**
 * Línea de tiempo vertical: la línea se dibuja con el scroll (`data-draw`) y cada paso se
 * activa cuando la línea llega a él (`data-activate`; ver src/lib/motion/page-effects.ts).
 * Sin JavaScript o con prefers-reduced-motion se ve completa y legible, sin estados.
 * En celular la línea va a la izquierda; desde tableta, al centro con los pasos alternados.
 */
export function ProcessTimeline() {
  return (
    <Section className="pt-6">
      <div data-draw-root className="relative mx-auto max-w-4xl">
        <div
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-6 w-px -translate-x-1/2 bg-line md:left-1/2"
        >
          <div data-draw="y" className="size-full origin-top bg-brand-gradient" />
        </div>
        <ol className="space-y-12 md:space-y-16">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              data-activate=""
              className="group/step relative grid grid-cols-[3rem_minmax(0,1fr)] items-start gap-x-5 md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:items-center md:gap-x-10"
            >
              <ProcessStepItem step={step} number={index + 1} reversed={index % 2 === 1} />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
