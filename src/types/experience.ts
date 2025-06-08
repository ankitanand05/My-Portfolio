export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  current: boolean;
}

export interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export interface TimelineItemProps {
  experience: Experience;
  index: number;
}