import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { servicesPreview } from "@/data/home";
import { customProject, services } from "@/data/services";
import { Chapter, type ChapterSlot } from "./Chapter";

const cards = [
  ...services.map((service) => ({
    key: service.slug,
    icon: service.icon,
    name: service.name,
    summary: service.summary,
    href: `/servicios/${service.slug}`,
  })),
  {
    key: "a-la-medida",
    icon: customProject.icon,
    name: customProject.name,
    summary: customProject.summary,
    href: "/servicios#a-la-medida",
  },
];

/** Capítulo 1: los dos servicios y el proyecto a la medida, como tarjetas escalonadas. */
export function ServicesChapter(slot: ChapterSlot) {
  return (
    <Chapter {...slot} heading={servicesPreview.heading} tone="blue">
      <ul className="grid gap-3 lg:gap-4">
        {cards.map((card) => (
          <li
            key={card.key}
            data-stage-pop
            className="lg:[&:nth-child(2)]:ml-8 lg:[&:nth-child(3)]:ml-16"
          >
            <Link
              href={card.href}
              className="group/card flex items-center gap-4 rounded-card border border-line bg-bg-alt/75 p-4 transition duration-300 hover:border-line-accent hover:bg-surface-strong sm:p-5 lg:p-6"
            >
              <IconTile name={card.icon} className="size-11 lg:size-12" />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-semibold text-ink lg:text-xl">
                  {card.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-sm text-ink-dim tight:hidden lg:line-clamp-none low:lg:line-clamp-2">
                  {card.summary}
                </p>
              </div>
              <Icon
                name="arrow-right"
                className="size-5 shrink-0 text-accent-light transition-transform duration-300 group-hover/card:translate-x-1"
              />
            </Link>
          </li>
        ))}
      </ul>
    </Chapter>
  );
}
