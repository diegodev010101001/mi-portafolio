import { Reveal } from "@/components/client/motion/Reveal";
import { TimelineProgress } from "@/components/client/motion/TimelineProgress";
import { FadeUp } from "@/components/ui/FadeUp";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/data/process";
import { ProcessStepItem } from "./ProcessStepItem";

/** Los primeros pasos se ven en la primera pantalla: entran con CSS en lugar de Motion. */
const FIRST_SCREEN_STEPS = 2;
const rowClasses = "relative flex gap-5 sm:gap-8";

export function ProcessTimeline() {
  return (
    <Section className="pt-6">
      <TimelineProgress className="relative mx-auto max-w-3xl">
        <ol className="space-y-10">
          {processSteps.map((step, index) => {
            const Wrapper = index < FIRST_SCREEN_STEPS ? FadeUp : Reveal;
            return (
              <li key={step.title}>
                <Wrapper className={rowClasses}>
                  <ProcessStepItem step={step} number={index + 1} />
                </Wrapper>
              </li>
            );
          })}
        </ol>
      </TimelineProgress>
    </Section>
  );
}
