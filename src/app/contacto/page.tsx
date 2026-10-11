import { ContactMain } from "@/components/sections/contact/ContactMain";
import { NextSteps } from "@/components/sections/contact/NextSteps";
import { PageHero } from "@/components/sections/shared/PageHero";
import { contactHero, contactSeo } from "@/data/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...contactSeo, path: "/contacto" });

export default function ContactPage() {
  return (
    <>
      <PageHero heading={contactHero} />
      <ContactMain />
      <NextSteps />
    </>
  );
}
