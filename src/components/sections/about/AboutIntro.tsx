import Image from "next/image";
import { HeroBackdrop } from "@/components/sections/shared/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { aboutIntro, profilePhoto } from "@/data/about";
import { whatsappMessages } from "@/data/whatsapp-messages";

/** Arriba del pliegue: animado solo con CSS. */
export function AboutIntro() {
  return (
    <section className="relative isolate overflow-hidden pt-header">
      <HeroBackdrop intensity="soft" />
      <Container className="grid animate-fade-up items-center gap-12 pt-16 pb-16 md:pt-24 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
          <SectionHeading heading={aboutIntro.heading} as="h1" className="mb-8 md:mb-8" />
          <div className="max-w-2xl space-y-4 text-lg text-ink-dim">
            {aboutIntro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={aboutIntro.primaryCta.href} size="lg">
              {aboutIntro.primaryCta.label}
            </Button>
            <WhatsAppButton
              label={aboutIntro.whatsappLabel}
              message={whatsappMessages.general}
              size="lg"
            />
          </div>
        </div>
        <div className="mx-auto w-64 rounded-card bg-brand-gradient p-px shadow-glow sm:w-80 lg:order-last">
          <Image
            src={profilePhoto.src}
            alt={profilePhoto.alt}
            width={profilePhoto.width}
            height={profilePhoto.height}
            sizes="(min-width: 640px) 320px, 256px"
            preload
            className="aspect-[4/5] w-full rounded-card object-cover object-[60%_85%]"
          />
        </div>
      </Container>
    </section>
  );
}
