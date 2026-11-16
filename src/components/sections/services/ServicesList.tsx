import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { ServiceOverviewCard } from "./ServiceOverviewCard";

/** Retraso de entrada de cada tarjeta: aparecen escalonadas. */
const delays = ["[animation-delay:140ms]", "[animation-delay:300ms]"];

/**
 * Queda en la primera pantalla, justo bajo el encabezado: las tarjetas entran escalonadas
 * solo con CSS. Al pasar el cursor o enfocar una, la otra se atenúa (`.spotlight`).
 */
export function ServicesList() {
  return (
    <Section className="pt-6">
      <div className="spotlight grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={service.slug} className={`animate-fade-up ${delays[index % delays.length]}`}>
            <ServiceOverviewCard service={service} number={index + 1} />
          </div>
        ))}
      </div>
    </Section>
  );
}
