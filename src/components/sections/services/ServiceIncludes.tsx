import { Reveal } from "@/components/client/motion/Reveal";
import { FeatureGrid } from "@/components/sections/shared/FeatureGrid";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesContent } from "@/data/services";
import type { Service } from "@/types";

interface ServiceIncludesProps {
  service: Service;
}

export function ServiceIncludes({ service }: ServiceIncludesProps) {
  const heading = { ...servicesContent.detailHeadings.includes, description: service.includesNote };

  return (
    <Section className="pt-6">
      <Reveal>
        <SectionHeading heading={heading} />
      </Reveal>
      <FeatureGrid items={service.includes} columns={service.includes.length % 3 === 0 ? 3 : 4} />
    </Section>
  );
}
