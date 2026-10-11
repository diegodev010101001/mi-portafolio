import { Reveal } from "@/components/client/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesContent } from "@/data/services";
import { ComparisonCards } from "./ComparisonCards";
import { ComparisonTable } from "./ComparisonTable";

export function ServiceComparison() {
  return (
    <Section tone="alt">
      <Reveal>
        <SectionHeading heading={servicesContent.comparison} />
        <ComparisonTable />
        <ComparisonCards />
      </Reveal>
    </Section>
  );
}
