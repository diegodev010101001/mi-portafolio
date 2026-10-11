import { siteConfig } from "@/config/site";
import type { Heading, PrivacySection } from "@/types";

// TODO(Diego): este aviso es un borrador de buena fe, no asesoría legal. Revísalo (de preferencia
// con un abogado) contra la Ley Federal de Protección de Datos Personales en Posesión de los
// Particulares vigente antes de darlo por definitivo.

export const privacySeo = {
  title: "Aviso de privacidad",
  description:
    "Aviso de privacidad integral de Diego Fernández Web: qué datos personales se recaban en el formulario de contacto, para qué se usan y cómo ejercer tus derechos ARCO.",
};

export const privacyHero = {
  eyebrow: "Legal",
  title: "Aviso de privacidad",
  highlight: "privacidad",
  description:
    "Aquí te explico qué datos personales recabo cuando me contactas, para qué los uso y cómo puedes decidir sobre ellos.",
} satisfies Heading;

// TODO(Diego): escribe la fecha real en la que publiques o cambies este aviso.
export const privacyLastUpdated = "Pendiente de publicar";
export const privacyLastUpdatedLabel = "Última actualización";

// TODO(Diego): completa tu nombre completo y un domicilio para oír y recibir notificaciones.
const responsibleName = "Diego Fernández";
const responsibleAddress = "Aguascalientes, Aguascalientes, México";

export const privacySections = [
  {
    title: "1. Responsable del tratamiento de tus datos personales",
    paragraphs: [
      `${responsibleName}, quien presta servicios de diseño y desarrollo web bajo el nombre comercial “${siteConfig.name}”, con domicilio en ${responsibleAddress}, es responsable del tratamiento de los datos personales que proporcionas en ${siteConfig.url}.`,
      `Para cualquier asunto relacionado con este aviso puedes escribir a ${siteConfig.email}.`,
    ],
  },
  {
    title: "2. Datos personales que se recaban",
    paragraphs: ["Cuando llenas el formulario de contacto o me escribes directamente, recabo:"],
    items: [
      "Nombre y apellidos.",
      "Correo electrónico.",
      "La información que decidas compartir en tu mensaje sobre tu negocio o proyecto.",
      "Tu número telefónico, si me contactas por WhatsApp.",
    ],
  },
  {
    title: "3. Datos personales sensibles",
    paragraphs: [
      "No solicito datos personales sensibles. Te pido que no incluyas este tipo de información (por ejemplo, datos de salud o financieros) en tus mensajes.",
    ],
  },
  {
    title: "4. Finalidades del tratamiento",
    paragraphs: ["Tus datos se utilizan para las siguientes finalidades primarias:"],
    items: [
      "Responder tu mensaje y atender tus dudas.",
      "Elaborar y enviarte la cotización o propuesta que solicites.",
      "Dar seguimiento a la relación comercial y a la prestación del servicio, en caso de que me contrates.",
    ],
  },
  {
    // TODO(Diego): confirma que no usarás los datos para publicidad o boletines. Si lo harás,
    // hay que declararlo aquí como finalidad secundaria y ofrecer una forma de negarse.
    title: "5. Finalidades secundarias",
    paragraphs: [
      "Tus datos no se utilizan para finalidades secundarias como publicidad, boletines o prospección comercial.",
    ],
  },
  {
    // TODO(Diego): confirma los proveedores. El formulario envía los mensajes con EmailJS;
    // si agregas analítica u otros servicios, decláralos aquí.
    title: "6. Transferencias y proveedores",
    paragraphs: [
      "No vendo, rento ni transfiero tus datos personales a terceros, salvo en los casos en que la ley lo exija.",
      "Para operar el sitio utilizo proveedores que actúan como encargados y tratan los datos únicamente para prestar su servicio: un servicio de envío de correo (EmailJS) que hace llegar el formulario a mi bandeja de entrada, mi proveedor de correo electrónico y la plataforma de alojamiento del sitio (Vercel). Si me contactas por WhatsApp, esa conversación se rige además por las políticas de dicha plataforma.",
    ],
  },
  {
    // TODO(Diego): verifica en la ley vigente los plazos y requisitos para atender solicitudes ARCO.
    title: "7. Derechos ARCO",
    paragraphs: [
      "Tienes derecho a acceder a tus datos personales, rectificarlos si son inexactos o están incompletos, cancelarlos cuando consideres que no se requieren para las finalidades señaladas y oponerte a su tratamiento (derechos ARCO).",
      `Para ejercerlos envía una solicitud a ${siteConfig.email} con la siguiente información:`,
    ],
    items: [
      "Tu nombre completo y un medio para comunicarte la respuesta.",
      "Un documento que acredite tu identidad o, en su caso, la de tu representante.",
      "La descripción clara de los datos sobre los que quieres ejercer tu derecho y qué derecho deseas ejercer.",
      "Cualquier elemento que facilite localizar tus datos, por ejemplo, la fecha aproximada en que me escribiste.",
    ],
  },
  {
    title: "8. Revocación del consentimiento y limitación del uso",
    paragraphs: [
      `En cualquier momento puedes revocar el consentimiento que me hayas dado o pedir que limite el uso o la divulgación de tus datos escribiendo a ${siteConfig.email}. Ten en cuenta que, si existe una relación contractual u obligación legal vigente, es posible que no pueda atender la solicitud de inmediato.`,
    ],
  },
  {
    // TODO(Diego): si instalas analítica, píxeles o cookies de terceros, actualiza esta sección.
    title: "9. Cookies y tecnologías de rastreo",
    paragraphs: [
      "Este sitio no utiliza cookies de publicidad ni tecnologías de rastreo para recabar datos personales de forma automática.",
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
    // TODO(Diego): confirma cuál es la autoridad competente en materia de datos personales.
    title: "12. Autoridad",
    paragraphs: [
      "Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir ante la autoridad mexicana competente en materia de protección de datos personales.",
    ],
  },
] satisfies PrivacySection[];
