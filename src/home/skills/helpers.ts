import { categoryAliases, fallbackSkillGroups } from "./constants";
import type { PortfolioSkill, SkillGroup } from "./interfaces";

const normalize = (value?: string | null) => value?.trim().toLowerCase() || "";

export const buildSkillGroups = (skills: PortfolioSkill[] = []): SkillGroup[] => {
  if (!skills.length) return fallbackSkillGroups;

  const groupedSkills = new Map<string, string[]>();

  skills.forEach((skill) => {
    const alias = categoryAliases[normalize(skill.category)] || "Tools & Workflow";
    const current = groupedSkills.get(alias) || [];

    if (!current.some((item) => item.toLowerCase() === skill.name.toLowerCase())) {
      current.push(skill.name);
    }

    groupedSkills.set(alias, current);
  });

  return fallbackSkillGroups.map((group) => {
    const apiTools = groupedSkills.get(group.title) || [];
    const tools = apiTools.length ? apiTools : group.tools;
    const importantTools = tools.slice(0, 3);

    return {
      ...group,
      metrics: group.metrics.map((metric, index) => ({
        ...metric,
        label: importantTools[index] || metric.label,
      })),
      tools,
    };
  });
};
