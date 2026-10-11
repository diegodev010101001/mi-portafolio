import type { Faq, Heading } from "@/types";

export const faqHeading = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que casi todos me preguntan",
  highlight: "me preguntan",
} satisfies Heading;

// TODO(Diego): revisa estas respuestas. Evité precios, tiempos y garantías; si quieres
// comprometerte con algo concreto (anticipo, formas de pago, soporte), agrégalo aquí.
export const generalFaqs = [
  {
    question: "¿Cuánto cuesta una página web?",
    answer:
      "Depende de lo que necesite tu negocio: no es lo mismo un sitio informativo que uno con sistema de citas. Cuéntame qué buscas y te envío una propuesta con el alcance y el costo por escrito antes de empezar.",
  },
  {
    question: "¿Cuánto tiempo tarda?",
    answer:
      "Depende del tamaño del proyecto y de qué tan pronto tengamos tu información (logo, fotos y textos). En la propuesta te indico el tiempo estimado para tu caso.",
  },
  {
    question: "No sé nada de tecnología, ¿es un problema?",
    answer:
      "Para nada. Tú me hablas de tu negocio y yo me encargo de la parte técnica. Todo te lo explico en palabras sencillas.",
  },
  {
    question: "Mi negocio no está en Aguascalientes, ¿podemos trabajar?",
    answer:
      "Sí. Trabajo 100 % remoto por videollamada, WhatsApp y correo, con negocios de cualquier ciudad o país.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer:
      "Lo básico: tu logo si lo tienes, algunas fotos, la información de lo que ofreces, tus horarios y tus datos de contacto. Si te falta algo, te ayudo a resolverlo.",
  },
  {
    question: "¿Puedo pedir cambios durante el proyecto?",
    answer:
      "Sí. Revisamos el diseño juntos y te comparto avances justamente para ajustar a tiempo. Lo que incluye cada etapa queda claro desde la propuesta.",
  },
] satisfies Faq[];

export const servicesFaqs = [
  {
    question: "¿Cuál servicio le conviene a mi negocio?",
    answer:
      "Si atiendes con cita (consultorio, estética, barbería, spa, taller), te conviene el sitio con sistema de citas. Si lo que necesitas es que te conozcan, te encuentren y te contacten, el sitio web para tu negocio es suficiente. Si tienes dudas, escríbeme y lo vemos juntos.",
  },
  {
    question: "¿Puedo empezar con el sitio web y agregar las citas después?",
    answer:
      "Sí. Puedes empezar con lo esencial y agregar el sistema de citas u otras funciones más adelante.",
  },
  {
    question: "¿El costo es el mismo para todos los negocios?",
    answer:
      "No. Cada propuesta se arma según lo que necesita tu negocio. Por eso primero platicamos y después te envío el alcance y el costo por escrito.",
  },
  {
    question: "¿Y si necesito algo que no está en la lista?",
    answer:
      "Lo platicamos como proyecto a la medida. Reviso qué necesitas y te digo con honestidad si puedo construirlo y cómo.",
  },
] satisfies Faq[];
