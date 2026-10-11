import { CustomProjectBlock } from "@/components/sections/services/CustomProjectBlock";
import { ServiceComparison } from "@/components/sections/services/ServiceComparison";
import { ServicesList } from "@/components/sections/services/ServicesList";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { faqHeading, servicesFaqs } from "@/data/faqs";
import { finalCta } from "@/data/home";
import { servicesContent } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...servicesContent.seo, path: "/servicios" });

export default function ServicesPage() {
  return (
    <>
      <PageHero heading={servicesContent.hero} />
      <ServicesList />
      <ServiceComparison />
      <CustomProjectBlock />
      <FaqSection heading={faqHeading} items={servicesFaqs} tone="alt" />
      <CtaBanner content={finalCta} />
    </>
  );
}
