import React from "react";
import { Box, Container, Grid, Image } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconLayout,
  IconServer,
  IconDeviceMobile,
  IconCloud,
  IconArrowRight,
} from "@tabler/icons-react";
import { SectionTitle } from "./SectionTitle";
import { images } from "src/constants/images";
import classes from "../styles/WhatIDoSection.module.css";
import { services } from "../helpers";

// Motion container variants for staggered children animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

const mockupVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export const WhatIDoSection: React.FC = () => {
  return (
    <Box component="section" className={classes.section}>
      <Container size="90%">
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <SectionTitle
              eyebrow="What I Can Do For You"
              title="Specialized Services & Capabilities"
              description="Combining robust engineering, frontend artistry, and cloud infrastructure to deliver end-to-end, high-performance digital systems."
            />
            {/* Left Column: Services list with Staggered Entrance */}
            <motion.div
              className={classes.leftCol}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className={classes.card}
                    variants={cardVariants}
                    whileHover={{ scale: 1.01 }}
                  >
                    <Box className={classes.iconContainer}>
                      <IconComponent size={26} stroke={1.5} />
                    </Box>
                    <Box style={{ flex: 1 }}>
                      <h3 className={classes.cardTitle}>{service.title}</h3>
                      <p className={classes.cardDescription}>
                        {service.description}
                      </p>
                    </Box>
                    <Box className={classes.arrowContainer}>
                      <IconArrowRight size={18} stroke={2} />
                    </Box>
                  </motion.div>
                );
              })}
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} className={classes.rightCol}>
            <motion.div
              className={classes.mockupWrapper}
              variants={mockupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={classes.glowBg} />

              {/* 3D Tablet Device */}
              <div className={classes.tabletDevice}>
                <div className={classes.tabletShadow} />
                <div className={classes.tabletBezel}>
                  <div className={classes.tabletCamera} />
                  <div className={classes.tabletScreen}>
                    <Image
                      src={images.whatIDoOption}
                      alt="Client Portal Mockup"
                      className={classes.tabletImage}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left: Live Status */}
              <motion.div
                className={`${classes.floatingBadge} ${classes.badgeTopLeft}`}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className={classes.pulseDot} />
                <span className={classes.badgeText}>Live Portal</span>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right: User Interface */}
              <motion.div
                className={`${classes.floatingBadge} ${classes.badgeBottomRight}`}
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <IconLayout size={16} className={classes.badgeIcon} />
                <span className={classes.badgeText}>Interactive UI</span>
              </motion.div>

              {/* Floating Badge 3 - Middle Left: API / Services */}
              <motion.div
                className={`${classes.floatingBadge} ${classes.badgeMiddleLeft}`}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <IconCloud size={16} className={classes.badgeIconSecondary} />
                <span className={classes.badgeText}>GraphQL Sync</span>
              </motion.div>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};
