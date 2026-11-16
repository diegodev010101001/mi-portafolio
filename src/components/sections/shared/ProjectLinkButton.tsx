import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { projectsContent } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectLinkButtonProps {
  project: Project;
  className?: string;
}

/**
 * Botón para visitar el sitio de un proyecto. Si el proyecto todavía no tiene `url`, se
 * muestra deshabilitado (sin enlace) con su `pendingLabel`, p. ej. "Próximamente"; en
 * cuanto la tenga, pasa a ser un enlace que abre en una pestaña nueva.
 */
export function ProjectLinkButton({ project, className }: ProjectLinkButtonProps) {
  if (project.url) {
    return (
      <Button href={project.url} external variant="secondary" className={className}>
        {project.visitLabel ?? projectsContent.labels.visit}
        <Icon name="arrow-up-right" className="size-4" />
      </Button>
    );
  }
  if (!project.pendingLabel) return null;

  return (
    <button
      type="button"
      disabled
      className={cn(
        "inline-flex min-h-touch cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-line-strong bg-surface px-6 py-2.5 text-sm font-semibold text-ink-muted",
        className,
      )}
    >
      <Icon name="clock" className="size-4" />
      {project.pendingLabel}
    </button>
  );
}
