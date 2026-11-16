import { Stage } from "@/components/scroll/Stage";
import { mainNav } from "@/config/navigation";
import { homeChapters } from "@/data/home";
import type { NavItem } from "@/types";
import { AboutChapter } from "./AboutChapter";
import type { ChapterSlot } from "./Chapter";
import { ChapterNav } from "./ChapterNav";
import { ProcessChapter } from "./ProcessChapter";
import { ProjectsChapter } from "./ProjectsChapter";
import { ServicesChapter } from "./ServicesChapter";
import { SolutionsChapter } from "./SolutionsChapter";

/** Un capítulo por cada ruta del menú principal; el orden lo define `mainNav`. */
const chapterByRoute: Record<string, (slot: ChapterSlot) => React.ReactNode> = {
  "/servicios": ServicesChapter,
  "/soluciones": SolutionsChapter,
  "/proceso": ProcessChapter,
  "/proyectos": ProjectsChapter,
  "/nosotros": AboutChapter,
};

const chapters: NavItem[] = mainNav.filter((item) => item.href in chapterByRoute);

/**
 * El inicio como una serie de pantallas: el escenario se queda fijo y cada capítulo resume
 * una ruta. Las transiciones varían (círculo, cortina, ventana y forma orgánica) y la
 * barra de navegación resalta el capítulo que se está viendo.
 */
export function HomeChapters() {
  return (
    <Stage
      label={homeChapters.label}
      intro="frame"
      className="[--stage-unit:80svh] lg:[--stage-unit:100svh]"
    >
      <ChapterNav items={chapters} />
      {chapters.map((item, index) => {
        const ChapterComponent = chapterByRoute[item.href];
        return <ChapterComponent key={item.href} index={index} item={item} />;
      })}
    </Stage>
  );
}
