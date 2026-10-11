import type { ContactField, ContactFormMessages, ContactFormValues } from "@/types";
import { privacyLink } from "./navigation";

/**
 * Credenciales de EmailJS. Cada variable se lee con su expresión literal completa
 * (sin desestructurar `process.env`) porque Next.js las reemplaza al compilar.
 * Los nombres REACT_APP_* se conservan a propósito; ver `env` en next.config.ts.
 */
export const emailJsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

/**
 * Los `name` coinciden con las variables de la plantilla de EmailJS:
 * no los cambies ni agregues campos sin actualizar la plantilla.
 */
export const contactFields = [
  {
    name: "nombre",
    label: "Nombre",
    placeholder: "Tu nombre",
    kind: "text",
    autoComplete: "given-name",
    half: true,
  },
  {
    name: "apellidos",
    label: "Apellidos",
    placeholder: "Tus apellidos",
    kind: "text",
    autoComplete: "family-name",
    half: true,
  },
  {
    name: "email",
    label: "Correo electrónico",
    placeholder: "tu@email.com",
    kind: "email",
    autoComplete: "email",
    half: false,
  },
  {
    name: "mensaje",
    label: "Mensaje",
    placeholder: "Cuéntame sobre tu negocio y lo que necesitas…",
    kind: "textarea",
    autoComplete: "off",
    half: false,
  },
] satisfies ContactField[];

export const emptyContactForm: ContactFormValues = {
  nombre: "",
  apellidos: "",
  email: "",
  mensaje: "",
};

export const contactFormMessages = {
  submit: "Enviar mensaje",
  sending: "Enviando…",
  success: "¡Mensaje enviado correctamente! Gracias por escribirme.",
  error:
    "No se pudo enviar tu mensaje. Inténtalo de nuevo o escríbeme por WhatsApp o por correo.",
  privacyPrefix: "Al enviar este formulario aceptas el",
  privacyLinkLabel: privacyLink.label.toLowerCase(),
  privacyHref: privacyLink.href,
} satisfies ContactFormMessages;
