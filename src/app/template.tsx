import type { ReactNode } from "react";
import { PageTransition } from "@/components/client/motion/PageTransition";

export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
