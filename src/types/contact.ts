export type ContactFieldName = "nombre" | "apellidos" | "email" | "mensaje";

export interface ContactField {
  name: ContactFieldName;
  label: string;
  placeholder: string;
  kind: "text" | "email" | "textarea";
  autoComplete: string;
  /** Ocupa media fila en pantallas anchas. */
  half: boolean;
}

export type ContactFormValues = Record<ContactFieldName, string>;

export interface ContactFormMessages {
  submit: string;
  sending: string;
  success: string;
  error: string;
  /** Aviso de privacidad simplificado que se muestra bajo el botón de enviar. */
  privacyNotice: string;
  privacyLinkLabel: string;
  privacyHref: string;
}

export interface PrivacySection {
  title: string;
  paragraphs: string[];
  items?: string[];
}
