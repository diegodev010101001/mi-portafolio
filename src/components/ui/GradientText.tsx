import type { ReactNode } from "react";

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="text-gradient">{children}</span>;
}

interface HighlightedTitleProps {
  title: string;
  /** Fragmento de `title` que se pinta con el degradado. */
  highlight?: string;
}

export function HighlightedTitle({ title, highlight }: HighlightedTitleProps) {
  const start = highlight ? title.indexOf(highlight) : -1;
  if (!highlight || start === -1) return <>{title}</>;

  return (
    <>
      {title.slice(0, start)}
      <GradientText>{highlight}</GradientText>
      {title.slice(start + highlight.length)}
    </>
  );
}
