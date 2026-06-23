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
        <Box className="mb-[clamp(40px,6vw,60px)] max-w-[780px]">
          <Group gap="sm" className={classes["section-kicker"]} wrap="nowrap">
            <span>02.</span>
            <span />
          </Group>
          <Text
            component="h3"
            className="mb-[20px] mt-[15px] text-[clamp(40px,8vw,50px)] font-black uppercase leading-[0.88] text-[#3b4652] [text-shadow:1px_1px_0_#d9e0e8,2px_2px_0_#d9e0e8,3px_3px_0_rgba(217,224,232,0.74)] max-[900px]:text-[clamp(46px,16vw,68px)]"
          >
            About Me
          </Text>
        </Box>

        <Grid gutter={{ base: 34, md: 58 }} align="start">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg" className={classes["about-copy-stack"]}>
              <Box>
                <Text className="max-w-[680px] text-[clamp(15px,2.1vw,18px)] font-bold leading-[1.45] text-[#1f2b36] [text-wrap:pretty]">
                  {profile?.headline ||
                    "Full-stack software engineer building scalable systems and product-focused web experiences."}
                </Text>
                <Stack gap="md" mt="xl">
                  {bioParagraphs.map((paragraph) => (
                    <Text
                      key={paragraph}
                      className="max-w-[670px] text-[clamp(13px,1.55vw,16px)] font-[560] leading-[1.78] text-[#52616d] [text-wrap:pretty]"
                    >
                      {paragraph}
                    </Text>
                  ))}
                </Stack>
              </Box>

              <Group className="items-start gap-[clamp(24px,5vw,56px)] max-[900px]:grid max-[900px]:w-full max-[900px]:grid-cols-3 max-[900px]:gap-[14px]">
                {stats.map((stat, i) => (
                  <Box
                    key={stat.label}
                    component={motion.div}
                    className="min-w-[120px] max-[900px]:min-w-0"
                    {...riseItem(i)}
                  >
                    <Text className="text-[clamp(42px,5vw,50px)] font-[950] leading-[0.9] text-[#3b4652]">
                      <CountUp value={stat.value} />
                    </Text>
                    <Text className="mt-[9px] text-[14px] font-[750] leading-[1.25] text-[#60707f] max-[900px]:text-[12px]">
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
                className="min-h-[48px] w-fit border border-[rgba(21,155,216,0.34)] bg-white/30 px-6 text-[14px] font-[950] uppercase tracking-[0.08em] text-[#3b4652] transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[rgba(21,155,216,0.72)] hover:bg-white/70"
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
                    className="grid min-h-[66px] grid-cols-[minmax(145px,0.7fr)_minmax(0,1fr)] items-center gap-5 border-b border-[rgba(59,70,82,0.08)] px-[22px] py-[18px] transition-colors last:border-b-0 [&_svg]:text-[#3b4652] max-[900px]:grid-cols-1 max-[900px]:items-start max-[900px]:gap-[10px]"
                    {...riseHover(i, { x: 6 })}
                  >
                    <Group gap="sm" wrap="nowrap">
                      <Icon size={18} stroke={2.2} />
                      <Text className="font-mono text-[12px] font-[850] uppercase leading-none tracking-[0.18em] text-[#7a8793]">
                        {label}
                      </Text>
                    </Group>
                    {href ? (
                      <Anchor
                        href={href}
                        className="min-w-0 text-right text-[clamp(14px,1.3vw,15px)] font-[650] leading-[1.3] text-[#27343c] no-underline [overflow-wrap:anywhere] hover:text-[#159bd8] max-[900px]:text-left"
                      >
                        {value}
                      </Anchor>
                    ) : (
                      <Text className="min-w-0 text-right text-[clamp(14px,1.3vw,15px)] font-[650] leading-[1.3] text-[#27343c] no-underline [overflow-wrap:anywhere] hover:text-[#159bd8] max-[900px]:text-left">
                        {value}
                      </Text>
                    )}
                  </Box>
                ))}
              </Paper>

              {education.length ? (
                <Box>
                  <Text className="text-[14px] font-[750] uppercase leading-none tracking-[0.11em] text-[#60707f]">
                    Education
                  </Text>
                  <Stack gap="md" mt="md">
                    {education.map((item, i) => (
                      <Paper
                        key={item.id}
                        component={motion.div}
                        withBorder
                        radius="lg"
                        className="bg-white/30 p-[clamp(18px,2vw,24px)] shadow-[0_16px_40px_rgba(0,70,67,0.07),inset_0_1px_0_rgba(255,255,255,0.668)] transition-[box-shadow,border-color,background-color] duration-[240ms] hover:!border-[rgba(21,155,216,0.42)] hover:bg-white/50 hover:shadow-[0_26px_60px_rgba(0,70,67,0.14),inset_0_1px_0_rgba(255,255,255,0.75)]"
                        {...riseHover(i, { y: -2, scale: 1.02 })}
                      >
                        <Group align="flex-start" gap="md" wrap="nowrap">
                          <Box className="grid size-[42px] shrink-0 place-items-center rounded-lg bg-[#3b4652] text-white shadow-[0_14px_30px_rgba(21,155,216,0.18)]">
                            <IconSchool size={20} stroke={2.2} />
                          </Box>
                          <Box>
                            <Text className="text-[clamp(18px,1.8vw,22px)] font-[950] leading-[1.2] text-[#27343c]">
                              {item.program || "Education"}
                            </Text>
                            <Text className="mt-[10px] text-[15px] font-[650] leading-[1.45] text-[#60707f]">
                              {[item.institution, item.location]
                                .filter(Boolean)
                                .join(", ")}
                            </Text>
                            {item.endDate ? (
                              <Text className="mt-[10px] font-mono text-[13px] font-[850] tracking-[0.04em] text-[#3b4652]">
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
