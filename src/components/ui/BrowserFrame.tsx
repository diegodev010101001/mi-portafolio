import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

interface BrowserFrameProps {
  image: ImageAsset;
  sizes: string;
  domain?: string;
  /** Solo para la imagen principal del hero. */
  preload?: boolean;
  className?: string;
}

export function BrowserFrame({ image, sizes, domain, preload = false, className }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-field border border-line-strong bg-bg-alt shadow-card",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </span>
        {domain && (
          <span className="truncate rounded-full bg-surface-strong px-3 py-0.5 text-[0.7rem] text-ink-muted">
            {domain}
          </span>
        )}
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        preload={preload}
        className="h-auto w-full"
      />
    </div>
  );
}
