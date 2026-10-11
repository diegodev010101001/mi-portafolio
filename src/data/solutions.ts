import type { CtaContent, Heading, Solution, SolutionCategory } from "@/types";
import { whatsappLabels, whatsappMessages } from "./whatsapp-messages";

export const solutionCategories = [
  { id: "alimentos", label: "Alimentos" },
  { id: "salud", label: "Salud" },
  { id: "belleza", label: "Belleza y bienestar" },
  { id: "comercio", label: "Comercio" },
  { id: "profesionales", label: "Servicios profesionales" },
  { id: "educacion", label: "Educación" },
] satisfies SolutionCategory[];

export const solutions = [
  {
    slug: "pizzeria",
    name: "Pizzería",
    category: "alimentos",
    icon: "pizza",
    problem: "Te piden el menú y los precios por WhatsApp una y otra vez, justo a la hora de más trabajo.",
    features: [
      "Menú con fotos y precios siempre actualizado",
      "Botón para pedir por WhatsApp",
      "Horarios, ubicación y zona de entrega",
    ],
    recommendedService: "sitio-web-para-negocios",
    whatsappMessage: "Hola Diego, tengo una pizzería y me interesa una página web.",
  },
  {
    slug: "restaurante",
    name: "Restaurante o cafetería",
    category: "alimentos",
    icon: "utensils",
    problem: "Quien busca dónde comer cerca no te encuentra, o no sabe qué sirves ni a qué hora abres.",
    features: [
      "Menú digital fácil de leer en el celular",
      "Galería del lugar y de tus platillos",
      "Mapa, horarios y contacto para reservaciones",
    ],
    recommendedService: "sitio-web-para-negocios",
    whatsappMessage: "Hola Diego, tengo un restaurante y me interesa una página web.",
  },
  {
    slug: "consultorio",
    name: "Consultorio médico o dental",
    category: "salud",
    icon: "stethoscope",
    problem: "Las citas se agendan por teléfono, se anotan en una libreta y a veces se cruzan o se olvidan.",
    features: [
      "Agenda en línea por servicio, día y hora",
      "Presentación de tus servicios y especialidades",
      "Ubicación del consultorio y formas de contacto",
    ],
    recommendedService: "sitio-web-con-citas",
    whatsappMessage: "Hola Diego, tengo un consultorio y me interesa una página web con citas.",
  },
  {
    slug: "farmacia",
    name: "Farmacia",
    category: "salud",
    icon: "pill",
    problem: "La gente no sabe si estás abierto, si tienes servicio a domicilio o cómo preguntar por un producto.",
    features: [
      "Horarios y ubicación a la vista",
      "Botón de WhatsApp para preguntar por productos",
      "Servicios que ofreces, explicados con claridad",
    ],
    recommendedService: "sitio-web-para-negocios",
    whatsappMessage: "Hola Diego, tengo una farmacia y me interesa una página web.",
  },
  {
    slug: "veterinaria",
    name: "Veterinaria",
    category: "salud",
    icon: "paw-print",
    problem: "Entre consultas, baños y vacunas, organizar la agenda por mensajes te quita tiempo de atención.",
    features: [
      "Citas en línea para consulta, estética o vacunación",
      "Lista de servicios y horarios",
      "WhatsApp directo para urgencias y dudas",
    ],
    recommendedService: "sitio-web-con-citas",
    whatsappMessage: "Hola Diego, tengo una veterinaria y me interesa una página web con citas.",
  },
  {
    slug: "estetica",
    name: "Estética, barbería o spa",
    category: "belleza",
    icon: "scissors",
    problem: "Pasas el día contestando “¿tienes espacio hoy?” en lugar de atender a quien ya está en tu silla.",
    features: [
      "Reservaciones en línea a cualquier hora",
      "Catálogo de servicios",
      "Galería de tus trabajos y enlaces a tus redes",
    ],
    recommendedService: "sitio-web-con-citas",
    whatsappMessage:
      "Hola Diego, tengo una estética/barbería y me interesa una página web con citas.",
  },
  {
    slug: "gimnasio",
    name: "Gimnasio o estudio",
    category: "belleza",
    icon: "dumbbell",
    problem: "Los interesados preguntan lo mismo: horarios, clases y cómo inscribirse, y muchos no vuelven a escribir.",
    features: [
      "Clases, horarios e instalaciones en un solo lugar",
      "Galería del espacio",
      "Contacto directo para inscribirse",
    ],
    recommendedService: "sitio-web-para-negocios",
    whatsappMessage: "Hola Diego, tengo un gimnasio y me interesa una página web.",
  },
  {
    slug: "abarrotes",
    name: "Tienda de abarrotes",
    category: "comercio",
    icon: "shopping-basket",
    problem: "Tus vecinos te conocen, pero quien busca una tienda cerca en Google Maps no te ve.",
    features: [
      "Presencia en Google con ubicación y horarios",
      "Lo que vendes y los servicios que ofreces",
      "Pedidos y dudas por WhatsApp",
    ],
    recommendedService: "sitio-web-para-negocios",
    whatsappMessage: "Hola Diego, tengo una tienda de abarrotes y me interesa una página web.",
  },
  {
    slug: "tienda-de-ropa",
    name: "Tienda de ropa",
    category: "comercio",
    icon: "shirt",
    problem: "Tus publicaciones en redes se pierden en unos días y tus clientes no encuentran lo que vendes.",
    features: [
      "Galería ordenada de tus productos",
      "Botón para preguntar o apartar por WhatsApp",
      "Enlaces a tus redes, ubicación y horarios",
    ],
    recommendedService: "sitio-web-para-negocios",
    whatsappMessage: "Hola Diego, tengo una tienda de ropa y me interesa una página web.",
  },
  {
    slug: "taller-mecanico",
    name: "Taller mecánico",
    category: "profesionales",
    icon: "wrench",
    problem: "Los clientes llegan sin avisar o todos el mismo día, y es difícil organizar el trabajo.",
    features: [
      "Citas en línea para revisión o servicio",
      "Lista de los servicios que realizas",
      "Ubicación, horarios y WhatsApp directo",
    ],
    recommendedService: "sitio-web-con-citas",
    whatsappMessage: "Hola Diego, tengo un taller mecánico y me interesa una página web.",
  },
  {
    slug: "despacho",
    name: "Despacho contable o jurídico",
    category: "profesionales",
    icon: "briefcase",
    problem: "Un cliente nuevo quiere saber quién eres y si puede confiar en ti antes de llamarte.",
    features: [
      "Presentación profesional de tu despacho y tus servicios",
      "Formulario de contacto que llega a tu correo",
      "Opción de agendar asesorías en línea",
    ],
    recommendedService: "sitio-web-para-negocios",
    whatsappMessage: "Hola Diego, tengo un despacho y me interesa una página web.",
  },
  {
    slug: "escuela",
    name: "Escuela o academia",
    category: "educacion",
    icon: "graduation-cap",
    problem: "Los papás y alumnos piden informes de cursos, horarios e inscripciones todos los días.",
    features: [
      "Cursos, niveles y horarios explicados con claridad",
      "Galería de instalaciones y actividades",
      "Formulario para pedir informes",
    ],
    recommendedService: "sitio-web-para-negocios",
    whatsappMessage: "Hola Diego, tengo una escuela/academia y me interesa una página web.",
  },
] satisfies Solution[];

