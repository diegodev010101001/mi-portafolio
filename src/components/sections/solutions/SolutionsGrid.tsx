import { SolutionsFilter } from "@/components/client/interactive/SolutionsFilter";
import { Section } from "@/components/ui/Section";
import { solutionCategories, solutions, solutionsContent } from "@/data/solutions";
import { SolutionCard } from "./SolutionCard";

export function SolutionsGrid() {
  return (
    <Section className="pt-6">
      <SolutionsFilter
        categories={solutionCategories}
        labels={{ group: solutionsContent.filter.label, all: solutionsContent.filter.all }}
        items={solutions.map((solution) => ({
          id: solution.slug,
          category: solution.category,
          node: <SolutionCard solution={solution} />,
        }))}
      />
    </Section>
  );
}
