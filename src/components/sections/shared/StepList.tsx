interface Step {
  title: string;
  description: string;
}

interface StepListProps {
  steps: Step[];
  /** Nivel del título de cada paso, según el encabezado que lo contiene. */
  titleAs?: "h3" | "h4";
}

/** Lista numerada de pasos cortos. */
export function StepList({ steps, titleAs: Title = "h3" }: StepListProps) {
  return (
    <ol className="space-y-5">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-accent bg-accent-soft font-display text-sm font-bold text-accent-light"
          >
            {index + 1}
          </span>
          <div>
            <Title className="font-display font-semibold text-ink">{step.title}</Title>
            <p className="mt-1 text-sm text-ink-dim">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
