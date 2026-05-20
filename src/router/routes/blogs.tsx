import { routeEndpoints } from "src/constants";
import { Blogs } from "src/blogs";

export const blogRoutes = [
  {
    path: routeEndpoints.BLOGS,
    element: <Blogs />,
  },
];
