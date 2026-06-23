import { Box, Group, Text } from "@mantine/core";
import { motion, type Variants } from "framer-motion";

import type { Experience } from "src/interfaces/graphql/graphql";

import classes from "./styles.module.css";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

const cardVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 1,
    x: direction * 22,
    y: 8,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const formatExperienceDate = (date?: string | null) => {
  if (!date) return "Now";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(parsedDate);
};

const formatWorkMeta = (experience: Experience) => {
  return [experience.location, experience.workMode]
    .filter(Boolean)
    .join(" • ");
};

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  const isLeftAligned = index % 2 === 0;
  const direction = isLeftAligned ? -1 : 1;
  const dateRange = `${formatExperienceDate(experience.startDate)} — ${
    experience.isCurrent ? "Present" : formatExperienceDate(experience.endDate)
  }`;
  const workMeta = formatWorkMeta(experience);

  return (
    <div className={classes["timeline-item"]}>
      <span className={classes["timeline-marker"]} aria-hidden="true" />

      <motion.article
        custom={direction}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className={
          isLeftAligned
            ? classes["timeline-card-left"]
            : classes["timeline-card-right"]
        }
      >
        <div className={classes["experience-card"]}>
          <Box className={classes["card-header"]}>
            <Group
              align="flex-start"
              className={classes["card-heading-row"]}
              justify="space-between"
              wrap="nowrap"
            >
              <Box className={classes["role-block"]}>
                <Text component="h4" className={classes["role-title"]}>
                  {experience.role}
                </Text>
                <Text className={classes["company-name"]}>
                  {experience.company}
                </Text>
              </Box>

              <Text className={classes["date-range"]}>{dateRange}</Text>
            </Group>

            {workMeta ? (
              <Text className={classes.location}>{workMeta}</Text>
            ) : null}
          </Box>

          {experience.highlights.length ? (
            <div className={classes["highlights-list"]}>
              {experience.highlights.map((highlight) => (
                <div key={highlight} className={classes["highlight-item"]}>
                  <span
                    className={classes["highlight-chevron"]}
                    aria-hidden="true"
                  />
                  <Text className={classes["highlight-text"]}>{highlight}</Text>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </motion.article>
    </div>
  );
};

export const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <Box className={classes["timeline-section"]}>
      <div className={classes["timeline-axis"]} aria-hidden="true" />
      <div className={classes["timeline-content"]}>
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </Box>
  );
};
