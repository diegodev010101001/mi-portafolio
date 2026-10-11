import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig } from "@/config/site";
import { contactChannels } from "@/data/contact";
import { whatsappMessages } from "@/data/whatsapp-messages";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const rowClasses =
  "flex min-h-touch items-center gap-4 rounded-field border border-line bg-surface p-4 transition-colors";
const linkClasses = `${rowClasses} hover:border-line-accent hover:bg-surface-strong`;

function ChannelText({ title, children }: { title: string; children: ReactNode }) {
  return (
    <span className="min-w-0">
      <span className="block text-xs font-semibold tracking-widest text-ink-muted uppercase">
        {title}
      </span>
      <span className="block font-medium break-words text-ink">{children}</span>
    </span>
  );
}

/** Canales alternativos al formulario: WhatsApp, correo y ubicación. */
export function ContactChannels() {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-ink">{contactChannels.title}</h2>
      <ul className="mt-4 space-y-3">
        <li>
          <a
            href={buildWhatsAppUrl(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            <SocialIcon name="whatsapp" className="size-6 shrink-0 text-whatsapp" />
            <ChannelText title={contactChannels.whatsappTitle}>{siteConfig.phoneDisplay}</ChannelText>
          </a>
        </li>
        <li>
          <a href={`mailto:${siteConfig.email}`} className={linkClasses}>
            <Icon name="mail" className="size-6 shrink-0 text-accent-light" />
            <ChannelText title={contactChannels.emailTitle}>{siteConfig.email}</ChannelText>
          </a>
        </li>
        <li className={rowClasses}>
          <Icon name="map-pin" className="size-6 shrink-0 text-accent-light" />
          <ChannelText title={contactChannels.locationTitle}>
            {siteConfig.location} · {contactChannels.locationNote}
          </ChannelText>
        </li>
      </ul>
    </div>
  );
}
