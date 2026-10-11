"use client";

import type { Ref } from "react";
import { cn } from "@/lib/utils";

interface MenuToggleProps {
  ref: Ref<HTMLButtonElement>;
  isOpen: boolean;
  label: string;
  onClick: () => void;
}

const bar = "block h-0.5 w-6 rounded-full bg-ink transition duration-300 ease-out-expo";

/** Botón hamburguesa que se transforma en "X" cuando el menú está abierto. */
export function MenuToggle({ ref, isOpen, label, onClick }: MenuToggleProps) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={onClick}
      className="relative z-50 flex size-11 flex-col items-center justify-center gap-1.5"
    >
      <span className={cn(bar, isOpen && "translate-y-2 rotate-45")} />
      <span className={cn(bar, isOpen && "scale-x-0 opacity-0")} />
      <span className={cn(bar, isOpen && "-translate-y-2 -rotate-45")} />
    </button>
  );
}
