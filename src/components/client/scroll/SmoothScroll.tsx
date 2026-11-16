"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { routeScroll, setLenis } from "@/lib/smooth-scroll";

const REFRESH_DELAY = 200;

/**
 * Scroll suave (Lenis) sincronizado con ScrollTrigger. Se monta una sola vez, en el layout,
 * y no pinta nada.
 *
 * - Lenis avisa a ScrollTrigger en cada scroll y usa el ticker de GSAP como único
 *   requestAnimationFrame (un solo reloj para todo).
 * - Con `prefers-reduced-motion` no se crea: queda el scroll nativo.
 * - ScrollTrigger se recalcula al cambiar de ruta, al girar el teléfono, al cambiar el
 *   ancho de la ventana, cuando cargan las fuentes y cuando cambia el alto del contenido.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        lerp: 0.11,
        smoothWheel: true,
        anchors: true,
        stopInertiaOnNavigate: true,
      });
      setLenis(lenis);
      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(raf);
        gsap.ticker.lagSmoothing(500, 33);
        lenis.off("scroll", ScrollTrigger.update);
        lenis.destroy();
        setLenis(null);
      };
    });

    let timer = 0;
    const refreshSoon = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => ScrollTrigger.refresh(), REFRESH_DELAY);
    };

    // Solo el ancho: en celulares el alto cambia cada vez que se oculta la barra del navegador.
    let width = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === width) return;
      width = window.innerWidth;
      refreshSoon();
    };

    // Acordeones, imágenes o fuentes que cambian el alto de la página mueven las escenas.
    let height = document.body.offsetHeight;
    const observer = new ResizeObserver(() => {
      if (document.body.offsetHeight === height) return;
      height = document.body.offsetHeight;
      refreshSoon();
    });
    observer.observe(document.body);

    const onHistoryNavigation = () => {
      routeScroll.isHistoryNavigation = true;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", refreshSoon);
    window.addEventListener("popstate", onHistoryNavigation);
    document.fonts?.ready.then(refreshSoon);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", refreshSoon);
      window.removeEventListener("popstate", onHistoryNavigation);
      mm.revert();
    };
  }, []);

  // Al cambiar de ruta: las escenas nuevas ya existen; se miden con el layout definitivo.
  useEffect(() => {
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
