import type { Heading } from "@/types";

export const contactSeo = {
  title: "Contacto: cotiza la página web de tu negocio",
  description:
    "Cuéntame sobre tu negocio y cotiza tu página web. Escríbeme por el formulario, por WhatsApp o por correo. Aguascalientes, México · Trabajo remoto.",
};

export const contactHero = {
  eyebrow: "Contacto",
  title: "Cuéntame de tu negocio",
  highlight: "tu negocio",
  description:
    "Escríbeme qué necesitas, aunque todavía no lo tengas muy claro. Te respondo yo, no un vendedor.",
} satisfies Heading;

export const contactChannels = {
  title: "También puedes escribirme directo",
  whatsappTitle: "WhatsApp",
  emailTitle: "Correo",
  locationTitle: "Ubicación",
  locationNote: "Trabajo remoto",
};

// Texto neutral a propósito: no promete tiempos de respuesta.
// TODO(Diego): si quieres comprometerte con un tiempo de respuesta, agrégalo en el paso 1.
export const contactNextSteps = {
  heading: {
    eyebrow: "Qué sigue",
    title: "¿Qué pasa después de que me escribes?",
    highlight: "después de que me escribes",
  } satisfies Heading,
  steps: [
    {
      title: "Leo tu mensaje y te respondo",
      description: "Te contacto por el medio que hayas usado para resolver dudas y conocer mejor tu negocio.",
    },
    {
      title: "Platicamos lo que necesitas",
      description: "Por videollamada, WhatsApp o correo, como te quede mejor.",
    },
    {
      title: "Recibes una propuesta clara",
      description: "Con lo que incluye tu sitio, el tiempo estimado y el costo, para que decidas con calma.",
    },
  ],
};
