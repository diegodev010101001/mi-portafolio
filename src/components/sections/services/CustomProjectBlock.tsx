import { Reveal } from "@/components/scroll/Reveal";
import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { customProject, services, servicesContent } from "@/data/services";

/** Tercera opción de la lista: continúa la numeración de los servicios. */
const number = String(services.length + 1).padStart(2, "0");

export function CustomProjectBlock() {
  return (
    <Section id="a-la-medida">
      <Reveal kind="scale">
        <Card
          interactive={false}
          className="relative grid gap-8 overflow-clip border-line-accent md:grid-cols-2 md:items-center md:p-12"
        >
          <span
            aria-hidden="true"
            data-parallax="16"
            className="pointer-events-none absolute top-3 right-5 font-display text-[4.5rem] leading-none font-bold text-outline select-none sm:text-[6.5rem] lg:text-[7.5rem]"
          >
            {number}
          </span>
          <div className="relative">
            <SectionHeading heading={servicesContent.custom} className="mb-5 md:mb-5" />
            <p className="text-lg text-ink-dim">{customProject.description}</p>
            <WhatsAppButton
              label={customProject.whatsappLabel}
              message={customProject.whatsappMessage}
              size="lg"
              className="mt-8"
            />
          </div>
          <CheckList items={customProject.examples} className="relative text-base" />
        </Card>
      </Reveal>
    </Section>
  );
}
