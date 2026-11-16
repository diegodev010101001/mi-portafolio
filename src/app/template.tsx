import type { ReactNode } from "react";
import { PageMotion } from "@/components/client/scroll/PageMotion";

/** Se vuelve a montar en cada navegación: reinicia el scroll y los efectos de la página. */
export default function Template({ children }: { children: ReactNode }) {
  return <PageMotion>{children}</PageMotion>;
}
