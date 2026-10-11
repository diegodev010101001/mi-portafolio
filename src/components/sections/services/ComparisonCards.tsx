import { Card } from "@/components/ui/Card";
import { serviceComparison, services } from "@/data/services";
import { cn } from "@/lib/utils";
import { Availability } from "./Availability";

/** Versión móvil de la comparativa: una tarjeta por servicio. */
export function ComparisonCards() {
  return (
    <div className="grid gap-5 md:hidden">
      {services.map((service) => (
        <Card key={service.slug} interactive={false}>
          <h3 className="font-display text-lg font-semibold text-ink">{service.name}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceComparison.map((row) => {
              const included = row.availability[service.slug];
              return (
                <li
                  key={row.feature}
                  className={cn("flex gap-3", included ? "text-ink-dim" : "text-ink-muted")}
                >
                  <Availability included={included} />
                  {row.feature}
                </li>
              );
            })}
          </ul>
        </Card>
      ))}
    </div>
  );
}
