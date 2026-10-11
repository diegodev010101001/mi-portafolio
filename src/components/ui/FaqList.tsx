import type { Faq } from "@/types";

interface FaqListProps {
  items: Faq[];
}

/** Acordeón sin JavaScript: <details>/<summary> nativos. */
export function FaqList({ items }: FaqListProps) {
  return (
    <div className="mx-auto max-w-prose space-y-3">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-field border border-line bg-surface transition-colors open:border-line-accent"
        >
          <summary className="flex min-h-touch cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display font-semibold text-ink">
            {item.question}
            <span
              aria-hidden="true"
              className="relative size-4 shrink-0 text-accent-light before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-current after:transition-transform group-open:after:rotate-90"
            />
          </summary>
          <p className="px-5 pb-5 text-ink-dim">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
