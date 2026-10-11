import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { EducationBlock } from "@/components/sections/about/EducationBlock";
import { Technologies } from "@/components/sections/about/Technologies";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { FeatureSection } from "@/components/sections/shared/FeatureSection";
import { aboutSeo, remoteBlock, whyMe } from "@/data/about";
import { finalCta } from "@/data/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...aboutSeo, path: "/nosotros" });

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <FeatureSection heading={whyMe.heading} items={whyMe.items} tone="alt" />
      <Technologies />
      <EducationBlock />
      <FeatureSection heading={remoteBlock.heading} items={remoteBlock.items} />
      <CtaBanner content={finalCta} />
    </>
  );
}
