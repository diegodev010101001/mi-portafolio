import { Parallax } from "@/components/client/motion/Parallax";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { hero } from "@/data/home";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

const [mainProject, secondaryProject] = projects.filter((project) => project.featured);
const mobileProject: Project | undefined = projects.find((project) => project.mobileImage);

/**
 * Maquetas con capturas reales de proyectos, flotando con un parallax suave.
 *
 * Su alto depende de su ancho, así que el ancho se limita según el alto disponible para
 * que siempre queden completas en la primera pantalla:
 * - hero-split (dos columnas): alto de pantalla menos header y márgenes.
 * - hero-tall (tableta vertical alta, van bajo el texto): 43rem es lo que ocupan el header,
 *   el texto y los márgenes.
 */
export function HeroVisual() {
  return (
    <div
      role="group"
      aria-label={hero.visualLabel}
      className="mx-auto mt-6 mb-section w-full max-w-xl animate-fade-up [animation-delay:200ms] hero-tall:mt-10 hero-tall:mb-10 hero-tall:max-w-[min(36rem,calc((100svh-43rem)*1.5))] hero-split:my-0 hero-split:max-w-[calc((100svh-var(--spacing-header)-7rem)*1.5)]"
    >
      {/* El relleno inferior (espacio de la maqueta secundaria) es relativo a este ancho. */}
      <div className="relative pb-[18%]">
        <Parallax distance={-30} className="ml-auto w-[90%]">
          <BrowserFrame
            image={mainProject.image}
            domain={mainProject.domain}
            sizes="(min-width: 1024px) 520px, 90vw"
            preload
            className="animate-float"
          />
        </Parallax>
        {secondaryProject && (
          <Parallax distance={-70} className="absolute bottom-0 left-0 w-[58%]">
            <BrowserFrame
              image={secondaryProject.image}
              domain={secondaryProject.domain}
              sizes="(min-width: 1024px) 340px, 58vw"
              className="animate-float [animation-delay:-3s]"
            />
          </Parallax>
        )}
        {mobileProject?.mobileImage && (
          <Parallax distance={-50} className="absolute right-[4%] bottom-[4%] w-[22%]">
            <PhoneFrame image={mobileProject.mobileImage} sizes="140px" />
          </Parallax>
        )}
      </div>
    </div>
  );
}
