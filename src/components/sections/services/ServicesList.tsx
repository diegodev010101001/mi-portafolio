import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { ServiceOverviewCard } from "./ServiceOverviewCard";

export function ServicesList() {
  return (
    <Section className="pt-6">
      <Stagger className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <StaggerItem key={service.slug} className="h-full">
            <ServiceOverviewCard service={service} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
