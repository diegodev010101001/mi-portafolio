import { Reveal } from "@/components/client/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { processContent, processSteps } from "@/data/process";

export function ProcessPreview() {
  return (
    <Section tone="alt">
      <Reveal>
        <SectionHeading heading={processContent.preview} />
      </Reveal>
      <Stagger className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <StaggerItem key={step.title} className="border-t border-line pt-5">
            <p className="font-display text-sm font-bold text-gradient">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-1.5 text-sm text-ink-dim">{step.summary}</p>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-10">
        <TextLink href="/proceso">{processContent.previewLink}</TextLink>
      </Reveal>
    </Section>
  );
}
