import { Reveal } from "@/components/client/motion/Reveal";
import { TimelineProgress } from "@/components/client/motion/TimelineProgress";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { processContent, processSteps } from "@/data/process";

export function ProcessTimeline() {
  return (
    <Section className="pt-6">
      <TimelineProgress className="relative mx-auto max-w-3xl">
        <ol className="space-y-10">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal className="relative flex gap-5 sm:gap-8">
                <span
                  aria-hidden="true"
                  className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-line-accent bg-bg-alt text-accent-light"
                >
                  <Icon name={step.icon} className="size-5" />
                </span>
                <div className="pt-1">
                  <p className="text-xs font-semibold tracking-widest text-accent-light uppercase">
                    {processContent.stepLabel} {index + 1}
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-ink-dim">{step.description}</p>
                  {step.duration && (
                    <Badge tone="accent" className="mt-3">
                      <Icon name="clock" className="size-3.5" />
                      {step.duration}
                    </Badge>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </TimelineProgress>
    </Section>
  );
}
