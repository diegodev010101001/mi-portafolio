import { processContent, processSteps } from "@/data/process";
import { Chapter, type ChapterSlot } from "./Chapter";

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * Capítulo 3: los seis pasos. Fijado, se encienden uno por uno conforme avanza el scroll
 * (`data-stage-step` recibe `data-active`): su línea se llena y el texto pasa de un tono
 * tenue (legible) a su color normal. Sin fijar, se ven todos encendidos.
 */
export function ProcessChapter(slot: ChapterSlot) {
  return (
    <Chapter
      {...slot}
      heading={processContent.preview}
      tone="cyan"
      transition="curtain"
      hold={1.6}
    >
      <ol className="grid grid-cols-2 gap-x-4 gap-y-4 tight:gap-y-2.5 lg:gap-x-8 lg:gap-y-7 low:lg:gap-y-5">
        {processSteps.map((step, index) => (
          <li key={step.title} data-stage-pop>
            <div
              data-stage-step
              className="group/step relative pt-3 lg:pt-4"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-line-strong">
                <span className="block h-full origin-left bg-brand-gradient transition-transform duration-500 ease-out-expo pinned:scale-x-0 pinned:group-data-[active]/step:scale-x-100" />
              </span>
              <p className="font-display text-sm font-bold text-gradient">{pad(index + 1)}</p>
              <h3 className="mt-1 font-display text-[0.9375rem] leading-snug font-semibold text-ink transition-colors duration-500 pinned:text-ink-muted pinned:group-data-[active]/step:text-ink tight:text-sm lg:mt-2 lg:text-lg">
                {step.title}
              </h3>
              <p className="mt-1.5 hidden text-sm text-ink-dim transition-colors duration-500 pinned:text-ink-muted pinned:group-data-[active]/step:text-ink-dim sm:block tight:hidden low:hidden">
                {step.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Chapter>
  );
}
