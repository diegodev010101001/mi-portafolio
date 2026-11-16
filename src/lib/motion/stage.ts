import type { MotionContext } from "@/hooks/useScrollMotion";
import { activeSection } from "@/lib/active-section";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { scrollToY } from "@/lib/smooth-scroll";
import {
  MAX_RING_LEAD,
  OPEN_INSET,
  RING_LEAD,
  transitionSteps,
  type StageTransition,
} from "./stage-shapes";

/**
 * Motor de los escenarios fijados ("pantallas" que cambian con el scroll). Lo usan los
 * capítulos del inicio, las escenas de /soluciones y cada proyecto de /proyectos.
 *
 * El HTML lo arma <Stage> (src/components/scroll/Stage.tsx) y aquí solo se leen atributos:
 * - `data-stage-pin`: contenedor que se queda fijo. El "pin" es CSS (`position: sticky`),
 *   así el navegador lo fija sin saltos en celulares; ScrollTrigger solo mueve el timeline.
 * - `data-stage-panel`: cada pantalla. Opcionales: `data-stage-transition`,
 *   `data-stage-origin`, `data-stage-hold` (cuánto dura), `data-stage-group`, `data-nav-href`.
 * - Dentro de un panel: `data-stage-word` / `data-stage-fade` / `data-stage-pop` (entradas),
 *   `data-stage-track` (tira que se desliza en horizontal), `data-stage-line` (línea que se
 *   dibuja), `data-stage-step` (pasos que se activan en orden), `data-stage-parallax`,
 *   `data-stage-zoom` (fondo) y `data-stage-enter` (entra con el escenario).
 * - Navegación: `data-stage-goto="2"` lleva a ese panel; `data-stage-counter` muestra el
 *   número actual; `data-stage-segment` y `data-stage-progress` muestran el avance.
 *
 * Tiempos en "unidades": cada panel dura su `hold` (1 por defecto) y una unidad equivale a
 * `--stage-unit` de scroll (definida en CSS, más corta en celular).
 */
const LEAD = 0.2; // cuánto antes de su turno empieza a abrirse el panel siguiente
const REVEAL = 0.46; // duración del cambio de pantalla
const EXIT = 0.13; // salida de los textos del panel anterior
const REST = 0.34; // punto, dentro de un panel, en el que ya se ve completo
/** El primer panel empieza a entrar cuando la sección llega a esta altura del viewport. */
const INTRO_START = 0.85;

/** Alto mínimo (svh, en px) para fijar pantallas; con menos, se apilan como secciones. */
const DEFAULT_MIN_HEIGHT = 600;

type PanelState = "idle" | "live" | "active" | "covered";

const pad = (value: number) => String(value).padStart(2, "0");

/** Alto del viewport "chico" (con las barras del navegador visibles): no cambia al hacer scroll. */
function smallViewportHeight(): number {
  const probe = document.createElement("div");
  probe.style.cssText =
    "position:fixed;top:0;left:0;width:0;height:100svh;visibility:hidden;pointer-events:none";
  document.body.appendChild(probe);
  const height = probe.offsetHeight;
  probe.remove();
  return height || window.innerHeight;
}

/**
 * Pantallas táctiles (celular y tableta): el scroll con el dedo sigue por inercia y casi
 * nunca se detiene justo cuando las palabras terminan de subir por su máscara, así que se
 * veían cortadas a la mitad. Ahí las palabras aparecen con un fundido, sin máscara.
 */
function wordsFrom(touch: boolean): gsap.TweenVars {
  return touch ? { opacity: 0 } : { yPercent: 115 };
}

/** Entrada de los contenidos de un panel. `scale` reparte los tiempos en el timeline. */
function addEnter(
  timeline: gsap.core.Timeline,
  panel: HTMLElement,
  at: number,
  scale: number,
  touch = false,
): void {
  const find = (selector: string) => Array.from(panel.querySelectorAll<HTMLElement>(selector));
  const words = find("[data-stage-word]");
  const fades = find("[data-stage-fade]");
  const pops = find("[data-stage-pop]");

  if (words.length) {
    timeline.fromTo(
      words,
      wordsFrom(touch),
      touch
        ? { opacity: 1, duration: 0.16 * scale, ease: "power1.out", stagger: { amount: 0.06 * scale } }
        : { yPercent: 0, duration: 0.24 * scale, ease: "power3.out", stagger: { amount: 0.1 * scale } },
      at,
    );
  }
  if (fades.length) {
    timeline.fromTo(
      fades,
      { opacity: 0, y: 26 },
      { opacity: 1, y: 0, duration: 0.2 * scale, ease: "power2.out", stagger: { amount: 0.12 * scale } },
      at + 0.03 * scale,
    );
  }
  if (pops.length) {
    timeline.fromTo(
      pops,
      { opacity: 0, y: 22, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.18 * scale,
        ease: "back.out(1.5)",
        stagger: { amount: 0.16 * scale },
      },
      at + 0.08 * scale,
    );
  }
}

