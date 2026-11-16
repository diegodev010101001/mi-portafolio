import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SolutionsStage } from "@/components/sections/solutions/SolutionsStage";
import { solutionsContent } from "@/data/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...solutionsContent.seo, path: "/soluciones" });

export default function SolutionsPage() {
  return (
    <>
      <PageHero heading={solutionsContent.hero} />
      <SolutionsStage />
      <ClosingCta content={solutionsContent.closing} />
    </>
  );
}
