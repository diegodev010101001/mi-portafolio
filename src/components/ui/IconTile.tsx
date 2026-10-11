import { cn } from "@/lib/utils";
import type { IconName } from "@/types";
import { Icon } from "./Icon";

interface IconTileProps {
  name: IconName;
  className?: string;
}

export function IconTile({ name, className }: IconTileProps) {
  return (
    <span
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-field border border-line-accent bg-accent-soft text-accent-light",
        className,
      )}
    >
      <Icon name={name} className="size-6" />
    </span>
  );
}
