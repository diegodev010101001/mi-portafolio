import { Reveal } from "@/components/client/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { StepList } from "@/components/sections/shared/StepList";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesContent } from "@/data/services";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

interface ServiceFlowsProps {
  service: Service;
}

/** Paso a paso del servicio; en el de citas hay un recorrido para el cliente y otro para el dueño. */
export function ServiceFlows({ service }: ServiceFlowsProps) {
  return (
    <Section tone="alt">
      <Reveal>
        <SectionHeading heading={servicesContent.detailHeadings.flows} />
      </Reveal>
      <Stagger className={cn("grid gap-6", service.flows.length > 1 ? "lg:grid-cols-2" : "max-w-2xl")}>
        {service.flows.map((flow) => (
          <StaggerItem key={flow.title} className="h-full">
            <Card interactive={false} className="h-full">
              <Badge tone="accent">{flow.audience}</Badge>
              <h3 className="mt-4 mb-6 font-display text-xl font-semibold text-ink">{flow.title}</h3>
              <StepList steps={flow.steps} titleAs="h4" />
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
