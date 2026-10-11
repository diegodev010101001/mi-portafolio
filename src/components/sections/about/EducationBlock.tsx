import Image from "next/image";
import { Reveal } from "@/components/client/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { educationHeading } from "@/data/about";
import { education } from "@/data/technologies";

export function EducationBlock() {
  return (
    <Section tone="alt">
      <Reveal>
        <SectionHeading heading={educationHeading} />
        <Card interactive={false} className="flex max-w-3xl flex-col gap-6 sm:flex-row sm:items-center">
          <span className="flex h-20 w-32 shrink-0 items-center justify-center rounded-field bg-ink p-3">
            <Image
              src={education.logo.src}
              alt={education.logo.alt}
              width={education.logo.width}
              height={education.logo.height}
              sizes="104px"
              className="size-full object-contain"
            />
          </span>
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{education.degree}</h3>
            <p className="mt-1 text-sm text-ink-muted">
              {education.institution} · {education.period}
            </p>
            <p className="mt-3 text-ink-dim">{education.description}</p>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
