import { Badge, Box, Container, Group, Paper, Stack, Text, Title } from "@mantine/core";
import classes from "./styles/index.module.css";

const writingIdeas = [
  "Building business portals with GraphQL and MongoDB",
  "How I structure admin dashboards for client operations",
  "What I learned building LivelyCura, Bora Capital, and PizzaMan systems",
];

export const Blogs = () => {
  return (
    <Box className="page-surface">
      <Container size="xl" py={96}>
        <Stack gap="xl">
          <Box>
            <Badge variant="light" color="teal" size="lg">
              Blogs
            </Badge>
            <Title className={classes["case-title"]} mt="md">
              Notes from the systems I build.
            </Title>
            <Text size="lg" c="dimmed" maw={720} mt="md">
              A space for engineering breakdowns, project decisions, and lessons from
              backend, frontend, portal, and dashboard work.
            </Text>
          </Box>

          <Group align="stretch" grow>
            {writingIdeas.map((idea, index) => (
              <Paper key={idea} className={classes["experience-card"]} p="xl" radius="md" withBorder>
                <Text fw={900} size="xl">
                  0{index + 1}
                </Text>
                <Text fw={800} mt="md">
                  {idea}
                </Text>
                <Text size="sm" c="dimmed" mt="sm">
                  Draft topic for the portfolio content system.
                </Text>
              </Paper>
            ))}
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};
