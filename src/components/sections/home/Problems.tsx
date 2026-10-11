import { Reveal } from "@/components/client/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/data/home";

export function Problems() {
  return (
    <Section tone="alt">
      <Reveal>
        <SectionHeading heading={problems.heading} />
      </Reveal>
      <Stagger className="grid gap-5 md:grid-cols-3">
        {problems.items.map((problem) => (
          <StaggerItem key={problem.title} className="h-full">
            <Card className="flex h-full flex-col">
              <IconTile name={problem.icon} />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{problem.title}</h3>
              <p className="mt-2 text-ink-dim">{problem.description}</p>
              <div className="mt-auto pt-6">
                <div className="rounded-field border border-line-accent bg-accent-soft p-4">
                  <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-cyan uppercase">
                    <Icon name="check" className="size-4" />
                    {problems.solutionLabel}
                  </p>
                  <p className="mt-1.5 text-sm text-ink">{problem.solution}</p>
                </div>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
