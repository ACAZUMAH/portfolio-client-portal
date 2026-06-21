import classes from "../styles/about.module.css";
import {
  Anchor,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconArrowDown,
  IconArrowRight,
  IconBriefcase,
  IconMail,
  IconMapPin,
  IconSchool,
} from "@tabler/icons-react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const riseItem = (index: number) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.55, ease: EASE, delay: index * 0.09 },
});

// rise-in on view + own hover variant (no entrance delay applied to hover)
const riseHover = (index: number, hover: Record<string, number>) => ({
  initial: "hidden",
  whileInView: "show",
  whileHover: "hover",
  viewport: { once: true, amount: 0.4 },
  variants: {
    hidden: { opacity: 0, y: 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: EASE, delay: index * 0.09 },
    },
    hover: { ...hover, transition: { duration: 0.25, ease: EASE } },
  },
});

const CountUp = ({ value }: { value: string }) => {
  const match = /^(\d+)(.*)$/.exec(value);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, { duration: 1.4, ease: EASE });
    return () => controls.stop();
  }, [inView, target, count]);

  return <motion.span ref={ref}>{text}</motion.span>;
};

interface AboutMeProps {
  availability?: {
    label?: string | null;
    description?: string | null;
    acceptingWork?: boolean | null;
  } | null;
  defaultResume?: {
    title?: string | null;
    url?: string | null;
    focus?: string | null;
  } | null;
  education?: Array<{
    id: string;
    institution?: string | null;
    program?: string | null;
    location?: string | null;
    endDate?: string | null;
  }>;
  experienceCount?: number;
  profile?: {
    bio?: string | null;
    email?: string | null;
    fullName?: string | null;
    headline?: string | null;
    location?: string | null;
    title?: string | null;
  } | null;
  projectCount?: number;
  skills?: Array<{
    category?: string | null;
    id: string;
    name: string;
    featured?: boolean | null;
  }>;
}

const countLabel = (count: number | undefined, fallback: string) => {
  if (!count) return fallback;
  return `${count}+`;
};

const splitBio = (bio?: string | null) => {
  const fallback =
    "I build reliable digital products across backend systems, admin tools, and polished client experiences. I care about clean architecture, practical interfaces, and software that supports real business workflows.";

  return (bio || fallback)
    .split(/\n+/)
    .map((item) => item.trim())
    .filter(Boolean);
};

export const AboutMe = ({
  availability,
  defaultResume,
  education = [],
  experienceCount,
  profile,
  projectCount,
  skills = [],
}: AboutMeProps) => {
  const status = availability?.label || "Open to opportunities";
  const bioParagraphs = splitBio(profile?.bio);
  const featuredSkills = skills.filter((skill) => skill.featured).slice(0, 8);
  const visibleSkills = featuredSkills.length
    ? featuredSkills
    : skills.slice(0, 8);

  const stats = [
    { value: countLabel(experienceCount, "3+"), label: "Years Experience" },
    { value: countLabel(projectCount, "10+"), label: "Projects Shipped" },
    { value: countLabel(skills.length, "12+"), label: "Technologies" },
  ];

  const detailRows = [
    {
      label: "Location",
      value: profile?.location || "Remote-friendly",
      Icon: IconMapPin,
    },
    {
      label: "Role",
      value: profile?.title || "Software Engineer",
      Icon: IconBriefcase,
    },
    {
      label: "Email",
      value: profile?.email || "Use the contact form",
      href: profile?.email ? `mailto:${profile.email}` : undefined,
      Icon: IconMail,
    },
    {
      label: "Status",
      value: status,
      Icon: IconBriefcase,
    },
  ];

  return (
    <Box component="section" id="about" className={classes["about-section"]}>
      <Container size={1400} px={{ base: 20, sm: 32 }}>
        <Box className={classes["about-heading-block"]}>
          <Text component="h2" className={classes["about-title"]}>
            About Me
          </Text>
          <Box className={classes["about-title-rule"]} />
        </Box>

        <Grid gutter={{ base: 34, md: 58 }} align="start">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg" className={classes["about-copy-stack"]}>
              <Box>
                <Text className={classes["about-lead"]}>
                  {profile?.headline ||
                    "Full-stack software engineer building scalable systems and product-focused web experiences."}
                </Text>
                <Stack gap="md" mt="xl">
                  {bioParagraphs.map((paragraph) => (
                    <Text key={paragraph} className={classes["about-copy"]}>
                      {paragraph}
                    </Text>
                  ))}
                </Stack>
              </Box>

              <Group className={classes["about-stats-row"]}>
                {stats.map((stat, i) => (
                  <Box
                    key={stat.label}
                    component={motion.div}
                    className={classes["about-stat-item"]}
                    {...riseItem(i)}
                  >
                    <Text className={classes["about-stat-value"]}>
                      <CountUp value={stat.value} />
                    </Text>
                    <Text className={classes["about-stat-label"]}>
                      {stat.label}
                    </Text>
                  </Box>
                ))}
              </Group>
              <Button
                component="a"
                rel="noreferrer"
                variant="outline"
                radius="xl"
                className={classes["about-resume-button"]}
                rightSection={
                  <IconArrowRight size={16} style={{ rotate: "310deg" }} />
                }
              >
                Learn More
              </Button>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Paper
                withBorder
                radius="lg"
                className={classes["about-info-card"]}
              >
                {detailRows.map(({ href, Icon, label, value }, i) => (
                  <Box
                    key={label}
                    component={motion.div}
                    className={classes["about-info-row"]}
                    {...riseHover(i, { x: 6 })}
                  >
                    <Group gap="sm" wrap="nowrap">
                      <Icon size={18} stroke={2.2} />
                      <Text className={classes["about-info-label"]}>
                        {label}
                      </Text>
                    </Group>
                    {href ? (
                      <Anchor
                        href={href}
                        className={classes["about-info-value"]}
                      >
                        {value}
                      </Anchor>
                    ) : (
                      <Text className={classes["about-info-value"]}>
                        {value}
                      </Text>
                    )}
                  </Box>
                ))}
              </Paper>

              {education.length ? (
                <Box>
                  <Text className={classes["about-panel-title"]}>
                    Education
                  </Text>
                  <Stack gap="md" mt="md">
                    {education.map((item, i) => (
                      <Paper
                        key={item.id}
                        component={motion.div}
                        withBorder
                        radius="lg"
                        className={classes["about-education-card"]}
                        {...riseHover(i, { y: -2, scale: 1.02 })}
                      >
                        <Group align="flex-start" gap="md" wrap="nowrap">
                          <Box className={classes["about-education-icon"]}>
                            <IconSchool size={20} stroke={2.2} />
                          </Box>
                          <Box>
                            <Text
                              className={classes["about-education-program"]}
                            >
                              {item.program || "Education"}
                            </Text>
                            <Text className={classes["about-education-meta"]}>
                              {[item.institution, item.location]
                                .filter(Boolean)
                                .join(", ")}
                            </Text>
                            {item.endDate ? (
                              <Text className={classes["about-education-date"]}>
                                {item.endDate}
                              </Text>
                            ) : null}
                          </Box>
                        </Group>
                      </Paper>
                    ))}
                  </Stack>
                </Box>
              ) : null}
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
