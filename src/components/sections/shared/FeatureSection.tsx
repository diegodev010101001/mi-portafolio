import { Reveal } from "@/components/client/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Feature, Heading } from "@/types";
import { FeatureGrid } from "./FeatureGrid";

interface FeatureSectionProps {
  heading: Heading;
  items: Feature[];
  columns?: 2 | 3 | 4;
  tone?: "default" | "alt";
  id?: string;
}

/** Sección estándar: encabezado + cuadrícula de tarjetas. */
export function FeatureSection({ heading, items, columns, tone, id }: FeatureSectionProps) {
  return (
    <Section tone={tone} id={id}>
      <Reveal>
        <SectionHeading heading={heading} />
      </Reveal>
      <FeatureGrid items={items} columns={columns} />
    </Section>
  );
}
