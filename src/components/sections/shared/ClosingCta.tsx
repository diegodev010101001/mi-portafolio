import { SplitWords } from "@/components/scroll/SplitWords";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { closingEmailLabel } from "@/data/home";
import { cn } from "@/lib/utils";
import type { CtaContent } from "@/types";

interface ClosingCtaProps {
  content: CtaContent;
  /** `screen`: ocupa toda la pantalla (cierre del inicio). `band`: franja amplia. */
  size?: "screen" | "band";
}

/**
 * Llamada a la acción de cierre: cotizar, WhatsApp y correo. El fondo se transforma con el
 * scroll: una luz crece desde abajo y un halo de color gira detrás del texto
 * (`data-effect="closing"`, ver src/lib/motion/page-effects.ts). Sin JavaScript se ve el
 * estado final, ya iluminado.
 */
export function ClosingCta({ content, size = "band" }: ClosingCtaProps) {
  return (
    <section data-effect="closing" className="relative isolate overflow-clip border-t border-line">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-bg">
        <div data-closing-glow data-tone="indigo" className="panel-bg absolute inset-0" />
        <div className="absolute inset-0 bg-grid" />
        {/* El contenedor fija posición y opacidad; el halo de adentro es el que gira con el scroll. */}
        <div className="absolute top-1/2 left-1/2 -mt-[min(45vw,24rem)] -ml-[min(45vw,24rem)] size-[min(90vw,48rem)] opacity-35">
          <div
            data-closing-halo
            className="size-full rounded-full bg-[conic-gradient(from_0deg,transparent,var(--color-accent)_25%,transparent_45%,var(--color-violet)_65%,var(--color-cyan)_80%,transparent)] [mask-image:radial-gradient(closest-side,transparent_62%,#000_64%,#000_70%,transparent_72%)]"
          />
        </div>
      </div>
      <Container
        className={cn(
          "flex flex-col items-center justify-center py-section text-center",
          size === "screen" ? "min-h-svh pt-[calc(var(--spacing-header)+2rem)]" : "min-h-[72svh]",
        )}
      >
        <h2
          data-words
          className="max-w-4xl font-display text-[clamp(2.125rem,min(9vw,8.5svh),5rem)] leading-[1.04] font-bold tracking-tight text-balance text-ink"
        >
          <SplitWords text={content.title} highlight={content.highlight} />
        </h2>
        <div data-stagger="up" className="flex flex-col items-center">
          <p className="mt-6 max-w-xl text-lg text-pretty text-ink-dim">{content.description}</p>
          <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Button href={content.primary.href} size="lg">
              {content.primary.label}
            </Button>
            <WhatsAppButton
              label={content.whatsappLabel}
              message={content.whatsappMessage}
              size="lg"
            />
          </div>
          <p className="mt-7 flex flex-col items-center gap-x-2 text-sm text-ink-dim sm:flex-row">
            {closingEmailLabel}
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-touch items-center gap-2 font-semibold break-all text-accent-light underline decoration-line-accent underline-offset-4 transition-colors hover:text-cyan"
            >
              <Icon name="mail" className="size-4 shrink-0" />
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
