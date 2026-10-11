import { cn } from "@/lib/utils";
import type { Heading } from "@/types";
import { HighlightedTitle } from "./GradientText";

interface SectionHeadingProps {
  heading: Heading;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  heading,
  as: Title = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("mb-12 max-w-3xl md:mb-16", centered && "mx-auto text-center", className)}>
      <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-accent-light uppercase">
        <span aria-hidden="true" className="h-px w-6 bg-accent-light" />
        {heading.eyebrow}
      </p>
      <Title
        className={cn(
          "font-display font-bold tracking-tight text-balance text-ink",
          Title === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-5xl",
        )}
      >
        <HighlightedTitle title={heading.title} highlight={heading.highlight} />
      </Title>
      {heading.description && (
        <p className={cn("mt-5 text-lg text-pretty text-ink-dim", centered && "mx-auto max-w-2xl")}>
          {heading.description}
        </p>
      )}
    </div>
  );
}
