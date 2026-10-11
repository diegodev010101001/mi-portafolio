import { siteConfig } from "@/config/site";
import type { Heading, PrivacySection } from "@/types";

// Este aviso es una base redactada de buena fe, no asesoría legal. Conviene revisarlo con un
// abogado contra la Ley Federal de Protección de Datos Personales en Posesión de los
// Particulares vigente. Si el sitio cambia (analítica, cookies, nuevos proveedores o nuevos
// usos de los datos), hay que actualizar las secciones correspondientes y la fecha.

export const privacySeo = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad integral de ${siteConfig.name}: qué datos personales se recaban en el formulario de contacto, para qué se usan y cómo ejercer tus derechos ARCO.`,
};

export const privacyHero = {
  eyebrow: "Legal",
  title: "Aviso de privacidad",
  highlight: "privacidad",
  description:
    "Aquí te explico qué datos personales recabo cuando me contactas, para qué los uso y cómo puedes decidir sobre ellos.",
} satisfies Heading;

export const privacyLastUpdated = "11 de octubre de 2026";
export const privacyLastUpdatedLabel = "Última actualización";

// Falta el domicilio completo (calle, número, colonia y código postal) para oír y recibir
// notificaciones; por ahora solo se indica ciudad, estado y país.
const responsibleAddress = "Aguascalientes, Aguascalientes, México";

export const privacySections = [
  {
    title: "1. Responsable del tratamiento de tus datos personales",
    paragraphs: [
      `${siteConfig.legalName}, desarrollador web independiente que presta sus servicios bajo el nombre comercial “${siteConfig.name}”, con domicilio en ${responsibleAddress}, es responsable del tratamiento de los datos personales que proporcionas en ${siteConfig.url}.`,
      `Para todo lo relacionado con tus datos personales y con este aviso puedes escribir a ${siteConfig.email}.`,
    ],
  },
  {
    title: "2. Datos personales que se recaban",
    paragraphs: ["Recabo únicamente los datos que tú me proporcionas:"],
    items: [
      "En el formulario de contacto: nombre, apellidos, correo electrónico y el mensaje que escribas.",
      "Si me escribes por WhatsApp: tu número telefónico y la información que compartas en la conversación.",
    ],
  },
  {
    title: "3. Datos personales sensibles",
    paragraphs: [
      "No solicito datos personales sensibles. Te pido que no incluyas este tipo de información (por ejemplo, datos de salud o financieros) en tu mensaje.",
    ],
  },
  {
    title: "4. Finalidades del tratamiento",
    paragraphs: ["Tus datos se utilizan para las siguientes finalidades:"],
    items: [
      "Responder tus solicitudes de contacto o de cotización.",
      "Dar seguimiento a tu solicitud.",
      "Preparar la propuesta que me pidas.",
    ],
  },
  {
    title: "5. Finalidades secundarias",
    paragraphs: [
      "No hay finalidades secundarias: no uso tus datos para publicidad ni para boletines, y no los vendo.",
    ],
  },
  {
    title: "6. Transferencias y proveedores",
    paragraphs: [
      "No transfiero tus datos personales a terceros para otros fines.",
      "Los siguientes proveedores tratan los datos únicamente para que el sitio y el contacto funcionen:",
    ],
    items: [
      "EmailJS: envío del formulario de contacto.",
      "Microsoft Outlook: correo electrónico donde recibo los mensajes.",
      "Vercel: alojamiento del sitio.",
      "WhatsApp, de Meta: solo si me escribes por ese medio.",
    ],
  },
  {
    title: "7. Derechos ARCO",
    paragraphs: [
      "Tienes derecho a acceder a tus datos personales, rectificarlos si son inexactos o están incompletos, cancelarlos cuando consideres que no se requieren para las finalidades señaladas y oponerte a su tratamiento (derechos ARCO).",
      `Para ejercerlos envía un correo a ${siteConfig.email} con la siguiente información:`,
    ],
    items: [
      "Tu nombre.",
      "Un medio para responderte.",
      "Un documento que acredite tu identidad o, en su caso, la representación con la que actúas.",
      "Una descripción clara de lo que solicitas.",
    ],
  },
  {
    title: "8. Revocación del consentimiento y limitación del uso",
    paragraphs: [
      `En cualquier momento puedes revocar tu consentimiento o pedir que limite el uso o la divulgación de tus datos. Envía un correo a ${siteConfig.email} con la misma información que se pide para los derechos ARCO.`,
      "Respondo todas estas solicitudes en los plazos que establece la ley vigente.",
    ],
  },
  {
    title: "9. Cookies y tecnologías de rastreo",
    paragraphs: [
      "Este sitio no utiliza cookies de rastreo ni herramientas de analítica.",
      "Al enviar el formulario de contacto, tu navegador guarda un dato técnico (la hora del envío) que solo sirve para evitar envíos repetidos en pocos segundos. No te identifica y no se usa para rastrearte.",
    ],
  },
  {
    title: "10. Conservación de los datos",
    paragraphs: [
      "Conservo tus datos solo durante el tiempo necesario para cumplir las finalidades descritas y las obligaciones legales aplicables. Después se eliminan.",
    ],
  },
  {
    title: "11. Cambios a este aviso de privacidad",
    paragraphs: [
      `Este aviso puede modificarse por cambios legales o por cambios en mis servicios. Cualquier actualización se publicará en ${siteConfig.url}/aviso-de-privacidad con su fecha correspondiente.`,
    ],
  },
  {
    title: "12. Autoridad",
    paragraphs: [
      "Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir ante la Secretaría Anticorrupción y Buen Gobierno.",
    ],
  },
] satisfies PrivacySection[];
