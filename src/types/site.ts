import type { ImageAsset } from "./content";
import type { SocialIconName } from "./icon";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface SiteConfig {
  name: string;
  owner: string;
  url: string;
  locale: string;
  ogLocale: string;
  tagline: string;
  description: string;
  footerPitch: string;
  location: string;
  remoteNote: string;
  phoneDisplay: string;
  phoneE164: string;
  whatsappNumber: string;
  email: string;
  logo: ImageAsset;
  socials: SocialLink[];
}
