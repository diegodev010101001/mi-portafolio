import { ContactForm } from "@/components/client/forms/ContactForm";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/FadeUp";
import { ContactChannels } from "./ContactChannels";

/** Bloque principal de /contacto: formulario + canales directos. */
export function ContactMain() {
  return (
    <section data-hide-whatsapp-float className="pb-section">
      <Container>
        <FadeUp className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Card interactive={false}>
            <ContactForm />
          </Card>
          <ContactChannels />
        </FadeUp>
      </Container>
    </section>
  );
}
