import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Heading } from "@/types";
import { HeroBackdrop } from "./HeroBackdrop";

interface PageHeroProps {
  heading: Heading;
  /** Botones u otro contenido bajo la descripción. */
  children?: ReactNode;
}

/** Encabezado de las páginas interiores. Queda arriba del pliegue: se anima solo con CSS. */
export function PageHero({ heading, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-header">
      <HeroBackdrop intensity="soft" />
      <Container className="animate-fade-up pt-16 pb-12 md:pt-24 md:pb-16">
        <SectionHeading heading={heading} as="h1" className="mb-0 md:mb-0" />
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}
