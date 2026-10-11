import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { CodeTag } from "@/components/ui/CodeTag";
import { Container } from "@/components/ui/Container";
import { HighlightedTitle } from "@/components/ui/GradientText";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { hero } from "@/data/home";
import { whatsappMessages } from "@/data/whatsapp-messages";
import { cn } from "@/lib/utils";
import { HeroVisual } from "./HeroVisual";

/**
 * Arriba del pliegue: todo se anima con CSS (animate-fade-up), nada depende de JavaScript.
 *
 * El hero mide el alto de la pantalla menos el header (svh) y su contenido empieza arriba,
 * con una separación corta bajo el header; el espacio que sobre queda al final.
 * - Celular y tableta vertical: el texto llena la primera pantalla y las maquetas van después.
 * - hero-tall (tableta vertical alta): texto y maquetas caben juntos en la primera pantalla.
 * - hero-split (horizontal ancho): dos columnas, con las maquetas limitadas al alto disponible.
 * Título y espacios se ajustan al alto (svh) para que todo quepa en laptops bajitas; en
 * celulares bajitos (short-phone) se compacta un poco más.
 */
const gapSmall = "mt-[clamp(1rem,3svh,1.5rem)] short-phone:mt-4";
const gapLarge = "mt-[clamp(1.25rem,4.5svh,2.25rem)] short-phone:mt-6";
const compactButton = "short-phone:py-2.5 short-phone:text-sm";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-header">
      <HeroBackdrop />
      <Container className="hero-tall:min-h-[calc(100svh-var(--spacing-header))] hero-split:grid hero-split:min-h-[calc(100svh-var(--spacing-header))] hero-split:grid-cols-[1.05fr_1fr] hero-split:content-start hero-split:items-center hero-split:gap-10 hero-split:pt-[clamp(2.5rem,6svh,4rem)] hero-split:pb-10">
        <div className="flex min-h-[calc(100svh-var(--spacing-header))] flex-col pt-[clamp(1.5rem,4svh,2.5rem)] pb-6 short-phone:pt-6 hero-tall:min-h-0 hero-split:min-h-0 hero-split:py-0">
          <CodeTag
            primary={hero.badge.role}
            secondary={hero.badge.location}
            className="animate-fade-up self-start"
          />
          {/* Sin animación de entrada: el título se pinta completo desde el primer momento. */}
          <h1 className={cn("font-display text-hero font-bold tracking-tight text-balance", gapSmall)}>
            <HighlightedTitle title={hero.title} highlight={hero.highlight} live />
          </h1>
          <p
            className={cn(
              "max-w-xl animate-fade-up text-lg text-pretty text-ink-dim [animation-delay:160ms] short-phone:text-base short-phone:leading-normal",
              gapSmall,
            )}
          >
            {hero.subtitle}
          </p>
          <div
            className={cn(
              "flex animate-fade-up flex-col gap-3 [animation-delay:240ms] short-phone:gap-2.5 sm:flex-row",
              gapLarge,
            )}
          >
            <Button href={hero.primaryCta.href} size="lg" className={compactButton}>
              {hero.primaryCta.label}
            </Button>
            <WhatsAppButton
              label={hero.whatsappLabel}
              message={whatsappMessages.general}
              size="lg"
              className={compactButton}
            />
          </div>
          <ul
            className={cn(
              "flex animate-fade-up flex-col gap-x-6 gap-y-3 text-sm text-ink-dim [animation-delay:320ms] short-phone:gap-y-2 sm:flex-row sm:flex-wrap",
              gapLarge,
            )}
          >
            {hero.trustSignals.map((signal) => (
              <li key={signal.label} className="flex items-center gap-2">
                <Icon name={signal.icon} className="size-4 text-cyan" />
                {signal.label}
              </li>
            ))}
          </ul>
        </div>
        <HeroVisual />
      </Container>
    </section>
  );
}
