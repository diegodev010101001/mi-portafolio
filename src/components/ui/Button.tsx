import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "whatsapp";
type Size = "md" | "lg";

const base =
  "inline-flex min-h-touch items-center justify-center gap-2 rounded-full text-center font-semibold transition duration-200 ease-out-expo hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-gradient text-on-accent shadow-glow hover:shadow-glow-strong",
  secondary:
    "border border-line-strong text-ink hover:border-line-accent hover:bg-surface-strong",
  whatsapp: "bg-whatsapp text-on-accent hover:brightness-110",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface LinkProps extends CommonProps {
  href: string;
  /** Abre en pestaña nueva (WhatsApp, sitios de proyectos). */
  external?: boolean;
}

interface NativeProps extends CommonProps {
  href?: undefined;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button(props: LinkProps | NativeProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href === undefined) {
    return (
      <button type={props.type ?? "button"} disabled={props.disabled} className={classes}>
        {children}
      </button>
    );
  }
  if (props.external) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={props.href} className={classes}>
      {children}
    </Link>
  );
}
