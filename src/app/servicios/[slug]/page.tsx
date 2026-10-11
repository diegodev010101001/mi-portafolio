import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailHero } from "@/components/sections/services/ServiceDetailHero";
import { ServiceFlows } from "@/components/sections/services/ServiceFlows";
import { ServiceIncludes } from "@/components/sections/services/ServiceIncludes";
import { ServiceIndustries } from "@/components/sections/services/ServiceIndustries";
import { ServiceRelatedProject } from "@/components/sections/services/ServiceRelatedProject";
import { CtaBanner } from "@/components/sections/shared/CtaBanner";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { finalCta } from "@/data/home";
import { getService, services, servicesContent } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata({ ...service.seo, path: `/servicios/${service.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceIncludes service={service} />
      <ServiceFlows service={service} />
      <ServiceIndustries service={service} />
      <ServiceRelatedProject service={service} />
      <FaqSection heading={servicesContent.detailHeadings.faq} items={service.faqs} />
      <CtaBanner content={{ ...finalCta, whatsappMessage: service.whatsappMessage }} />
    </>
  );
}
