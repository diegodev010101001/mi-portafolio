import { PageHero } from "@/components/sections/shared/PageHero";
import { TextLink } from "@/components/ui/TextLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { servicesContent } from "@/data/services";
import { whatsappLabels } from "@/data/whatsapp-messages";
import type { Service } from "@/types";

interface ServiceDetailHeroProps {
  service: Service;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <PageHero
      heading={{
        eyebrow: servicesContent.hero.eyebrow,
        title: service.name,
        description: service.description,
      }}
    >
      <WhatsAppButton label={whatsappLabels.quote} message={service.whatsappMessage} size="lg" />
      <TextLink href="/servicios">{servicesContent.labels.allServices}</TextLink>
    </PageHero>
  );
}
