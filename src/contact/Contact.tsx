import { Box, Loader } from "@mantine/core";
import { ContactSection } from "src/contact/components/ContactSection";
import { usePortfolioQuery } from "src/home/hooks/usePortfolioQuery";

export const Contact = () => {
  const { data, loading } = usePortfolioQuery();

  if (loading) {
    return (
      <Box className="loading-screen">
        <Loader size="lg" />
      </Box>
    );
  }

  return (
    <Box className="page-surface">
      <ContactSection email={data?.portfolio?.profile?.email} />
    </Box>
  );
};
