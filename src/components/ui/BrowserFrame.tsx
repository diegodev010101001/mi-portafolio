import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/types";

interface BrowserFrameProps {
  image: ImageAsset;
  sizes: string;
  domain?: string;
  /** Solo para la imagen principal de la primera pantalla: se precarga. */
  preload?: boolean;
  /** `eager` para imágenes que también se ven en la primera pantalla (sin precargarlas). */
  loading?: "eager" | "lazy";
  className?: string;
}

/**
 * Marcador mientras carga una imagen diferida: el mismo color de fondo del marco (bg-alt),
 * para que no se vea un hueco. Además evita un aviso falso de Next en desarrollo cuando la
 * misma imagen aparece arriba (temprana) y más abajo (diferida).
 */
const LAZY_PLACEHOLDER =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%2309091a'/%3E%3C/svg%3E";

export function BrowserFrame({
  image,
  sizes,
  domain,
  preload = false,
  loading = "lazy",
  className,
}: BrowserFrameProps) {
  const isLazy = !preload && loading === "lazy";

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
        loading={preload ? undefined : loading}
        placeholder={isLazy ? LAZY_PLACEHOLDER : "empty"}
        className="h-auto w-full"
      />
    </div>
  );
}
