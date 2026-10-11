import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { PageHero } from "@/components/sections/shared/PageHero";
import { SolutionsGrid } from "@/components/sections/solutions/SolutionsGrid";
import { solutionsContent } from "@/data/solutions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...solutionsContent.seo, path: "/soluciones" });

export default function SolutionsPage() {
  return (
    <>
      <PageHero heading={solutionsContent.hero} />
      <SolutionsGrid />
      <CtaBanner content={solutionsContent.closing} />
    </>
  );
}
