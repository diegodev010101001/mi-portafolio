import { Stagger, StaggerItem } from "@/components/client/motion/Stagger";
import { Card } from "@/components/ui/Card";
import { FadeUp } from "@/components/ui/FadeUp";
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
  /** `css` para cuadrículas que quedan en la primera pantalla: no dependen de JavaScript. */
  animation?: "scroll" | "css";
}

/** Cuadrícula de tarjetas ícono + título + descripción, con aparición escalonada. */
export function FeatureGrid({ items, columns = 3, animation = "scroll" }: FeatureGridProps) {
  const gridClasses = cn("grid gap-5", columnClasses[columns]);
  const cards = items.map((item) => ({ key: item.title, node: <FeatureCard item={item} /> }));

  if (animation === "css") {
    return (
      <FadeUp className={gridClasses}>
        {cards.map((card) => (
          <div key={card.key} className="h-full">
            {card.node}
          </div>
        ))}
      </FadeUp>
    );
  }
  return (
    <Stagger className={gridClasses}>
      {cards.map((card) => (
        <StaggerItem key={card.key} className="h-full">
          {card.node}
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function FeatureCard({ item }: { item: Feature }) {
  return (
    <Card className="h-full">
      <IconTile name={item.icon} />
      <h3 className="mt-5 font-display text-lg font-semibold text-ink">{item.title}</h3>
      <p className="mt-2 text-sm text-ink-dim">{item.description}</p>
    </Card>
  );
}
