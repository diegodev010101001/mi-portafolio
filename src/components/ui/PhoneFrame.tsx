import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

interface PhoneFrameProps {
  image: ImageAsset;
  sizes: string;
  className?: string;
}

/** Maqueta de celular. Úsala solo con capturas móviles reales (`mobileImage`). */
export function PhoneFrame({ image, sizes, className }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2rem] border-4 border-line-strong bg-bg-alt shadow-card",
        className,
      )}
    >
      <span aria-hidden="true" className="mx-auto my-2 block h-1.5 w-12 rounded-full bg-line-strong" />
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        className="h-auto w-full"
      />
    </div>
  );
}
