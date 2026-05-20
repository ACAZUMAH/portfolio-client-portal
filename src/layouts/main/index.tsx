import { Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import { MainHeader } from "./Components/MainHeader";
import { usePublicHeaderAnimation } from "./hooks/usePublicHeaderAnimation";
import { MainDrawer } from "./Components/MainDrawer";
import { MainFooter } from "./Components/MainFooter";
import classes from "./styles/index.module.css";

export const PublicLayout = () => {
  const [opened, { close, toggle }] = useDisclosure(false);
  const headerRef = useRef<HTMLElement | null>(null);

  usePublicHeaderAnimation(headerRef);

  return (
    <Box className={classes["public-shell"]}>
      <MainHeader headerRef={headerRef} toggle={toggle} opened={opened} />

      <Box component="main">
        <Outlet />
      </Box>

      <Box component="footer" className={classes["public-footer"]}>
        <MainFooter />
      </Box>

      <MainDrawer opened={opened} close={close} />
    </Box>
  );
};
