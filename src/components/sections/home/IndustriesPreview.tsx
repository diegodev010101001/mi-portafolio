import { Reveal } from "@/components/client/motion/Reveal";
import { SolutionPills } from "@/components/sections/shared/SolutionPills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { industriesPreview } from "@/data/home";
import { solutions } from "@/data/solutions";

export function IndustriesPreview() {
  return (
    <Section tone="alt">
      <Reveal>
        <SectionHeading heading={industriesPreview.heading} align="center" />
        <SolutionPills solutions={solutions} className="mx-auto max-w-4xl justify-center" />
        <div className="mt-8 text-center">
          <TextLink href="/soluciones">{industriesPreview.link}</TextLink>
        </div>
      </Reveal>
    </Section>
  );
}
