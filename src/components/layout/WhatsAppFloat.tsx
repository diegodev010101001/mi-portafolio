import { SocialIcon } from "@/components/ui/SocialIcon";
import { whatsappLabels, whatsappMessages } from "@/data/whatsapp-messages";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Enlace flotante a WhatsApp: pulso y tooltip solo con CSS, sin JavaScript.
 * En móvil se oculta donde haya un elemento con `data-hide-whatsapp-float` (el formulario
 * de contacto) para no tapar el botón de enviar; ahí WhatsApp ya aparece como canal.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappLabels.floatAria}
      className="group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-on-accent shadow-card transition-transform duration-200 hover:scale-105 max-md:[body:has([data-hide-whatsapp-float])_&]:hidden md:right-6 md:bottom-[calc(1.5rem+env(safe-area-inset-bottom))]"
    >
      <span aria-hidden="true" className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp" />
      <SocialIcon name="whatsapp" className="relative size-7" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden rounded-full border border-line-strong bg-bg-alt px-4 py-2 text-sm font-medium whitespace-nowrap text-ink opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
      >
        {whatsappLabels.floatTooltip}
      </span>
    </a>
  );
}
