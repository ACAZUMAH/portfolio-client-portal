import { Box, Container, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconCloud,
  IconCode,
  IconCube,
  IconDatabase,
  IconLayoutDashboard,
  IconTool,
  type Icon,
} from "@tabler/icons-react";
import { type CSSProperties, useMemo } from "react";
import { motion, Variants } from "framer-motion";

import { buildSkillGroups } from "./helpers";
import type { SkillGroup, TechnicalSkillsProps } from "./interfaces";
import classes from "./styles.module.css";

const icons: Record<SkillGroup["icon"], Icon> = {
  backend: IconCube,
  cloud: IconCloud,
  code: IconCode,
  database: IconDatabase,
  frontend: IconLayoutDashboard,
  workflow: IconTool,
};

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 1, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const TechnicalSkills = ({ skills = [] }: TechnicalSkillsProps) => {
  const skillGroups = useMemo(() => buildSkillGroups(skills), [skills]);

  return (
    <Box component="section" id="skills" className={classes["skills-section"]}>
      <Container size={1400} px={{ base: 20, sm: 32 }}>
        <Box className={classes["section-heading"]}>
          <Group gap="sm" className={classes["section-kicker"]} wrap="nowrap">
            <span>03.</span>
            <span />
          </Group>
          <Text
            component="h3"
            className="mb-[20px] mt-[15px] text-[clamp(40px,8vw,50px)] font-black uppercase leading-[0.88] text-[#3b4652] [text-shadow:1px_1px_0_#d9e0e8,2px_2px_0_#d9e0e8,3px_3px_0_rgba(217,224,232,0.74)] max-[900px]:text-[clamp(46px,16vw,68px)]"
          >
            Tech Stack
          </Text>
          <Text className={classes["section-copy"]}>
            A practical stack shaped around the products I build most often,
            with a focus on maintainability, performance, and scalability.
          </Text>
        </Box>

        <motion.div 
          className={classes["skills-grid"]}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillGroups.map((group) => {
            const IconComponent = icons[group.icon] || IconBrandGithub;

            return (
              <motion.article
                key={group.title}
                variants={itemVariants}
                className={classes["skill-card"]}
                style={{ "--accent": group.accent } as CSSProperties}
              >
                <div>
                  <Group className={classes["skill-card-header"]} wrap="nowrap">
                    <span className={classes["skill-icon"]}>
                      <IconComponent size={22} stroke={1.8} />
                    </span>
                    <Box>
                      <Text component="h4" className={classes["skill-title"]}>
                        {group.title}
                      </Text>
                      <Text className={classes["skill-description"]}>
                        {group.description}
                      </Text>
                    </Box>
                  </Group>

                  <div className={classes["metric-list"]}>
                    {group.metrics.map((metric) => (
                      <div className={classes["skill-meter"]} key={metric.label}>
                        <span>{metric.label}</span>
                        <div className={classes["meter-track"]}>
                          <motion.span 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
                            style={{ display: 'block', height: '100%', borderRadius: 'inherit', background: 'linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 48%, #ffffff))' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={classes["skill-chip-list"]}>
                    {group.tools.map((tool) => (
                      <span className={classes["skill-chip"]} key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </Box>
  );
};
