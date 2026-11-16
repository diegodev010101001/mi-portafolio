/**
 * Transiciones entre pantallas de un escenario: todas son un `clip-path` que descubre el
 * panel nuevo encima del anterior, pero cada una con una forma distinta.
 */
export type StageTransition = "circle" | "curtain" | "window" | "blob" | "slide" | "rise";

export interface ShapeStep {
  from: () => string;
  to: () => string;
  /** Fracción de la duración total de la transición. */
  duration: number;
  ease: string;
}

export const OPEN_INSET = "inset(0% 0% 0% 0% round 0px)";

/**
 * Cuánto se adelanta (en unidades de scroll) el borde de color al panel que entra. La forma
 * orgánica crece de forma pareja, así que necesita más adelanto para que el borde se note.
 */
export const RING_LEAD: Record<StageTransition, number> = {
  circle: 0.035,
  curtain: 0.035,
  window: 0.035,
  blob: 0.08,
  slide: 0.03,
  rise: 0.03,
};
export const MAX_RING_LEAD = Math.max(...Object.values(RING_LEAD));

interface Box {
  width: number;
  height: number;
}

/**
 * Número para clip-path con 2 decimales y SIN ceros finales ("92.3", no "92.30"). GSAP separa
 * número y unidad con parseFloat: con "92.30%" deduce la unidad "0%", intenta convertir
 * unidades y la interpolación se rompe (la forma salta en vez de crecer).
 */
const num = (value: number) => `${Number(value.toFixed(2))}`;

const sizeOf = (element: HTMLElement): Box => ({
  width: element.offsetWidth || 1,
  height: element.offsetHeight || 1,
});

/** Distancia (px) del origen a la esquina más lejana: lo que debe crecer la forma. */
function reach({ width, height }: Box, x: number, y: number): number {
  return Math.max(
    Math.hypot(x, y),
    Math.hypot(width - x, y),
    Math.hypot(x, height - y),
    Math.hypot(width - x, height - y),
  );
}

/** Círculo que crece desde el origen (en %) hasta cubrir toda la pantalla. */
function circle(box: HTMLElement, originX: number, originY: number): ShapeStep[] {
  const at = `at ${originX}% ${originY}%`;
  const radius = () => {
    const size = sizeOf(box);
    const farthest = reach(size, (originX / 100) * size.width, (originY / 100) * size.height);
    // En circle(), el % del radio se mide contra diagonal / √2.
    return (farthest / (Math.hypot(size.width, size.height) / Math.SQRT2)) * 100 + 2;
  };

  return [
    {
      from: () => `circle(0% ${at})`,
      to: () => `circle(${num(radius())}% ${at})`,
      duration: 1,
      ease: "power2.inOut",
    },
  ];
}

/** Cortina diagonal que barre la pantalla de derecha a izquierda. */
function curtain(): ShapeStep[] {
  const edge = (position: number) =>
    `polygon(${position}% 0%, 130% 0%, 130% 100%, ${position + 28}% 100%)`;

  return [{ from: () => edge(102), to: () => edge(-30), duration: 1, ease: "power2.inOut" }];
}

/** Ventana: se abre una franja horizontal y después crece hasta llenar la pantalla. */
function windowShape(): ShapeStep[] {
  const slit = "inset(49.6% 50% 49.6% 50% round 28px)";
  const band = "inset(46.5% 7% 46.5% 7% round 28px)";

  return [
    { from: () => slit, to: () => band, duration: 0.36, ease: "power2.out" },
    { from: () => band, to: () => OPEN_INSET, duration: 0.64, ease: "power3.inOut" },
  ];
}

/** Puntos del contorno: suficientes para que se vea curvo y no como un polígono. */
const BLOB_POINTS = 64;

/**
 * Forma orgánica: un contorno suave (dos ondas largas) que crece y va cambiando de forma.
 * Las ondas se aplanan conforme crece, hasta cubrir la pantalla.
 */
function blob(box: HTMLElement, originX: number, originY: number): ShapeStep[] {
  const shape = (scale: number, wobble: number, phase: number) => () => {
    const size = sizeOf(box);
    const centerX = (originX / 100) * size.width;
    const centerY = (originY / 100) * size.height;
    const radius = reach(size, centerX, centerY) * scale;

    const points = Array.from({ length: BLOB_POINTS }, (_, index) => {
      const angle = (index / BLOB_POINTS) * Math.PI * 2;
      const wave =
        1 + wobble * Math.sin(angle * 2 + phase) + wobble * 0.6 * Math.cos(angle * 3 - phase * 1.4);
      const x = ((centerX + radius * wave * Math.cos(angle)) / size.width) * 100;
      const y = ((centerY + radius * wave * Math.sin(angle)) / size.height) * 100;
      return `${num(x)}% ${num(y)}%`;
    });
    return `polygon(${points.join(", ")})`;
  };

  const seed = shape(0, 0.16, 0);
  const small = shape(0.22, 0.16, 0.8);
  const medium = shape(0.62, 0.11, 2.2);
  // 1.25 × el alcance cubre la pantalla aun con las ondas hacia adentro (−8 % como máximo).
  const full = shape(1.25, 0.05, 3.6);

  return [
    { from: seed, to: small, duration: 0.3, ease: "power2.out" },
    { from: small, to: medium, duration: 0.35, ease: "none" },
    { from: medium, to: full, duration: 0.35, ease: "power1.in" },
  ];
}

/** Barrido recto: desde la derecha (`slide`) o desde abajo (`rise`). */
function inset(closed: string): ShapeStep[] {
  return [{ from: () => closed, to: () => OPEN_INSET, duration: 1, ease: "power2.inOut" }];
}

/**
 * Pasos de la transición de un panel. `box` es el contenedor fijo (para medirlo) y
 * `origin`, el punto "x y" en % desde donde crece la forma (círculo y forma orgánica).
 */
export function transitionSteps(
  type: StageTransition,
  box: HTMLElement,
  origin: string | undefined,
): ShapeStep[] {
  const [x = 50, y = 50] = (origin ?? "").split(" ").filter(Boolean).map(Number);

  switch (type) {
    case "curtain":
      return curtain();
    case "window":
      return windowShape();
    case "blob":
      return blob(box, x, y);
    case "slide":
      return inset("inset(0% 0% 0% 100% round 0px)");
    case "rise":
      return inset("inset(100% 0% 0% 0% round 0px)");
    default:
      return circle(box, x, y);
  }
}
