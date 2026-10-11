import { cn } from "@/lib/utils";

const blob = "absolute rounded-full blur-3xl animate-aurora";

interface HeroBackdropProps {
  /** `soft` reduce la intensidad para los encabezados de páginas interiores. */
  intensity?: "full" | "soft";
}

/** Fondo tipo aurora (manchas del degradado en movimiento lento) con una cuadrícula tenue. */
export function HeroBackdrop({ intensity = "full" }: HeroBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        intensity === "soft" && "opacity-60",
      )}
    >
      <div className={cn(blob, "-top-1/4 -left-[10%] size-[min(44rem,70vw)] bg-accent/35")} />
      <div
        className={cn(
          blob,
          "top-1/3 -right-[12%] size-[min(36rem,60vw)] bg-violet/25 [animation-delay:-5s] [animation-direction:reverse]",
        )}
      />
      <div className={cn(blob, "bottom-0 left-1/3 size-[min(20rem,40vw)] bg-cyan/15 [animation-delay:-9s]")} />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-bg" />
    </div>
  );
}
