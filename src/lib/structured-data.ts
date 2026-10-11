import { siteConfig } from "@/config/site";

/** JSON-LD `ProfessionalService` para que Google entienda el negocio y su zona de servicio. */
export function buildProfessionalServiceJsonLd(): string {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/icons/icon-512.png`,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    founder: { "@type": "Person", name: siteConfig.owner },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aguascalientes",
      addressRegion: "Aguascalientes",
      addressCountry: "MX",
    },
    areaServed: [
      { "@type": "City", name: "Aguascalientes" },
      { "@type": "Country", name: "México" },
      { "@type": "Place", name: "Atención remota en cualquier ciudad o país" },
    ],
    sameAs: siteConfig.socials.map((social) => social.href),
  };

  // Escapar "<" evita que un texto pueda cerrar la etiqueta <script>.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
