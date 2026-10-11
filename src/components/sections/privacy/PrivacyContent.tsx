import { Container } from "@/components/ui/Container";
import { privacyLastUpdated, privacyLastUpdatedLabel, privacySections } from "@/data/privacy";

export function PrivacyContent() {
  return (
    <section className="pb-section">
      <Container>
        <div className="max-w-prose space-y-10">
          <p className="text-sm text-ink-muted">
            {privacyLastUpdatedLabel}: {privacyLastUpdated}
          </p>
          {privacySections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-xl font-semibold text-ink">{section.title}</h2>
              <div className="mt-3 space-y-3 text-ink-dim">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items && (
                  <ul className="list-disc space-y-1.5 pl-5 marker:text-accent-light">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}
