import { SplitWords } from "@/components/scroll/SplitWords";
import { Stage, StageFrame, StagePanel, type StageTone } from "@/components/scroll/Stage";
import { CheckList } from "@/components/ui/CheckList";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { TextLink } from "@/components/ui/TextLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getService } from "@/data/services";
import { solutionCategories, solutions, solutionsContent } from "@/data/solutions";
import type { Solution, SolutionCategoryId } from "@/types";

const { card: labels, stage } = solutionsContent;
const labelClasses = "text-xs font-semibold tracking-widest text-accent-light uppercase";
const pad = (value: number) => String(value).padStart(2, "0");

/** Cada categoría tiene su propio fondo: al cambiar de categoría cambia la "pantalla". */
const toneByCategory: Record<SolutionCategoryId, StageTone> = {
  alimentos: "blue",
  salud: "cyan",
  belleza: "violet",
  comercio: "indigo",
  profesionales: "aurora",
  educacion: "blue",
};

const categoryLabel = (id: SolutionCategoryId) =>
  solutionCategories.find((category) => category.id === id)?.label ?? "";

/**
 * Categorías como accesos directos: cada una lleva al primer giro de su grupo. Con el
 * escenario fijado quedan arriba y se resalta la categoría que se está viendo; sin fijar
 * son enlaces normales con ancla.
 */
function CategoryRail() {
  return (
    <nav
      aria-label={stage.categories}
      className="relative z-20 px-gutter pb-6 pinned:absolute pinned:inset-x-0 pinned:top-header pinned:pb-0"
    >
      <div className="mx-auto flex max-w-site items-center gap-4">
        <p className="hidden font-mono text-xs text-ink-muted tabular-nums pinned:block">
          <span className="sr-only">{stage.solution} </span>
          <span data-stage-counter className="text-ink">
            {pad(1)}
          </span>
          <span aria-hidden="true"> / </span>
          <span className="sr-only"> {stage.of} </span>
          {pad(solutions.length)}
        </p>
        <ul
          data-stage-rail
          className="relative flex min-w-0 flex-1 flex-wrap gap-2 pinned:flex-nowrap pinned:overflow-x-auto pinned:[mask-image:linear-gradient(90deg,transparent,#000_1rem,#000_calc(100%-1.5rem),transparent)] pinned:[scrollbar-width:none] pinned:[&::-webkit-scrollbar]:hidden"
        >
          {solutionCategories.map((category) => {
            const firstIndex = solutions.findIndex((solution) => solution.category === category.id);
            if (firstIndex === -1) return null;
            return (
              <li key={category.id} className="shrink-0">
                <a
                  href={`#${solutions[firstIndex].slug}`}
                  data-stage-goto={firstIndex}
                  data-stage-group={category.id}
                  className="inline-flex min-h-touch items-center rounded-full border border-line bg-bg/60 px-4 text-sm font-semibold whitespace-nowrap text-ink-dim transition duration-200 hover:border-line-accent hover:text-ink data-[active]:border-transparent data-[active]:bg-brand-gradient data-[active]:text-on-accent"
                >
                  {category.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div aria-hidden="true" className="mx-auto mt-2 hidden h-px max-w-site bg-line pinned:block">
        <div data-stage-progress className="h-full origin-left bg-brand-gradient" />
      </div>
    </nav>
  );
}

interface SolutionSceneProps {
  solution: Solution;
  index: number;
  /** Primer giro de su categoría: entra con el cambio de pantalla grande. */
  opensCategory: boolean;
}

function SolutionScene({ solution, index, opensCategory }: SolutionSceneProps) {
  const service = getService(solution.recommendedService);
  const titleId = `solucion-${solution.slug}`;

  return (
    <StagePanel
      id={solution.slug}
      index={index}
      tone={toneByCategory[solution.category]}
      labelledBy={titleId}
      group={solution.category}
      transition={opensCategory ? "circle" : "slide"}
      origin="18 46"
      wipe={opensCategory}
      className="border-t border-line pinned:border-0"
    >
      <span
        aria-hidden="true"
        data-stage-parallax="-6"
        className="pointer-events-none absolute right-[-6vmin] bottom-[-6vmin] -z-10 text-ink opacity-[0.045]"
      >
        <Icon name={solution.icon} className="size-[58vmin]" />
      </span>
      <StageFrame className="grid min-h-[78svh] grid-cols-[minmax(0,1fr)] content-center gap-y-6 py-14 pinned:min-h-0 pinned:pt-[calc(var(--spacing-header)+4.25rem)] pinned:pb-[max(1.25rem,env(safe-area-inset-bottom))] tight:gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-x-16">
        <div>
          <p data-stage-fade className={labelClasses}>
            {categoryLabel(solution.category)}
            <span className="ml-2 font-mono tracking-normal text-ink-muted">
              {pad(index + 1)} / {pad(solutions.length)}
            </span>
          </p>
          <div className="mt-4 flex items-center gap-4 tight:mt-3">
            <span data-stage-pop>
              <IconTile name={solution.icon} className="size-14 lg:size-16" />
            </span>
            <h2
              id={titleId}
              className="font-display text-chapter font-bold tracking-tight text-balance text-ink"
            >
              <SplitWords text={solution.name} marker="stage-word" />
            </h2>
          </div>
          <h3 data-stage-fade className={`${labelClasses} mt-7 tight:mt-4`}>
            {labels.problemLabel}
          </h3>
          <p data-stage-fade className="mt-2 max-w-lg text-pretty text-ink-dim lg:text-lg">
            {solution.problem}
          </p>
        </div>
        <div
          data-stage-fade
          className="rounded-card border border-line bg-bg-alt/75 p-5 sm:p-7 tight:p-4"
        >
          <h3 className={labelClasses}>{labels.featuresLabel}</h3>
          <CheckList items={solution.features} className="mt-3 lg:text-base" />
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 tight:mt-4 tight:pt-3">
            <WhatsAppButton label={labels.quote} message={solution.whatsappMessage} />
            {service && (
              <p className="text-sm text-ink-muted tight:hidden">
                {labels.serviceLabel}:{" "}
                <TextLink href={`/servicios/${service.slug}`} className="min-h-0">
                  {service.name}
                </TextLink>
              </p>
            )}
          </div>
        </div>
      </StageFrame>
    </StagePanel>
  );
}

/**
 * Escenario de /soluciones: una pantalla fijada por giro. Entre giros de la misma categoría
 * la escena entra con un barrido lateral; al cambiar de categoría, con un círculo que crece
 * desde el ícono y un fondo distinto. Los enlaces con ancla (/soluciones#pizzeria) llevan
 * a su escena.
 */
export function SolutionsStage() {
  return (
    <Stage
      label={stage.label}
      intro="frame"
      className="[--stage-unit:70svh] lg:[--stage-unit:85svh]"
    >
      <CategoryRail />
      {solutions.map((solution, index) => (
        <SolutionScene
          key={solution.slug}
          solution={solution}
          index={index}
          opensCategory={solutions[index - 1]?.category !== solution.category}
        />
      ))}
    </Stage>
  );
}
