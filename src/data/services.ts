import type { ComparisonRow, CustomProject, Feature, Heading, Service, ServiceSlug } from "@/types";

// TODO(Diego): confirma qué incluye cada servicio (listas `includes`, tabla `serviceComparison`
// y preguntas frecuentes). Todo lo que aparece aquí se publica como parte de tu oferta.

const websiteIncludes: Feature[] = [
  {
    icon: "palette",
    title: "Diseño a la medida",
    description: "Con los colores, el logo y el estilo de tu negocio. Nada de plantillas genéricas.",
  },
  {
    icon: "smartphone",
    title: "Se ve perfecto en cualquier pantalla",
    description: "Se adapta a celular, tablet y computadora, que es donde te buscan tus clientes.",
  },
  {
    icon: "layers",
    title: "Las secciones de tu negocio",
    description: "Inicio, productos, servicios o menú, quién eres y cómo contactarte.",
  },
  {
    icon: "mail",
    title: "Formulario de contacto",
    description: "Los mensajes de tus clientes llegan directo a tu correo.",
  },
  {
    icon: "message-circle",
    title: "Botones de WhatsApp",
    description: "Uno flotante y otros en las secciones clave, para que te escriban con un toque.",
  },
  {
    icon: "map-pin",
    title: "Ubicación y horarios",
    description: "Mapa de Google Maps y horarios de atención siempre a la vista.",
  },
  {
    icon: "image",
    title: "Galería y redes sociales",
    description: "Fotos de tu trabajo y enlaces a tus redes para que te conozcan mejor.",
  },
  {
    icon: "gauge",
    title: "Rápido y listo para Google",
    description: "Optimización básica de velocidad y de buscadores para que te encuentren.",
  },
  {
    icon: "rocket",
    title: "Publicación en internet",
    description: "Me encargo de dejar tu sitio en línea y funcionando.",
  },
];

const bookingIncludes: Feature[] = [
  {
    icon: "calendar-check",
    title: "Agenda en línea",
    description: "Tu cliente elige el servicio, la fecha y una hora disponible desde su celular.",
  },
  {
    icon: "bell",
    title: "Confirmación de la cita",
    description: "Cada reservación queda registrada y confirmada, sin llamadas ni mensajes de ida y vuelta.",
  },
  {
    icon: "layout-dashboard",
    title: "Panel para tu negocio",
    description: "Ve todas tus citas en un solo lugar: confírmalas, reprográmalas o cancélalas.",
  },
  {
    icon: "calendar-x",
    title: "Bloqueo de días y horarios",
    description: "Cierra vacaciones, días festivos u horas ocupadas para que nadie reserve ahí.",
  },
];

