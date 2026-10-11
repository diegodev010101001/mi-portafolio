import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  /** Degradado en movimiento con destello (solo CSS). Pensado para el título del hero. */
  live?: boolean;
}

export function GradientText({ children, live = false }: GradientTextProps) {
  return <span className={live ? "text-gradient-live" : "text-gradient"}>{children}</span>;
}

interface HighlightedTitleProps {
  title: string;
  /** Fragmento de `title` que se pinta con el degradado. */
  highlight?: string;
  /** Anima el degradado del fragmento resaltado. */
  live?: boolean;
}

export function HighlightedTitle({ title, highlight, live }: HighlightedTitleProps) {
  const start = highlight ? title.indexOf(highlight) : -1;
  if (!highlight || start === -1) return <>{title}</>;

  return (
    <>
      {title.slice(0, start)}
      <GradientText live={live}>{highlight}</GradientText>
      {title.slice(start + highlight.length)}
    </>
  );
}
