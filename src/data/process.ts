import type { Feature, Heading, ProcessStep } from "@/types";

// TODO(Diego): confirma cada paso, en especial el acompañamiento después de la entrega (paso 6):
// es un compromiso con el cliente. Si quieres mostrar tiempos, llena `duration` en cada paso.
export const processSteps = [
  {
    icon: "messages-square",
    title: "Platiquemos de tu negocio",
    summary: "Me cuentas qué haces y qué necesitas.",
    description:
      "Por videollamada, WhatsApp o correo me cuentas a qué te dedicas, quiénes son tus clientes y qué quieres lograr con tu sitio. Sin tecnicismos.",
    duration: "",
  },
  {
    icon: "file-text",
    title: "Propuesta clara: alcance, tiempo y costo",
    summary: "Sabes qué recibes antes de empezar.",
    description:
      "Te envío una propuesta por escrito con lo que incluye tu sitio, el tiempo estimado y el costo. Tú decides si avanzamos.",
    duration: "",
  },
  {
    icon: "pen-tool",
    title: "Diseño y ajustes contigo",
    summary: "Ves cómo va a quedar y pides cambios.",
    description:
      "Preparo el diseño con la identidad de tu negocio y lo revisamos juntos. Ajustamos lo necesario hasta que te convenza.",
    duration: "",
  },
  {
    icon: "code",
    title: "Desarrollo con avances",
    summary: "Construyo tu sitio y te muestro el progreso.",
    description:
      "Programo tu sitio y te comparto avances para que veas cómo va tomando forma y puedas opinar a tiempo.",
    duration: "",
  },
  {
    icon: "rocket",
    title: "Pruebas y lanzamiento",
    summary: "Reviso que todo funcione y lo publico.",
    description:
      "Pruebo el sitio en celular, tablet y computadora, reviso formularios y botones, y lo publico en internet.",
    duration: "",
  },
  {
    icon: "life-buoy",
    title: "Acompañamiento después de la entrega",
    summary: "No te quedas solo con tu sitio.",
    description:
      "Te explico cómo funciona tu sitio y sigo disponible para resolver tus dudas después del lanzamiento.",
    duration: "",
  },
] satisfies ProcessStep[];

export const processNeeds = [
  { icon: "image", title: "Tu logo", description: "Si no tienes, lo platicamos y vemos opciones." },
  {
    icon: "sparkles",
    title: "Fotos de tu negocio",
    description: "De tus productos, tu local o tu trabajo. Las del celular pueden servir para empezar.",
  },
  {
    icon: "type",
    title: "Información y textos",
    description: "Qué ofreces y qué te hace diferente. Yo te ayudo a darle forma.",
  },
  { icon: "clock", title: "Horarios", description: "Días y horas en que atiendes." },
  {
    icon: "phone",
    title: "Datos de contacto",
    description: "WhatsApp, teléfono, correo, dirección y redes sociales.",
  },
] satisfies Feature[];

// TODO(Diego): confirma los entregables; se publican como lo que recibe el cliente.
export const processDeliverables = [
  {
    icon: "globe",
    title: "Tu sitio publicado en internet",
    description: "En línea y listo para compartirse con tus clientes.",
  },
  {
    icon: "smartphone",
    title: "Diseño adaptado a todas las pantallas",
    description: "Probado en celular, tablet y computadora.",
  },
  {
    icon: "message-circle",
    title: "Contacto funcionando",
    description: "Formulario y botones de WhatsApp conectados contigo.",
  },
  {
    icon: "user-check",
    title: "Una explicación de cómo usarlo",
    description: "Te muestro cómo funciona tu sitio y, si aplica, tu panel de citas.",
  },
] satisfies Feature[];

export const processContent = {
  seo: {
    title: "Proceso de trabajo: cómo hacemos tu página web paso a paso",
    description:
      "Así trabajamos juntos: platicamos de tu negocio, recibes una propuesta clara, revisas el diseño, ves avances y lanzamos tu sitio. Todo en línea y con trato directo.",
  },
  hero: {
    eyebrow: "Proceso",
    title: "Así trabajamos juntos",
    highlight: "juntos",
    description:
      "Un proceso sencillo y sin sorpresas: siempre sabes en qué va tu sitio y qué sigue. Todo se hace en línea, estés donde estés.",
  } satisfies Heading,
  preview: {
    eyebrow: "Proceso",
    title: "De la primera plática a tu sitio en línea",
    highlight: "tu sitio en línea",
    description: "Seis pasos claros, contigo en cada decisión.",
  } satisfies Heading,
  previewLink: "Ver el proceso completo",
  stepLabel: "Paso",
  needs: {
    eyebrow: "Lo que necesito de ti",
    title: "Poco, y te ayudo a reunirlo",
    highlight: "te ayudo a reunirlo",
    description: "No necesitas tener todo listo para empezar. Con esto avanzamos:",
  } satisfies Heading,
  deliverables: {
    eyebrow: "Lo que recibes",
    title: "Un sitio listo para trabajar por ti",
    highlight: "trabajar por ti",
  } satisfies Heading,
};
