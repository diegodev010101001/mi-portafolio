import { Reveal } from "@/components/client/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { customProject, servicesContent } from "@/data/services";

export function CustomProjectBlock() {
  return (
    <Section id="a-la-medida">
      <Reveal>
        <Card interactive={false} className="grid gap-8 border-line-accent md:grid-cols-2 md:items-center md:p-12">
          <div>
            <SectionHeading heading={servicesContent.custom} className="mb-5 md:mb-5" />
            <p className="text-lg text-ink-dim">{customProject.description}</p>
            <WhatsAppButton
              label={customProject.whatsappLabel}
              message={customProject.whatsappMessage}
              size="lg"
              className="mt-8"
            />
          </div>
          <CheckList items={customProject.examples} className="text-base" />
        </Card>
      </Reveal>
    </Section>
  );
}
