type Listener = () => void;

let activeHref: string | null = null;
const listeners = new Set<Listener>();

/**
 * Sección que se está viendo en el inicio (el `href` de su ruta, p. ej. "/servicios").
 * La publica el escenario de capítulos y la lee la barra de navegación para resaltarla.
 */
export const activeSection = {
  get: (): string | null => activeHref,
  getServerSnapshot: (): string | null => null,
  set(href: string | null): void {
    if (href === activeHref) return;
    activeHref = href;
    listeners.forEach((listener) => listener());
  },
  subscribe(listener: Listener): () => void {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};
