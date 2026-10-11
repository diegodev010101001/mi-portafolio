import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import type { SocialIconName } from "@/types";

const icons: Record<SocialIconName, IconType> = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
};

interface SocialIconProps {
  name: SocialIconName;
  className?: string;
}

export function SocialIcon({ name, className }: SocialIconProps) {
  const Component = icons[name];
  return <Component aria-hidden="true" className={className} />;
}