/** Largo (en las mismas unidades de `scale`) de lo que anima `addEnter`. */
const ENTER_LENGTH = 0.42;

/**
 * Pantallas fijadas: la sección mide varias pantallas de alto, el contenedor se queda fijo
 * y cada panel se abre encima del anterior.
 *
 * Todo vive en un solo timeline, incluida la entrada del primer panel mientras la sección
 * sube (el tramo `intro`): así, aunque el scroll salte de golpe (teclado, clic en el
 * indicador), nunca hay dos animaciones peleando por el mismo elemento.
 */
function setupPinned(
  { root, q, isDesktop, canHover }: MotionContext,
  pin: HTMLElement,
  panels: HTMLElement[],
): () => void {
  // Sin mouse (celular, tableta): palabras con fundido y que entran antes (ver wordsFrom).
  const touch = !canHover;
  const total = panels.length;
  const holds = panels.map((panel) => Number(panel.dataset.stageHold) || 1);
  const starts: number[] = [];
  let duration = 0;
  holds.forEach((hold) => {
    starts.push(duration);
    duration += hold;
  });

  // El CSS toma de aquí el modo y el alto total de la sección.
  root.dataset.stageMode = "pinned";
  root.style.setProperty("--stage-units", String(duration));

  const travel = () => Math.max(1, root.offsetHeight - pin.offsetHeight);
  const leadIn = () => window.innerHeight * INTRO_START;
  // Si la sección ya está a la vista al iniciar, no hay entrada: su contenido se queda tal
  // como llegó del servidor, sin parpadeos.
  const withIntro = root.getBoundingClientRect().top > leadIn();
  // Tramo de entrada en unidades: los mismos píxeles de scroll valen lo mismo que en el resto.
  const intro = withIntro ? leadIn() / (travel() / duration) : 0;
  const at = (time: number) => intro + time;

  const scrub = isDesktop ? 0.6 : 0.35;
  const wipes = q("[data-stage-wipe]");
  const featureStart: number[] = [];
  const featureDuration: number[] = [];

  const timeline = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: root,
      start: withIntro ? `top ${INTRO_START * 100}%` : "top top",
      end: () => `+=${(withIntro ? leadIn() : 0) + travel()}`,
      scrub,
      invalidateOnRefresh: true,
    },
  });
  // Marca el final para que el timeline dure exactamente la entrada más los paneles.
  timeline.set({}, {}, at(duration));

  const progress = q("[data-stage-progress]");
  if (progress.length) timeline.fromTo(progress, { scaleX: 0 }, { scaleX: 1, duration }, at(0));

  q("[data-stage-segment]").forEach((segment, index) => {
    if (index >= total) return;
    timeline.fromTo(segment, { "--p": 0 }, { "--p": 1, duration: holds[index] }, at(starts[index]));
  });

  // Entrada del primer panel, mientras la sección sube y antes de quedar fija.
  const first = panels[0];
  if (withIntro) {
    if (root.dataset.stageIntro === "frame") {
      // Llega como una tarjeta redondeada que crece hasta ocupar toda la pantalla.
      timeline.fromTo(
        first,
        { clipPath: "inset(5% 4% 0% 4% round 36px)" },
        { clipPath: OPEN_INSET, duration: intro },
        0,
      );
    }
    const firstZoom = Array.from(first.querySelectorAll<HTMLElement>("[data-stage-zoom]"));
    if (firstZoom.length) {
      timeline.fromTo(firstZoom, { scale: 1.14 }, { scale: 1, duration: intro }, 0);
    }
    Array.from(first.querySelectorAll<HTMLElement>("[data-stage-enter]")).forEach((element) => {
      const tilt = element.dataset.stageEnter === "right" ? 4 : -4;
      timeline.fromTo(
        element,
        { yPercent: 26, scale: 0.84, rotate: tilt },
        { yPercent: 0, scale: 1, rotate: 0, duration: intro, ease: "power2.out" },
        0,
      );
    });
    // Termina justo cuando la sección queda fija.
    addEnter(timeline, first, intro * 0.2, (intro * 0.8) / ENTER_LENGTH, touch);
  }

  panels.forEach((panel, index) => {
    const isFirst = index === 0;
    const isLast = index === total - 1;
    const start = starts[index];
    const end = start + holds[index];
    const find = (selector: string) => Array.from(panel.querySelectorAll<HTMLElement>(selector));
    const zoom = find("[data-stage-zoom]");

    if (!isFirst) {
      const transition = (panel.dataset.stageTransition ?? "circle") as StageTransition;
      const steps = transitionSteps(transition, pin, panel.dataset.stageOrigin);
      const addShape = (target: HTMLElement, position: number) => {
        let time = position;
        steps.forEach((step, stepIndex) => {
          timeline.fromTo(
            target,
            { clipPath: step.from },
            {
              clipPath: step.to,
              duration: REVEAL * step.duration,
              ease: step.ease,
              immediateRender: stepIndex === 0,
            },
            time,
          );
          time += REVEAL * step.duration;
        });
      };

      // Borde de color que va por delante del panel; en pantallas chicas, un poco más delgado.
      const wipe = wipes.find((element) => element.dataset.stageWipe === String(index));
      const ringLead = (RING_LEAD[transition] ?? 0.035) * (isDesktop ? 1 : 0.8);
      if (wipe) addShape(wipe, at(start - LEAD - ringLead));
      addShape(panel, at(start - LEAD));

      if (zoom.length) {
        timeline.fromTo(
          zoom,
          { scale: 1.12 },
          { scale: 1, duration: REVEAL + 0.1, ease: "power2.out" },
          at(start - LEAD),
        );
      }
      // En táctil los textos entran a la par del cambio de pantalla: quedan completos antes.
      addEnter(timeline, panel, at(start - LEAD + REVEAL * (touch ? 0.3 : 0.55)), 1, touch);
    }

    if (!isLast) {
      // Salida: los textos se van justo antes de que entre el panel siguiente.
      const exit = at(end - LEAD - EXIT);
      const words = find("[data-stage-word]");
      const blocks = [...find("[data-stage-fade]"), ...find("[data-stage-pop]")];
      if (words.length) {
        timeline.fromTo(
          words,
          touch ? { opacity: 1 } : { yPercent: 0 },
          {
            ...(touch ? { opacity: 0 } : { yPercent: -115 }),
            duration: EXIT,
            ease: "power2.in",
            stagger: { amount: 0.04 },
            immediateRender: false,
          },
          exit,
        );
      }
      if (blocks.length) {
        timeline.fromTo(
          blocks,
          { opacity: 1, y: 0 },
          {
            opacity: 0,
            y: -20,
            duration: EXIT,
            ease: "power2.in",
            stagger: { amount: 0.05 },
            immediateRender: false,
          },
          exit,
        );
      }
      if (zoom.length) {
        timeline.fromTo(
          zoom,
          { scale: 1 },
          { scale: 1.06, duration: REVEAL, ease: "power1.in", immediateRender: false },
          at(end - LEAD),
        );
      }
    }

    // Tramo en el que el panel está quieto y completo: ahí ocurre su animación propia.
    const from = start + (isFirst ? 0.06 : REST);
    const until = isLast ? duration - 0.05 : end - LEAD - EXIT - 0.03;
    const span = Math.max(0.05, until - from);
    featureStart[index] = from;
    featureDuration[index] = span;

    find("[data-stage-track]").forEach((track) => {
      const reverse = track.dataset.stageTrack === "reverse";
      const distance = () =>
        Math.max(0, track.scrollWidth - (track.parentElement?.clientWidth ?? 0));
      timeline.fromTo(
        track,
        { x: () => (reverse ? -distance() : 0) },
        { x: () => (reverse ? 0 : -distance()), duration: span, ease: "power1.inOut" },
        at(from),
      );
    });

    find("[data-stage-line]").forEach((line) => {
      const axis = line.dataset.stageLine === "x" ? "scaleX" : "scaleY";
      timeline.fromTo(line, { [axis]: 0 }, { [axis]: 1, duration: span }, at(from));
    });

    if (isDesktop) {
      const visibleFrom = isFirst ? -intro : start - LEAD;
      const coveredAt = isLast ? duration : end - LEAD + REVEAL;
      find("[data-stage-parallax]").forEach((layer) => {
        const amount = Number(layer.dataset.stageParallax);
        if (!amount) return;
        timeline.fromTo(
          layer,
          { yPercent: amount },
          { yPercent: -amount, duration: coveredAt - visibleFrom },
          at(visibleFrom),
        );
      });
    }
  });

  // --- Estado: panel activo, navegación y pasos -------------------------------------
  const navItems = q("[data-stage-goto]");
  const counters = q("[data-stage-counter]");
  const stepsByPanel = panels.map((panel) =>
    Array.from(panel.querySelectorAll<HTMLElement>("[data-stage-step]")),
  );
  const publishes = panels.some((panel) => panel.dataset.navHref);
  const states: PanelState[] = [];
  const stepCounts: number[] = [];
  let active = -1;
  let inView = false;

  const publish = () => {
    if (!publishes) return;
    activeSection.set(inView && active >= 0 ? (panels[active].dataset.navHref ?? null) : null);
  };

  const setActive = (index: number) => {
    if (index === active) return;
    active = index;
    const group = panels[index].dataset.stageGroup;

    navItems.forEach((item) => {
      const isOn = item.dataset.stageGroup
        ? item.dataset.stageGroup === group
        : Number(item.dataset.stageGoto) === index;
      item.toggleAttribute("data-active", isOn);
      if (isOn) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");

      // Si la navegación es una fila con scroll horizontal, centra el elemento activo.
      const rail = isOn ? item.closest<HTMLElement>("[data-stage-rail]") : null;
      if (rail && rail.scrollWidth > rail.clientWidth) {
        rail.scrollTo({
          left: item.offsetLeft - (rail.clientWidth - item.offsetWidth) / 2,
          behavior: "smooth",
        });
      }
    });
    counters.forEach((counter) => {
      counter.textContent = pad(index + 1);
    });
    publish();
  };

  const update = () => {
    // Tiempo dentro de los paneles: negativo mientras dura la entrada.
    const time = timeline.time() - intro;

    let current = 0;
    for (let index = 1; index < total; index += 1) {
      if (time >= starts[index] - LEAD + REVEAL / 2) current = index;
    }
    setActive(current);

    panels.forEach((panel, index) => {
      const visibleFrom = index === 0 ? -Infinity : starts[index] - LEAD - MAX_RING_LEAD;
      const coveredAt = index === total - 1 ? Infinity : starts[index + 1] - LEAD + REVEAL;
      let state: PanelState = index === current ? "active" : "live";
      if (time < visibleFrom) state = "idle";
      else if (time > coveredAt) state = "covered";
      if (states[index] !== state) {
        states[index] = state;
        panel.dataset.stageState = state;
      }

      const steps = stepsByPanel[index];
      if (steps.length === 0) return;
      // En un escenario de un solo panel, el primer paso se ve desde que entra.
      const minimum = total === 1 ? 1 : 0;
      const elapsed = (time - featureStart[index]) / featureDuration[index];
      const count =
        elapsed < 0
          ? minimum
          : Math.min(steps.length, Math.floor(elapsed * steps.length) + 1);
      if (stepCounts[index] === count) return;
      stepCounts[index] = count;
      steps.forEach((step, stepIndex) => {
        step.toggleAttribute("data-active", stepIndex < count);
        step.toggleAttribute("data-current", stepIndex === count - 1);
      });
    });
  };

  timeline.eventCallback("onUpdate", update);
  // Al recalcular (carga con ancla, scroll restaurado, cambio de tamaño) ScrollTrigger mueve
  // el timeline sin avisar a onUpdate: el estado se recalcula aquí.
  ScrollTrigger.addEventListener("refresh", update);
  update();

  const view = ScrollTrigger.create({
    trigger: root,
    start: "top 55%",
    end: "bottom 45%",
    onToggle: (self) => {
      inView = self.isActive;
      root.toggleAttribute("data-stage-inview", inView);
      publish();
    },
  });
  inView = view.isActive;
  root.toggleAttribute("data-stage-inview", inView);
  publish();

  /** Lleva el scroll al punto en que el panel ya se ve completo. */
  const goTo = (index: number, immediate = false) => {
    const trigger = timeline.scrollTrigger;
    if (!trigger || index < 0 || index >= total) return;
    const time = at(starts[index] + (index === 0 ? 0.02 : REST));
    const progressAt = time / timeline.duration();
    scrollToY(Math.ceil(trigger.start + progressAt * (trigger.end - trigger.start)), {
      immediate,
    });
  };

  const onNavClick = (event: MouseEvent) => {
    const item = (event.target as Element).closest<HTMLElement>("[data-stage-goto]");
    if (!item) return;
    // El salto lo maneja el escenario: ni el navegador ni Lenis deben mover el scroll.
    event.preventDefault();
    event.stopPropagation();
    goTo(Number(item.dataset.stageGoto));
  };

  // Con teclado, el foco puede caer en un panel que aún no se ve: se lleva el scroll ahí.
  const onFocusIn = (event: FocusEvent) => {
    const panel = (event.target as Element).closest<HTMLElement>("[data-stage-panel]");
    const index = panel ? panels.indexOf(panel) : -1;
    if (index !== -1 && index !== active) goTo(index, true);
  };

  // Enlaces con ancla a un panel (p. ej. /soluciones#pizzeria).
  const hashIndex = () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    return id ? panels.findIndex((panel) => panel.id === id) : -1;
  };
  const onHashChange = () => goTo(hashIndex());

  root.addEventListener("click", onNavClick);
  pin.addEventListener("focusin", onFocusIn);
  window.addEventListener("hashchange", onHashChange);

  let frame = 0;
  const initial = hashIndex();
  if (initial !== -1) {
    // Dos cuadros después: cuando el navegador y Next ya movieron el scroll por su cuenta.
    frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => goTo(initial, true));
    });
  }

  return () => {
    cancelAnimationFrame(frame);
    ScrollTrigger.removeEventListener("refresh", update);
    root.removeEventListener("click", onNavClick);
    pin.removeEventListener("focusin", onFocusIn);
    window.removeEventListener("hashchange", onHashChange);

    delete root.dataset.stageMode;
    root.removeAttribute("data-stage-inview");
    root.style.removeProperty("--stage-units");
    panels.forEach((panel) => panel.removeAttribute("data-stage-state"));
    stepsByPanel.flat().forEach((step) => {
      step.removeAttribute("data-active");
      step.removeAttribute("data-current");
    });
    navItems.forEach((item) => {
      item.removeAttribute("data-active");
      item.removeAttribute("aria-current");
    });
    counters.forEach((counter) => {
      counter.textContent = pad(1);
    });
    if (publishes) activeSection.set(null);
  };
}

