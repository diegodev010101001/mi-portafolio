import type { SocialIconName } from "./icon";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}

export interface SiteConfig {
  name: string;
  wordmark: { accent: string; rest: string };
  owner: string;
  legalName: string;
  url: string;
  locale: string;
  ogLocale: string;
  tagline: string;
  description: string;
  footerPitch: string;
  location: string;
  phoneDisplay: string;
  phoneE164: string;
  whatsappNumber: string;
  email: string;
  socials: SocialLink[];
}
