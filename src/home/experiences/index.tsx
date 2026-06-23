import { Box, Container, Group, Text } from "@mantine/core";

import type { Experience } from "src/interfaces/graphql/graphql";

import { ExperienceTimeline } from "./Timeline";
import classes from "./styles.module.css";

interface ExperiencesProps {
  experiences?: Experience[];
}

export const Experiences = ({ experiences = [] }: ExperiencesProps) => {
  if (!experiences.length) return null;

  return (
    <Box
      component="section"
      id="experience"
      className={classes["experience-section"]}
    >
      <Container size={1400} px={{ base: 20, sm: 32 }}>
        <Box className={classes["section-heading"]}>
          <Group gap="sm" className={classes["section-kicker"]} wrap="nowrap">
            <span>04.</span>
            <span />
          </Group>

          <Text component="h3" className={classes["section-title"]}>
            Professional Experience
          </Text>

          <Text className={classes["section-copy"]}>
            A chronicle of my professional journey, building scalable systems and
            shipping product-focused software for clients, teams, and real-world
            businesses.
          </Text>
        </Box>

        <ExperienceTimeline experiences={experiences} />
      </Container>
    </Box>
  );
};
