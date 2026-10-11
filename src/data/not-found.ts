import type { Heading, NavItem } from "@/types";

export const notFoundContent = {
  title: "Página no encontrada",
  heading: {
    eyebrow: "Error 404",
    title: "Esta página no existe",
    highlight: "no existe",
    description:
      "Puede que el enlace haya cambiado o que la dirección esté mal escrita. Desde aquí puedes seguir navegando:",
  } satisfies Heading,
  links: [
    { label: "Ir al inicio", href: "/" },
    { label: "Ver servicios", href: "/servicios" },
    { label: "Contacto", href: "/contacto" },
  ] satisfies NavItem[],
};
