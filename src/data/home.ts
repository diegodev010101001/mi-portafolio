import type { CtaContent, Feature, Heading, Problem } from "@/types";
import { siteConfig } from "@/config/site";
import { whatsappMessages } from "./whatsapp-messages";

export const homeSeo = {
  title: `Páginas web para negocios en Aguascalientes | ${siteConfig.owner} · ${siteConfig.name}`,
  description:
    "Diseño y desarrollo páginas web a la medida para negocios: sitios profesionales y sitios con sistema de citas en línea. Trato directo, desde Aguascalientes para cualquier ciudad o país.",
};

export const hero = {
  badge: "Desarrollador Web · Aguascalientes, México",
  title: "Páginas web que le traen clientes a tu negocio",
  highlight: "clientes a tu negocio",
  subtitle:
    "Diseño y desarrollo el sitio web de tu negocio, sea cual sea tu giro: para que te encuentren en Google, te escriban por WhatsApp y te agenden citas sin llamadas.",
  primaryCta: { label: "Cotiza tu sitio web", href: "/contacto" },
  whatsappLabel: "Escríbeme por WhatsApp",
  trustSignals: [
    { icon: "palette", label: "Diseño a la medida" },
    { icon: "smartphone", label: "Se ve perfecto en celular" },
    { icon: "user-check", label: "Trato directo conmigo" },
  ] as const,
  visualLabel: "Sitios web que he desarrollado",
};

export const problems = {
  heading: {
    eyebrow: "¿Te pasa esto?",
    title: "Tu negocio es bueno, pero en internet no se nota",
    highlight: "en internet no se nota",
    description: "Estos son los problemas más comunes de un negocio sin sitio web, y cómo se resuelven.",
  } satisfies Heading,
  solutionLabel: "Con tu sitio web",
  items: [
    {
      icon: "search",
      title: "No te encuentran en Google",
      description: "Alguien busca justo lo que vendes y le aparece tu competencia.",
      solution:
        "Tu negocio aparece con su información, ubicación y horarios cuando te buscan.",
    },
    {
      icon: "message-circle",
      title: "Respondes lo mismo todo el día",
      description: "Precios, horarios, ubicación… los mismos mensajes de WhatsApp una y otra vez.",
      solution:
        "Tu sitio responde las dudas de siempre, y quien te escribe ya llega listo para comprar.",
    },
    {
      icon: "calendar-x",
      title: "Agendas en una libreta y se te cruzan",
      description: "Citas anotadas a mano, horarios encimados y clientes que no llegan.",
      solution:
        "Tus clientes reservan en línea solo en los horarios que tienes libres.",
    },
  ] satisfies Problem[],
};

export const servicesPreview = {
  heading: {
    eyebrow: "Servicios",
    title: "Elige cómo quieres crecer",
    highlight: "crecer",
    description: "Dos servicios claros y la opción de armar algo a tu medida.",
  } satisfies Heading,
  cardLink: "Ver qué incluye",
  customLink: "Platiquemos tu idea",
  allLink: "Comparar los servicios",
};

export const industriesPreview = {
  heading: {
    eyebrow: "Soluciones",
    title: "Para cualquier tipo de negocio",
    highlight: "cualquier tipo de negocio",
    description:
      "Pizzería, consultorio, tienda, taller… cada giro necesita algo distinto de su sitio web.",
  } satisfies Heading,
  link: "Ver la solución para tu giro",
};

export const reach = {
  heading: {
    eyebrow: "Alcance",
    title: "Hasta dónde puede llegar tu negocio",
    highlight: "tu negocio",
    description: "Un sitio web no es un gasto de imagen: es una herramienta que trabaja todos los días.",
  } satisfies Heading,
  items: [
    {
      icon: "clock",
      title: "Abierto 24/7 en internet",
      description: "Tus clientes te conocen y te contactan aunque tu local esté cerrado.",
    },
    {
      icon: "map-pin",
      title: "Te encuentran en Google y en Maps",
      description: "Quien busca lo que ofreces cerca de ti puede llegar a tu negocio.",
    },
    {
      icon: "message-circle",
      title: "Mensajes por WhatsApp y formulario",
      description: "Te escriben con un toque, desde cualquier sección del sitio.",
    },
    {
      icon: "calendar-check",
      title: "Citas sin llamadas",
      description: "Tus clientes reservan solos y tú solo revisas tu agenda.",
    },
    {
      icon: "shield-check",
      title: "Una imagen profesional que da confianza",
      description: "Un sitio cuidado le dice a tu cliente que tu negocio va en serio.",
    },
    {
      icon: "trending-up",
      title: "Un sitio que crece contigo",
      description: "Empiezas con lo esencial y agregas funciones después, cuando las necesites.",
    },
  ] satisfies Feature[],
};

export const aboutTeaser = {
  heading: {
    eyebrow: "Trato directo",
    title: "Trabajas directamente conmigo",
    highlight: "directamente conmigo",
  } satisfies Heading,
  paragraphs: [
    "Soy Diego Fernández, desarrollador web en Aguascalientes, México. Hablas con la misma persona que diseña y construye tu sitio, sin intermediarios.",
    "Trabajo 100 % remoto por videollamada, WhatsApp y correo, con negocios de cualquier ciudad o país.",
  ],
  link: "Conóceme",
};

export const finalCta = {
  title: "Hagamos el sitio web de tu negocio",
  highlight: "tu negocio",
  description:
    "Cuéntame qué necesitas y te envío una propuesta con alcance y costo claros. Sin tecnicismos.",
  primary: { label: "Cotiza tu sitio web", href: "/contacto" },
  whatsappLabel: "Escríbeme por WhatsApp",
  whatsappMessage: whatsappMessages.general,
} satisfies CtaContent;
