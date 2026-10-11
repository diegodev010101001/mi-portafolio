import type { CtaContent, Heading, Project } from "@/types";
import { whatsappLabels, whatsappMessages } from "./whatsapp-messages";

// TODO(Diego): agrega aquí más casos cuando quieras mostrarlos (por ejemplo, otros clientes
// con su autorización). Cada proyecto necesita una captura real en public/images.
// TODO(Diego): revisa los textos de `challenge` y `solution`: los redacté a partir de la
// descripción que ya tenías y de lo que se ve en cada sitio; ajústalos a lo que pasó en realidad.
// TODO(Diego): si tienes capturas en celular (p. ej. freedom-movil.png), agrégalas como
// `mobileImage`; la maqueta de teléfono aparece sola cuando ese campo existe.
export const projects: Project[] = [
  {
    slug: "freedom-depilacion-laser",
    name: "Freedom Depilación Láser",
    businessType: "Centro de depilación láser y tratamientos de belleza",
    category: "Sitio web con sistema de citas",
    summary:
      "Sitio web con sistema de citas integrado: las clientas eligen servicio, fecha y horario en línea, sin necesidad de llamar.",
    challenge:
      "El negocio necesitaba presentar sus tratamientos con una imagen cuidada y dejar de depender de llamadas y mensajes para agendar.",
    solution: [
      "Sitio a la medida con la identidad de la marca",
      "Agenda en línea para elegir servicio, fecha y horario",
      "Panel administrativo para gestionar las citas",
      "Botón de WhatsApp siempre a la mano",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "Supabase"],
    image: {
      src: "/images/freedom.jpeg",
      alt: "Página de inicio del sitio de Freedom Depilación Láser, con su logotipo y el botón para agendar cita",
      width: 1600,
      height: 847,
    },
    domain: "depilacion-laser-freedom.netlify.app",
    url: "https://depilacion-laser-freedom.netlify.app/",
    relatedService: "sitio-web-con-citas",
    featured: true,
  },
  {
    slug: "asistencia-para-gas",
    name: "Asistencia para Gas",
    businessType: "Empresa de seguros y asistencia especializada en gas",
    category: "Sitio web corporativo",
    summary:
      "Sitio web enfocado en presentar las coberturas con claridad y facilitar el contacto directo con los clientes.",
    challenge:
      "La empresa necesitaba explicar servicios especializados de forma sencilla y que un cliente interesado pudiera cotizar sin dar vueltas.",
    solution: [
      "Diseño sobrio que transmite confianza",
      "Coberturas y servicios explicados por secciones",
      "Preguntas frecuentes y formas de contacto visibles",
      "Botón de cotización siempre presente",
    ],
    technologies: ["React", "Vite", "CSS"],
    image: {
      src: "/images/Asistencia.png",
      alt: "Página de inicio del sitio de Asistencia para Gas, con el titular de protección para la industria del gas LP",
      width: 1600,
      height: 786,
    },
    domain: "asistencia-para-gas-sc.vercel.app",
    url: "https://asistencia-para-gas-sc.vercel.app/",
    relatedService: "sitio-web-para-negocios",
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectsContent = {
  seo: {
    title: "Proyectos: sitios web reales que he desarrollado",
    description:
      "Casos reales: un sitio web con sistema de citas para un centro de depilación láser y un sitio corporativo para una empresa de seguros. Mira cómo quedaron.",
  },
  hero: {
    eyebrow: "Proyectos",
    title: "Sitios reales para negocios reales",
    highlight: "negocios reales",
    description:
      "Estos son sitios que diseñé y desarrollé. Puedes visitarlos y ver cómo funcionan.",
  } satisfies Heading,
  featured: {
    eyebrow: "Proyectos",
    title: "Trabajo que puedes visitar hoy",
    highlight: "visitar hoy",
    description: "Sitios en línea, hechos a la medida de cada negocio.",
  } satisfies Heading,
  featuredLink: "Ver todos los proyectos",
  labels: {
    challenge: "El reto",
    solution: "Qué hice",
    technologies: "Tecnologías",
    visit: "Visitar el sitio",
    caseLink: "Ver el caso",
  },
  cta: {
    title: "¿Quieres un sitio así para tu negocio?",
    highlight: "para tu negocio",
    description: "Cuéntame qué necesitas y te digo cómo lo haríamos.",
    primary: { label: "Cotiza tu sitio web", href: "/contacto" },
    whatsappLabel: whatsappLabels.cta,
    whatsappMessage: whatsappMessages.project,
  } satisfies CtaContent,
};
