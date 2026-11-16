import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { industriesPreview } from "@/data/home";
import { solutions } from "@/data/solutions";
import type { Solution } from "@/types";
import { Chapter, type ChapterSlot } from "./Chapter";

const ROW_SIZE = 4;
const rows: Solution[][] = [];
for (let start = 0; start < solutions.length; start += ROW_SIZE) {
  rows.push(solutions.slice(start, start + ROW_SIZE));
}

/**
 * Capítulo 2: los giros como cintas de píldoras. Fijado, cada cinta se desliza con el scroll
 * (alternando el sentido); sin fijar, las píldoras simplemente se acomodan en varias líneas.
 */
export function SolutionsChapter(slot: ChapterSlot) {
  return (
    <Chapter
      {...slot}
      heading={industriesPreview.heading}
      tone="violet"
      transition="circle"
      origin="76 58"
      hold={1.5}
    >
      {/* En una columna, la cinta va de borde a borde de la pantalla (-mx-gutter). */}
      <div className="space-y-3 pinned:overflow-clip pinned:mask-fade-x pinned:max-lg:-mx-gutter lg:space-y-4">
        {rows.map((row, index) => (
          <div key={row[0].slug}>
            <ul
              data-stage-track={index % 2 === 1 ? "reverse" : ""}
              className="flex flex-wrap gap-3 pinned:w-max pinned:flex-nowrap pinned:px-[12%] lg:gap-4"
            >
              {row.map((solution) => (
                <li key={solution.slug} data-stage-pop>
                  <Link
                    href={`/soluciones#${solution.slug}`}
                    className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-line-strong bg-bg-alt/80 px-5 text-sm font-medium whitespace-nowrap text-ink transition duration-200 hover:border-line-accent hover:bg-surface-strong lg:min-h-14 lg:px-6 lg:text-base"
                  >
                    <Icon name={solution.icon} className="size-4 text-accent-light lg:size-5" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Chapter>
  );
}
