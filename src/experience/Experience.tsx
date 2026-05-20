import { Box, Loader } from "@mantine/core";
import { ExperienceSection } from "src/home/components/ExperienceSection";
import { usePortfolioQuery } from "src/home/hooks/usePortfolioQuery";

export const Experience = () => {
  const { data, loading } = usePortfolioQuery();
  const portfolio = data?.portfolio;

  if (loading) {
    return (
      <Box className="loading-screen">
        <Loader size="lg" />
      </Box>
    );
  }

  return (
    <Box className="page-surface">
      <ExperienceSection
        certifications={portfolio?.certifications || []}
        education={portfolio?.education || []}
        experiences={portfolio?.experiences || []}
        skills={portfolio?.skills || []}
      />
    </Box>
  );
};
