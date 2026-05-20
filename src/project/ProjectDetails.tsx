import classes from "./styles/index.module.css";
import {
  Badge,
  Box,
  Button,
  Container,
  Group,
  Loader,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconExternalLink } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { Conditional } from "src/components/conditional";
import { routeEndpoints } from "src/constants";
import { InfoCard } from "./components/InfoCard";
import { ListPanel } from "./components/ListPanel";
import { useProjectDetailsQuery } from "./hooks/useProjectDetailsQuery";
import { useProjectOutboundTracking } from "./hooks/useProjectOutboundTracking";

export const ProjectDetails = () => {
  const { slug } = useParams();
  const { data, loading } = useProjectDetailsQuery(slug);
  const { trackOutboundClick } = useProjectOutboundTracking();
  const project = data?.getPublicProjectBySlug;

  if (loading) {
    return (
      <Box className="loading-screen">
        <Loader />
      </Box>
    );
  }

  if (!project) {
    return (
      <Container py={80}>
        <Title>Project not found</Title>
        <Button mt="md" component={Link} to={routeEndpoints.PROJECTS} leftSection={<IconArrowLeft size={18} />}>
          Back to projects
        </Button>
      </Container>
    );
  }

  return (
    <Box className="page-surface">
      <Container size="lg" py={48}>
        <Button component={Link} to={routeEndpoints.PROJECTS} variant="subtle" leftSection={<IconArrowLeft size={18} />}>
          Back to projects
        </Button>

        <Stack mt="xl" gap="xl">
          <Box>
            <Group mb="md">
              <Badge>{project.status.replaceAll("_", " ")}</Badge>
              <Badge variant="light">{project.visibility.replaceAll("_", " ")}</Badge>
            </Group>
            <Title className={classes["case-title"]}>{project.title}</Title>
            <Text size="xl" c="dimmed" maw={820}>
              {project.summary}
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, md: 3 }}>
            <InfoCard label="Company" value={project.company || "Personal project"} />
            <InfoCard label="Client" value={project.client || "Public portfolio"} />
            <InfoCard label="Role" value={project.role || "Software engineer"} />
          </SimpleGrid>

          <Conditional condition={project.problem}>
            <Paper p="xl" radius="md" withBorder>
              <Title order={2}>Problem</Title>
              <Text mt="sm">{project.problem}</Text>
            </Paper>
          </Conditional>

          <SimpleGrid cols={{ base: 1, md: 2 }}>
            <ListPanel title="Core features" items={project.features} />
            <ListPanel title="Outcomes" items={project.outcomes} />
          </SimpleGrid>

          {project.caseStudySections?.map((section: any) => (
            <Paper key={section.title} p="xl" radius="md" withBorder>
              <Title order={2}>{section.title}</Title>
              <Text mt="sm">{section.body}</Text>
            </Paper>
          ))}

          <Paper p="xl" radius="md" withBorder>
            <Title order={2}>Stack</Title>
            <Group mt="md">
              {project.stack.map((stack: string) => (
                <Badge key={stack} variant="light">
                  {stack}
                </Badge>
              ))}
            </Group>
          </Paper>

          <Conditional condition={project.links?.length}>
            <Group>
              {project.links?.map((link: any) => (
                <Button
                  key={link.url}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rightSection={<IconExternalLink size={16} />}
                  onClick={() =>
                    trackOutboundClick({
                      variables: {
                        data: {
                          label: link.label,
                          url: link.url,
                          type: link.type,
                          path: window.location.pathname,
                        },
                      },
                    }).catch(() => undefined)
                  }
                >
                  {link.label}
                </Button>
              ))}
            </Group>
          </Conditional>
        </Stack>
      </Container>
    </Box>
  );
};
