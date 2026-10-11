import { Reveal } from "@/components/client/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { TechnologyLogo } from "@/components/sections/shared/TechnologyLogo";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technologies, technologiesContent } from "@/data/technologies";

export function Technologies() {
  return (
    <Section id="tecnologias">
      <Reveal>
        <SectionHeading heading={technologiesContent.section} />
      </Reveal>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => (
          <StaggerItem key={technology.id} className="h-full">
            <Card className="flex h-full items-center gap-4 p-5 sm:p-5">
              <TechnologyLogo logo={technology.logo} />
              <div>
                <h3 className="font-display font-semibold text-ink">{technology.name}</h3>
                <p className="mt-0.5 text-sm text-ink-dim">{technology.benefit}</p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
