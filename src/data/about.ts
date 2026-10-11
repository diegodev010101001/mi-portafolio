import type { Feature, Heading, ImageAsset } from "@/types";

export const aboutSeo = {
  title: "Sobre mí: Diego Fernández, desarrollador web en Aguascalientes",
  description:
    "Soy Diego Fernández, desarrollador web freelance en Aguascalientes, México. Trabajo directo contigo, de forma remota, para construir el sitio que tu negocio necesita.",
};

export const profilePhoto = {
  src: "/images/mifoto.jpeg",
  alt: "Diego Fernández, desarrollador web",
  width: 960,
  height: 1280,
} satisfies ImageAsset;

export const aboutIntro = {
  heading: {
    eyebrow: "Nosotros",
    title: "Detrás de tu sitio hay una persona, no una agencia",
    highlight: "una persona",
  } satisfies Heading,
  paragraphs: [
    "Hola, soy Diego Fernández. Diseño y desarrollo sitios web para negocios desde Aguascalientes, México.",
    "Cuando trabajas conmigo hablas con quien construye tu sitio: yo te escucho, yo diseño, yo programo y yo te entrego. Así nada se pierde en el camino y tus dudas se resuelven rápido y en palabras sencillas.",
    "Mi trabajo no es llenarte de términos técnicos, sino entender cómo funciona tu negocio y convertirlo en un sitio que te ayude a conseguir clientes.",
  ],
  primaryCta: { label: "Cotiza tu sitio web", href: "/contacto" },
  whatsappLabel: "Escríbeme por WhatsApp",
};

export const whyMe = {
  heading: {
    eyebrow: "Por qué trabajar conmigo",
    title: "Lo que puedes esperar de mí",
    highlight: "esperar de mí",
  } satisfies Heading,
  items: [
    {
      icon: "user-check",
      title: "Trato directo",
      description: "Sin intermediarios ni vendedores: hablas con quien hace tu sitio de principio a fin.",
    },
    {
      icon: "messages-square",
      title: "Comunicación clara",
      description: "Te explico cada paso sin tecnicismos y siempre sabes en qué va tu proyecto.",
    },
    {
      icon: "handshake",
      title: "Enfoque en tu negocio",
      description: "Antes de diseñar, entiendo a qué te dedicas y qué necesitan tus clientes.",
    },
  ] satisfies Feature[],
};

export const educationHeading = {
  eyebrow: "Formación",
  title: "Preparación que respalda tu proyecto",
  highlight: "respalda tu proyecto",
} satisfies Heading;

export const remoteBlock = {
  heading: {
    eyebrow: "Trabajo remoto",
    title: "Desde Aguascalientes para el mundo",
    highlight: "para el mundo",
    description:
      "No importa en qué ciudad o país esté tu negocio: todo el proyecto se puede hacer en línea.",
  } satisfies Heading,
  items: [
    {
      icon: "video",
      title: "Videollamada",
      description: "Para conocernos, revisar el diseño y ver avances.",
    },
    {
      icon: "message-circle",
      title: "WhatsApp",
      description: "Para dudas rápidas y el seguimiento del día a día.",
    },
    {
      icon: "mail",
      title: "Correo",
      description: "Para propuestas, archivos y acuerdos por escrito.",
    },
  ] satisfies Feature[],
};
