"use client";

import { useEffect, useState, type ReactNode } from "react";

const SCROLL_THRESHOLD = 24;

/** Marca el header con `data-scrolled` para activar el efecto vidrio desde CSS. */
export function HeaderScroll({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header data-scrolled={scrolled} className="group/header fixed inset-x-0 top-0 z-50 h-header">
      {children}
    </header>
  );
}
