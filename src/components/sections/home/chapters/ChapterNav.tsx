import { homeChapters } from "@/data/home";
import type { NavItem } from "@/types";

const pad = (value: number) => String(value).padStart(2, "0");

interface ChapterNavProps {
  items: NavItem[];
}

/**
 * Indicador de progreso por capítulos: contador "02 / 05" y un segmento por capítulo que
 * se llena con el scroll; al hacer clic lleva a ese capítulo. En celular es una fila bajo
 * el header; en pantallas grandes, una columna junto al borde derecho del contenido. Solo
 * existe mientras el escenario está fijado (`pinned:`); los estados los maneja
 * src/lib/motion/stage.ts.
 */
export function ChapterNav({ items }: ChapterNavProps) {
  return (
    <nav
      aria-label={homeChapters.navLabel}
      className="absolute inset-x-0 top-header z-20 hidden h-11 items-center gap-3 px-gutter pinned:flex lg:inset-x-auto lg:top-1/2 lg:right-[max(0.25rem,calc((100vw-var(--container-site))/2-3.5rem))] lg:h-auto lg:-translate-y-1/2 lg:flex-col lg:gap-2 lg:px-0"
    >
      <p className="font-mono text-xs text-ink-muted tabular-nums">
        <span className="sr-only">{homeChapters.chapter} </span>
        <span data-stage-counter className="text-ink">
          {pad(1)}
        </span>
        <span aria-hidden="true"> / </span>
        <span className="sr-only"> {homeChapters.of} </span>
        {pad(items.length)}
      </p>
      <ol className="flex flex-1 gap-1.5 lg:flex-none lg:flex-col lg:gap-0">
        {items.map((item, index) => (
          <li key={item.href} className="flex-1 lg:flex-none">
            <button
              type="button"
              data-stage-goto={index}
              aria-label={`${homeChapters.goTo} ${index + 1}: ${item.label}`}
              className="group/segment relative flex h-11 w-full items-center lg:w-11 lg:justify-center"
            >
              <span
                aria-hidden="true"
                className="relative block h-[3px] w-full overflow-hidden rounded-full bg-line-strong transition-colors group-hover/segment:bg-ink-muted lg:h-9 lg:w-[3px]"
              >
                {/* `--p` (0 a 1) lo anima el timeline del escenario. */}
                <span
                  data-stage-segment
                  className="absolute inset-0 origin-left [transform:scaleX(var(--p,0))] bg-brand-gradient lg:origin-top lg:[transform:scaleY(var(--p,0))]"
                />
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-full mr-1 hidden rounded-full border border-line-strong bg-bg-alt px-3 py-1 text-xs font-medium whitespace-nowrap text-ink opacity-0 transition-opacity duration-200 group-hover/segment:opacity-100 group-focus-visible/segment:opacity-100 lg:block"
              >
                {item.label}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
