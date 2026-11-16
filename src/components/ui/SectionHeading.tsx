import { SplitWords } from "@/components/scroll/SplitWords";
import { cn } from "@/lib/utils";
import type { Heading } from "@/types";

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
    <div className={cn("mb-9 max-w-3xl md:mb-14", centered && "mx-auto text-center", className)}>
      <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-accent-light uppercase">
        <span aria-hidden="true" className="h-px w-6 bg-accent-light" />
        {heading.eyebrow}
      </p>
      {/* El h1 queda en la primera pantalla: sus palabras suben con CSS. Las del h2, con el scroll. */}
      <Title
        data-words={Title === "h2" ? "" : undefined}
        className={cn(
          "font-display font-bold tracking-tight text-balance text-ink",
          Title === "h1"
            ? "words-rise text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl lg:text-5xl",
        )}
      >
        <SplitWords text={heading.title} highlight={heading.highlight} />
      </Title>
      {heading.description && (
        <p className={cn("mt-5 text-lg text-pretty text-ink-dim", centered && "mx-auto max-w-2xl")}>
          {heading.description}
        </p>
      )}
    </div>
  );
}
