import { routeEndpoints } from "src/constants";
import { Projects } from "src/projects";
import { ProjectDetails } from "src/project";

export const projectRoutes = [
  {
    path: routeEndpoints.PROJECTS,
    element: <Projects />,
  },
  {
    path: routeEndpoints.PROJECT_DETAILS,
    element: <ProjectDetails />,
  },
];
