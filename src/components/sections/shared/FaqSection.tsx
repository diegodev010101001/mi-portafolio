import { Reveal } from "@/components/client/motion/Reveal";
import { FaqList } from "@/components/ui/FaqList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Faq, Heading } from "@/types";

interface FaqSectionProps {
  heading: Heading;
  items: Faq[];
  tone?: "default" | "alt";
}

export function FaqSection({ heading, items, tone }: FaqSectionProps) {
  return (
    <Section tone={tone}>
      <Reveal>
        <SectionHeading heading={heading} align="center" />
        <FaqList items={items} />
      </Reveal>
    </Section>
  );
}
