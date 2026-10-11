import type { Education, Heading, Technology } from "@/types";

/** Cada tecnología se presenta por lo que gana el negocio del cliente. */
export const technologies = [
  {
    id: "nextjs",
    name: "Next.js",
    benefit: "Tu sitio carga rápido y Google lo entiende mejor.",
    logo: { src: "/images/Next.png", alt: "Logotipo de Next.js", width: 260, height: 260 },
  },
  {
    id: "react",
    name: "React",
    benefit: "Navegación fluida, sin esperas entre una sección y otra.",
    logo: { src: "/images/react.png", alt: "Logotipo de React", width: 250, height: 225 },
  },
  {
    id: "typescript",
    name: "TypeScript",
    benefit: "Código más confiable y con menos errores.",
    logo: { src: "/images/typescript.webp", alt: "Logotipo de TypeScript", width: 960, height: 960 },
  },
  {
    id: "javascript",
    name: "JavaScript",
    benefit: "Menús, formularios y botones que responden al instante.",
    logo: { src: "/images/javascript.png", alt: "Logotipo de JavaScript", width: 225, height: 225 },
  },
  {
    id: "html",
    name: "HTML",
    benefit: "Bases sólidas que funcionan en cualquier navegador.",
    logo: { src: "/images/html.png", alt: "Logotipo de HTML5", width: 600, height: 600 },
  },
  {
    id: "css",
    name: "CSS",
    benefit: "Un diseño que se ve bien en celular, tablet y computadora.",
    logo: { src: "/images/css.png", alt: "Logotipo de CSS3", width: 225, height: 225 },
  },
  {
    id: "sql",
    name: "SQL",
    benefit: "Tus citas y datos guardados de forma segura y ordenada.",
    logo: { src: "/images/sql.webp", alt: "Ícono de bases de datos SQL", width: 400, height: 400 },
  },
  {
    id: "nosql",
    name: "NoSQL",
    benefit: "Información flexible que crece junto con tu negocio.",
    logo: { src: "/images/nosql.png", alt: "Ícono de bases de datos NoSQL", width: 348, height: 348 },
  },
  {
    id: "github",
    name: "GitHub",
    benefit: "Tu proyecto respaldado y con historial de cambios.",
    logo: { src: "/images/github.png", alt: "Logotipo de GitHub", width: 512, height: 512 },
  },
] satisfies Technology[];

export const technologiesContent = {
  marqueePhrase: "Tecnologías modernas para que tu sitio sea rápido, seguro y fácil de crecer",
  marqueeLink: "Ver qué gana tu negocio con cada una",
  section: {
    eyebrow: "Tecnologías",
    title: "Herramientas modernas, beneficios concretos",
    highlight: "beneficios concretos",
    description:
      "No necesitas saber de tecnología. Esto es lo que gana tu negocio con cada herramienta que uso.",
  } satisfies Heading,
};

// TODO(Diego): confirma si quieres mostrar el periodo tal cual o como "en curso".
export const education = {
  degree: "Ingeniería en Sistemas Computacionales",
  institution: "Universidad Politécnica de Aguascalientes",
  period: "2022 – 2027",
  description:
    "Mi formación en ingeniería respalda lo que construyo: sitios bien hechos por dentro, no solo bonitos por fuera.",
  logo: {
    src: "/images/upa.png",
    alt: "Logotipo de la Universidad Politécnica de Aguascalientes",
    width: 289,
    height: 174,
  },
} satisfies Education;
