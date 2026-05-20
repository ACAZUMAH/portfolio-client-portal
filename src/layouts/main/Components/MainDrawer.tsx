import React from "react";
import { Drawer, Stack, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";
import { navLinks } from "./constants";
import { MainDrawerProps } from "../interfaces";

export const MainDrawer: React.FC<MainDrawerProps> = ({ opened, close }) => {
  return (
    <Drawer opened={opened} onClose={close} title="Navigation" position="right">
      <Stack>
        {navLinks.map((link) => (
          <Button
            key={link.to}
            component={NavLink}
            to={link.to}
            variant="subtle"
            justify="start"
            onClick={close}
          >
            {link.label}
          </Button>
        ))}
      </Stack>
    </Drawer>
  );
};
