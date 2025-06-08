export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'other';
}

export interface ProjectFilter {
  category: string;
  featured?: boolean;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}