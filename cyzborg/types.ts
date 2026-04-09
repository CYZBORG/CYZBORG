export interface NavLink {
  label: string;
  href: string;
}

export interface PhilosophyItem {
  id: number;
  text: string;
}

export interface ProductFeature {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export enum SectionIds {
  HERO = 'hero',
  PHILOSOPHY = 'philosophy',
  WHATS_COMING = 'coming-soon',
  NEWSLETTER = 'join-system',
}