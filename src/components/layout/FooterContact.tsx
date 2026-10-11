import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { navLabels } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { whatsappMessages } from "@/data/whatsapp-messages";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface FooterContactProps {
  titleClassName: string;
  linkClassName: string;
}

export function FooterContact({ titleClassName, linkClassName }: FooterContactProps) {
  const rowClasses = cn(linkClassName, "gap-2.5");

  return (
    <div>
      <h2 className={titleClassName}>{navLabels.contactTitle}</h2>
      <ul>
        <li>
          <a
            href={buildWhatsAppUrl(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className={rowClasses}
          >
            <SocialIcon name="whatsapp" className="size-4 shrink-0 text-whatsapp" />
            WhatsApp: {siteConfig.phoneDisplay}
          </a>
        </li>
        <li>
          <a href={`mailto:${siteConfig.email}`} className={cn(rowClasses, "break-all")}>
            <Icon name="mail" className="size-4 shrink-0 text-accent-light" />
            {siteConfig.email}
          </a>
        </li>
        <li className={cn(rowClasses, "hover:text-ink-dim")}>
          <Icon name="map-pin" className="size-4 shrink-0 text-accent-light" />
          {siteConfig.location}
        </li>
      </ul>
    </div>
  );
}
