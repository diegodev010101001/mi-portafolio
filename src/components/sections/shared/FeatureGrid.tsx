import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { cn } from "@/lib/utils";
import type { Feature } from "@/types";

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

interface FeatureGridProps {
  items: Feature[];
  columns?: keyof typeof columnClasses;
}

/** Cuadrícula de tarjetas ícono + título + descripción, con aparición escalonada. */
export function FeatureGrid({ items, columns = 3 }: FeatureGridProps) {
  return (
    <Stagger className={cn("grid gap-5", columnClasses[columns])}>
      {items.map((item) => (
        <StaggerItem key={item.title} className="h-full">
          <Card className="h-full">
            <IconTile name={item.icon} />
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-dim">{item.description}</p>
          </Card>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
