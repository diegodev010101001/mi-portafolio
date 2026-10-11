import type { Cta, FooterColumn, NavItem } from "@/types";

export const homeLink = { label: "Inicio", href: "/" } satisfies NavItem;

export const mainNav = [
  { label: "Servicios", href: "/servicios" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Proceso", href: "/proceso" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Nosotros", href: "/nosotros" },
] satisfies NavItem[];

export const quoteCta = { label: "Cotizar proyecto", href: "/contacto" } satisfies Cta;

export const privacyLink = {
  label: "Aviso de privacidad",
  href: "/aviso-de-privacidad",
} satisfies NavItem;

export const footerColumns = [
  { title: "Navegación", items: [homeLink, ...mainNav, { label: "Contacto", href: "/contacto" }] },
  {
    title: "Servicios",
    items: [
      { label: "Sitio web para tu negocio", href: "/servicios/sitio-web-para-negocios" },
      { label: "Sitio web con sistema de citas", href: "/servicios/sitio-web-con-citas" },
      { label: "Proyecto a la medida", href: "/servicios#a-la-medida" },
    ],
  },
] satisfies FooterColumn[];

export const navLabels = {
  main: "Navegación principal",
  footer: "Navegación del pie de página",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  mobileMenu: "Menú principal",
  skipToContent: "Saltar al contenido",
  contactTitle: "Contacto",
  socialTitle: "Redes sociales",
  rights: "Todos los derechos reservados.",
};
