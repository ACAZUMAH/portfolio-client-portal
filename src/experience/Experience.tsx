import { Box, Loader } from "@mantine/core";
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
      <h1>Experience</h1>
    </Box>
  );
};
