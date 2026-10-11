import { ContactForm } from "@/components/client/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ContactChannels } from "./ContactChannels";

/** Bloque principal de /contacto: formulario + canales directos. */
export function ContactMain() {
  return (
    <section className="pb-section">
      <Container className="grid animate-fade-up items-start gap-12 [animation-delay:120ms] lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Card interactive={false}>
          <ContactForm />
        </Card>
        <ContactChannels />
      </Container>
    </section>
  );
}
