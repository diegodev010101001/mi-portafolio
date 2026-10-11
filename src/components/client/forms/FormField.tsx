"use client";

import type { ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import type { ContactField } from "@/types";

const inputClasses =
  "w-full rounded-field border border-line bg-surface-strong px-4 py-3 text-ink transition placeholder:text-ink-muted focus:border-accent focus:bg-accent-soft focus:outline-none focus-visible:outline-2 focus-visible:outline-cyan";

interface FormFieldProps {
  field: ContactField;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function FormField({ field, value, onChange }: FormFieldProps) {
  const shared = {
    id: field.name,
    name: field.name,
    placeholder: field.placeholder,
    autoComplete: field.autoComplete,
    required: true,
    value,
    onChange,
  };

  return (
    <div className={cn("flex flex-col gap-2", !field.half && "sm:col-span-2")}>
      <label htmlFor={field.name} className="text-sm font-semibold text-ink">
        {field.label}
      </label>
      {field.kind === "textarea" ? (
        <textarea {...shared} rows={5} className={cn(inputClasses, "min-h-32 resize-y")} />
      ) : (
        <input {...shared} type={field.kind} className={inputClasses} />
      )}
    </div>
  );
}
