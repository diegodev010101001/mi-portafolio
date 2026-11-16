import type { MotionContext } from "@/hooks/useScrollMotion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Efectos de scroll declarativos: los componentes (de servidor) solo marcan su HTML con
 * atributos `data-*` y aquí se les da vida, una vez por página. Solo se animan transform,
 * opacity y clip-path.
 *
 * - `data-reveal="up|left|right|scale|fade|clip"`: aparece una vez al entrar en pantalla.
 * - `data-stagger`: sus hijos directos aparecen escalonados.
 * - `data-words`: título dividido con <SplitWords>; las palabras suben una tras otra.
 * - `data-light`: texto que se ilumina palabra por palabra conforme avanza el scroll.
 * - `data-parallax="12"`: se desplaza ±12 % de su alto mientras cruza la pantalla.
 * - `data-drift="-80"`: se desplaza esos píxeles mientras su sección sale por arriba.
 * - `data-draw="x|y"`: línea que se dibuja con el scroll (dentro de `data-draw-root`).
 * - `data-activate`: pasa de "pending" a "on" cuando el scroll llega al elemento.
 * - `data-pointer-scene` + `data-depth="18"`: capas que siguen al cursor (profundidad).
 * - `data-effect="closing"`: fondo de la llamada a la acción final, que se transforma.
 */

type RevealKind = "up" | "left" | "right" | "scale" | "fade" | "clip";

const OPEN_CLIP = "inset(0% 0% 0% 0%)";

const revealFrom: Record<RevealKind, gsap.TweenVars> = {
  up: { opacity: 0, y: 36 },
  left: { opacity: 0, x: -44 },
  right: { opacity: 0, x: 44 },
  scale: { opacity: 0, scale: 0.92 },
  fade: { opacity: 0 },
  clip: { clipPath: "inset(0% 0% 100% 0%)", y: 28 },
};

const revealTo: Record<RevealKind, gsap.TweenVars> = {
  up: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  scale: { opacity: 1, scale: 1 },
  fade: { opacity: 1 },
  clip: { clipPath: OPEN_CLIP, y: 0 },
};

function revealKind(value: string | undefined): RevealKind {
  return value && value in revealFrom ? (value as RevealKind) : "up";
}

/** Lo que ya está en pantalla al iniciar se queda como está: sin parpadeos al hidratar. */
const isBelowTheFold = (element: Element) => !ScrollTrigger.isInViewport(element);

function setupReveals({ q }: MotionContext): void {
  const kinds = new Map<Element, RevealKind>();
  q("[data-reveal]").forEach((element) => kinds.set(element, revealKind(element.dataset.reveal)));
  q("[data-stagger]").forEach((group) => {
    const kind = revealKind(group.dataset.stagger);
    Array.from(group.children).forEach((child) => kinds.set(child, kind));
  });

  const targets = Array.from(kinds.keys()).filter(isBelowTheFold);
  if (targets.length === 0) return;

  targets.forEach((target) => gsap.set(target, revealFrom[kinds.get(target) ?? "up"]));

  ScrollTrigger.batch(targets, {
    start: "top 90%",
    once: true,
    onEnter: (batch) => {
      batch.forEach((target, index) => {
        gsap.to(target, {
          ...revealTo[kinds.get(target) ?? "up"],
          duration: 0.9,
          ease: "power3.out",
          delay: index * 0.09,
          overwrite: "auto",
          // Al terminar se quitan los estilos en línea: el hover y el foco vuelven a mandar.
          clearProps: "opacity,transform,clipPath",
        });
      });
    },
  });
}

function setupWords({ q }: MotionContext): void {
  q("[data-words]")
    .filter(isBelowTheFold)
    .forEach((title) => {
      gsap.fromTo(
        title.querySelectorAll("[data-word]"),
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 0.95,
          ease: "power4.out",
          stagger: 0.055,
          scrollTrigger: { trigger: title, start: "top 88%", once: true },
        },
      );
    });

  q("[data-light]").forEach((text) => {
    gsap.fromTo(
      text.querySelectorAll("[data-word]"),
      { opacity: 0.28 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.5,
        scrollTrigger: { trigger: text, start: "top 80%", end: "bottom 52%", scrub: 0.4 },
      },
    );
  });
}

