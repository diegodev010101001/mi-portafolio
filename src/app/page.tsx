import { AboutTeaser } from "@/components/sections/home/AboutTeaser";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { Hero } from "@/components/sections/home/Hero";
import { IndustriesPreview } from "@/components/sections/home/IndustriesPreview";
import { Problems } from "@/components/sections/home/Problems";
import { ProcessPreview } from "@/components/sections/home/ProcessPreview";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { TechMarquee } from "@/components/sections/home/TechMarquee";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { FeatureSection } from "@/components/sections/shared/FeatureSection";
import { finalCta, homeSeo, reach } from "@/data/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...homeSeo, path: "/", absoluteTitle: true });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <ServicesPreview />
      <IndustriesPreview />
      <FeatureSection heading={reach.heading} items={reach.items} />
      <ProcessPreview />
      <FeaturedProjects />
      <TechMarquee />
      <AboutTeaser />
      <CtaBanner content={finalCta} />
    </>
  );
}
