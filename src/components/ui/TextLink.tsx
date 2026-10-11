import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

/** Enlace de texto con flecha, para "ver más" dentro de tarjetas y secciones. */
export function TextLink({ href, children, external = false, className }: TextLinkProps) {
  const classes = cn(
    "group/link inline-flex min-h-touch items-center gap-1.5 text-sm font-semibold text-accent-light transition-colors hover:text-cyan",
    className,
  );
  const content = (
    <>
      {children}
      <Icon
        name={external ? "arrow-up-right" : "arrow-right"}
        className="size-4 transition-transform group-hover/link:translate-x-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