export const services = [
  {
    slug: "sitio-web-para-negocios",
    name: "Sitio web para tu negocio",
    icon: "monitor",
    summary:
      "Tu negocio en internet con una página profesional: quién eres, qué ofreces, dónde estás y cómo contactarte.",
    description:
      "Una página web diseñada para tu negocio que trabaja por ti todo el día: presenta lo que ofreces, responde las dudas de siempre y lleva a tus clientes a escribirte o visitarte.",
    idealFor:
      "Ideal para restaurantes, tiendas, farmacias, talleres, despachos y cualquier negocio que quiera verse profesional y ser fácil de encontrar.",
    includes: websiteIncludes,
    flows: [
      {
        audience: "Para tu cliente",
        title: "Así te encuentra y te contacta",
        steps: [
          {
            title: "Te busca en Google o abre tu enlace",
            description: "Llega a tu sitio desde el buscador, tus redes o un código QR en tu local.",
          },
          {
            title: "Encuentra lo que necesita",
            description: "Ve qué ofreces, tus horarios, tu ubicación y fotos de tu trabajo en segundos.",
          },
          {
            title: "Te escribe con un toque",
            description: "Te manda un WhatsApp o llena el formulario, y el mensaje te llega directo.",
          },
        ],
      },
    ],
    idealSolutions: [
      "pizzeria",
      "restaurante",
      "farmacia",
      "abarrotes",
      "tienda-de-ropa",
      "gimnasio",
      "despacho",
      "escuela",
    ],
    relatedProject: "asistencia-para-gas",
    faqs: [
      {
        question: "No tengo fotos ni textos, ¿puedo tener mi sitio?",
        answer:
          "Sí. Me cuentas de tu negocio y yo te ayudo a ordenar la información y a redactar los textos. Si no tienes fotos, vemos juntos qué opciones hay para empezar.",
      },
      {
        question: "¿Puedo agregar más secciones o funciones después?",
        answer:
          "Sí. El sitio se construye para crecer contigo: puedes empezar con lo esencial y más adelante agregar un sistema de citas u otras funciones.",
      },
      {
        question: "¿Mi sitio va a aparecer en Google?",
        answer:
          "Tu sitio se entrega con optimización básica para buscadores: estructura correcta, buena velocidad y la información que Google necesita para entender tu negocio. La posición exacta depende de la competencia y del tiempo, por eso no prometo un lugar específico.",
      },
    ],
    whatsappMessage:
      "Hola Diego, me interesa el servicio «Sitio web para tu negocio». ¿Me das más información?",
    seo: {
      title: "Sitio web para tu negocio: página web profesional a la medida",
      description:
        "Página web profesional para tu negocio: diseño a la medida, adaptada a celular, con WhatsApp, formulario de contacto, Google Maps y optimización para Google.",
    },
  },
  {
    slug: "sitio-web-con-citas",
    name: "Sitio web con sistema de citas",
    icon: "calendar-check",
    summary:
      "Todo lo de un sitio profesional, más una agenda en línea para que tus clientes reserven solos a cualquier hora.",
    description:
      "Tu sitio web con una agenda integrada: tus clientes eligen servicio, día y hora desde su celular, y tú administras todo desde un panel sencillo. Menos llamadas, menos mensajes y menos citas cruzadas.",
    idealFor:
      "Ideal para consultorios, estéticas, barberías, spas, talleres y despachos: cualquier negocio que atienda con cita.",
    includesNote: "Incluye todo lo del sitio web para tu negocio, más:",
    includes: bookingIncludes,
    flows: [
      {
        audience: "Para tu cliente",
        title: "Reserva en menos de un minuto",
        steps: [
          {
            title: "Elige el servicio",
            description: "Ve la lista de lo que ofreces y selecciona lo que necesita.",
          },
          {
            title: "Escoge fecha y hora",
            description: "Solo ve los horarios que realmente tienes disponibles.",
          },
          {
            title: "Recibe su confirmación",
            description: "Deja sus datos y la cita queda registrada, sin llamar ni esperar respuesta.",
          },
        ],
      },
      {
        audience: "Para ti",
        title: "Tu agenda bajo control",
        steps: [
          {
            title: "Ves tus citas en un panel",
            description: "Todas las reservaciones ordenadas por día, desde tu celular o computadora.",
          },
          {
            title: "Confirmas, reprogramas o cancelas",
            description: "Administras cada cita con un par de clics.",
          },
          {
            title: "Bloqueas días y horarios",
            description: "Marcas cuándo no atiendes y esos espacios dejan de mostrarse.",
          },
        ],
      },
    ],
    idealSolutions: ["consultorio", "estetica", "veterinaria", "taller-mecanico", "despacho", "gimnasio"],
    relatedProject: "freedom-depilacion-laser",
    faqs: [
      {
        question: "¿Necesito saber de computación para usar el panel?",
        answer:
          "No. El panel está pensado para usarse igual que cualquier aplicación de tu celular, y te explico cómo funciona cuando te entrego el sitio.",
      },
      {
        question: "¿Qué pasa si dos personas quieren la misma hora?",
        answer:
          "Cuando alguien reserva un horario, ese espacio deja de estar disponible para los demás, así que las citas no se enciman.",
      },
      {
        question: "¿Puedo seguir agendando por WhatsApp o por teléfono?",
        answer:
          "Sí. El sistema de citas se suma a lo que ya haces: tu sitio conserva los botones de WhatsApp y tú decides cómo atender a cada cliente.",
      },
    ],
    whatsappMessage:
      "Hola Diego, me interesa el servicio «Sitio web con sistema de citas». ¿Me das más información?",
    seo: {
      title: "Página web con sistema de citas en línea para tu negocio",
      description:
        "Sitio web con agenda en línea: tus clientes reservan servicio, fecha y hora desde su celular y tú administras las citas desde un panel. Para consultorios, estéticas, barberías y más.",
    },
  },
] satisfies Service[];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

