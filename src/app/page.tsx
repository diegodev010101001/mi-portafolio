import { HomeChapters } from "@/components/sections/home/chapters/HomeChapters";
import { Hero } from "@/components/sections/home/Hero";
import { Problems } from "@/components/sections/home/Problems";
import { TechMarquee } from "@/components/sections/home/TechMarquee";
import { ClosingCta } from "@/components/sections/shared/ClosingCta";
import { FeatureSection } from "@/components/sections/shared/FeatureSection";
import { finalCta, homeSeo, reach } from "@/data/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ ...homeSeo, path: "/", absoluteTitle: true });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      {/* Cinco pantallas fijadas, una por ruta: Servicios, Soluciones, Proceso, Proyectos y Nosotros. */}
      <HomeChapters />
      <FeatureSection heading={reach.heading} items={reach.items} />
      <TechMarquee />
      <ClosingCta content={finalCta} size="screen" />
    </>
  );
}
