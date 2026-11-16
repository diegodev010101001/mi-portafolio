import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { TextLink } from "@/components/ui/TextLink";
import { projects, projectsContent } from "@/data/projects";
import { Chapter, type ChapterSlot } from "./Chapter";

const featuredProjects = projects.filter((project) => project.featured);

/**
 * Capítulo 4: los proyectos como una tira de maquetas. Fijada, la tira se desliza en
 * horizontal con el scroll; sin fijar, es una cuadrícula normal.
 */
export function ProjectsChapter(slot: ChapterSlot) {
  return (
    <Chapter
      {...slot}
      heading={projectsContent.featured}
      tone="indigo"
      transition="window"
      hold={1.7}
    >
      {/* En una columna, la tira va de borde a borde de la pantalla (-mx-gutter). */}
      <div className="pinned:overflow-clip pinned:mask-fade-x pinned:max-lg:-mx-gutter">
        <ul
          data-stage-track=""
          className="grid grid-cols-[minmax(0,1fr)] gap-5 sm:grid-cols-[repeat(2,minmax(0,1fr))] xl:grid-cols-[repeat(3,minmax(0,1fr))] pinned:flex pinned:w-max pinned:flex-nowrap pinned:px-[10%]"
        >
          {featuredProjects.map((project) => (
            <li
              key={project.slug}
              data-stage-pop
              className="min-w-0 pinned:w-[min(72vw,21rem)] pinned:lg:w-[25rem]"
            >
              <article className="h-full rounded-card border border-line bg-bg-alt/80 p-3 sm:p-4">
                <BrowserFrame
                  image={project.image}
                  domain={project.domain}
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 72vw"
                />
                <div className="px-1.5 pt-4 tight:pt-3">
                  <p className="text-[0.6875rem] font-semibold tracking-widest text-accent-light uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-ink-dim tight:hidden low:hidden">
                    {project.summary}
                  </p>
                  <TextLink href={`/proyectos#${project.slug}`} className="mt-1">
                    <span>
                      {projectsContent.labels.caseLink}
                      <span className="sr-only">: {project.name}</span>
                    </span>
                  </TextLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Chapter>
  );
}
