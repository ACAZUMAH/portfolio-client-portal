import classes from "../styles/index.module.css";
import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import TextType from "src/components/animated-text/TextType";
import Threads from "src/components/threads/Threads";
import { images } from "src/constants/images";
import { useHeroScrollAnimation } from "src/home/hooks/useHeroScrollAnimation";

interface HeroSectionProps {
  portfolio: any;
  trackOutboundClick: any;
  trackResumeDownload: any;
  getVisitorId: () => string;
}

export const HeroSection = ({ portfolio }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const profile = portfolio?.profile;
  const headline =
    profile?.headline ||
    "I build scalable backend systems, modern web and mobile applications, and business-facing products with TypeScript, React, GraphQL, and MongoDB.";

  useHeroScrollAnimation(heroRef);

  return (
    <Box className={classes["hero-band"]} ref={heroRef}>
      <Box className={classes["hero-threads-layer"]}>
        <Threads
          aria-hidden="true"
          color={[0.08, 0.6, 0.85]}
          amplitude={1}
          distance={0}
          enableMouseInteraction
        />
      </Box>
      <Container size="100%">
        <Box className={classes["hero-stage"]}>
          <Box
            className={`${classes["hero-orb"]} ${classes["hero-orb-one"]}`}
          />
          <Box
            className={`${classes["hero-orb"]} ${classes["hero-orb-two"]}`}
          />
          <Box className={classes["hero-showcase"]}>
            <motion.div
              className={classes["hero-copy"]}
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Stack gap="md">
                <Group className={classes["hero-role-pill"]}>
                  <Box
                    aria-hidden="true"
                    className={classes["hero-role-dot"]}
                  />
                  <Text className={classes["hero-role-text"]}>
                    Available for select freelance and full-time roles
                  </Text>
                </Group>
                <Box className={classes["hero-kicker"]}>Hello, I&apos;m</Box>
                <TextType
                  text={(profile?.fullName || "Caleb Azumah").split(" ")[0]}
                  className={classes["hero-title"]}
                  typingSpeed={200}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  deletingSpeed={200}
                  cursorBlinkDuration={0.5}
                />
                <Title order={2} className={classes["hero-subtitle"]} mt="xs">
                  {headline}
                </Title>
                <Group className={classes["hero-actions"]} mt="md">
                  <Button
                    size="md"
                    radius="xl"
                    color="#3b4652"
                    rightSection={
                      <IconArrowRight size={16} style={{ rotate: "310deg" }} />
                    }
                  >
                    View Featured Work
                  </Button>
                  <Button variant="light" radius="xl" size="md" color="#3b4652">
                    Contact Me
                  </Button>
                </Group>
                <Group className={classes["hero-availability-strip"]}>
                  <Group className={classes["hero-social-links"]}>
                    <Anchor
                      aria-label="GitHub"
                      className={classes["hero-social-link"]}
                      href={profile?.githubUrl}
                      rel="noreferrer"
                      target="_blank"
                      underline="never"
                    >
                      <IconBrandGithub size={27} stroke={1.65} />
                    </Anchor>
                    <Anchor
                      aria-label="LinkedIn"
                      className={classes["hero-social-link"]}
                      href={profile?.linkedInUrl}
                      rel="noreferrer"
                      target="_blank"
                      underline="never"
                    >
                      <IconBrandLinkedin size={27} stroke={1.65} />
                    </Anchor>
                  </Group>
                  <Box
                    aria-hidden="true"
                    className={classes["hero-availability-dot"]}
                  />
                  <Text size="md">
                    Based in remote-friendly, open to collaboration
                  </Text>
                </Group>
              </Stack>
            </motion.div>

            <motion.div
              className={classes["hero-person"]}
              initial={{ opacity: 0, y: 38, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src={images.heroCutout}
                alt={profile?.fullName || "Caleb Azumah"}
                className={classes["hero-person-image"]}
              />
            </motion.div>

            <Box className={classes["hero-floating-zone"]}>
              <Paper
                component={motion.div}
                className={`${classes["floating-card"]} ${classes["floating-card-one"]}`}
              >
                <Box
                  className={`${classes["floating-preview"]} ${classes["floating-preview-window"]}`}
                >
                  <Box className={classes["floating-window-top"]}>
                    <span />
                    <span />
                    <span />
                  </Box>
                  <Box className={classes["floating-window-body"]}>
                    <Image src={images.react} alt="React" />
                    <Image src={images.ts} alt="TypeScript" />
                    <Image src={images.graphql} alt="GraphQL" />
                    <Image src={images.antDesign} alt="Ant Design" />
                    <Image src={images.html} alt="HTML" />
                    <Image src={images.css} alt="CSS" />
                    <Image src={images.javascript} alt="Javascript" />
                    <Image src={images.mu5} alt="MUI" />
                  </Box>
                </Box>
                <Text className={classes["floating-label-chip"]}>
                  Web Platforms
                </Text>
              </Paper>

              <Paper
                component={motion.div}
                className={`${classes["floating-card"]} ${classes["floating-card-two"]}`}
              >
                <Box className={classes["floating-preview-mobile"]}>
                  <Box className={classes["mobile-notch"]} />
                  <Box className={classes["mobile-app-grid"]}>
                    <Box className={classes["mobile-app-icon"]}>
                      <Image src={images.react} alt="React Native" />
                    </Box>
                    <Box className={classes["mobile-app-icon"]}>
                      <Image src={images.ts} alt="TypeScript" />
                    </Box>
                    <Box
                      className={classes["mobile-app-icon"]}
                      style={{ background: "transparent" }}
                    />
                    <Box
                      className={classes["mobile-app-icon"]}
                      style={{ background: "transparent" }}
                    />
                  </Box>
                </Box>
                <Text className={classes["floating-label-chip"]}>
                  Mobile Apps
                </Text>
              </Paper>

              <Paper
                component={motion.div}
                className={`${classes["floating-card"]} ${classes["floating-card-three"]}`}
              >
                <Box className={classes["floating-preview-backend"]}>
                  <Box className={classes["backend-terminal-header"]}>
                    <span />
                    <span />
                    <span />
                  </Box>
                  <Box className={classes["backend-grid"]}>
                    <Image src={images.node} alt="Node.js" />
                    <Image src={images.express} alt="Express" />
                    <Image src={images.mongodb} alt="MongoDB" />
                    <Image src={images.graphql} alt="GraphQL" />
                    <Image src={images.api} alt="API" />
                    <Image src={images.socket} alt="Socket.io" />
                    <Image src={images.docker} alt="Docker" />
                    <Image src={images.python} alt="Python" />
                    <Image src={images.go} alt="Go" />
                  </Box>
                </Box>
                <Text className={classes["floating-label-chip"]}>
                  Backend Systems
                </Text>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
