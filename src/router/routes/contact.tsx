import { routeEndpoints } from "src/constants";
import { Contact } from "src/contact";

export const contactRoutes = [
  {
    path: routeEndpoints.CONTACT,
    element: <Contact />,
  },
];
