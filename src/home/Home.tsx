import { Box, Loader } from "@mantine/core";
import { ContactSection } from "src/contact/components/ContactSection";
import { AboutMe } from "src/home/components/AboutMe";
import { FeaturedProjects } from "src/home/featured-projects";
import { HeroSection } from "src/home/components/HeroSection";
import { usePortfolioQuery } from "src/home/hooks/usePortfolioQuery";
import { usePortfolioTracking } from "src/home/hooks/usePortfolioTracking";
import { TechnicalSkills } from "./skills/Index";
import { Experiences } from "./experiences";

export const Home = () => {
  const { data, loading } = usePortfolioQuery();
  const portfolio = data?.portfolio;

  const { getVisitorId, trackOutboundClick } = usePortfolioTracking(
    portfolio?.featuredProjects || [],
  );

  if (loading) {
    return (
      <Box className="loading-screen">
        <Loader size="lg" />
      </Box>
    );
  }

  return (
    <Box>
      <HeroSection portfolio={portfolio} />
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

      <TechnicalSkills skills={portfolio?.skills || []} />

      <Experiences experiences={portfolio?.experiences || []} />

      <FeaturedProjects
        projects={portfolio?.featuredProjects || []}
        getVisitorId={getVisitorId}
        trackOutboundClick={trackOutboundClick}
      />
      <ContactSection email={portfolio?.profile?.email} />
    </Box>
  );
};
