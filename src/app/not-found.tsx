import type { Metadata } from "next";
import { PageHero } from "@/components/sections/shared/PageHero";
import { Button } from "@/components/ui/Button";
import { notFoundContent } from "@/data/not-found";

export const metadata: Metadata = {
  title: notFoundContent.title,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="pb-section">
      <PageHero heading={notFoundContent.heading}>
        {notFoundContent.links.map((link, index) => (
          <Button key={link.href} href={link.href} variant={index === 0 ? "primary" : "secondary"}>
            {link.label}
          </Button>
        ))}
      </PageHero>
    </div>
  );
}
