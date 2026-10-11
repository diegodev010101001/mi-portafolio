import { FadeUp } from "@/components/ui/FadeUp";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { ServiceOverviewCard } from "./ServiceOverviewCard";

/** Queda en la primera pantalla, justo bajo el encabezado: se anima solo con CSS. */
export function ServicesList() {
  return (
    <Section className="pt-6">
      <FadeUp className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <ServiceOverviewCard key={service.slug} service={service} />
        ))}
      </FadeUp>
    </Section>
  );
}
