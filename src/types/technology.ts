import type { ImageAsset } from "./content";

export interface Technology {
  id: string;
  name: string;
  benefit: string;
  logo: ImageAsset;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  logo: ImageAsset;
}
