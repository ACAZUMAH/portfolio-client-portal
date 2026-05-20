import classes from "../styles/index.module.css";
import {
  Badge,
  Box,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { StackIconRail } from "./StackIconRail";
import { SectionTitle } from "./SectionTitle";

interface ExperienceSectionProps {
  certifications: any[];
  education: any[];
  experiences: any[];
  skills: any[];
}

export const ExperienceSection = ({
  certifications = [],
  education = [],
  experiences = [],
  skills = [],
}: ExperienceSectionProps) => {
  return (
    <Container size="xl" py={64}>
      <Grid gutter={32}>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SectionTitle
            eyebrow="Experience"
            title="What I have been building"
          />
          <Stack>
            {experiences.map((item) => (
              <Paper
                key={item.id}
                p="lg"
                radius="md"
                withBorder
                className={classes["experience-card"]}
              >
                <Group justify="space-between" align="start">
                  <Box>
                    <Text fw={800}>{item.role}</Text>
                    <Text c="dimmed">
                      {item.company} · {item.location} · {item.workMode}
                    </Text>
                  </Box>
                  <Badge variant="light">
                    {item.startDate} -{" "}
                    {item.isCurrent ? "Present" : item.endDate}
                  </Badge>
                </Group>
                <Stack gap={6} mt="md">
                  {item.highlights.map((highlight: string) => (
                    <Text key={highlight} size="sm">
                      {highlight}
                    </Text>
                  ))}
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Paper
            className={classes["about-mini-card"]}
            p="lg"
            radius="md"
            withBorder
          >
            <Group align="center" wrap="nowrap">
              <Image
                src="/assets/caleb-profile.jpeg"
                alt="Caleb Azumah"
                className={classes["about-mini-image"]}
              />
              <Box>
                <Text fw={900}>Caleb Azumah</Text>
                <Text size="sm" c="dimmed">
                  I build the backend, the admin surface, and the client
                  experience as one connected product.
                </Text>
              </Box>
            </Group>
          </Paper>
          <SectionTitle eyebrow="Stack" title="Tools I use to ship" />
          <StackIconRail />
          <Group gap="xs">
            {skills.map((skill) => (
              <Badge
                key={skill.id}
                variant={skill.featured ? "filled" : "light"}
              >
                {skill.name}
              </Badge>
            ))}
          </Group>
          <Paper
            mt="xl"
            p="lg"
            radius="md"
            withBorder
            className={classes["experience-card"]}
          >
            <Text fw={800}>Education and certifications</Text>
            <Stack mt="md">
              {education.map((item) => (
                <Text key={item.id} size="sm">
                  {item.program}, {item.institution} · {item.endDate}
                </Text>
              ))}
              {certifications.map((item) => (
                <Text key={item.id} size="sm">
                  {item.title} · {item.issuer}
                </Text>
              ))}
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
