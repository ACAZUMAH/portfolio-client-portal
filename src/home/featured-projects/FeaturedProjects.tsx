import { Box, Button, Container, Group, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import { routeEndpoints } from "src/constants";

import { CardCarousel } from "./components/CardCarousel";
import {
  getVisibleProjects,
  toFeaturedProjectCard,
} from "./helpers/projectHelpers";
import type { FeaturedProjectCard, FeaturedProjectsProps } from "./interfaces";
import classes from "./styles.module.css";

export const FeaturedProjects = ({
  projects = [],
  getVisitorId,
  trackOutboundClick,
}: FeaturedProjectsProps) => {
  const carouselProjects = useMemo(() => {
    return getVisibleProjects(projects).map(toFeaturedProjectCard);
  }, [projects]);

  const handleProjectClick = (project: FeaturedProjectCard) => {
    void trackOutboundClick({
      variables: {
        data: {
          label: project.title,
          path: project.href,
          type: "featured_project",
          url: project.href,
          visitorId: getVisitorId(),
        },
      },
    }).catch(() => undefined);
  };

  if (!carouselProjects.length) return null;

  return (
    <Box
      component="section"
      id="featured-projects"
      className={classes["featured-section"]}
    >
      <Container size={1400} px={{ base: 20, sm: 32 }}>
        <Group className={classes["section-header"]} align="flex-start">
          <Box className={classes["section-heading"]}>
            <Group gap="sm" className={classes["section-kicker"]} wrap="nowrap">
              <span>05.</span>
              <span />
            </Group>

            <Text component="h3" className={classes["section-title"]}>
              Featured Projects
            </Text>

            <Text className={classes["section-copy"]}>
              A selection of my most impactful work across various industries
              and technologies.
            </Text>
          </Box>

          <Button
            component={Link}
            to={routeEndpoints.PROJECTS}
            rightSection={<IconArrowRight size={16} />}
            variant="light"
            radius="xl"
            size="sm"
            className={classes["view-all-button"]}
          >
            View All Projects
          </Button>
        </Group>

        <CardCarousel
          projects={carouselProjects}
          onProjectClick={handleProjectClick}
        />
      </Container>
    </Box>
  );
};
