import { Card } from "@/components/ui/Card";
import { CheckList } from "@/components/ui/CheckList";
import { IconTile } from "@/components/ui/IconTile";
import { TextLink } from "@/components/ui/TextLink";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getService } from "@/data/services";
import { solutionsContent } from "@/data/solutions";
import type { Solution } from "@/types";

const labels = solutionsContent.card;
const labelClasses = "text-xs font-semibold tracking-widest text-accent-light uppercase";

interface SolutionCardProps {
  solution: Solution;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  const service = getService(solution.recommendedService);

  return (
    <Card as="article" id={solution.slug} className="flex h-full flex-col">
      <div className="flex items-center gap-4">
        <IconTile name={solution.icon} />
        <h2 className="font-display text-xl font-semibold text-ink">{solution.name}</h2>
      </div>
      <h3 className={`${labelClasses} mt-6`}>{labels.problemLabel}</h3>
      <p className="mt-2 text-sm text-ink-dim">{solution.problem}</p>
      <h3 className={`${labelClasses} mt-5`}>{labels.featuresLabel}</h3>
      <CheckList items={solution.features} className="mt-3" />
      <div className="mt-auto pt-6">
        {service && (
          <p className="text-sm text-ink-muted">
            {labels.serviceLabel}:{" "}
            <TextLink href={`/servicios/${service.slug}`} className="min-h-0">
              {service.name}
            </TextLink>
          </p>
        )}
        <WhatsAppButton label={labels.quote} message={solution.whatsappMessage} className="mt-4" />
      </div>
    </Card>
  );
}
