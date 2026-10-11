import type { SiteConfig } from "@/types";

export const siteConfig = {
  name: "DiegoDev",
  /** Partes del logotipo de texto: la primera va en el color de acento. */
  wordmark: { accent: "Diego", rest: "Dev" },
  owner: "Diego Fernández",
  url: "https://diegofdev.vercel.app",
  locale: "es-MX",
  ogLocale: "es_MX",
  tagline: "Páginas web que le traen clientes a tu negocio",
  description:
    "Diseño y desarrollo páginas web a la medida para negocios de cualquier giro: sitios profesionales y sitios con sistema de citas en línea. Desde Aguascalientes, México, para clientes de cualquier ciudad o país.",
  footerPitch:
    "Páginas web a la medida para que tu negocio se vea profesional, sea fácil de encontrar y tus clientes te contacten con un toque.",
  location: "Aguascalientes, México",
  phoneDisplay: "449 155 9359",
  phoneE164: "+524491559359",
  whatsappNumber: "524491559359",
  email: "diegofernandezmar@hotmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/diegodev010101001", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/diego-fernandez-martinez-6bb931422",
      icon: "linkedin",
    },
    { label: "Instagram", href: "https://www.instagram.com/_d.fdez_0/", icon: "instagram" },
  ],
} satisfies SiteConfig;
