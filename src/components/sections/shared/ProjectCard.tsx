import { Badge } from "@/components/ui/Badge";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Card } from "@/components/ui/Card";
import { TextLink } from "@/components/ui/TextLink";
import { projectsContent } from "@/data/projects";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

/** Tarjeta resumida de un proyecto; el caso completo vive en /proyectos. */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card as="article" className="flex h-full flex-col p-4 sm:p-5">
      <BrowserFrame
        image={project.image}
        domain={project.domain}
        sizes="(min-width: 1024px) 540px, (min-width: 640px) 80vw, 92vw"
      />
      <div className="flex flex-1 flex-col px-2 pt-6 pb-2">
        <p className="text-xs font-semibold tracking-widest text-accent-light uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{project.name}</h3>
        <p className="mt-2 text-sm text-ink-dim">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Badge>{technology}</Badge>
            </li>
          ))}
        </ul>
        <TextLink href={`/proyectos#${project.slug}`} className="mt-auto pt-4">
          {projectsContent.labels.caseLink}
        </TextLink>
      </div>
    </Card>
  );
}
