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
import { type MouseEvent, useRef } from "react";
import TextType from "src/components/animated-text/TextType";
import { images } from "src/constants/images";
import { useHeroScrollAnimation } from "src/home/hooks/useHeroScrollAnimation";

interface HeroSectionProps {
  portfolio?: any;
}

export const HeroSection = ({ portfolio }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const profile = portfolio?.profile;
  const headline =
    profile?.headline ||
    "I build scalable backend systems, modern web and mobile applications, and business-facing products with TypeScript, React, GraphQL, and MongoDB.";

  const scrollToSection =
    (sectionId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${sectionId}`);
    };

  useHeroScrollAnimation(heroRef);

  return (
    <Box className={classes["hero-band"]} ref={heroRef}>
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
                <Group className="flex w-fit max-w-full flex-nowrap items-center gap-[10px] rounded-full border border-[rgba(59,70,82,0.14)] bg-[rgba(59,70,82,0.1)] px-4 py-[9px] text-[#3b4652] shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] max-[900px]:py-[10px]">
                  <Box
                    aria-hidden="true"
                    className="size-2 shrink-0 rounded-full bg-[#159bd8] shadow-[0_0_0_4px_rgba(21,155,216,0.12)]"
                  />
                  <Text className="min-w-0 whitespace-nowrap text-[clamp(13px,1.05vw,15px)] font-bold leading-[1.25] text-[#3b4652] max-[900px]:whitespace-normal max-[900px]:text-[15px]">
                    Available for select freelance and full-time roles
                  </Text>
                </Group>
                <Box className="w-fit text-[clamp(22px,3vw,28px)] font-black normal-case tracking-normal text-[#27343c]">
                  Hello, I&apos;m
                </Box>
                <TextType
                  text={(profile?.fullName || "Caleb Azumah").split(" ")[0]}
                  className="max-w-[700px] text-[clamp(70px,10vw,110px)] font-black uppercase leading-[0.85] tracking-[-1px] text-[#3b4652] [text-shadow:1px_1px_0_#d9e0e8,2px_2px_0_#d9e0e8,3px_3px_0_#d9e0e8,4px_4px_0_#d9e0e8,5px_5px_16px_rgba(59,70,82,0.15)]"
                  typingSpeed={200}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="_"
                  deletingSpeed={200}
                  cursorBlinkDuration={0.5}
                />
                <Title
                  order={2}
                  className="max-w-[440px] overflow-hidden text-[16px] font-medium leading-[1.6] text-[rgba(23,33,43,0.72)] [display:-webkit-box] [-webkit-box-orient:vertical]"
                  mt="xs"
                >
                  {headline}
                </Title>
                <Group
                  className="flex-nowrap gap-3 max-[900px]:flex-wrap"
                  mt="md"
                >
                  <Button
                    component="a"
                    href="#featured-projects"
                    onClick={scrollToSection("featured-projects")}
                    size="md"
                    radius="xl"
                    color="#3b4652"
                    rightSection={
                      <IconArrowRight size={16} style={{ rotate: "310deg" }} />
                    }
                  >
                    View Featured Work
                  </Button>
                  <Button
                    component="a"
                    href="#contact"
                    onClick={scrollToSection("contact")}
                    variant="light"
                    radius="xl"
                    size="md"
                    color="#3b4652"
                  >
                    Contact Me
                  </Button>
                </Group>
                <Group className="mt-1.5 w-max max-w-[min(720px,calc(100vw-96px))] flex-nowrap gap-[10px] text-[#60707f] max-[900px]:w-fit max-[900px]:max-w-full max-[900px]:flex-wrap max-[900px]:gap-[14px]">
                  <Group className="shrink-0 gap-[10px] max-[900px]:gap-[14px]">
                    <Anchor
                      aria-label="GitHub"
                      className="grid size-[30px] place-items-center rounded-lg text-[#60707f] transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[#3b4652]"
                      href={profile?.githubUrl}
                      rel="noreferrer"
                      target="_blank"
                      underline="never"
                    >
                      <IconBrandGithub size={27} stroke={1.65} />
                    </Anchor>
                    <Anchor
                      aria-label="LinkedIn"
                      className="grid size-[30px] place-items-center rounded-lg text-[#60707f] transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[#3b4652]"
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
                    className="size-[5px] shrink-0 rounded-full bg-[#60707f] opacity-[0.78]"
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
