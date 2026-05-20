import React from "react";
import { Anchor, Burger, Button, Container, Group, Image } from "@mantine/core";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { routeEndpoints } from "src/constants";
import { images } from "src/constants/images";
import { MainHeaderProps } from "../interfaces";
import classes from "../styles/index.module.css";
import { navLinks } from "./constants";

export const MainHeader: React.FC<MainHeaderProps> = ({
  headerRef,
  toggle,
  opened,
}) => {
  return (
    <motion.header
      ref={headerRef}
      className={classes["public-header"]}
      initial={false}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container size="xl" className={classes["public-header-container"]}>
        <Group className={classes["public-header-inner"]} justify="space-between">
          <Anchor
            component={NavLink}
            to={routeEndpoints.HOME}
            underline="never"
            className={classes["brand-lockup"]}
          >
            <span className={classes["brand-avatar-ring"]}>
              <Image
                src={images.me}
                alt="Caleb Azumah"
                className={classes["brand-avatar"]}
              />
            </span>
            <span className={classes["header-availability"]}>
              Available for work
              <span className={classes["header-availability-dot"]} />
            </span>
          </Anchor>

          <Group visibleFrom="sm" gap={6} className={classes["public-nav"]}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `${classes["public-nav-link"]} ${isActive ? classes.active || "active" : ""}`
                }
              >
                <span className={classes["public-nav-label"]}>{link.label}</span>
              </NavLink>
            ))}
          </Group>

          <Group visibleFrom="sm" className={classes["header-actions"]}>
            <Button
              component={NavLink}
              to={routeEndpoints.CONTACT}
              className={classes["header-contact-button"]}
            >
              Contact
            </Button>
          </Group>

          <Burger
            hiddenFrom="sm"
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </Group>
      </Container>
    </motion.header>
  );
};
