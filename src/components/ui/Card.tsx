import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  as?: "div" | "article" | "li";
  id?: string;
  /** Se eleva y muestra el borde en degradado al pasar el cursor. */
  interactive?: boolean;
  className?: string;
}

export function Card({ children, as: Tag = "div", id, interactive = true, className }: CardProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "rounded-card border border-line bg-surface p-6 sm:p-8",
        interactive &&
          "border-gradient-hover transition duration-300 ease-out-expo hover:-translate-y-1.5 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
