import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { footerColumns, navLabels, privacyLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { FooterContact } from "./FooterContact";
import { Logo } from "./Logo";

const linkClasses = "inline-flex min-h-touch items-center text-sm text-ink-dim transition-colors hover:text-ink";
const titleClasses = "mb-2 font-display text-sm font-semibold text-ink";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt pt-16 pb-28 md:pb-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-ink-dim">{siteConfig.footerPitch}</p>
            <ul aria-label={navLabels.socialTitle} className="mt-4 flex gap-1">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-11 items-center justify-center rounded-full text-ink-dim transition-colors hover:bg-surface-strong hover:text-ink"
                  >
                    <SocialIcon name={social.icon} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={`${navLabels.footer}: ${column.title}`}>
              <h2 className={titleClasses}>{column.title}</h2>
              <ul>
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClasses}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <FooterContact titleClassName={titleClasses} linkClassName={linkClasses} />
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {navLabels.rights}
          </p>
          <Link href={privacyLink.href} className={linkClasses}>
            {privacyLink.label}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
