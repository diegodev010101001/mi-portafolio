import { cn } from "@/lib/utils";

interface CodeTagProps {
  primary: string;
  secondary: string;
  className?: string;
}

/**
 * Insignia con estilo de código: `< primary · secondary />` y un cursor de bloque.
 * Solo CSS. Los signos y el cursor son decorativos (aria-hidden): un lector de pantalla
 * lee únicamente "primary · secondary". Si no cabe en una línea, se parte entre los dos
 * grupos (nunca a media palabra) y "/>" con el cursor quedan al final. En pantallas muy
 * angostas los grupos van en columna para que la etiqueta se ajuste al texto.
 */
export function CodeTag({ primary, secondary, className }: CodeTagProps) {
  return (
    <p
      className={cn(
        "inline-flex flex-wrap items-center gap-x-[1ch] gap-y-0.5 rounded-tag max-[389px]:flex-col max-[389px]:items-start border border-line-accent bg-bg-alt/80 px-3 py-2 font-mono text-[0.6875rem] font-medium transition duration-300 hover:border-accent hover:shadow-glow min-[420px]:text-xs sm:px-3.5 sm:text-[0.8125rem]",
        className,
      )}
    >
      <span className="whitespace-nowrap">
        <span aria-hidden="true" className="text-accent">
          &lt;{" "}
        </span>
        <span className="text-ink">{primary}</span> <span className="text-ink-muted">·</span>
      </span>{" "}
      <span className="inline-flex items-center whitespace-nowrap">
        <span className="text-cyan">{secondary}</span>
        <span aria-hidden="true" className="text-accent">
          &nbsp;/&gt;
        </span>
        <span
          aria-hidden="true"
          className="ml-[0.5ch] inline-block h-[1.15em] w-[0.6em] animate-blink bg-violet motion-reduce:animate-none"
        />
      </span>
    </p>
  );
}
