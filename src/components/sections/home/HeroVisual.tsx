import { Parallax } from "@/components/client/motion/Parallax";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { hero } from "@/data/home";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

const [mainProject, secondaryProject] = projects.filter((project) => project.featured);
const mobileProject: Project | undefined = projects.find((project) => project.mobileImage);

/** Maquetas con capturas reales de proyectos, flotando con un parallax suave. */
export function HeroVisual() {
  return (
    <div
      role="group"
      aria-label={hero.visualLabel}
      className="relative mx-auto mt-6 mb-section w-full max-w-xl animate-fade-up pb-[18%] [animation-delay:200ms] lg:my-0 lg:max-w-none"
    >
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
  );
}
