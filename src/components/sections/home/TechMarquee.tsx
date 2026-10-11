import { Reveal } from "@/components/client/motion/Reveal";
import { TechnologyLogo } from "@/components/sections/shared/TechnologyLogo";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { TextLink } from "@/components/ui/TextLink";
import { technologies, technologiesContent } from "@/data/technologies";

export function TechMarquee() {
  return (
    <section className="border-y border-line bg-bg-alt py-section">
      <Reveal>
        <Container className="mb-10 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-xl font-semibold text-balance text-ink sm:text-2xl">
            {technologiesContent.marqueePhrase}
          </h2>
        </Container>
        <Marquee>
          {technologies.map((technology) => (
            <div key={technology.id} className="flex items-center gap-3">
              <TechnologyLogo logo={technology.logo} size="sm" />
              <span className="font-display font-semibold text-ink-dim">{technology.name}</span>
            </div>
          ))}
        </Marquee>
        <Container className="mt-8 text-center">
          <TextLink href="/nosotros#tecnologias">{technologiesContent.marqueeLink}</TextLink>
        </Container>
      </Reveal>
    </section>
  );
}
