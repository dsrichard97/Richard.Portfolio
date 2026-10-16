export type ProjectCategory = 'all' | 'product' | 'systems' | 'brand' | 'creative_tech';

export interface ImpactMetric {
  value: string;
  label: string;
}

export interface DesignTokenSpec {
  colors: { name: string; hex: string }[];
  typography: string;
  radius: string;
  grid: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'product' | 'systems' | 'brand' | 'creative_tech';
  categoryLabel: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  impactMetrics: ImpactMetric[];
  overview: string;
  problem: string;
  solution: string;
  deliverables: string[];
  keyDecisions: string[];
  tokens: DesignTokenSpec;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    organization: string;
  };
  visualTheme: 'slate' | 'emerald' | 'amber' | 'indigo' | 'rose' | 'cyan';
  featured: boolean;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  notes: string;
}

export interface AwardItem {
  title: string;
  issuer: string;
  year: string;
  project: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
