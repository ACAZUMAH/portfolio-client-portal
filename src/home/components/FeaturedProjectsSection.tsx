import classes from "../styles/index.module.css";
import { Box, Container, SimpleGrid } from "@mantine/core";
import { useRef } from "react";
import { Conditional } from "src/components/conditional";
import { useStackedProjectsAnimation } from "src/home/hooks/useStackedProjectsAnimation";
import { ProjectCard } from "src/components/project-card/ProjectCard";
import { SectionTitle } from "./SectionTitle";

interface FeaturedProjectsSectionProps {
  projects: any[];
}

export const FeaturedProjectsSection = ({
  projects = [],
}: FeaturedProjectsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useStackedProjectsAnimation(sectionRef, cardRefs, projects.length);

  return (
    <Box
      className={`${classes["animated-section"]} ${classes["stacked-project-section"]}`}
      ref={sectionRef}
    >
      <Container size="xl" py={88}>
        <SectionTitle
          eyebrow="Selected work"
          title="Case studies and project systems"
          description="A curated view of backend platforms, client portals, admin tools, and business systems I have shipped."
        />
        <Conditional condition={projects.length}>
          <Box className={classes["stacked-projects"]}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(node) => {
                  if (node) cardRefs.current[index] = node;
                }}
                className={classes["stacked-project-card"]}
                style={{ top: `${104 + index * 22}px` }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </Box>
        </Conditional>
        <Conditional condition={!projects.length}>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" />
        </Conditional>
      </Container>
    </Box>
  );
};
