import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { graphqlUrl } from "src/constants";

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: graphqlUrl,
  }),
  cache: new InMemoryCache(),
});
