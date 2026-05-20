export const routeEndpoints = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT_DETAILS: "/projects/:slug",
  EXPERIENCE: "/experience",
  BLOGS: "/blogs",
  CONTACT: "/contact",
};

export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const graphqlUrl = apiBaseUrl.endsWith("/graphql")
  ? apiBaseUrl
  : `${apiBaseUrl}/graphql`;
