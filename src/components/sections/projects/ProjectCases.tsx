import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import { ProjectCase } from "./ProjectCase";

export function ProjectCases() {
  return (
    <Section className="pt-6">
      <div className="space-y-24 lg:space-y-32">
        {projects.map((project, index) => (
          <ProjectCase
            key={project.slug}
            project={project}
            reversed={index % 2 === 1}
            firstScreen={index === 0}
          />
        ))}
      </div>
    </Section>
  );
}
