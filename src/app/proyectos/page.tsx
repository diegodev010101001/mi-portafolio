import { ProjectCases } from "@/components/sections/projects/ProjectCases";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { PageHero } from "@/components/sections/shared/PageHero";
import { projectsContent } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...projectsContent.seo, path: "/proyectos" });

export default function ProjectsPage() {
  return (
    <>
      <PageHero heading={projectsContent.hero} />
      <ProjectCases />
      <CtaBanner content={projectsContent.cta} />
    </>
  );
}
