import { ProcessTimeline } from "@/components/sections/process/ProcessTimeline";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { FeatureSection } from "@/components/sections/shared/FeatureSection";
import { PageHero } from "@/components/sections/shared/PageHero";
import { faqHeading, generalFaqs } from "@/data/faqs";
import { finalCta } from "@/data/home";
import { processContent, processDeliverables, processNeeds } from "@/data/process";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...processContent.seo, path: "/proceso" });

export default function ProcessPage() {
  return (
    <>
      <PageHero heading={processContent.hero} />
      <ProcessTimeline />
      <FeatureSection heading={processContent.needs} items={processNeeds} tone="alt" />
      <FeatureSection heading={processContent.deliverables} items={processDeliverables} columns={4} />
      <FaqSection heading={faqHeading} items={generalFaqs} tone="alt" />
      <CtaBanner content={finalCta} />
    </>
  );
}
