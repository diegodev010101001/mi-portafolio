import { Reveal } from "@/components/client/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Icon } from "@/components/ui/Icon";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { projectsContent } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const labels = projectsContent.labels;
const labelClasses = "text-xs font-semibold tracking-widest text-accent-light uppercase";

interface ProjectCaseProps {
  project: Project;
  /** Invierte las columnas para alternar el ritmo entre casos. */
  reversed: boolean;
}

export function ProjectCase({ project, reversed }: ProjectCaseProps) {
  return (
    <Reveal>
      <article id={project.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={cn("relative", reversed && "lg:order-2")}>
          <BrowserFrame
            image={project.image}
            domain={project.domain}
            sizes="(min-width: 1024px) 560px, 92vw"
          />
          {project.mobileImage && (
            <PhoneFrame
              image={project.mobileImage}
              sizes="140px"
              className="absolute -right-2 -bottom-8 w-[24%]"
            />
          )}
        </div>
        <div>
          <p className={labelClasses}>{project.category}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {project.name}
          </h2>
          <p className="mt-2 text-sm text-ink-muted">{project.businessType}</p>
          <h3 className={cn(labelClasses, "mt-7")}>{labels.challenge}</h3>
          <p className="mt-2 text-ink-dim">{project.challenge}</p>
          <h3 className={cn(labelClasses, "mt-6")}>{labels.solution}</h3>
          <CheckList items={project.solution} className="mt-3" />
          <h3 className={cn(labelClasses, "mt-6")}>{labels.technologies}</h3>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <li key={technology}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>
          {project.url && (
            <Button href={project.url} external variant="secondary" className="mt-8">
              {labels.visit}
              <Icon name="arrow-up-right" className="size-4" />
            </Button>
          )}
        </div>
      </article>
    </Reveal>
  );
}