const allServices: Record<ServiceSlug, boolean> = {
  "sitio-web-para-negocios": true,
  "sitio-web-con-citas": true,
};
const bookingOnly: Record<ServiceSlug, boolean> = {
  "sitio-web-para-negocios": false,
  "sitio-web-con-citas": true,
};

export const serviceComparison = [
  { feature: "Diseño a la medida con tu identidad", availability: allServices },
  { feature: "Adaptado a celular, tablet y computadora", availability: allServices },
  { feature: "Secciones de tu negocio", availability: allServices },
  { feature: "Formulario de contacto a tu correo", availability: allServices },
  { feature: "Botones de WhatsApp", availability: allServices },
  { feature: "Google Maps y horarios", availability: allServices },
  { feature: "Galería y redes sociales", availability: allServices },
  { feature: "Optimización básica para Google y velocidad", availability: allServices },
  { feature: "Publicación en internet", availability: allServices },
  { feature: "Agenda en línea por servicio, fecha y hora", availability: bookingOnly },
  { feature: "Confirmación de citas", availability: bookingOnly },
  { feature: "Panel para administrar las citas", availability: bookingOnly },
  { feature: "Bloqueo de días y horarios", availability: bookingOnly },
] satisfies ComparisonRow[];

export const comparisonLabels = {
  featureColumn: "Qué incluye",
  included: "Incluido",
  notIncluded: "No incluido",
};

export const customProject = {
  icon: "puzzle",
  name: "Proyecto a la medida",
  summary:
    "¿Tu negocio necesita algo distinto? Cuéntame la idea y armamos una solución hecha para ti.",
  description:
    "Si lo que tienes en mente no encaja en ninguno de los dos servicios, lo platicamos. Reviso qué necesita tu negocio y te propongo una solución con alcance y costo claros antes de empezar.",
  examples: [
    "Catálogo de productos con pedidos por WhatsApp",
    "Rediseño de un sitio que ya tienes",
    "Funciones especiales para tu forma de trabajar",
  ],
  whatsappLabel: "Cuéntame tu idea",
  whatsappMessage:
    "Hola Diego, tengo una idea para un proyecto a la medida y me gustaría platicarla contigo.",
} satisfies CustomProject;

export const servicesContent = {
  seo: {
    title: "Servicios de páginas web para negocios y sitios con sistema de citas",
    description:
      "Dos servicios claros: sitio web profesional para tu negocio y sitio web con sistema de citas en línea. Compara qué incluye cada uno y cotiza por WhatsApp.",
  },
  hero: {
    eyebrow: "Servicios",
    title: "Lo que puedo construir para tu negocio",
    highlight: "tu negocio",
    description:
      "Dos servicios pensados para negocios reales. Elige el que se parece a lo que necesitas o cuéntame tu idea y lo armamos a la medida.",
  } satisfies Heading,
  comparison: {
    eyebrow: "Comparativa",
    title: "Alcance de cada servicio",
    highlight: "cada servicio",
    description: "Revisa de un vistazo qué incluye cada opción.",
  } satisfies Heading,
  custom: {
    eyebrow: "A la medida",
    title: "¿Necesitas algo diferente?",
    highlight: "diferente",
  } satisfies Heading,
  labels: {
    details: "Ver todo lo que incluye",
    quote: "Cotizar",
    seeSolutions: "Ver soluciones por giro",
    allServices: "Todos los servicios",
  },
  detailHeadings: {
    includes: { eyebrow: "Qué incluye", title: "Todo lo que recibe tu negocio", highlight: "tu negocio" },
    flows: { eyebrow: "Cómo funciona", title: "Paso a paso, así de sencillo", highlight: "así de sencillo" },
    ideal: { eyebrow: "Ideal para", title: "Negocios como el tuyo", highlight: "el tuyo" },
    project: { eyebrow: "Proyecto real", title: "Así se ve funcionando", highlight: "funcionando" },
    faq: { eyebrow: "Dudas", title: "Preguntas sobre este servicio", highlight: "este servicio" },
  } satisfies Record<string, Heading>,
};
