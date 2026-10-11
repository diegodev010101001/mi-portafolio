import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  /** `alt` alterna el fondo para separar bloques consecutivos. */
  tone?: "default" | "alt";
  className?: string;
}

export function Section({ children, id, tone = "default", className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-section", tone === "alt" && "border-y border-line bg-bg-alt", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
