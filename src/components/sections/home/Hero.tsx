import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { CodeTag } from "@/components/ui/CodeTag";
import { Container } from "@/components/ui/Container";
import { HighlightedTitle } from "@/components/ui/GradientText";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { hero } from "@/data/home";
import { whatsappMessages } from "@/data/whatsapp-messages";
import { HeroVisual } from "./HeroVisual";

/**
 * Arriba del pliegue: todo se anima con CSS (animate-fade-up), nada depende de JavaScript.
 * En móvil el texto llena la primera pantalla (svh, para que no lo afecte la barra del
 * navegador) y las maquetas quedan completas en la siguiente. En celulares bajitos
 * (variante short-phone) se reducen tamaños y espacios para que quepan los dos botones.
 */
const compactButton = "short-phone:py-2.5 short-phone:text-sm";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-header">
      <HeroBackdrop />
      <Container className="grid items-center lg:min-h-[calc(100svh-var(--spacing-header))] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:py-16">
        <div className="flex min-h-[calc(100svh-var(--spacing-header))] flex-col justify-center py-10 short-phone:py-4 lg:min-h-0 lg:py-0">
          <CodeTag
            primary={hero.badge.role}
            secondary={hero.badge.location}
            className="animate-fade-up self-start"
          />
          {/* Sin animación de entrada: el título se pinta completo desde el primer momento. */}
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-balance short-phone:mt-4 short-phone:text-[2rem] sm:text-6xl xl:text-7xl">
            <HighlightedTitle title={hero.title} highlight={hero.highlight} live />
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg text-pretty text-ink-dim [animation-delay:160ms] short-phone:mt-4 short-phone:text-base short-phone:leading-normal">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] short-phone:mt-6 short-phone:gap-2.5 sm:flex-row">
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
          <ul className="mt-9 flex animate-fade-up flex-col gap-x-6 gap-y-3 text-sm text-ink-dim [animation-delay:320ms] short-phone:mt-6 short-phone:gap-y-2 sm:flex-row sm:flex-wrap">
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
