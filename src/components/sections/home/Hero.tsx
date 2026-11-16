import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import { SplitWords } from "@/components/scroll/SplitWords";
import { Button } from "@/components/ui/Button";
import { CodeTag } from "@/components/ui/CodeTag";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { hero } from "@/data/home";
import { whatsappMessages } from "@/data/whatsapp-messages";
import { cn } from "@/lib/utils";
import { HeroVisual } from "./HeroVisual";

/**
 * Arriba del pliegue: todo entra con CSS (el título palabra por palabra y el resto con
 * animate-fade-up), nada depende de JavaScript. Con el scroll, el texto y las maquetas se
 * mueven a distinta velocidad (`data-drift`, ver src/lib/motion/page-effects.ts).
 *
 * El hero mide el alto de la pantalla menos el header (svh) y su contenido empieza arriba,
 * con una separación corta bajo el header; el espacio que sobre queda al final.
 * - Celular y tableta vertical: texto, maquetas justo debajo y al final el indicador "Desliza".
 * - hero-tall (tableta vertical alta): texto y maquetas caben juntos en la primera pantalla.
 * - hero-split (horizontal ancho): dos columnas, con las maquetas limitadas al alto disponible.
 * Título y espacios se ajustan al alto (svh) para que todo quepa en laptops bajitas; en
 * celulares bajitos (short-phone) se compacta un poco más.
 */
const gapSmall = "mt-[clamp(1rem,3svh,1.5rem)] short-phone:mt-4";
const gapLarge = "mt-[clamp(1.25rem,4.5svh,2.25rem)] short-phone:mt-6";
const compactButton = "short-phone:py-2.5 short-phone:text-sm";

/** Indicador de scroll: decorativo, por eso va oculto para lectores de pantalla. */
function ScrollCue({ className }: { className?: string }) {
  return (
    <p
      aria-hidden="true"
      className={cn(
        "animate-fade-up items-center gap-3 font-mono text-[0.6875rem] tracking-[0.3em] text-ink-muted uppercase [animation-delay:700ms]",
        className,
      )}
    >
      <span className="relative block h-10 w-px overflow-hidden bg-line-strong">
        <span className="absolute inset-0 animate-scroll-cue bg-cyan motion-reduce:animate-none" />
      </span>
      {hero.scrollCue}
    </p>
  );
}

export function Hero() {
  return (
    <section data-drift-root className="relative isolate overflow-hidden pt-header">
      <HeroBackdrop />
      <Container className="hero-tall:min-h-[calc(100svh-var(--spacing-header))] hero-split:grid hero-split:min-h-[calc(100svh-var(--spacing-header))] hero-split:grid-cols-[1.05fr_1fr] hero-split:content-start hero-split:items-center hero-split:gap-10 hero-split:pt-[clamp(2.5rem,6svh,4rem)] hero-split:pb-10">
        {/* En computadoras el texto se atenúa y sube más lento que las maquetas al hacer scroll. */}
        <div
          data-drift="-70"
          data-drift-fade
          data-desktop-motion
          className="flex flex-col pt-[clamp(1.5rem,4svh,2.5rem)] pb-2 short-phone:pt-6 hero-split:py-0"
        >
          <CodeTag
            primary={hero.badge.role}
            secondary={hero.badge.location}
            className="animate-fade-up self-start"
          />
          <h1
            className={cn(
              "words-rise font-display text-hero font-bold tracking-tight text-balance",
              gapSmall,
            )}
          >
            <SplitWords text={hero.title} highlight={hero.highlight} live />
          </h1>
          <p
            className={cn(
              "max-w-xl animate-fade-up text-lg text-pretty text-ink-dim [animation-delay:260ms] short-phone:text-base short-phone:leading-normal",
              gapSmall,
            )}
          >
            {hero.subtitle}
          </p>
          <div
            className={cn(
              "flex animate-fade-up flex-col gap-3 [animation-delay:340ms] short-phone:gap-2.5 sm:flex-row",
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
              "flex animate-fade-up flex-col gap-x-6 gap-y-3 text-sm text-ink-dim [animation-delay:420ms] short-phone:gap-y-2 sm:flex-row sm:flex-wrap",
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
        {/*
          Celular y tableta: igual que en computadora, primero las maquetas y después el
          indicador para seguir bajando.
        */}
        <ScrollCue className="mb-section flex justify-center hero-tall:hidden! hero-split:hidden!" />
      </Container>
      {/* Pantallas anchas: en la esquina inferior de la primera pantalla. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden hero-tall:block hero-split:block">
        <Container>
          <ScrollCue className="flex" />
        </Container>
      </div>
    </section>
  );
}