/**
 * Pantallas apiladas (ventanas muy bajitas, p. ej. un teléfono en horizontal): no se fija
 * nada, pero cada panel conserva su cambio de pantalla al entrar.
 */
function setupStacked({ root }: MotionContext, panels: HTMLElement[]): () => void {
  root.dataset.stageMode = "stacked";

  panels.forEach((panel) => {
    if (ScrollTrigger.isInViewport(panel)) return;

    gsap.fromTo(
      panel,
      { clipPath: "inset(6% 5% 0% 5% round 28px)" },
      {
        clipPath: OPEN_INSET,
        ease: "none",
        scrollTrigger: { trigger: panel, start: "top 96%", end: "top 45%", scrub: 0.4 },
      },
    );
    addEnter(
      gsap.timeline({ scrollTrigger: { trigger: panel, start: "top 70%", once: true } }),
      panel,
      0,
      3.2,
    );
  });

  return () => {
    delete root.dataset.stageMode;
  };
}

/** Configura un escenario: fijado si la pantalla tiene alto suficiente; apilado si no. */
export function setupStage(context: MotionContext): (() => void) | void {
  const { root, q, rerun } = context;
  const pin = q("[data-stage-pin]")[0];
  const panels = q("[data-stage-panel]");
  if (!pin || panels.length === 0) return;

  const minHeight = Number(root.dataset.stageMinHeight) || DEFAULT_MIN_HEIGHT;
  const fits = smallViewportHeight() >= minHeight;
  const cleanup = fits ? setupPinned(context, pin, panels) : setupStacked(context, panels);

  // Si la ventana cambia de alto (o el teléfono gira) y cruza el mínimo, se rearma todo.
  const checkFit = () => {
    if (smallViewportHeight() >= minHeight !== fits) rerun();
  };
  ScrollTrigger.addEventListener("refreshInit", checkFit);

  return () => {
    ScrollTrigger.removeEventListener("refreshInit", checkFit);
    cleanup();
  };
}
