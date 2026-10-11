"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { revealTransition } from "../motion/transitions";

interface FilterCategory {
  id: string;
  label: string;
}

interface FilterItem {
  id: string;
  category: string;
  /** Tarjeta ya renderizada en el servidor. */
  node: ReactNode;
}

interface SolutionsFilterProps {
  categories: FilterCategory[];
  items: FilterItem[];
  labels: { group: string; all: string };
}

const ALL = "all";

export function SolutionsFilter({ categories, items, labels }: SolutionsFilterProps) {
  const [active, setActive] = useState(ALL);
  const options = [{ id: ALL, label: labels.all }, ...categories];
  const visible = active === ALL ? items : items.filter((item) => item.category === active);

  return (
    <>
      <div role="group" aria-label={labels.group} className="mb-10 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={active === option.id}
            onClick={() => setActive(option.id)}
            className={cn(
              "min-h-touch rounded-full border px-5 text-sm font-semibold transition duration-200",
              active === option.id
                ? "border-transparent bg-brand-gradient text-on-accent"
                : "border-line text-ink-dim hover:border-line-accent hover:text-ink",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {/* initial={false}: las tarjetas llegan visibles en el HTML; solo se animan al filtrar. */}
        <AnimatePresence initial={false}>
          {visible.map((item) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={revealTransition}
              className="h-full"
            >
              {item.node}
            </m.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
