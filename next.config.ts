import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // INTENCIONAL: el formulario de contacto (EmailJS) usa las mismas variables que tenía el
  // sitio en Create React App. Next.js solo envía al navegador las que empiezan con
  // NEXT_PUBLIC_, así que las REACT_APP_* llegarían como `undefined`. La opción `env` es
  // legacy pero sigue soportada y las incrusta en el bundle con su nombre original, lo que
  // evita renombrarlas en `.env` y en Vercel. Son llaves públicas de EmailJS (pensadas para
  // usarse en el navegador); no agregues aquí ningún secreto.
  env: {
    REACT_APP_EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
    REACT_APP_EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
    REACT_APP_EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? "",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
