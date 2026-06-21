import { Box, Loader } from "@mantine/core";
import { ContactSection } from "src/contact/components/ContactSection";
import { AboutMe } from "src/home/components/AboutMe";
import { HeroSection } from "src/home/components/HeroSection";
import { usePortfolioQuery } from "src/home/hooks/usePortfolioQuery";
import { usePortfolioTracking } from "src/home/hooks/usePortfolioTracking";

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
      <AboutMe
        availability={portfolio?.availability}
        defaultResume={portfolio?.defaultResume}
        education={portfolio?.education || []}
        experienceCount={portfolio?.experiences?.length}
        profile={portfolio?.profile}
        projectCount={
          portfolio?.projects?.length || portfolio?.featuredProjects?.length
        }
        skills={portfolio?.skills || []}
      />
      <ContactSection email={portfolio?.profile?.email} />
    </Box>
  );
};
