import { Icon } from "@/components/ui/Icon";
import { comparisonLabels } from "@/data/services";

/** Marca de incluido / no incluido con texto para lectores de pantalla. */
export function Availability({ included }: { included: boolean }) {
  return (
    <>
      <Icon
        name={included ? "check" : "minus"}
        className={included ? "size-5 shrink-0 text-cyan" : "size-5 shrink-0 text-ink-muted"}
      />
      <span className="sr-only">
        {included ? comparisonLabels.included : comparisonLabels.notIncluded}
      </span>
    </>
  );
}
