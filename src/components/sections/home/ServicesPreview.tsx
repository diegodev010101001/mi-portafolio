import { Reveal } from "@/components/client/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { servicesPreview } from "@/data/home";
import { customProject, services } from "@/data/services";

const cards = [
  ...services.map((service) => ({
    ...service,
    href: `/servicios/${service.slug}`,
    link: servicesPreview.cardLink,
  })),
  { ...customProject, href: "/servicios#a-la-medida", link: servicesPreview.customLink },
];

export function ServicesPreview() {
  return (
    <Section>
      <Reveal>
        <SectionHeading heading={servicesPreview.heading} />
      </Reveal>
      <Stagger className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <StaggerItem key={card.name} className="h-full">
            <Card className="flex h-full flex-col">
              <IconTile name={card.icon} />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{card.name}</h3>
              <p className="mt-2 text-ink-dim">{card.summary}</p>
              <TextLink href={card.href} className="mt-auto pt-5">
                {card.link}
              </TextLink>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-8">
        <TextLink href="/servicios">{servicesPreview.allLink}</TextLink>
      </Reveal>
    </Section>
  );
}
