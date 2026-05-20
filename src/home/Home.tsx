import { Box, Loader } from "@mantine/core";
import { ContactSection } from "src/contact/components/ContactSection";
import { ExperienceSection } from "src/home/components/ExperienceSection";
import { HeroSection } from "src/home/components/HeroSection";
import { ProjectExplorerSection } from "src/home/components/ProjectExplorerSection";
import { TestimonialsSection } from "src/home/components/TestimonialsSection";
import { usePortfolioQuery } from "src/home/hooks/usePortfolioQuery";
import { usePortfolioTracking } from "src/home/hooks/usePortfolioTracking";
import { WhatIDoSection } from "./components/WhatIDoSection";

export const Home = () => {
  const { data, loading } = usePortfolioQuery();
  const portfolio = data?.portfolio;

  const { getVisitorId, trackOutboundClick, trackResumeDownload } =
    usePortfolioTracking(portfolio?.featuredProjects || []);

  if (loading) {
    return (
      <Box className="loading-screen">
        <Loader size="lg" />
      </Box>
    );
  }

  return (
    <Box>
      <HeroSection
        portfolio={portfolio}
        getVisitorId={getVisitorId}
        trackOutboundClick={trackOutboundClick}
        trackResumeDownload={trackResumeDownload}
      />
      <WhatIDoSection />

      <ProjectExplorerSection />

      <ExperienceSection
        certifications={portfolio?.certifications || []}
        education={portfolio?.education || []}
        experiences={portfolio?.experiences || []}
        skills={portfolio?.skills || []}
      />

      <TestimonialsSection testimonials={portfolio?.testimonials || []} />
      <ContactSection email={portfolio?.profile?.email} />
    </Box>
  );
};
