import { ProjectScenes } from "@/components/sections/projects/ProjectScenes";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { PageHero } from "@/components/sections/shared/PageHero";
import { projectsContent } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...projectsContent.seo, path: "/proyectos" });

export default function ProjectsPage() {
  return (
    <>
      <PageHero heading={projectsContent.hero} />
      <ProjectScenes />
      <ClosingCta content={projectsContent.cta} />
    </>
  );
}
