"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import {
  contactFields,
  contactFormMessages as messages,
  emailJsConfig,
  emptyContactForm,
} from "@/config/contact-form";
import { cn } from "@/lib/utils";
import type { ContactFormValues } from "@/types";
import { FormField } from "./FormField";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(emptyContactForm);
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { serviceId, templateId, publicKey } = emailJsConfig;

    if (!serviceId || !templateId || !publicKey) {
      if (process.env.NODE_ENV === "development") {
        console.warn("Formulario de contacto: falta alguna variable REACT_APP_EMAILJS_* en .env.");
      }
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          nombre: form.nombre,
          apellidos: form.apellidos,
          email: form.email,
          mensaje: form.mensaje,
        },
        publicKey,
      );
      setForm(emptyContactForm);
      setStatus("success");
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus("error");
    }
  };

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      {contactFields.map((field) => (
        <FormField key={field.name} field={field} value={form[field.name]} onChange={handleChange} />
      ))}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={isSending} className="w-full">
          <Icon name="mail" className="size-5" />
          {isSending ? messages.sending : messages.submit}
        </Button>
        <p className="mt-3 text-center text-sm text-ink-muted">
          {messages.privacyPrefix}{" "}
          <Link href={messages.privacyHref} className="text-accent-light underline hover:text-cyan">
            {messages.privacyLinkLabel}
          </Link>
          .
        </p>
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "mt-4 rounded-field border px-4 py-3 text-sm font-medium empty:hidden",
            status === "error" ? "border-danger/40 text-danger" : "border-success/40 text-success",
          )}
        >
          {status === "success" && messages.success}
          {status === "error" && messages.error}
        </p>
      </div>
    </form>
  );
}
