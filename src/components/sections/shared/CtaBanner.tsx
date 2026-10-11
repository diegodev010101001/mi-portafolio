import { Reveal } from "@/components/client/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HighlightedTitle } from "@/components/ui/GradientText";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import type { CtaContent } from "@/types";

interface CtaBannerProps {
  content: CtaContent;
}

/** Llamada a la acción de cierre: "Cotiza tu sitio web" + WhatsApp. */
export function CtaBanner({ content }: CtaBannerProps) {
  return (
    <section className="py-section">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-card border border-line-accent bg-bg-alt px-6 py-14 text-center shadow-glow sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute -top-1/2 left-1/2 -z-10 size-[36rem] max-w-none -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
            />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              <HighlightedTitle title={content.title} highlight={content.highlight} />
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-pretty text-ink-dim">
              {content.description}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={content.primary.href} size="lg">
                {content.primary.label}
              </Button>
              <WhatsAppButton
                label={content.whatsappLabel}
                message={content.whatsappMessage}
                size="lg"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
