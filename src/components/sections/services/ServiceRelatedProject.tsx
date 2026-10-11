import { Reveal } from "@/components/client/motion/Reveal";
import { ProjectCard } from "@/components/sections/shared/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProject } from "@/data/projects";
import { servicesContent } from "@/data/services";
import type { Service } from "@/types";

interface ServiceRelatedProjectProps {
  service: Service;
}

export function ServiceRelatedProject({ service }: ServiceRelatedProjectProps) {
  const project = service.relatedProject ? getProject(service.relatedProject) : undefined;
  if (!project) return null;

  return (
    <Section tone="alt">
      <Reveal>
        <SectionHeading heading={servicesContent.detailHeadings.project} />
        <div className="max-w-2xl">
          <ProjectCard project={project} />
        </div>
      </Reveal>
    </Section>
  );
}
