import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { EducationBlock } from "@/components/sections/about/EducationBlock";
import { Technologies } from "@/components/sections/about/Technologies";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FeatureSection } from "@/components/sections/shared/FeatureSection";
import { aboutSeo, remoteBlock, whyMe } from "@/data/about";
import { finalCta } from "@/data/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...aboutSeo, path: "/nosotros" });

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutStory />
      <FeatureSection heading={whyMe.heading} items={whyMe.items} />
      <Technologies tone="alt" />
      <EducationBlock />
      <FeatureSection heading={remoteBlock.heading} items={remoteBlock.items} tone="alt" />
      <ClosingCta content={finalCta} />
    </>
  );
}
