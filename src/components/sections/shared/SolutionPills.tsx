import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { Solution } from "@/types";

interface SolutionPillsProps {
  solutions: Solution[];
  className?: string;
}

/** Giros como enlaces en forma de píldora hacia su tarjeta en /soluciones. */
export function SolutionPills({ solutions, className }: SolutionPillsProps) {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {solutions.map((solution) => (
        <li key={solution.slug}>
          <Link
            href={`/soluciones#${solution.slug}`}
            className="inline-flex min-h-touch items-center gap-2.5 rounded-full border border-line bg-surface px-5 text-sm font-medium text-ink-dim transition duration-200 hover:-translate-y-0.5 hover:border-line-accent hover:text-ink"
          >
            <Icon name={solution.icon} className="size-4 text-accent-light" />
            {solution.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
