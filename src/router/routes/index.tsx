import { Navigate } from "react-router-dom";
import { routeEndpoints } from "src/constants";
import { PublicLayout } from "src/layouts/main";
import { blogRoutes } from "./blogs";
import { contactRoutes } from "./contact";
import { experienceRoutes } from "./experience";
import { homeRoutes } from "./home";
import { projectRoutes } from "./projects";

export const routes = [
  {
    path: routeEndpoints.HOME,
    element: <PublicLayout />,
    children: [
      ...homeRoutes,
      ...projectRoutes,
      ...experienceRoutes,
      ...blogRoutes,
      ...contactRoutes,
      {
        path: "*",
        element: <Navigate to={routeEndpoints.HOME} replace />,
      },
    ],
  },
];
