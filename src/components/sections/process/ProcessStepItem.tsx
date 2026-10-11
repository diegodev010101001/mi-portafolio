import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { processContent } from "@/data/process";
import type { ProcessStep } from "@/types";

interface ProcessStepItemProps {
  step: ProcessStep;
  number: number;
}

export function ProcessStepItem({ step, number }: ProcessStepItemProps) {
  return (
    <>
      <span
        aria-hidden="true"
        className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-line-accent bg-bg-alt text-accent-light"
      >
        <Icon name={step.icon} className="size-5" />
      </span>
      <div className="pt-1">
        <p className="text-xs font-semibold tracking-widest text-accent-light uppercase">
          {processContent.stepLabel} {number}
        </p>
        <h2 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">{step.title}</h2>
        <p className="mt-2 text-ink-dim">{step.description}</p>
        {/* El tiempo es opcional: solo aparece si `duration` tiene texto en los datos. */}
        {step.duration && (
          <Badge tone="accent" className="mt-3">
            <Icon name="clock" className="size-3.5" />
            {step.duration}
          </Badge>
        )}
      </div>
    </>
  );
}
