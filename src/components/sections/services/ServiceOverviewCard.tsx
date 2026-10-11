import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { IconTile } from "@/components/ui/IconTile";
import { TextLink } from "@/components/ui/TextLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { servicesContent } from "@/data/services";
import type { Service } from "@/types";

interface ServiceOverviewCardProps {
  service: Service;
}

export function ServiceOverviewCard({ service }: ServiceOverviewCardProps) {
  return (
    <Card as="article" id={service.slug} className="flex h-full flex-col">
      <IconTile name={service.icon} />
      <h2 className="mt-5 font-display text-2xl font-bold text-ink">{service.name}</h2>
      <p className="mt-3 text-ink-dim">{service.description}</p>
      <p className="mt-3 text-sm text-ink-muted">{service.idealFor}</p>
      {service.includesNote && (
        <p className="mt-6 text-sm font-semibold text-ink">{service.includesNote}</p>
      )}
      <CheckList
        items={service.includes.map((feature) => feature.title)}
        className={service.includesNote ? "mt-3" : "mt-6"}
      />
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-8">
        <WhatsAppButton label={servicesContent.labels.quote} message={service.whatsappMessage} />
        <TextLink href={`/servicios/${service.slug}`}>{servicesContent.labels.details}</TextLink>
      </div>
    </Card>
  );
}
