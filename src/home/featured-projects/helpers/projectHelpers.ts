import { routeEndpoints } from "src/constants";

import { fallbackProjectImages } from "../constants/projectImages";
import type {
  FeaturedProject,
  FeaturedProjectCard,
  ProjectLink,
} from "../interfaces";

export const formatProjectStatus = (status?: string | null) => {
  if (!status) return "Project";
  return status.replaceAll("_", " ");
};

export const getProjectMeta = (project: FeaturedProject) =>
  [project.company, project.client].filter(Boolean).join(" / ");

export const getProjectPreviewUrl = (
  _project: FeaturedProject,
  index: number,
) => fallbackProjectImages[index % fallbackProjectImages.length];

export const getProjectLink = (
  project: FeaturedProject,
  kind: "live" | "github",
): ProjectLink | undefined => {
  if (kind === "github" && project.github?.repoUrl) {
    return { label: "GitHub", type: "github", url: project.github.repoUrl };
  }

  return project.links?.find((link) => {
    if (!link.url) return false;

    const value = `${link.type || ""} ${link.label || ""}`.toLowerCase();

    if (kind === "github") return value.includes("github");

    return ["live", "website", "demo", "production"].some((word) =>
      value.includes(word),
    );
  });
};

export const getVisibleProjects = (projects: FeaturedProject[]) =>
  projects.filter(Boolean).slice(0, 5);

export const toFeaturedProjectCard = (
  project: FeaturedProject,
  index: number,
): FeaturedProjectCard => {
  const href = routeEndpoints.PROJECT_DETAILS.replace(":slug", project.slug);

  return {
    id: project.id,
    title: project.title,
    summary: project.summary,
    href,
    image: project.medias?.[0]?.url || getProjectPreviewUrl(project, index),
    imageAlt: `${project.title} project preview`,
    meta: getProjectMeta(project),
    role: project.role,
    status: formatProjectStatus(project.status),
    stack: project.stack?.slice(0, 6) || [],
  };
};
