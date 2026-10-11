import { Reveal } from "@/components/client/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { ProjectCard } from "@/components/sections/shared/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { projects, projectsContent } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjects() {
  return (
    <Section>
      <Reveal>
        <SectionHeading heading={projectsContent.featured} />
      </Reveal>
      <Stagger className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <StaggerItem key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-8">
        <TextLink href="/proyectos">{projectsContent.featuredLink}</TextLink>
      </Reveal>
    </Section>
  );
}
