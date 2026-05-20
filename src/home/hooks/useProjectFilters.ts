import { useMemo, useState } from "react";

export const useProjectFilters = (projects: any[] = []) => {
  const [selectedStacks, setSelectedStacks] = useState<string[]>([]);

  const stackOptions = useMemo(() => {
    const stacks = new Set<string>();
    projects.forEach(project =>
      project.stack?.forEach((stack: string) => stacks.add(stack))
    );
    return Array.from(stacks).sort();
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!selectedStacks.length) return projects;
    return projects.filter(project =>
      selectedStacks.every(stack => project.stack.includes(stack))
    );
  }, [projects, selectedStacks]);

  return {
    filteredProjects,
    selectedStacks,
    setSelectedStacks,
    stackOptions,
  };
};
