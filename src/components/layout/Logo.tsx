import Image from "next/image";
import Link from "next/link";
import { homeLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href={homeLink.href}
      aria-label={`${siteConfig.name}: ${homeLink.label.toLowerCase()}`}
      className={cn("relative z-50 inline-flex min-h-touch items-center gap-2.5", className)}
    >
      <Image
        src={siteConfig.logo.src}
        alt=""
        width={36}
        height={36}
        sizes="36px"
        className="rounded-lg"
      />
      <span className="font-display text-lg font-bold tracking-tight text-ink">{siteConfig.name}</span>
    </Link>
  );
}
