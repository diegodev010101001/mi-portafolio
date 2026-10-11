import Image from "next/image";
import { Reveal } from "@/components/client/motion/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { profilePhoto } from "@/data/about";
import { aboutTeaser } from "@/data/home";

export function AboutTeaser() {
  return (
    <Section>
      <Reveal className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        <div className="mx-auto w-48 rounded-card bg-brand-gradient p-px shadow-glow md:w-64">
          <Image
            src={profilePhoto.src}
            alt={profilePhoto.alt}
            width={profilePhoto.width}
            height={profilePhoto.height}
            sizes="(min-width: 768px) 256px, 192px"
            className="aspect-[4/5] w-full rounded-card object-cover object-[60%_85%]"
          />
        </div>
        <div>
          <SectionHeading heading={aboutTeaser.heading} className="mb-6 md:mb-6" />
          <div className="max-w-xl space-y-4 text-lg text-ink-dim">
            {aboutTeaser.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <TextLink href="/nosotros" className="mt-5">
            {aboutTeaser.link}
          </TextLink>
        </div>
      </Reveal>
    </Section>
  );
}
