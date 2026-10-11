import { PrivacyContent } from "@/components/sections/privacy/PrivacyContent";
import { PageHero } from "@/components/sections/shared/PageHero";
import { privacyHero, privacySeo } from "@/data/privacy";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...privacySeo, path: "/aviso-de-privacidad" });

export default function PrivacyPage() {
  return (
    <>
      <PageHero heading={privacyHero} />
      <PrivacyContent />
    </>
  );
}
