"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState, type ReactNode } from "react";
import type { NavItem } from "@/types";
import { EASE_OUT_EXPO } from "../motion/transitions";
import { MenuToggle } from "./MenuToggle";
import { NavLink } from "./NavLink";
import { useMenuDialog } from "./useMenuDialog";

interface MobileMenuProps {
  items: NavItem[];
  labels: { open: string; close: string; dialog: string };
  /** Botones de cotizar y WhatsApp, renderizados en el servidor. */
  actions: ReactNode;
}

export function MobileMenu({ items, labels, actions }: MobileMenuProps) {
  const pathname = usePathname();
  // Guardar la ruta en la que se abrió hace que el menú se cierre solo al navegar.
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const isOpen = openedAt === pathname;
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpenedAt(null);
    toggleRef.current?.focus();
  }, []);

  useMenuDialog(isOpen, containerRef, close);

  return (
    <div ref={containerRef} className="lg:hidden">
      <MenuToggle
        ref={toggleRef}
        isOpen={isOpen}
        label={isOpen ? labels.close : labels.open}
        onClick={() => setOpenedAt(isOpen ? null : pathname)}
      />
      <AnimatePresence>
        {isOpen && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={labels.dialog}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-bg/97 px-gutter pt-[calc(var(--spacing-header)+1.5rem)] pb-[calc(2rem+env(safe-area-inset-bottom))] backdrop-blur-xl"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
          >
            <nav aria-label={labels.dialog}>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <NavLink {...item} variant="mobile" onNavigate={close} />
                  </li>
                ))}
              </ul>
            </nav>
            <div onClick={close} className="mt-auto flex flex-col gap-3 pt-10">
              {actions}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
