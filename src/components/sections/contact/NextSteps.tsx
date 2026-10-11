import { Reveal } from "@/components/client/motion/Reveal";
import { StepList } from "@/components/sections/shared/StepList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactNextSteps } from "@/data/contact";

export function NextSteps() {
  return (
    <Section tone="alt">
      <Reveal>
        <SectionHeading heading={contactNextSteps.heading} />
        <div className="max-w-2xl">
          <StepList steps={contactNextSteps.steps} />
        </div>
      </Reveal>
    </Section>
  );
}
