import type { ReactNode } from "react";
import { ProjectLinkButton } from "@/components/sections/shared/ProjectLinkButton";
import { SplitWords } from "@/components/scroll/SplitWords";
import { Stage, StageFrame, StagePanel, type StageTone } from "@/components/scroll/Stage";
import { Badge } from "@/components/ui/Badge";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { CheckList } from "@/components/ui/CheckList";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { projects, projectsContent } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const labels = projectsContent.labels;
const labelClasses = "text-xs font-semibold tracking-widest text-accent-light uppercase";
const tones: StageTone[] = ["indigo", "cyan", "violet"];

interface StepProps {
  label: string;
  children: ReactNode;
}

/**
 * Bloque de texto sincronizado con el scroll. Con la escena fijada, los pasos comparten
 * el mismo espacio y solo se ve el actual (`data-current`); sin fijar, van uno tras otro.
 */
function Step({ label, children }: StepProps) {
  return (
    <div
      data-stage-step
      className="transition duration-500 ease-out-expo pinned:pointer-events-none pinned:translate-y-3 pinned:opacity-0 pinned:[grid-area:1/1] pinned:data-[current]:translate-y-0 pinned:data-[current]:opacity-100"
    >
      <h3 className={labelClasses}>{label}</h3>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

interface ProjectSceneProps {
  project: Project;
  index: number;
}

/**
 * Un proyecto como escena: la maqueta de navegador entra con parallax y se queda fija un
 * momento mientras la descripción, el reto, lo que hice y las tecnologías aparecen en orden.
 */
function ProjectScene({ project, index }: ProjectSceneProps) {
  const titleId = `proyecto-${project.slug}`;
  const reversed = index % 2 === 1;

  return (
    <Stage
      id={project.slug}
      label={`${labels.scene}: ${project.name}`}
      intro="frame"
      // El margen negativo compensa scroll-padding-top: un enlace con ancla deja la escena ya fijada.
      className="scroll-mt-[calc(-1*(var(--spacing-header)+1rem))] [--stage-unit:105svh] lg:[--stage-unit:120svh]"
    >
      <StagePanel index={0} tone={tones[index % tones.length]} labelledBy={titleId} hold={1.25}>
        <StageFrame className="grid min-h-svh grid-cols-[minmax(0,1fr)] content-center gap-y-7 pt-[calc(var(--spacing-header)+1.25rem)] pb-12 pinned:min-h-0 pinned:pb-[max(1.25rem,env(safe-area-inset-bottom))] pinned:max-lg:content-start tight:gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-x-16">
          <div
            data-stage-enter={reversed ? "right" : "left"}
            className={cn(
              "relative mx-auto w-full max-w-[min(36rem,calc(34svh*1.8))] tight:max-w-[calc(27svh*1.8)] lg:max-w-none",
              reversed && "lg:order-2",
            )}
          >
            <BrowserFrame
              image={project.image}
              domain={project.domain}
              sizes="(min-width: 1024px) 560px, 92vw"
              preload={index === 0}
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
            <p data-stage-fade className={labelClasses}>
              {project.category}
            </p>
            <h2
              id={titleId}
              className="mt-2 font-display text-chapter font-bold tracking-tight text-balance text-ink"
            >
              <SplitWords text={project.name} marker="stage-word" />
            </h2>
            <p data-stage-fade className="mt-2 text-sm text-ink-muted tight:hidden">
              {project.businessType}
            </p>
            {/* Línea que se llena mientras avanzan los pasos. */}
            <div aria-hidden="true" className="mt-5 hidden h-px bg-line pinned:block tight:mt-3">
              <div data-stage-line="x" className="h-full origin-left bg-brand-gradient" />
            </div>
            <div data-stage-fade className="mt-6 grid gap-6 pinned:mt-5 pinned:gap-0 tight:mt-3">
              <Step label={labels.summary}>
                <p className="text-pretty text-ink-dim">{project.summary}</p>
              </Step>
              <Step label={labels.challenge}>
                <p className="text-pretty text-ink-dim">{project.challenge}</p>
              </Step>
              <Step label={labels.solution}>
                <CheckList items={project.solution} />
              </Step>
              <Step label={labels.technologies}>
                <ul className="flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <Badge>{technology}</Badge>
                    </li>
                  ))}
                </ul>
              </Step>
            </div>
            <div data-stage-fade className="mt-7 tight:mt-4">
              <ProjectLinkButton project={project} />
            </div>
          </div>
        </StageFrame>
      </StagePanel>
    </Stage>
  );
}

/** /proyectos: una escena fijada por proyecto. */
export function ProjectScenes() {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectScene key={project.slug} project={project} index={index} />
      ))}
    </>
  );
}
