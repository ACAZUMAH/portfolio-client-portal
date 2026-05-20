import { Box, Container, Loader } from "@mantine/core";
import { ProjectExplorerSection } from "src/home/components/ProjectExplorerSection";
import { SectionTitle } from "src/home/components/SectionTitle";
import { useGetProjectsQuery } from "./hooks/useGetProjectsQuery";

export const Projects = () => {
  const { projects, loading } = useGetProjectsQuery();

  if (loading) {
    return (
      <Box className="loading-screen">
        <Loader size="lg" />
      </Box>
    );
  }

  return (
    <Box className="page-surface">
      <Container size="xl" pt={54}>
        <SectionTitle
          eyebrow="Projects"
          title="Case studies, products, and client systems"
          description="Browse the public project catalogue, filter by stack, and open detailed case studies where the project visibility allows it."
        />
      </Container>
      <ProjectExplorerSection />
    </Box>
  );
};
