import { ApolloProvider } from "@apollo/client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { AppRouter } from "src/router/router";
import { apolloClient } from "src/services/apollo-client";

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <MantineProvider defaultColorScheme="light">
        <Notifications position="top-right" />
        <AppRouter />
      </MantineProvider>
    </ApolloProvider>
  );
};

export default App;
