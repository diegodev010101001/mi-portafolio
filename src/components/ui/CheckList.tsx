import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface CheckListProps {
  items: string[];
  className?: string;
}

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("space-y-2.5 text-sm text-ink-dim", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <Icon name="check" className="mt-0.5 size-4 shrink-0 text-cyan" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
