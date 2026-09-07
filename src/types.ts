export interface Game {
  id: string;
  title: string;
  packageName: string;
  url: string;
  iconPath: string;
  description: string;
  shortDescription: string;
  genre: string;
  releaseDate: string;
  features: string[];
  techStack: string[];
  isComingSoon?: boolean;
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  bulletPoints: string[];
  games?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface Skill {
  name: string;
  category: 'QA Strategy' | 'Tech & Automation' | 'Management & KPI' | 'Design & UX';
  description?: string;
}
