export type ProjectCategory = 'portal' | 'integracion' | 'automatizacion' | 'web' | 'eventos';
export type ProjectStatus = 'completed' | 'in-progress' | 'production';

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  impact: string;
  coverImage: string;
  thumbImage: string;
  ogImage: string;
  fallbackImage: string;
  imageAlt: string;
  github?: string;
  website?: string;
  category: ProjectCategory;
  technologies: string[];
  date: string;
  status: ProjectStatus;
  featured: boolean;
  hasCaseStudy: boolean;
  confidential?: boolean;
  features: string[];
  highlights: string[];
}

export interface ProjectCategoryFilter {
  id: string;
  name: string;
  icon: string;
}