function setupParallax({ q, isDesktop }: MotionContext): void {
  const allowed = (element: HTMLElement) =>
    isDesktop || !element.hasAttribute("data-desktop-motion");

  q("[data-parallax]")
    .filter(allowed)
    .forEach((element) => {
      // En pantallas chicas el recorrido es menor: menos capas en movimiento y más fluidez.
      const amount = Number(element.dataset.parallax) * (isDesktop ? 1 : 0.45);
      if (!amount) return;
      gsap.fromTo(
        element,
        { yPercent: amount },
        {
          yPercent: -amount,
          ease: "none",
          scrollTrigger: {
            trigger: element.closest("[data-parallax-root]") ?? element,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

  q("[data-drift]")
    .filter(allowed)
    .forEach((element) => {
      const amount = Number(element.dataset.drift) * (isDesktop ? 1 : 0.5);
      const fade = element.hasAttribute("data-drift-fade");
      gsap.fromTo(
        element,
        { y: 0, ...(fade && { opacity: 1 }) },
        {
          y: amount,
          ...(fade && { opacity: 0.12 }),
          ease: "none",
          scrollTrigger: {
            trigger: element.closest("[data-drift-root]") ?? element.parentElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
}

function setupDraw({ q }: MotionContext): () => void {
  q("[data-draw]").forEach((line) => {
    const axis = line.dataset.draw === "x" ? "scaleX" : "scaleY";
    gsap.fromTo(
      line,
      { [axis]: 0 },
      {
        [axis]: 1,
        ease: "none",
        scrollTrigger: {
          trigger: line.closest("[data-draw-root]") ?? line,
          start: "top 62%",
          end: "bottom 62%",
          scrub: 0.3,
        },
      },
    );
  });

  const steps = q("[data-activate]");
  steps.forEach((step) => {
    step.dataset.activate = "pending";
    ScrollTrigger.create({
      trigger: step,
      start: "top 62%",
      end: "max",
      onEnter: () => {
        step.dataset.activate = "on";
      },
      onLeaveBack: () => {
        step.dataset.activate = "pending";
      },
    });
  });

  return () => {
    steps.forEach((step) => {
      step.dataset.activate = "";
    });
  };
}

function setupPointerDepth({ q, isDesktop, canHover }: MotionContext): () => void {
  if (!isDesktop || !canHover) return () => {};

  const cleanups = q("[data-pointer-scene]").map((scene) => {
    const layers = Array.from(scene.querySelectorAll<HTMLElement>("[data-depth]")).map((layer) => ({
      depth: Number(layer.dataset.depth),
      x: gsap.quickTo(layer, "x", { duration: 0.9, ease: "power3.out" }),
      y: gsap.quickTo(layer, "y", { duration: 0.9, ease: "power3.out" }),
    }));

    const move = (horizontal: number, vertical: number) => {
      layers.forEach((layer) => {
        layer.x(horizontal * layer.depth);
        layer.y(vertical * layer.depth);
      });
    };
    const onMove = (event: PointerEvent) => {
      const box = scene.getBoundingClientRect();
      move((event.clientX - box.left) / box.width - 0.5, (event.clientY - box.top) / box.height - 0.5);
    };
    const onLeave = () => move(0, 0);

    scene.addEventListener("pointermove", onMove);
    scene.addEventListener("pointerleave", onLeave);
    return () => {
      scene.removeEventListener("pointermove", onMove);
      scene.removeEventListener("pointerleave", onLeave);
    };
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

/** Cierre: una luz crece desde abajo y el halo de color gira mientras la sección entra. */
function setupClosing({ q }: MotionContext): void {
  q('[data-effect="closing"]').forEach((section) => {
    const find = (selector: string) => Array.from(section.querySelectorAll<HTMLElement>(selector));

    gsap
      .timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: section, start: "top 92%", end: "top 12%", scrub: 0.5 },
      })
      .fromTo(
        find("[data-closing-glow]"),
        { clipPath: "circle(0% at 50% 100%)" },
        { clipPath: "circle(130% at 50% 100%)" },
        0,
      )
      .fromTo(
        find("[data-closing-halo]"),
        { rotate: -35, scale: 0.75, opacity: 0 },
        { rotate: 25, scale: 1.1, opacity: 1 },
        0,
      );
  });
}

/** Activa todos los efectos declarativos que haya dentro de `root`. */
export function setupPageEffects(context: MotionContext): () => void {
  setupReveals(context);
  setupWords(context);
  setupParallax(context);
  setupClosing(context);
  const cleanupDraw = setupDraw(context);
  const cleanupPointer = setupPointerDepth(context);

  return () => {
    cleanupDraw();
    cleanupPointer();
  };
}
