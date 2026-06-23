export interface PortfolioSkill {
  category?: string | null;
  featured?: boolean | null;
  id: string;
  name: string;
}

export interface TechnicalSkillsProps {
  skills?: PortfolioSkill[];
}

export interface SkillMetric {
  label: string;
  level: number;
}

export interface SkillGroup {
  accent: string;
  description: string;
  icon: "code" | "frontend" | "backend" | "database" | "cloud" | "workflow";
  metrics: SkillMetric[];
  title: string;
  tools: string[];
}
