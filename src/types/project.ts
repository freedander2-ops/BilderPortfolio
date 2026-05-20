export type ProjectLayoutType = 'curtain' | 'floating' | 'stacked' | 'fullscreen';

export interface ProjectMedia {
  url: string;
  alt: string;
  caption?: string;
  type: 'image' | 'video';
}

export interface BeforeAfterData {
  before: string;
  after: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  fullStory: string;
  mainImage: string;
  layoutType: ProjectLayoutType;
  gallery: ProjectMedia[];
  beforeAfter?: BeforeAfterData;
  features: string[];
}