export const solutionsContent = {
  seo: {
    title: "Páginas web para cada tipo de negocio: restaurantes, consultorios, tiendas y más",
    description:
      "Soluciones web por giro: pizzerías, restaurantes, farmacias, consultorios, estéticas, talleres, despachos, escuelas y más. Mira qué tendría el sitio de tu negocio.",
  },
  hero: {
    eyebrow: "Soluciones",
    title: "Soluciones para cada tipo de negocio",
    highlight: "cada tipo de negocio",
    description:
      "Cada giro tiene sus propios problemas. Encuentra el tuyo y mira qué tendría tu sitio web para resolverlos.",
  } satisfies Heading,
  filter: {
    label: "Filtrar por categoría",
    all: "Todos",
  },
  card: {
    problemLabel: "El problema",
    featuresLabel: "Qué tendría tu sitio",
    serviceLabel: "Servicio recomendado",
    quote: "Cotizar",
  },
  closing: {
    title: "¿Tu giro no aparece? Trabajo con cualquier tipo de negocio",
    highlight: "cualquier tipo de negocio",
    description:
      "Estos son solo ejemplos. Cuéntame a qué te dedicas y vemos juntos qué necesita tu negocio para estar en internet.",
    primary: { label: "Cotiza tu sitio web", href: "/contacto" },
    whatsappLabel: whatsappLabels.cta,
    whatsappMessage: whatsappMessages.otherIndustry,
  } satisfies CtaContent,
};
