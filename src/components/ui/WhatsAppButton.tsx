import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "./Button";
import { SocialIcon } from "./SocialIcon";

interface WhatsAppButtonProps {
  label: string;
  message?: string;
  size?: "md" | "lg";
  className?: string;
}

export function WhatsAppButton({ label, message, size, className }: WhatsAppButtonProps) {
  return (
    <Button
      href={buildWhatsAppUrl(message)}
      external
      variant="whatsapp"
      size={size}
      className={className}
    >
      <SocialIcon name="whatsapp" className="size-5" />
      {label}
    </Button>
  );
}
