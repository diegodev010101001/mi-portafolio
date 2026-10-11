import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HighlightedTitle } from "@/components/ui/GradientText";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { hero } from "@/data/home";
import { whatsappMessages } from "@/data/whatsapp-messages";
import { HeroVisual } from "./HeroVisual";

/** Arriba del pliegue: todo se anima con CSS (animate-fade-up), nada depende de JavaScript. */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-header">
      <HeroBackdrop />
      <Container className="grid items-center gap-14 pt-12 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-20 lg:pb-28">
        <div>
          <p className="inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-line-accent bg-accent-soft px-4 py-1.5 text-xs font-semibold text-accent-light">
            <span aria-hidden="true" className="size-1.5 shrink-0 animate-pulse-dot rounded-full bg-cyan" />
            <span className="sm:hidden">{hero.badgeShort}</span>
            <span className="hidden sm:inline">{hero.badge}</span>
          </p>
          <h1 className="mt-6 animate-fade-up font-display text-[2.6rem] leading-[1.05] font-bold tracking-tight text-balance [animation-delay:80ms] sm:text-6xl xl:text-7xl">
            <HighlightedTitle title={hero.title} highlight={hero.highlight} />
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg text-pretty text-ink-dim [animation-delay:160ms]">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <WhatsAppButton label={hero.whatsappLabel} message={whatsappMessages.general} size="lg" />
          </div>
          <ul className="mt-9 flex animate-fade-up flex-wrap gap-x-6 gap-y-3 text-sm text-ink-dim [animation-delay:320ms]">
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
