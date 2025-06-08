export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SkillBarProps {
  skill: Skill;
  isVisible: boolean;
  delay?: number;
}

export interface SkillCategoryProps {
  category: SkillCategory;
  className?: string;
}