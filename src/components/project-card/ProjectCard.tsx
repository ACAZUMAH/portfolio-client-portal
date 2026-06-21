import classes from "./index.module.css";
import {
  Anchor,
  Badge,
  Box,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { Conditional } from "../conditional";
import { useRouteNavigation } from "src/hooks/useAppNavigation";
import { routeEndpoints } from "src/constants";

interface ProjectCardProps {
  project: any;
  compact?: boolean;
  index?: number;
}

export const ProjectCard = ({
  project,
  compact,
  index = 0,
}: ProjectCardProps) => {
  const coverImage =
    project.medias && project.medias.length > 0 ? project.medias[0].url : null;
  const projectMeta = [project.company, project.client]
    .filter(Boolean)
    .join(" / ");

  const navigateToProject = useRouteNavigation(
    routeEndpoints.PROJECT_DETAILS.replace(":slug", project.slug),
  );

  return (
    <Paper
      component={motion.article}
      withBorder
      className={classes["project-card"]}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Stack h="100%" justify="space-between" gap={0}>
        <Box className={classes["visual-panel"]}>
          {coverImage ? (
            <Box className={classes["image-wrapper"]} aria-hidden="true">
              <Image
                src={coverImage}
                alt={project.title}
                className={classes["card-image"]}
                fit="cover"
              />
            </Box>
          ) : (
            <Box className={classes["image-placeholder"]}>
              <span>{String(project.title || "Project").slice(0, 2)}</span>
            </Box>
          )}
          <Text className={classes["project-number"]}>
            {String(index + 1).padStart(2, "0")}
          </Text>
        </Box>

        <Stack className={classes["content-panel"]} gap="sm">
          <Group justify="space-between" align="center" wrap="nowrap">
            <Badge className={classes["status-badge"]} size="sm">
              {project.status?.replaceAll("_", " ") || "Project"}
            </Badge>
            <Conditional condition={projectMeta}>
              <Text className={classes["project-meta"]} lineClamp={1}>
                {projectMeta}
              </Text>
            </Conditional>
          </Group>

          <Title order={3} className={classes["card-title"]} lineClamp={1}>
            {project.title}
          </Title>

          <Text className={classes["card-summary"]} lineClamp={3}>
            {project.summary}
          </Text>

          <Conditional condition={project.role && !compact}>
            <Text className={classes["project-role"]} lineClamp={1}>
              {project.role}
            </Text>
          </Conditional>

          <Group gap={6} className={classes["tech-row"]}>
            {project.stack?.slice(0, compact ? 3 : 6).map((stack: string) => (
              <Badge key={stack} className={classes["tech-badge"]} size="xs">
                {stack}
              </Badge>
            ))}
          </Group>

          <Anchor
            className={classes["card-action"]}
            aria-label={`View ${project.title} case study`}
            onClick={navigateToProject}
            underline="never"
          >
            <span className={classes["card-action-label"]}>View</span>
            <span className={classes["card-action-icon"]}>
              <IconArrowRight size={18} className={classes["arrow-rest"]} />
              <IconArrowRight size={18} className={classes["arrow-hover"]} />
            </span>
          </Anchor>
        </Stack>
      </Stack>
    </Paper>
  );
};
