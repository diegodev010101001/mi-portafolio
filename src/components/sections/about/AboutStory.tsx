import { SplitWords } from "@/components/scroll/SplitWords";
import { Section } from "@/components/ui/Section";
import { aboutIntro } from "@/data/about";

/**
 * La presentación como una historia en capítulos cortos: cada párrafo se ilumina palabra
 * por palabra conforme avanza el scroll (`data-light`). Sin JavaScript o con
 * prefers-reduced-motion el texto se ve completo.
 */
export function AboutStory() {
  return (
    <Section tone="alt">
      <div className="mx-auto max-w-4xl space-y-14 md:space-y-24">
        {aboutIntro.paragraphs.map((paragraph, index) => (
          <div key={paragraph} className="grid gap-3 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8">
            <p aria-hidden="true" className="font-mono text-sm text-cyan md:pt-2.5">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p
              data-light
              className="font-display text-2xl leading-snug font-medium text-pretty text-ink sm:text-3xl sm:leading-snug md:text-4xl md:leading-[1.25]"
            >
              <SplitWords text={paragraph} mask={false} />
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
