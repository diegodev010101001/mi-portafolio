import Link from "next/link";
import { homeLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/** Logotipo de texto en dos colores, con la tipografía y el peso del logo anterior. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href={homeLink.href}
      aria-label={`${siteConfig.name}: ${homeLink.label.toLowerCase()}`}
      className={cn(
        "relative z-50 inline-flex min-h-touch items-center font-display text-[1.45rem] font-extrabold tracking-[-0.03em] text-ink",
        className,
      )}
    >
      <span className="text-accent">{siteConfig.wordmark.accent}</span>
      {siteConfig.wordmark.rest}
    </Link>
  );
}
