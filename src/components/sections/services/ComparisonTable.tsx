import { comparisonLabels, serviceComparison, services } from "@/data/services";
import { Availability } from "./Availability";

/** Versión de escritorio de la comparativa. En móvil se usa <ComparisonCards>. */
export function ComparisonTable() {
  return (
    <div className="hidden overflow-hidden rounded-card border border-line md:block">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface-strong font-display text-base text-ink">
          <tr>
            <th scope="col" className="px-6 py-5 font-semibold">
              {comparisonLabels.featureColumn}
            </th>
            {services.map((service) => (
              <th key={service.slug} scope="col" className="w-1/4 px-4 py-5 text-center font-semibold">
                {service.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {serviceComparison.map((row) => (
            <tr key={row.feature} className="border-t border-line transition-colors hover:bg-surface">
              <th scope="row" className="px-6 py-4 font-normal text-ink-dim">
                {row.feature}
              </th>
              {services.map((service) => (
                <td key={service.slug} className="px-4 py-4">
                  <span className="flex justify-center">
                    <Availability included={row.availability[service.slug]} />
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
