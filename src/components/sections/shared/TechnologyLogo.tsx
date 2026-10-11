import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

const sizes = {
  sm: { tile: "size-11 p-2", px: 28 },
  md: { tile: "size-14 p-2.5", px: 36 },
};

interface TechnologyLogoProps {
  logo: ImageAsset;
  size?: keyof typeof sizes;
}

/** Logo sobre una base clara para que se lea bien en el tema oscuro. */
export function TechnologyLogo({ logo, size = "md" }: TechnologyLogoProps) {
  const { tile, px } = sizes[size];

  return (
    <span className={cn("flex shrink-0 items-center justify-center rounded-field bg-ink", tile)}>
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        sizes={`${px}px`}
        className="size-full object-contain"
      />
    </span>
  );
}
