import { navLabels } from "@/config/navigation";

export const MAIN_CONTENT_ID = "contenido";

export function SkipLink() {
  return (
    <a
      href={`#${MAIN_CONTENT_ID}`}
      className="sr-only rounded-full bg-brand-gradient px-5 py-3 font-semibold text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
    >
      {navLabels.skipToContent}
    </a>
  );
}
