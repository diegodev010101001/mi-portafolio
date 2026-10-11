import { Reveal } from "@/components/client/motion/Reveal";
import { SolutionPills } from "@/components/sections/shared/SolutionPills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { servicesContent } from "@/data/services";
import { solutions } from "@/data/solutions";
import type { Service } from "@/types";

interface ServiceIndustriesProps {
  service: Service;
}

export function ServiceIndustries({ service }: ServiceIndustriesProps) {
  const idealSolutions = solutions.filter((solution) => service.idealSolutions.includes(solution.slug));

  return (
    <Section>
      <Reveal>
        <SectionHeading
          heading={{ ...servicesContent.detailHeadings.ideal, description: service.idealFor }}
        />
        <SolutionPills solutions={idealSolutions} />
        <TextLink href="/soluciones" className="mt-6">
          {servicesContent.labels.seeSolutions}
        </TextLink>
      </Reveal>
    </Section>
  );
}
