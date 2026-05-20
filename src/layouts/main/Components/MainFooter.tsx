import React from "react";
import { Container, Group, Text } from "@mantine/core";

export const MainFooter: React.FC = () => {
  return (
    <Container size="xl">
      <Group justify="space-between" align="center">
        <Text size="sm" c="dimmed">
          Built as Caleb&apos;s portfolio operating system.
        </Text>
        <Text size="sm" c="dimmed">
          TypeScript · GraphQL · MongoDB · React
        </Text>
      </Group>
    </Container>
  );
};
