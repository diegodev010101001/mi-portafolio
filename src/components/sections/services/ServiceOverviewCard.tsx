import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { IconTile } from "@/components/ui/IconTile";
import { TextLink } from "@/components/ui/TextLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { servicesContent } from "@/data/services";
import type { Service } from "@/types";

interface ServiceOverviewCardProps {
  service: Service;
  /** Posición del servicio en la lista: se muestra como número grande de fondo. */
  number: number;
}

export function ServiceOverviewCard({ service, number }: ServiceOverviewCardProps) {
  return (
    <Card as="article" id={service.slug} spot className="flex h-full flex-col overflow-clip">
      {/* Número decorativo que se desplaza con el scroll (parallax). */}
      <span
        aria-hidden="true"
        data-parallax="16"
        className="pointer-events-none absolute top-3 right-5 font-display text-[4.5rem] leading-none font-bold text-outline select-none sm:text-[6.5rem] lg:text-[7.5rem]"
      >
        {String(number).padStart(2, "0")}
      </span>
      <IconTile name={service.icon} className="relative" />
      <h2 className="relative mt-5 font-display text-2xl font-bold text-ink">{service.name}</h2>
      <p className="relative mt-3 text-ink-dim">{service.description}</p>
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
