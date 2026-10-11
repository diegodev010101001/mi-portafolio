import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "accent";
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tone === "accent"
          ? "border-line-accent bg-accent-soft text-accent-light"
          : "border-line bg-surface-strong text-ink-dim",
        className,
      )}
    >
      {children}
    </span>
  );
}
