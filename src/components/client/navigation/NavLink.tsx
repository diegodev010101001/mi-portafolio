"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const variants = {
  desktop:
    "relative inline-flex min-h-touch items-center text-sm font-medium text-ink-dim transition-colors after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-brand-gradient after:transition-transform after:duration-300 after:ease-out-expo hover:text-ink hover:after:scale-x-100 aria-[current=page]:text-ink aria-[current=page]:after:scale-x-100",
  mobile:
    "inline-flex min-h-touch items-center font-display text-3xl font-bold tracking-tight text-ink-dim transition-colors hover:text-ink aria-[current=page]:text-gradient",
};

interface NavLinkProps {
  href: string;
  label: string;
  variant: keyof typeof variants;
  onNavigate?: () => void;
}

export function NavLink({ href, label, variant, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
      className={cn(variants[variant])}
    >
      {label}
    </Link>
  );
}
